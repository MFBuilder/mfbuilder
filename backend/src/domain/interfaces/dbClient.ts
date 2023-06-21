export type DbClient<D> = {
  withTransaction: (
    fn: (dbClient: DbClient<D>) => Promise<void>
  ) => Promise<void>;
  getClient(): D;
};
