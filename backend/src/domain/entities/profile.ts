import { AnyRecord, ID } from '../interfaces/utils.js';
import { ProfileSchemaEntity } from './profileSchema.js';

export type ProfileEntity = {
  id: ID;
  schemaId: ProfileSchemaEntity['id'];
  data: AnyRecord;
};
