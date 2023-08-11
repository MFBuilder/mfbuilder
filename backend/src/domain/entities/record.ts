import { AnyRecord, ID } from '../interfaces/utils.js';
import { RecordSchemaEntity } from './recordSchema.js';

export type RecordEntity = {
  id: ID;
  schemaId: RecordSchemaEntity['id'];
  data: AnyRecord;
};
