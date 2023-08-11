import {
  FlowActionRunner,
  ChannelFlowConfiguration as IChannelFlowConfiguration,
} from '../../domain/interfaces/flowEngine.js';

export class ChannelFlowConfiguration implements IChannelFlowConfiguration {
  channelKind: string;

  private flowActionRunnerMap: Map<string, FlowActionRunner>;

  constructor(channelKind: string, runners?: FlowActionRunner[]) {
    this.channelKind = channelKind;
    this.flowActionRunnerMap = new Map<string, FlowActionRunner>(
      runners?.map((runner) => [runner.kind, runner])
    );
  }

  addActionRunner(runner: FlowActionRunner) {
    this.flowActionRunnerMap.set(runner.kind, runner);
    return this;
  }

  removeActionRunner(runnerKind: string) {
    return this.flowActionRunnerMap.delete(runnerKind);
  }

  getActionRunner(runnerKind: string): FlowActionRunner {
    const runner = this.flowActionRunnerMap.get(runnerKind);

    if (!runner) {
      throw new Error('Unknown flow action runner');
    }

    return runner;
  }
}
