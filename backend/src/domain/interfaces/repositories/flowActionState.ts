import { FlowActionStateEntity } from '../../entities/flowActionState.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';

export type FlowActionStateDelta = Partial<Omit<FlowActionStateEntity, 'id'>>;

export type FlowActionStateRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, FlowActionStateEntity, FlowActionStateDelta>;
