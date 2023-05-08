import { AccountChannel } from './channel';
import { Flow, FlowAction } from './flow';
import { AnyRecord, ID } from './typeUtils';

export type FlowStack = {
  id: ID;
  flowId: Flow['id'];
  parentId: FlowStack['id'] | null;
  accountChannelId: AccountChannel['id'];
  context: AnyRecord;
  createdAt: Date;
};

export type FlowActionState = {
  id: ID;
  state: AnyRecord;
  flowStackId: FlowStack['id'];
  flowActionId: FlowAction['id'];
  channelState: AnyRecord;
  createdAt: Date;
};
