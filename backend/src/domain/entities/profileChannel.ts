import { AnyRecord, ID } from '../interfaces/utils.js';
import { ChannelEntity } from './channel.js';
import { ProfileEntity } from './profile.js';

export enum ProfileChannelStatus {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
}
export type ProfileChannelEntity = {
  id: ID;
  profileId: ProfileEntity['id'];
  channelId: ChannelEntity['id'];
  /**
   * The unique identifier of an user or a chat
   */
  channelAccountId: string;
  status: ProfileChannelStatus;
  data: AnyRecord;
};
