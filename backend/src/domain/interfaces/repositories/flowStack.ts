import { FlowStackEntity } from '../../entities/flowStack.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';

export { FlowStackEntity } from '../../entities/flowStack.js';
export type FlowStackDelta = Partial<Omit<FlowStackEntity, 'id'>>;

export type FlowStackRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, FlowStackEntity, FlowStackDelta>;
