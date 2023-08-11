import { AccountEntity } from '../entities/account.js';
import { ProfileEntity } from '../entities/profile.js';
import { ChannelAccount } from './channelManager.js';
import { DbClient } from './dbClient.js';
import { Logger } from './logger.js';

export type SystemContext<D = unknown> = {
  logger: Logger;
  dbClient: DbClient<D>;
  withTransaction: <T>(fn: (ctx: SystemContext<D>) => Promise<T>) => Promise<T>;
  clone(): SystemContext<D>;
};

export type ApiSystemContext<D = unknown> = SystemContext<D> & {
  accountId: AccountEntity['id'];
  withTransaction: (
    fn: (ctx: ApiSystemContext<D>) => Promise<void>
  ) => Promise<void>;
  clone(): ApiSystemContext<D>;
};

export type FlowChannelProfile = ChannelAccount & {
  profileId: ProfileEntity['id'];
};

export type FlowSystemContext<D = unknown> = SystemContext<D> & {
  channelProfile: FlowChannelProfile;
  withTransaction: (
    fn: (ctx: FlowSystemContext<D>) => Promise<void>
  ) => Promise<void>;
  clone(): FlowSystemContext<D>;
};
