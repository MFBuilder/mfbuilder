import { ID } from '../interfaces/utils.js';
import { FlowEntity } from './flow.js';
import { FlowStepEntity } from './flowStep.js';

export type StartFlowStepConnectionEntity = {
  id: ID;
  flowId: FlowEntity['id'];
  fromId: null;
  toId: FlowStepEntity['id'];
  socket: 0;
};

export type DefaultFlowStepConnectionEntity = {
  id: ID;
  flowId: FlowEntity['id'];
  fromId: FlowStepEntity['id'];
  toId: FlowStepEntity['id'] | null;
  socket: number;
};

export type FlowStepConnectionEntity =
  | DefaultFlowStepConnectionEntity
  | StartFlowStepConnectionEntity;
