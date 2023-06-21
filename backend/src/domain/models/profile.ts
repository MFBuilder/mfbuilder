import { AnyRecord, ID } from '../interfaces/utils.js';
import { Schema } from './schema.js';
import { Workspace } from './workspace.js';

export type ProfileSchema = {
  id: ID;
  schema: Schema;
  workspaceId: Workspace['id'];
};

export type Profile = {
  id: ID;
  schemaId: ProfileSchema['id'];
  data: AnyRecord;
};
