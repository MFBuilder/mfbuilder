import { FlowActionState } from '../../models/flowState';
import { DbContext } from '../context';
import { DbClient } from '../dbClient';
import { BaseRepository } from '../repository';

export { FlowActionState } from '../../models/flowState';
export type FlowActionStateBase = Omit<FlowActionState, 'id'>;
export type FlowActionStateDelta = Partial<FlowActionStateBase>;

export type FlowActionStateRepository<C extends DbContext<DbClient<unknown>>> =
  BaseRepository<C, FlowActionState, FlowActionStateBase, FlowActionStateDelta>;
