import { FlowStack } from '../../models/flowState';
import { DbContext } from '../context';
import { DbClient } from '../dbClient';
import { BaseRepository } from '../repository';

export { FlowStack } from '../../models/flowState';
export type FlowStackBase = Omit<FlowStack, 'id'>;
export type FlowStackDelta = Partial<FlowStackBase>;

export type FlowStackRepository<C extends DbContext<DbClient<unknown>>> =
  BaseRepository<C, FlowStack, FlowStackBase, FlowStackDelta>;
