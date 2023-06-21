import { ChannelFlowConfiguration } from '../../../lib/flow-engine/channelFlowConfiguration';
import { FlowActionRunner } from '../../../lib/flow-engine/flowActionRunner';
import {
  FlowConfiguration,
  FlowErrorResult,
  FlowFinishResult,
  FlowOngoingResult,
  FlowSubflowResult,
} from '../../../lib/flow-engine/flowEngine';

const SUM_RUNNER: FlowActionRunner<unknown> = {
  kind: 'sum',
  async run(ctx, params) {
    const {
      field,
      args: [first, second],
    } = params.configuration as {
      field: string;
      args: [number, number];
    };
    const result = first + second;

    return {
      kind: 'finish',
      socket: 0,
      context: { [field]: result },
    };
  },
};

const THROW_RUNNER: FlowActionRunner<unknown> = {
  kind: 'throw',
  async run(ctx, params) {
    throw params.configuration.error;
  },
};

const ONGOING_RUNNER: FlowActionRunner<unknown> = {
  kind: 'ongoing',
  async run(ctx, params) {
    return { kind: 'ongoing', actionState: params.actionState };
  },
};

const SUBFLOW_RUNNER: FlowActionRunner<unknown> = {
  kind: 'subflow',
  async run(ctx, params) {
    return {
      kind: 'subflow',
      subflow: params.configuration.subflow as FlowSubflowResult['subflow'],
    };
  },
};

const FINISH_RUNNER: FlowActionRunner<unknown> = {
  kind: 'finish',
  async run(ctx, params) {
    return {
      kind: 'finish',
      socket: 0,
    };
  },
};

const CHANNEL_KIND = 'channel';

export const CHANNEL_FLOW_CONFIGURATION = new ChannelFlowConfiguration(
  CHANNEL_KIND,
  [SUM_RUNNER, THROW_RUNNER, ONGOING_RUNNER, SUBFLOW_RUNNER, FINISH_RUNNER]
);

export const SUM_FLOW: FlowConfiguration = {
  id: '1',
  channelKind: CHANNEL_KIND,
  name: 'sum',
  startActionId: '1',
  actions: new Map([
    [
      '1',
      {
        id: '1',
        kind: SUM_RUNNER.kind,
        name: 'sum',
        configuration: { field: 'sum', args: [1, 2] },
      },
    ],
  ]),
  actionConnections: new Map(),
};

export const SUM_FLOW_RESULT: FlowFinishResult = {
  kind: 'finish',
  flowId: SUM_FLOW.id,
  context: { sum: 3 },
};

export const TWO_STEP_FLOW: FlowConfiguration = {
  id: '2',
  channelKind: CHANNEL_KIND,
  name: 'two_step',
  startActionId: '1',
  actions: new Map([
    [
      '1',
      {
        id: '1',
        kind: SUM_RUNNER.kind,
        name: 'sum1',
        configuration: { field: 'sum1', args: [1, 1] },
      },
    ],
    [
      '2',
      {
        id: '2',
        kind: SUM_RUNNER.kind,
        name: 'sum2',
        configuration: { field: 'sum2', args: [2, 2] },
      },
    ],
  ]),
  actionConnections: new Map([['1', new Map([[0, '2']])]]),
};

export const TWO_STEP_FLOW_RESULT: FlowFinishResult = {
  kind: 'finish',
  flowId: TWO_STEP_FLOW.id,
  context: { sum1: 2, sum2: 4 },
};

export const TWO_STEP_FLOW_ERROR_RESULT: FlowErrorResult = {
  kind: 'error',
  flowId: TWO_STEP_FLOW.id,
  flowActionId: '3',
  context: {},
  error: new Error('Unknown flow action'),
};

export const ONGOING_FLOW: FlowConfiguration = {
  id: '3',
  channelKind: CHANNEL_KIND,
  name: 'ongoing',
  startActionId: '1',
  actions: new Map([
    [
      '1',
      {
        id: '1',
        kind: ONGOING_RUNNER.kind,
        name: 'ongoing',
        configuration: {},
      },
    ],
  ]),
  actionConnections: new Map(),
};

export const ONGOING_FLOW_RESULT: FlowOngoingResult = {
  kind: 'ongoing',
  flowId: ONGOING_FLOW.id,
  flowActionId: '1',
  actionState: undefined,
  context: {},
};

const ERROR = new Error('Error');

export const ERROR_FLOW: FlowConfiguration = {
  id: '3',
  channelKind: CHANNEL_KIND,
  name: 'ongoing',
  startActionId: '1',
  actions: new Map([
    [
      '1',
      {
        id: '1',
        kind: THROW_RUNNER.kind,
        name: 'throw',
        configuration: { error: ERROR },
      },
    ],
  ]),
  actionConnections: new Map(),
};

export const ERROR_FLOW_RESULT: FlowErrorResult = {
  kind: 'error',
  flowId: ERROR_FLOW.id,
  flowActionId: '1',
  context: {},
  error: ERROR,
};

export const SUBFLOW_FLOW: FlowConfiguration = {
  id: '4',
  channelKind: CHANNEL_KIND,
  name: 'subflow',
  startActionId: '1',
  actions: new Map([
    [
      '1',
      {
        id: '1',
        kind: SUBFLOW_RUNNER.kind,
        name: 'subflow',
        configuration: { subflow: { id: '2', context: {} } },
      },
    ],
  ]),
  actionConnections: new Map(),
};

export const SUBFLOW_FLOW_RESULT: FlowSubflowResult = {
  kind: 'subflow',
  flowId: SUBFLOW_FLOW.id,
  actionId: '1',
  actionState: undefined,
  context: {},
  subflow: {
    id: '2',
    context: {},
  },
};

export const FINISH_FLOW: FlowConfiguration = {
  id: '5',
  channelKind: CHANNEL_KIND,
  name: 'finish',
  startActionId: '1',
  actions: new Map([
    [
      '1',
      {
        id: '1',
        kind: FINISH_RUNNER.kind,
        name: 'finish',
        configuration: {},
      },
    ],
  ]),
  actionConnections: new Map(),
};

export const FINISH_FLOW_RESULT: FlowFinishResult = {
  kind: 'finish',
  flowId: FINISH_FLOW.id,
  context: {},
};
