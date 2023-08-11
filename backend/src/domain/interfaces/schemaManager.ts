import { Schema } from '../entities/schema.js';
import { AnyRecord, Nullable } from './utils.js';

export type ValidateFunction<T = unknown> = (data: unknown) => data is T;

export type SchemaManager = {
  add(key: string, schema: Schema): void;
  remove(key: string): void;
  validate(schema: AnyRecord): schema is Schema;
  getValidator<T>(key: string): Nullable<ValidateFunction<T>>;
  getPartialValidator<T>(key: string): Nullable<ValidateFunction<Partial<T>>>;
};
