import { Schema } from '../models/schema.js';
import { AnyRecord } from './utils.js';

export type ValidateFunction<T = unknown> = (data: unknown) => data is T;

export type SchemaValidator<T = unknown> = {
  add(schema: Schema, key: string): void;
  remove(key: string): void;
  get(key: string): ValidateFunction<T> | undefined;
  update(schema: Schema, key: string): void;
  validate(schema: AnyRecord): schema is Schema;
};
