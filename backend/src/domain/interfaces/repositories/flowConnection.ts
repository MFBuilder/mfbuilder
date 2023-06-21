import { FlowActionConnection } from '../../models/flow';
import { DbContext } from '../context';
import { DbClient } from '../dbClient';
import { BaseRepository } from '../repository';

export { FlowActionConnection } from '../../models/flow';
export type FlowActionConnectionBase = Omit<FlowActionConnection, 'id'>;
export type FlowActionConnectionDelta = Partial<FlowActionConnectionBase>;

export type FlowActionConnectionRepository<
  C extends DbContext<DbClient<unknown>>
> = BaseRepository<
  C,
  FlowActionConnection,
  FlowActionConnectionBase,
  FlowActionConnectionDelta
>;
