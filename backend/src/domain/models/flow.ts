import { Schema } from 'ajv';
import { AnyRecord, ID } from '../interfaces/utils.js';
import { Workspace } from './workspace.js';

export type FlowGroup = {
  id: ID;
  name: string;
  workspaceId: Workspace['id'];
};

export type Flow = {
  id: ID;
  name: string;
  channelKind: string;
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

export type FlowActionConnection =
  | {
      id: ID;
      flowId: Flow['id'];
      fromId: FlowAction['id'];
      toId: FlowAction['id'] | null;
      socket: number;
    }
  | {
      id: ID;
      flowId: Flow['id'];
      fromId: null;
      toId: FlowAction['id'];
      socket: 0;
    };
