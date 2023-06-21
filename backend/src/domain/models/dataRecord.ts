import { AnyRecord, ID } from '../interfaces/utils.js';
import { Schema } from './schema.js';
import { Workspace } from './workspace.js';

export type DataRecordSchema = {
  id: ID;
  name: string;
  schema: Schema;
  workspaceId: Workspace['id'];
};

export type DataRecord = {
  id: ID;
  schemaId: DataRecordSchema['id'];
  data: AnyRecord;
};
