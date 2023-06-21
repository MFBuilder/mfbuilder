import { FlowAction } from '../../models/flow';
import { DbContext } from '../context';
import { DbClient } from '../dbClient';
import { BaseRepository } from '../repository';

export { FlowAction } from '../../models/flow';
export type FlowActionBase = Omit<FlowAction, 'id'>;
export type FlowActionDelta = Partial<FlowActionBase>;

export type FlowActionRepository<C extends DbContext<DbClient<unknown>>> =
  BaseRepository<C, FlowAction, FlowActionBase, FlowActionDelta>;
