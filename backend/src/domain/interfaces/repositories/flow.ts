import { FlowEntity, FlowFullEntity } from '../../entities/flow.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';
import { ID } from '../utils.js';

export type FlowEntityDelta = Partial<Omit<FlowEntity, 'id'>>;
// TODO: Create better name

export type FlowRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, FlowEntity, FlowEntityDelta> & {
    getFull: (ctx: C, id: ID) => Promise<FlowFullEntity>;
  };
