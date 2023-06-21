import { Account } from '../models/account';
import { Channel, ProfileChannel } from '../models/channel';
import { DbClient } from './dbClient';
import { Logger } from './logger';

export type DbContext<D> = {
  logger: Logger;
  dbClient: DbClient<D>;
  withTransaction: (fn: (ctx: DbContext<D>) => Promise<void>) => Promise<void>;
  clone(): DbContext<D>;
};

export type ApiContext<D> = DbContext<D> & {
  accountId: Account['id'];
  withTransaction: (fn: (ctx: ApiContext<D>) => Promise<void>) => Promise<void>;
  clone(): ApiContext<D>;
};

export type FlowProfileChannel = {
  kind: Channel['kind'];
  channelId: Channel['id'];
  channelProfileId: ProfileChannel['channelProfileId'];
  data: ProfileChannel['data'];
};

export type FlowContext<D> = DbContext<D> & {
  profileChannel: FlowProfileChannel;
  withTransaction: (
    fn: (ctx: FlowContext<D>) => Promise<void>
  ) => Promise<void>;
  clone(): FlowContext<D>;
};
