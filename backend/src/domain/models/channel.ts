import { AnyRecord, ID } from '../interfaces/utils.js';
import { Profile } from './profile.js';
import { Workspace } from './workspace.js';

export type Channel = {
  id: ID;
  kind: string;
  workspaceId: Workspace['id'];
  configuration: AnyRecord;
};

export type ProfileChannel = {
  id: ID;
  profileId: Profile['id'];
  channelId: Channel['id'];
  /**
   * The unique identifier of an user or a chat
   */
  channelProfileId: string;
  status: 'active' | 'blocked';
  data: AnyRecord;
};
