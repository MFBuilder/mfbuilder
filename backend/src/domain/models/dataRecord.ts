import { Schema } from './schema';
import { AnyRecord, ID } from './typeUtils';
import { Workspace } from './workspace';

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
