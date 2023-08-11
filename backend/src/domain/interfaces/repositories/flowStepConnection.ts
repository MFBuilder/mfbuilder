import {
  DefaultFlowStepConnectionEntity,
  FlowStepConnectionEntity,
  StartFlowStepConnectionEntity,
} from '../../entities/flowStepConnection.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';

export type FlowStepConnectionDelta =
  | Partial<Omit<DefaultFlowStepConnectionEntity, 'id'>>
  | Partial<Omit<StartFlowStepConnectionEntity, 'id'>>;

export type FlowStepConnectionRepository<
  C extends SystemContext = SystemContext
> = BaseRepository<C, FlowStepConnectionEntity, FlowStepConnectionDelta>;
