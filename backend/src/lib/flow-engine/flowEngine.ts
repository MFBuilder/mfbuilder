import { AnyRecord, ID } from '../../domain/interfaces/utils.js';
import { ChannelFlowConfiguration } from './channelFlowConfiguration.js';
import {
  FlowActionResult,
  FlowActionRunParams,
  FlowActionState,
  FlowContext,
} from './flowActionRunner.js';

export type Flow = {
  id: ID;
  name: string;
  channelKind: string;
};

export type FlowAction = {
  id: ID;
  name: string;
  kind: string;
  configuration: AnyRecord;
};

export type FlowConfiguration = Flow & {
  startActionId: FlowAction['id'];
  actions: Map<FlowAction['id'], FlowAction>;
  actionConnections: Map<
    FlowAction['id'],
    Map<number, FlowAction['id'] | null>
  >;
};

export type FlowState = {
  context: AnyRecord;
  actionState?: FlowActionState;
};

export type FlowOngoingResult = {
  kind: 'ongoing';
  flowId: Flow['id'];
  context: FlowContext;
  flowActionId: FlowAction['id'];
  actionState?: Partial<FlowActionState>;
};

export type FlowFinishResult = {
  kind: 'finish';
  flowId: Flow['id'];
  context: FlowContext;
};

export type FlowErrorResult = {
  kind: 'error';
  flowId: Flow['id'];
  context: FlowContext;
  flowActionId: FlowAction['id'];
  error: unknown;
};

export type FlowSubflowResult = {
  kind: 'subflow';
  flowId: Flow['id'];
  context: FlowContext;
  actionId: FlowAction['id'];
  actionState?: Partial<FlowActionState>;
  subflow: {
    id: Flow['id'];
    actionId?: FlowAction['id'];
    context: FlowContext;
  };
};

export type FlowResult =
  | FlowOngoingResult
  | FlowFinishResult
  | FlowErrorResult
  | FlowSubflowResult;

export class FlowEngine<C> {
  private channelConfigurationMap: Map<string, ChannelFlowConfiguration<C>>;

  constructor(channelConfigurations?: ChannelFlowConfiguration<C>[]) {
    this.channelConfigurationMap = new Map(
      channelConfigurations?.map((channelConfiguration) => [
        channelConfiguration.channelKind,
        channelConfiguration,
      ])
    );
  }

  addChannelConfiguration(channelConfiguration: ChannelFlowConfiguration<C>) {
    this.channelConfigurationMap.set(
      channelConfiguration.channelKind,
      channelConfiguration
    );
    return this;
  }

  deleteChannelConfiguration(channelKind: string) {
    return this.channelConfigurationMap.delete(channelKind);
  }

  getChannelConfiguration(channelKind: string): ChannelFlowConfiguration<C> {
    const channelConfiguration = this.channelConfigurationMap.get(channelKind);

    if (!channelConfiguration) {
      throw new Error('Unknown channel flow configuration');
    }

    return channelConfiguration;
  }

  private async runAction(
    ctx: C,
    channelKind: string,
    runnerKind: string,
    params: FlowActionRunParams
  ): Promise<FlowActionResult> {
    const runner =
      this.getChannelConfiguration(channelKind).getActionRunner(runnerKind);
    return await runner.run(ctx, params);
  }

  private async runFlowFrom(
    ctx: C,
    configuration: FlowConfiguration,
    actionId: FlowAction['id'],
    state: FlowState,
    data?: unknown
  ) {
    const channelKind = configuration.channelKind;
    const flowAction = configuration.actions.get(actionId);

    if (!flowAction) {
      throw new Error('Unknown flow action');
    }

    const runnerKind = flowAction.kind;

    const params: FlowActionRunParams = {
      ...state,
      data,
      configuration: flowAction.configuration,
    };

    await this.runAction(ctx, channelKind, runnerKind, params);

    return await this.runAction(ctx, channelKind, runnerKind, params);
  }

  async runFlow(
    ctx: C,
    configuration: FlowConfiguration,
    state: FlowState,
    actionId?: FlowAction['id'],
    data?: unknown
  ): Promise<FlowResult> {
    let currentActionId = actionId ?? configuration.startActionId;
    let currentContext = state.context;

    while (true) {
      const result = await this.runFlowFrom(
        ctx,
        configuration,
        currentActionId,
        state,
        data
      ).catch((e) => ({ kind: 'error', error: e } as const));

      if (result.kind === 'ongoing') {
        return {
          kind: 'ongoing',
          flowId: configuration.id,
          context: currentContext,
          actionState: result.actionState,
          flowActionId: currentActionId,
        };
      }

      if (result.kind === 'error') {
        return {
          kind: 'error',
          flowId: configuration.id,
          context: currentContext,
          flowActionId: currentActionId,
          error: result.error,
        };
      }

      if (result.kind === 'subflow') {
        const { actionState, subflow } = result;

        return {
          kind: 'subflow',
          flowId: configuration.id,
          context: currentContext,
          actionId: currentActionId,
          actionState: actionState,
          subflow,
        };
      }

      const { socket, context: resultContext = {} } = result;
      const nextActionId = configuration.actionConnections
        .get(currentActionId)
        ?.get(socket);

      currentContext = { ...currentContext, ...resultContext };

      if (!nextActionId) {
        return {
          kind: 'finish',
          flowId: configuration.id,
          context: currentContext,
        };
      }

      currentActionId = nextActionId;
    }
  }
}
