import { FlowStepEntity } from '../../entities/flowStep.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';

export { FlowStepEntity } from '../../entities/flowStep.js';
export type FlowStepEntityDelta = Partial<Omit<FlowStepEntity, 'id'>>;

export type FlowStepRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, FlowStepEntity, FlowStepEntityDelta>;
