import { Account } from './account';
import { ID } from './typeUtils';

export type Workspace = {
  id: ID;
  name: string;
};

export type WorkspaceAccount = {
  id: ID;
  accountId: Account['id'];
  workspaceId: Workspace['id'];
  role: 'owner' | 'member';
};
