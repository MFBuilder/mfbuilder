import { ID } from '../interfaces/utils.js';
import { Profile } from './profile.js';

export type Workspace = {
  id: ID;
  name: string;
};

export type WorkspaceAccount = {
  id: ID;
  accountId: Profile['id'];
  workspaceId: Workspace['id'];
  role: 'owner' | 'member';
};
