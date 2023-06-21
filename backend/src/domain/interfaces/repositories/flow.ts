import { Flow } from '../../models/flow';
import { DbContext } from '../context';
import { DbClient } from '../dbClient';
import { BaseRepository } from '../repository';

export { Flow } from '../../models/flow';
export type FlowBase = Omit<Flow, 'id'>;
export type FlowDelta = Partial<FlowBase>;

export type FlowRepository<C extends DbContext<DbClient<unknown>>> =
  BaseRepository<C, Flow, FlowBase, FlowDelta>;
