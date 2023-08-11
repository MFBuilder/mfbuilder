import { ProfileChannelEntity } from '../../entities/profileChannel.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';

export type ProfileChannelDelta = Partial<Omit<ProfileChannelEntity, 'id'>>;

export type ProfileChannelRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, ProfileChannelEntity, ProfileChannelDelta>;
