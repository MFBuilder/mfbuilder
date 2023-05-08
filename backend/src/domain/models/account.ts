import { Schema } from './schema';
import { AnyRecord, ID } from './typeUtils';
import { Workspace } from './workspace';

export type AccountSchema = {
  id: ID;
  schema: Schema;
  workspaceId: Workspace['id'];
};

export type Account = {
  id: ID;
  schemaId: AccountSchema['id'];
  data: AnyRecord;
};
