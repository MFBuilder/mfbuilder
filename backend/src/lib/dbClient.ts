import { PrismaClient } from '.prisma/client.js';
import { AccountEntity } from '../domain/entities/account.js';
import {
  FlowChannelProfile,
  ApiSystemContext as IApiContext,
  SystemContext as IDbContext,
  FlowSystemContext as IFlowContext,
} from '../domain/interfaces/context.js';
import { DbClient as IDbClient } from '../domain/interfaces/dbClient.js';
import { Logger } from '../domain/interfaces/logger.js';
import { AnyRecord, ID } from '../domain/interfaces/utils.js';

type PrismaTransactionClient = Omit<
  PrismaClient,
  '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'
>;

export class DbClient implements IDbClient<PrismaTransactionClient> {
  private client: PrismaClient;
  private transactionClient: PrismaTransactionClient | null;
  constructor(
    client: PrismaClient,
    transactionClient: PrismaTransactionClient | null = null
  ) {
    this.client = client;
    this.transactionClient = transactionClient;
  }

  async withTransaction(
    fn: (dbClient: DbClient) => Promise<void>
  ): Promise<void> {
    if (this.transactionClient) {
      return await fn(this);
    }

    return await this.client.$transaction(
      async (tx) => await fn(new DbClient(this.client, tx))
    );
  }

  getClient(): PrismaTransactionClient {
    return this.transactionClient ?? this.client;
  }
}

export class DbContext<D> implements IDbContext<D> {
  dbClient: IDbClient<D>;
  logger: Logger;

  constructor(logger: Logger, dbClient: IDbClient<D>) {
    this.logger = logger;
    this.dbClient = dbClient;
  }

  async withTransaction(
    fn: (ctx: DbContext<D>) => Promise<void>
  ): Promise<void> {
    return await this.dbClient.withTransaction(async (dbClient) => {
      const context = this.clone();
      context.dbClient = dbClient;

      await fn(context);
    });
  }

  clone(): DbContext<D> {
    return new DbContext(this.logger, this.dbClient);
  }
}

export class ApiContext<D> implements IApiContext<D> {
  dbClient: IDbClient<D>;
  logger: Logger;
  accountId: AccountEntity['id'];

  constructor(
    logger: Logger,
    dbClient: IDbClient<D>,
    accountId: AccountEntity['id']
  ) {
    this.logger = logger;
    this.dbClient = dbClient;
    this.accountId = accountId;
  }

  async withTransaction(
    fn: (ctx: ApiContext<D>) => Promise<void>
  ): Promise<void> {
    return await this.dbClient.withTransaction(async (dbClient) => {
      const context = this.clone();
      context.dbClient = dbClient;

      await fn(context);
    });
  }

  clone(): ApiContext<D> {
    return new ApiContext(this.logger, this.dbClient, this.accountId);
  }
}

export type ChannelAccount = { channelAccountId: ID; data: AnyRecord };

export class FlowContext<D> implements IFlowContext<D> {
  dbClient: IDbClient<D>;
  logger: Logger;
  profileChannel: FlowChannelProfile;

  constructor(
    logger: Logger,
    dbClient: IDbClient<D>,
    accountChannel: FlowChannelProfile
  ) {
    this.logger = logger;
    this.dbClient = dbClient;
    this.profileChannel = accountChannel;
  }

  async withTransaction(
    fn: (ctx: FlowContext<D>) => Promise<void>
  ): Promise<void> {
    return await this.dbClient.withTransaction(async (dbClient) => {
      const context = this.clone();
      context.dbClient = dbClient;

      await fn(context);
    });
  }

  clone(): FlowContext<D> {
    return new FlowContext(this.logger, this.dbClient, this.profileChannel);
  }
}
