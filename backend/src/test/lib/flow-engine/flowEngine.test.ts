import { test } from 'tap';
import { FlowEngine } from '../../../lib/flow-engine/flowEngine';
import {
  CHANNEL_FLOW_CONFIGURATION,
  ERROR_FLOW,
  ERROR_FLOW_RESULT,
  FINISH_FLOW,
  FINISH_FLOW_RESULT,
  FLOW_SYSTEM_CONTEXT,
  ONGOING_FLOW,
  ONGOING_FLOW_RESULT,
  SUBFLOW_FLOW,
  SUBFLOW_FLOW_RESULT,
  SUM_FLOW,
  SUM_FLOW_RESULT,
  TWO_STEP_FLOW,
  TWO_STEP_FLOW_ERROR_RESULT,
  TWO_STEP_FLOW_RESULT,
} from './fixtures.js';

test('Check add/get/remove methods', async (t) => {
  const flowEngine = new FlowEngine();

  t.throws(
    () =>
      flowEngine.getChannelConfiguration(
        CHANNEL_FLOW_CONFIGURATION.channelKind
      ),
    new Error('Unknown channel flow configuration'),
    'should throw error when cannot find channel configuration with given kind'
  );

  t.equal(
    flowEngine.addChannelConfiguration(CHANNEL_FLOW_CONFIGURATION),
    flowEngine,
    'add method should return this'
  );

  t.equal(
    flowEngine.getChannelConfiguration(CHANNEL_FLOW_CONFIGURATION.channelKind),
    CHANNEL_FLOW_CONFIGURATION,
    'get method should return correct channel configuration'
  );

  t.ok(
    flowEngine.deleteChannelConfiguration(
      CHANNEL_FLOW_CONFIGURATION.channelKind
    ),
    'remove method should return true'
  );

  t.throws(
    () =>
      flowEngine.getChannelConfiguration(
        CHANNEL_FLOW_CONFIGURATION.channelKind
      ),
    new Error('Unknown channel flow configuration'),
    '"remove" should delete channel configuration'
  );
});

test('Check runFlow method', async (t) => {
  const flowEngine = new FlowEngine([CHANNEL_FLOW_CONFIGURATION]);

  t.same(
    await flowEngine.runFlow(FLOW_SYSTEM_CONTEXT, SUM_FLOW, { context: {} }),
    SUM_FLOW_RESULT,
    'run SUM_FLOW should return expected FlowFinishResult'
  );

  t.same(
    await flowEngine.runFlow(FLOW_SYSTEM_CONTEXT, TWO_STEP_FLOW, {
      context: {},
    }),
    TWO_STEP_FLOW_RESULT,
    'run TWO_STEP_FLOW should return expected FlowFinishResult'
  );

  t.same(
    await flowEngine.runFlow(
      FLOW_SYSTEM_CONTEXT,
      TWO_STEP_FLOW,
      { context: { sum1: TWO_STEP_FLOW_RESULT.context.sum1 } },
      '2'
    ),
    TWO_STEP_FLOW_RESULT,
    'run TWO_STEP_FLOW from second step should return expected FlowFinishResult'
  );

  t.same(
    await flowEngine.runFlow(
      FLOW_SYSTEM_CONTEXT,
      TWO_STEP_FLOW,
      { context: {} },
      TWO_STEP_FLOW_ERROR_RESULT.flowActionId
    ),
    TWO_STEP_FLOW_ERROR_RESULT,
    'should return FlowErrorResult when flowAction is not found'
  );

  t.same(
    await flowEngine.runFlow(FLOW_SYSTEM_CONTEXT, ONGOING_FLOW, {
      context: {},
    }),
    ONGOING_FLOW_RESULT,
    'run ONGOING_FLOW should return expected FlowOngoingResult'
  );

  t.same(
    await flowEngine.runFlow(FLOW_SYSTEM_CONTEXT, ERROR_FLOW, { context: {} }),
    ERROR_FLOW_RESULT,
    'run ERROR_FLOW should return expected FlowErrorResult'
  );

  t.same(
    await flowEngine.runFlow(FLOW_SYSTEM_CONTEXT, SUBFLOW_FLOW, {
      context: {},
    }),
    SUBFLOW_FLOW_RESULT,
    'run SUBFLOW_FLOW should return expected FlowSubflowResult'
  );

  t.same(
    await flowEngine.runFlow(FLOW_SYSTEM_CONTEXT, TWO_STEP_FLOW, {
      context: {},
    }),
    TWO_STEP_FLOW_RESULT,
    'run TWO_STEP_FLOW should return expected FlowFinishResult'
  );

  t.same(
    await flowEngine.runFlow(FLOW_SYSTEM_CONTEXT, FINISH_FLOW, { context: {} }),
    FINISH_FLOW_RESULT,
    'run FINISH_FLOW should return expected FlowFinishResult '
  );
});
