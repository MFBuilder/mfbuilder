import { FlowActionStateEntity } from '../../domain/entities/flowActionState';
import { ProfileChannelEntity } from '../../domain/entities/profileChannel';
import { SystemContext } from '../../domain/interfaces/context';
import { IdGenerator } from '../../domain/interfaces/idGenerator';
import { FlowActionStateRepository } from '../../domain/interfaces/repositories/flowActionState';
import {
  FlowStackEntity,
  FlowStackRepository,
} from '../../domain/interfaces/repositories/flowStack';

export class FlowStateService {
  private flowStackRepository: FlowStackRepository;
  private flowActionStateRepository: FlowActionStateRepository;
  private idGenerator: IdGenerator;

  constructor({
    flowStackRepository,
    flowActionStateRepository,
    idGenerator,
  }: {
    flowStackRepository: FlowStackRepository;
    flowActionStateRepository: FlowActionStateRepository;
    idGenerator: IdGenerator;
  }) {
    this.flowStackRepository = flowStackRepository;
    this.flowActionStateRepository = flowActionStateRepository;
    this.idGenerator = idGenerator;
  }

  async getCurrent(
    ctx: SystemContext,
    profileChannelId: ProfileChannelEntity['id']
  ) {
    const flowStack = await this.flowStackRepository.findOne(
      ctx,
      { profileChannelId: { $equals: profileChannelId } },
      { $orderBy: { createdAt: { $order: 'DESC' } } }
    );

    if (flowStack === null) {
      // TODO: Add custom NotFound error
      throw Error();
    }

    const flowActionState = await this.flowActionStateRepository.findOne(ctx, {
      flowStackId: { $equals: flowStack.id },
    });

    if (flowActionState === null) {
      // TODO: Add custom NotFound error
      throw Error();
    }

    return {
      flowStack,
      flowActionState,
    };
  }

  async get(ctx: SystemContext, flowStackId: FlowStackEntity['id']) {
    const flowStack = await this.flowStackRepository.get(ctx, flowStackId);

    if (flowStack === null) {
      // TODO: Add custom NotFound error
      throw Error();
    }

    const flowActionState = await this.flowActionStateRepository.findOne(ctx, {
      flowStackId: { $equals: flowStack.id },
    });

    if (flowActionState === null) {
      // TODO: Add custom NotFound error
      throw Error();
    }

    return {
      flowStack,
      flowActionState,
    };
  }

  async create(
    ctx: SystemContext,
    flowStack: Omit<FlowStackEntity, 'id'>,
    flowActionState: Omit<FlowActionStateEntity, 'id' | 'flowStackId'>
  ) {
    return await ctx.withTransaction(async (ctx) => {
      const flowStackId = this.idGenerator.generate();
      await this.flowStackRepository.create(ctx, {
        ...flowStack,
        id: flowStackId,
      });
      const flowActionStateId = this.idGenerator.generate();
      await this.flowActionStateRepository.create(ctx, {
        ...flowActionState,
        id: flowActionStateId,
        flowStackId,
      });
      return flowStackId;
    });
  }

  async update(
    ctx: SystemContext,
    flowStackId: FlowStackEntity['id'],
    {
      context,
      flowStepId,
      state,
    }: {
      context?: FlowStackEntity['context'];
      flowStepId?: FlowActionStateEntity['flowStepId'];
      state?: FlowActionStateEntity['state'];
    }
  ) {
    await ctx.withTransaction(async (ctx) => {
      if (context) {
        await this.flowStackRepository.update(ctx, flowStackId, { context });
      }

      if (!flowStepId && !state) return;

      const flowActionState = await this.flowActionStateRepository.findOne(
        ctx,
        { flowStackId: { $equals: flowStackId } }
      );

      if (flowActionState === null) {
        // TODO: Add custom NotFound error
        throw Error();
      }

      flowStepId = flowStepId ?? flowActionState.flowStepId;
      state = state ?? {};

      await this.flowActionStateRepository.update(ctx, flowActionState.id, {
        flowStepId: flowStepId,
        state,
      });
    });
  }

  async delete(ctx: SystemContext, flowStackId: FlowStackEntity['id']) {
    await ctx.withTransaction(async (ctx) => {
      await this.flowActionStateRepository.deleteWhere(ctx, {
        flowStackId: { $equals: flowStackId },
      });
      await this.flowStackRepository.delete(ctx, flowStackId);
    });
  }
}
