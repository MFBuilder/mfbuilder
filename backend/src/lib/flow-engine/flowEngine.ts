import { FlowSystemContext } from '../../domain/interfaces/context.js';
import {
  FlowActionResult,
  FlowActionRunParams,
  FlowConfiguration,
  FlowResult,
  FlowState,
  FlowStep,
  FlowEngine as IFlowEngine,
} from '../../domain/interfaces/flowEngine.js';
import { ChannelFlowConfiguration } from './channelFlowConfiguration.js';

export class FlowEngine implements IFlowEngine {
  private channelConfigurationMap: Map<string, ChannelFlowConfiguration>;

  constructor(channelConfigurations?: ChannelFlowConfiguration[]) {
    this.channelConfigurationMap = new Map(
      channelConfigurations?.map((channelConfiguration) => [
        channelConfiguration.channelKind,
        channelConfiguration,
      ])
    );
  }

  addChannelConfiguration(channelConfiguration: ChannelFlowConfiguration) {
    this.channelConfigurationMap.set(
      channelConfiguration.channelKind,
      channelConfiguration
    );
    return this;
  }

  deleteChannelConfiguration(channelKind: string) {
    return this.channelConfigurationMap.delete(channelKind);
  }

  getChannelConfiguration(channelKind: string): ChannelFlowConfiguration {
    const channelConfiguration = this.channelConfigurationMap.get(channelKind);

    if (!channelConfiguration) {
      throw new Error('Unknown channel flow configuration');
    }

    return channelConfiguration;
  }

  private async runAction(
    ctx: FlowSystemContext,
    channelKind: string,
    runnerKind: string,
    params: FlowActionRunParams
  ): Promise<FlowActionResult> {
    const runner =
      this.getChannelConfiguration(channelKind).getActionRunner(runnerKind);
    return await runner.run(ctx, params);
  }

  private async runFlowFrom(
    ctx: FlowSystemContext,
    configuration: FlowConfiguration,
    actionId: FlowStep['id'],
    state: FlowState,
    data?: unknown
  ) {
    const channelKind = configuration.channelKind;
    const flowAction = configuration.steps.get(actionId);

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
    ctx: FlowSystemContext,
    configuration: FlowConfiguration,
    state: FlowState,
    actionId?: FlowStep['id'],
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
          stepState: result.stepState,
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
        const { stepState: actionState, subflow } = result;

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
      const nextActionId = configuration.stepConnections
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
