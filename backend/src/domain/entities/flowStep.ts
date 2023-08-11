import { AnyRecord, ID } from '../interfaces/utils.js';
import { FlowEntity } from './flow.js';

export type FlowStepEntity = {
  id: ID;
  name: string;
  kind: string;
  flowId: FlowEntity['id'];
  configuration: AnyRecord;
};
