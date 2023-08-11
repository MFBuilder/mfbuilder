import { FlowSystemContext } from '../../domain/interfaces/context.js';
import { AnyRecord } from '../../domain/interfaces/utils.js';
import { FlowEntity } from '../entities/flow.js';
import { FlowGroupEntity } from '../entities/flowGroup.js';
import { FlowStepEntity } from '../entities/flowStep.js';

export type FlowContext = AnyRecord;

export type Flow = Pick<
  FlowEntity,
  'id' | 'name' | 'channelKind' | 'contextSchema'
>;

export type FlowStep = Pick<
  FlowStepEntity,
  'id' | 'name' | 'kind' | 'configuration'
>;

export type FlowStepState = AnyRecord;

export type FlowActionOngoingResult = {
  kind: 'ongoing';
  stepState?: Partial<FlowStepState>;
};

export type FlowActionFinishResult = {
  kind: 'finish';
  socket: number;
  context?: FlowContext;
};

export type FlowActionSubflowResult = {
  kind: 'subflow';
  stepState?: Partial<FlowStepState>;
  subflow: {
    id: Flow['id'];
    stepId?: FlowStep['id'];
    context: FlowContext;
  };
};

export type FlowActionResult =
  | FlowActionOngoingResult
  | FlowActionFinishResult
  | FlowActionSubflowResult;

export type FlowActionConfiguration = FlowStep['configuration'];

export type FlowActionRunParams = {
  configuration: FlowActionConfiguration;
  context: FlowContext;
  stepState?: FlowStepState;
  data?: unknown;
};

export interface FlowActionRunner {
  kind: string;
  run: (
    ctx: FlowSystemContext,
    params: FlowActionRunParams
  ) => Promise<FlowActionResult>;
}

export type ChannelFlowConfiguration = {
  channelKind: FlowGroupEntity['channelKind'];
  addActionRunner(runner: FlowActionRunner): ChannelFlowConfiguration;
  removeActionRunner(runnerKind: string): boolean;
  getActionRunner(runnerKind: string): FlowActionRunner;
};

export type FlowConfiguration = Flow & {
  startActionId: FlowStep['id'];
  steps: Map<FlowStep['id'], FlowStep>;
  stepConnections: Map<FlowStep['id'], Map<number, FlowStep['id'] | null>>;
};

export type FlowState = {
  context: AnyRecord;
  stepState?: FlowStepState;
};

export type FlowOngoingResult = {
  kind: 'ongoing';
  flowId: Flow['id'];
  context: FlowContext;
  flowActionId: FlowStep['id'];
  stepState?: Partial<FlowStepState>;
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
  flowActionId: FlowStep['id'];
  error: unknown;
};

export type FlowSubflowResult = {
  kind: 'subflow';
  flowId: Flow['id'];
  context: FlowContext;
  stepId: FlowStep['id'];
  stepState?: Partial<FlowStepState>;
  subflow: {
    id: Flow['id'];
    stepId?: FlowStep['id'];
    context: FlowContext;
  };
};

export type FlowResult =
  | FlowOngoingResult
  | FlowFinishResult
  | FlowErrorResult
  | FlowSubflowResult;

export type FlowEngine = {
  runFlow(
    ctx: FlowSystemContext,
    configuration: FlowConfiguration,
    state: FlowState,
    stepId?: FlowStep['id'],
    data?: unknown
  ): Promise<FlowResult>;
};
