import { ChannelManager } from '../../domain/interfaces/channelManager.js';
import { SystemContext } from '../../domain/interfaces/context.js';
import {
  FlowConfiguration,
  FlowEngine,
} from '../../domain/interfaces/flowEngine.js';
import { UUID } from '../../domain/interfaces/utils.js';

import { FlowEntity } from '../../domain/entities/flow.js';
import {
  DefaultFlowStepConnectionEntity,
  FlowStepConnectionEntity,
} from '../../domain/entities/flowStepConnection.js';
import {
  ProfileChannelEntity,
  ProfileChannelStatus,
} from '../../domain/entities/profileChannel.js';
import { WorkspaceEntity } from '../../domain/entities/workspace.js';
import { FlowService } from '../domain/flow.js';
import { FlowStateService } from '../domain/flowState.js';
import { ProfileService } from '../domain/profile.js';
import { ProfileChannelService } from '../domain/profileChannel.js';

export class FlowExecutionService {
  private flowEngine: FlowEngine;
  private flowService: FlowService;
  private flowStateService: FlowStateService;
  private profileService: ProfileService;
  private profileChannelService: ProfileChannelService;
  private channelManager: ChannelManager;

  constructor({
    flowEngine,
    flowService,
    flowStateService,
    profileService,
    profileChannelService,
    channelManager,
  }: {
    flowEngine: FlowEngine;
    flowService: FlowService;
    flowStateService: FlowStateService;
    profileService: ProfileService;
    profileChannelService: ProfileChannelService;
    channelManager: ChannelManager;
  }) {
    this.flowEngine = flowEngine;
    this.flowService = flowService;
    this.flowStateService = flowStateService;
    this.profileService = profileService;
    this.profileChannelService = profileChannelService;
    this.channelManager = channelManager;
  }

  async handle(ctx: SystemContext, channelUuid: UUID, msg: unknown) {
    const event = await this.channelManager.handle(channelUuid, msg);
    if (!event) return;

    const { channelAccountId, channelId, data } = event.channelAccount;
    const channel = this.channelManager.get(channelId);

    const profileChannel = await this.getOrCreateProfileChannel(
      ctx,
      channel.workspaceId,
      { channelAccountId, channelId, data }
    );

    let currentFlowState = await this.flowStateService.getCurrent(
      ctx,
      profileChannel.id
    );
  }

  private getActionConnectionsMap(
    stepsConnections: FlowStepConnectionEntity[]
  ): FlowConfiguration['stepConnections'] {
    const filteredConnections = stepsConnections.filter(
      (connection) => connection.fromId !== null
    ) as DefaultFlowStepConnectionEntity[];
    const groupedConnectionsByFromId = [
      ...groupBy(filteredConnections, (value) => value.fromId).entries(),
    ];
    const groupedConnectionsByStatus = groupedConnectionsByFromId.map(
      ([key, values]) => {
        const groupedConnectionByStatus = [
          ...groupBy(values, (value) => value.socket).entries(),
        ].map(([key, values]) => [key, values[0].toId] as const);
        return [key, new Map(groupedConnectionByStatus)] as const;
      }
    );
    return new Map(groupedConnectionsByStatus);
  }

  private async getConfiguration(
    ctx: SystemContext,
    id: FlowEntity['id']
  ): Promise<FlowConfiguration> {
    const { steps, stepConnections, ...flow } = await this.flowService.getFull(
      ctx,
      id
    );
    const startActionId = stepConnections.find(
      (connection) => connection.fromId === null
    )?.id;

    if (!startActionId) {
      // TODO: Add error
      throw new Error();
    }

    const { name, channelKind, contextSchema } = flow;

    const stepsMap = new Map(steps.map((step) => [step.id, step] as const));

    const stepConnectionsMap = this.getActionConnectionsMap(stepConnections);

    return {
      id,
      name,
      channelKind,
      contextSchema,
      startActionId,
      steps: stepsMap,
      stepConnections: stepConnectionsMap,
    };
  }

  async getOrCreateProfileChannel(
    ctx: SystemContext,
    workspaceId: WorkspaceEntity['id'],
    {
      channelAccountId,
      channelId,
      data,
    }: Pick<ProfileChannelEntity, 'channelAccountId' | 'channelId' | 'data'>
  ): Promise<ProfileChannelEntity> {
    try {
      const profileChannel = await this.profileChannelService.getByChannel(
        ctx,
        channelId,
        channelAccountId
      );
      return profileChannel;
    } catch (error) {
      // TODO: Add checking that instance of error is NotFoundError
      return await ctx.withTransaction(async (ctx) => {
        const profileId = await this.profileService.createByWorkspace(
          ctx,
          workspaceId,
          {},
          true
        );
        const profileChannelBase = {
          channelId,
          profileId,
          channelAccountId,
          status: ProfileChannelStatus.ACTIVE,
          data,
        };
        const profileChannelId = await this.profileChannelService.create(
          ctx,
          profileChannelBase
        );
        return { ...profileChannelBase, id: profileChannelId };
      });
    }
  }
}
