import { AnyRecord, ID } from '../interfaces/utils.js';
import { FlowStackEntity } from './flowStack.js';
import { FlowStepEntity } from './flowStep.js';

export type FlowActionStateEntity = {
  id: ID;
  state: AnyRecord;
  flowStackId: FlowStackEntity['id'];
  flowStepId: FlowStepEntity['id'];
  createdAt: Date;
};
