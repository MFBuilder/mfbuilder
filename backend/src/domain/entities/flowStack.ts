import { AnyRecord, ID } from '../interfaces/utils.js';
import { FlowEntity } from './flow.js';
import { ProfileChannelEntity } from './profileChannel.js';

export type FlowStackEntity = {
  id: ID;
  flowId: FlowEntity['id'];
  parentId: FlowStackEntity['id'] | null;
  profileChannelId: ProfileChannelEntity['id'];
  context: AnyRecord;
  createdAt: Date;
};
