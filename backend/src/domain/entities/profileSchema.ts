import { ID } from '../interfaces/utils.js';
import { Schema } from './schema.js';
import { WorkspaceEntity } from './workspace.js';

export type ProfileSchemaEntity = {
  id: ID;
  schema: Schema;
  workspaceId: WorkspaceEntity['id'];
};
