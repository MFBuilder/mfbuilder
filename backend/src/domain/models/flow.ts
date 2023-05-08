import { Schema } from 'ajv';
import { AnyRecord, ID } from './typeUtils';
import { Workspace } from './workspace';

export type FlowGroup = {
  id: ID;
  name: string;
  workspaceId: Workspace['id'];
};

export type Flow = {
  id: ID;
  name: string;
  flowGroupId: FlowGroup['id'];
  contextSchema: Schema;
  status: 'published' | 'draft';
};

export type FlowAction = {
  id: ID;
  name: string;
  kind: string;
  flowId: Flow['id'];
  configuration: AnyRecord;
};

export type FlowActionConnection = {
  id: ID;
  flowId: Flow['id'];
  fromId: FlowAction['id'] | null;
  toId: FlowAction['id'];
  socket: string;
};
