import { FlowActionRunner } from './flowActionRunner.js';

export class ChannelFlowConfiguration<C> {
  channelKind: string;

  private flowActionRunnerMap: Map<string, FlowActionRunner<C>>;

  constructor(channelKind: string, runners?: FlowActionRunner<C>[]) {
    this.channelKind = channelKind;
    this.flowActionRunnerMap = new Map<string, FlowActionRunner<C>>(
      runners?.map((runner) => [runner.kind, runner])
    );
  }

  addActionRunner(runner: FlowActionRunner<C>) {
    this.flowActionRunnerMap.set(runner.kind, runner);
    return this;
  }

  removeActionRunner(runnerKind: string) {
    return this.flowActionRunnerMap.delete(runnerKind);
  }

  getActionRunner(runnerKind: string): FlowActionRunner<C> {
    const runner = this.flowActionRunnerMap.get(runnerKind);

    if (!runner) {
      throw new Error('Unknown flow action runner');
    }

    return runner;
  }
}
