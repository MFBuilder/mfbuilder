import { test } from 'tap';
import {
  FlowActionRunParams,
  FlowActionRunner,
} from '../../../domain/interfaces/flowEngine.js';
import { ChannelFlowConfiguration } from '../../../lib/flow-engine/channelFlowConfiguration';

const ACTION_RUNNER_KIND = 'test';

const ACTION_RUNNER: FlowActionRunner = {
  kind: ACTION_RUNNER_KIND,
  async run(ctx: unknown, params: FlowActionRunParams) {
    return { kind: 'finish', context: params.context, socket: 0 };
  },
};

const CHANNEL_KIND = 'test';

test('Check add/get/remove methods', async (t) => {
  const channelConfiguration = new ChannelFlowConfiguration(CHANNEL_KIND);

  t.throws(
    () => channelConfiguration.getActionRunner(ACTION_RUNNER.kind),
    new Error('Unknown flow action runner'),
    'should throw error when cannot find action runner with given kind'
  );

  t.equal(
    channelConfiguration.addActionRunner(ACTION_RUNNER),
    channelConfiguration,
    'add method should return this'
  );

  t.equal(
    channelConfiguration.getActionRunner(ACTION_RUNNER.kind),
    ACTION_RUNNER,
    'get method should return correct action runner'
  );

  t.ok(
    channelConfiguration.removeActionRunner(ACTION_RUNNER.kind),
    'remove method should return true'
  );

  t.throws(
    () => channelConfiguration.getActionRunner(ACTION_RUNNER.kind),
    new Error('Unknown flow action runner'),
    '"remove" should delete action runner'
  );
});
