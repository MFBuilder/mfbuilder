import { AnyRecord, ID } from './typeUtils';

export type Schema = {
  id: ID;
} & AnyRecord;
