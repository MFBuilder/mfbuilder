import { ID } from '../interfaces/utils.js';
import { WorkspaceEntity } from './workspace.js';

export type FlowGroupEntity = {
  id: ID;
  name: string;
  channelKind: string;
  workspaceId: WorkspaceEntity['id'];
};
