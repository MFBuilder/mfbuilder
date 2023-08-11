import { AnyRecord, ID } from '../interfaces/utils.js';
import { WorkspaceEntity } from './workspace.js';

export type ChannelEntity = {
  id: ID;
  kind: string;
  workspaceId: WorkspaceEntity['id'];
  configuration: AnyRecord;
};
