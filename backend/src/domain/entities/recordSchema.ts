import { Schema } from 'ajv';
import { ID } from '../interfaces/utils.js';
import { WorkspaceEntity } from './workspace.js';

export type RecordSchemaEntity = {
  id: ID;
  name: string;
  schema: Schema;
  workspaceId: WorkspaceEntity['id'];
};
