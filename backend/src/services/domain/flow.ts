import { FlowEntity } from '../../domain/entities/flow.js';
import { FlowStepEntity } from '../../domain/entities/flowStep.js';
import { FlowStepConnectionEntity } from '../../domain/entities/flowStepConnection.js';
import { WorkspaceEntity } from '../../domain/entities/workspace.js';
import { SystemContext } from '../../domain/interfaces/context.js';
import { IdGenerator } from '../../domain/interfaces/idGenerator.js';
import { FlowRepository } from '../../domain/interfaces/repositories/flow.js';
import { FlowStepRepository } from '../../domain/interfaces/repositories/flowStep.js';
import { FlowStepConnectionRepository } from '../../domain/interfaces/repositories/flowStepConnection.js';
import { SchemaService } from '../general/schema.js';

export type FlowEntityDelta = Omit<
  FlowEntity,
  'id' | 'flowGroupId' | 'status' | 'contextSchema'
>;
type FlowStepConnectionEntityBase = Omit<
  FlowStepConnectionEntity,
  'id' | 'flowId'
>;
// export type FlowFullEntityBase = Omit<FlowEntity, 'id'> & {
//   steps: Omit<FlowStepEntity, 'flowId'>;
//   stepConnections: Omit<FlowStepConnectionEntity, 'flowId'>;
// };

export type FlowFullEntityDelta =
  | FlowEntityDelta
  | (FlowEntityDelta &
      Pick<FlowEntity, 'contextSchema'> & {
        steps: Omit<FlowStepEntity, 'flowId'>[];
        stepConnections: Omit<FlowStepConnectionEntity, 'flowId'>[];
      });

export class FlowService {
  private flowRepository: FlowRepository;
  private flowStepRepository: FlowStepRepository;
  private flowStepConnectionRepository: FlowStepConnectionRepository;
  private idGenerator: IdGenerator;
  private schemaService: SchemaService;

  constructor({
    flowRepository,
    flowStepRepository,
    flowStepConnectionRepository,
    idGenerator,
    schemaService,
  }: {
    flowRepository: FlowRepository;
    flowStepRepository: FlowStepRepository;
    flowStepConnectionRepository: FlowStepConnectionRepository;
    idGenerator: IdGenerator;
    schemaService: SchemaService;
  }) {
    this.flowRepository = flowRepository;
    this.flowStepRepository = flowStepRepository;
    this.flowStepConnectionRepository = flowStepConnectionRepository;
    this.idGenerator = idGenerator;
    this.schemaService = schemaService;
  }

  async get(ctx: SystemContext, id: FlowEntity['id']) {
    return await this.flowRepository.get(ctx, id);
  }

  async getActions(ctx: SystemContext, id: FlowEntity['id']) {
    return await this.flowStepRepository.find(ctx, { flowId: { $equals: id } });
  }

  async getStepConnections(ctx: SystemContext, id: FlowEntity['id']) {
    return await this.flowStepConnectionRepository.find(ctx, {
      flowId: { $equals: id },
    });
  }

  async getFull(ctx: SystemContext, id: FlowEntity['id']) {
    return await this.flowRepository.getFull(ctx, id);
  }

  private async validateDelta(
    ctx: SystemContext,
    workspaceId: WorkspaceEntity['id'],
    delta: FlowFullEntityDelta
  ) {
    if ('contextSchema' in delta) {
      const isContextSchemaValid = this.schemaService.validate(
        ctx,
        workspaceId,
        delta.contextSchema
      );
      return isContextSchemaValid;
    }
    return true;
  }

  async create(
    ctx: SystemContext,
    workspaceId: WorkspaceEntity['id'],
    data: Omit<FlowEntity, 'id' | 'contextSchema'>
  ) {
    const flowId = this.idGenerator.generate();
    await this.flowRepository.create(ctx, {
      ...data,
      id: flowId,
      contextSchema: {},
    });

    return flowId;
  }

  async update(
    ctx: SystemContext,
    workspaceId: WorkspaceEntity['id'],
    id: FlowEntity['id'],
    delta: FlowFullEntityDelta
  ) {
    if (!('steps' in delta)) {
      await this.flowRepository.update(ctx, id, delta);
      return;
    }

    const isDeltaValid = await this.validateDelta(ctx, workspaceId, delta);

    if (isDeltaValid) {
      // TODO: Add custom validation error
      throw new Error();
    }

    // TODO: Add complex validation

    ctx.withTransaction(async (ctx) => {
      const { steps, stepConnections, ...flowDelta } = delta;
      await this.flowRepository.update(ctx, id, flowDelta);

      const deltaStepsIds = steps.map((s) => s.id);
      const stepIds = await this.updateSteps(ctx, id, steps);

      const stepIdMap = new Map<string, string>(
        deltaStepsIds.map((deltaId, index) => [deltaId, stepIds[index]])
      );

      const updatedStepConnections = stepConnections.map((stepConnection) => ({
        ...stepConnection,
        fromId: stepConnection.fromId && stepIdMap.get(stepConnection.fromId)!,
        toId: stepConnection.toId && stepIdMap.get(stepConnection.toId)!,
      }));

      await this.updateStepConnections(ctx, id, updatedStepConnections);
    });
  }

  private async createSteps(
    ctx: SystemContext,
    flowId: FlowEntity['id'],
    steps: Omit<FlowStepEntity, 'id' | 'flowId'>[]
  ) {
    if (steps.length === 0) return [];

    const ids = Array.from({ length: steps.length }, () =>
      this.idGenerator.generate()
    );

    const updatedSteps = steps.map((step, index) => ({
      ...step,
      flowId,
      id: ids[index],
    }));

    await this.flowStepRepository.createMultiple(ctx, updatedSteps);

    return ids;
  }

  private async deleteSteps(ctx: SystemContext, flowId: FlowEntity['id']) {
    await this.flowStepRepository.deleteWhere(ctx, {
      flowId: { $equals: flowId },
    });
  }

  private async updateSteps(
    ctx: SystemContext,
    flowId: FlowEntity['id'],
    steps: Omit<FlowStepEntity, 'id' | 'flowId'>[]
  ) {
    await this.deleteSteps(ctx, flowId);
    return await this.createSteps(ctx, flowId, steps);
  }

  private async createStepConnections(
    ctx: SystemContext,
    flowId: FlowEntity['id'],
    stepConnections: FlowStepConnectionEntityBase[]
  ) {
    if (stepConnections.length === 0) return [];
    const ids = Array.from({ length: stepConnections.length }, () =>
      this.idGenerator.generate()
    );

    const updatedStepConnections = stepConnections.map(
      (stepConnection, index) => ({ ...stepConnection, flowId, id: ids[index] })
    );

    await this.flowStepConnectionRepository.createMultiple(
      ctx,
      updatedStepConnections as FlowStepConnectionEntity[]
    );

    return ids;
  }

  private async deleteStepConnections(
    ctx: SystemContext,
    flowId: FlowEntity['id']
  ) {
    await this.flowStepConnectionRepository.deleteWhere(ctx, {
      flowId: { $equals: flowId },
    });
  }

  private async updateStepConnections(
    ctx: SystemContext,
    flowId: FlowEntity['id'],
    stepConnections: Omit<FlowStepConnectionEntity, 'id' | 'flowId'>[]
  ) {
    await this.deleteStepConnections(ctx, flowId);
    return await this.createStepConnections(ctx, flowId, stepConnections);
  }
}
