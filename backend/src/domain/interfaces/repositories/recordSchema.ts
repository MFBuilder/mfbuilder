import { RecordSchemaEntity } from '../../entities/recordSchema.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';

export type RecordSchemaEntityDelta = Partial<Omit<RecordSchemaEntity, 'id'>>;

export type RecordSchemaRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, RecordSchemaEntity, RecordSchemaEntityDelta>;
