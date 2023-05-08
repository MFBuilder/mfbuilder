import { Account } from './account';
import { AnyRecord, ID } from './typeUtils';
import { Workspace } from './workspace';

export type Channel = {
  id: ID;
  kind: string;
  workspaceId: Workspace['id'];
  configuration: AnyRecord;
};

export type AccountChannel = {
  id: ID;
  accountId: Account['id'];
  channelId: Channel['id'];
  /**
   * The unique identifier of an user or a chat
   */
  channelAccountId: string;
  status: 'active' | 'blocked';
  data: AnyRecord;
};
