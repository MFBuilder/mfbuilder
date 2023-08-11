import { FlowSystemContext } from '../../../domain/interfaces/context.js';
import {
  FlowActionRunner,
  FlowConfiguration,
  FlowErrorResult,
  FlowFinishResult,
  FlowOngoingResult,
  FlowSubflowResult,
} from '../../../domain/interfaces/flowEngine.js';
import { ChannelFlowConfiguration } from '../../../lib/flow-engine/channelFlowConfiguration';

const SUM_RUNNER: FlowActionRunner = {
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

const THROW_RUNNER: FlowActionRunner = {
  kind: 'throw',
  async run(ctx, params) {
    throw params.configuration.error;
  },
};

const ONGOING_RUNNER: FlowActionRunner = {
  kind: 'ongoing',
  async run(ctx, params) {
    return { kind: 'ongoing', stepState: params.stepState };
  },
};

const SUBFLOW_RUNNER: FlowActionRunner = {
  kind: 'subflow',
  async run(ctx, params) {
    return {
      kind: 'subflow',
      subflow: params.configuration.subflow as FlowSubflowResult['subflow'],
    };
  },
};

const FINISH_RUNNER: FlowActionRunner = {
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
  contextSchema: {
    sum: { type: 'number' },
  },
  startActionId: '1',
  steps: new Map([
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
  stepConnections: new Map(),
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
  contextSchema: {
    sum1: { type: 'number' },
    sum2: { type: 'number' },
  },
  startActionId: '1',
  steps: new Map([
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
  stepConnections: new Map([['1', new Map([[0, '2']])]]),
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
  contextSchema: {},
  startActionId: '1',
  steps: new Map([
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
  stepConnections: new Map(),
};

export const ONGOING_FLOW_RESULT: FlowOngoingResult = {
  kind: 'ongoing',
  flowId: ONGOING_FLOW.id,
  flowActionId: '1',
  stepState: undefined,
  context: {},
};

const ERROR = new Error('Error');

export const ERROR_FLOW: FlowConfiguration = {
  id: '3',
  channelKind: CHANNEL_KIND,
  name: 'error',
  contextSchema: {},
  startActionId: '1',
  steps: new Map([
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
  stepConnections: new Map(),
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
  contextSchema: {},
  startActionId: '1',
  steps: new Map([
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
  stepConnections: new Map(),
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
  contextSchema: {},
  startActionId: '1',
  steps: new Map([
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
  stepConnections: new Map(),
};

export const FINISH_FLOW_RESULT: FlowFinishResult = {
  kind: 'finish',
  flowId: FINISH_FLOW.id,
  context: {},
};

export const FLOW_SYSTEM_CONTEXT = {} as FlowSystemContext;
