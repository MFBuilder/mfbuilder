import { ID } from '../interfaces/utils.js';
import { FlowGroupEntity } from './flowGroup.js';
import { FlowStepEntity } from './flowStep.js';
import { FlowStepConnectionEntity } from './flowStepConnection.js';
import { Schema } from './schema.js';

export type FlowEntity = {
  id: ID;
  name: string;
  channelKind: string;
  flowGroupId: FlowGroupEntity['id'];
  contextSchema: Schema;
  status: 'published' | 'draft';
};

export type FlowFullEntity = FlowEntity & {
  steps: FlowStepEntity[];
  stepConnections: FlowStepConnectionEntity[];
};
