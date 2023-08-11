import { ID } from '../interfaces/utils.js';
import { AccountEntity } from './account.js';
import { WorkspaceEntity } from './workspace.js';

export type WorkspacePermissionEntity = {
  id: ID;
  accountId: AccountEntity['id'];
  workspaceId: WorkspaceEntity['id'];
  role: 'owner' | 'member';
};
