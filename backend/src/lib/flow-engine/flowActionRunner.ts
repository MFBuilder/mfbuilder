import { AnyRecord } from '../../domain/interfaces/utils.js';
import { Flow } from '../../domain/models/flow.js';
import { FlowAction } from './flowEngine.js';

export type FlowContext = AnyRecord;

export type FlowActionState = {
  state: AnyRecord;
  channelState?: AnyRecord;
};

export type FlowActionOngoingResult = {
  kind: 'ongoing';
  actionState?: Partial<FlowActionState>;
};

export type FlowActionFinishResult = {
  kind: 'finish';
  socket: number;
  context?: FlowContext;
};

export type FlowActionSubflowResult = {
  kind: 'subflow';
  actionState?: Partial<FlowActionState>;
  subflow: {
    id: Flow['id'];
    actionId?: FlowAction['id'];
    context: FlowContext;
  };
};

export type FlowActionResult =
  | FlowActionOngoingResult
  | FlowActionFinishResult
  | FlowActionSubflowResult;

export type FlowActionConfiguration = AnyRecord;

export type FlowActionRunParams = {
  configuration: FlowActionConfiguration;
  context: FlowContext;
  actionState?: FlowActionState;
  data?: unknown;
};

export interface FlowActionRunner<C> {
  kind: string;
  run: (ctx: C, params: FlowActionRunParams) => Promise<FlowActionResult>;
}
