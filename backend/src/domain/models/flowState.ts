import { AnyRecord, ID } from '../interfaces/utils.js';
import { ProfileChannel } from './channel.js';
import { Flow, FlowAction } from './flow.js';

export type FlowStack = {
  id: ID;
  flowId: Flow['id'];
  parentId: FlowStack['id'] | null;
  profileChannelId: ProfileChannel['id'];
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
