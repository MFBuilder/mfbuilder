import { AnyRecord } from './utils.js';

export type LogFn =
  | ((object: AnyRecord) => void)
  | ((object: AnyRecord, message: string, ...args: unknown[]) => void);

export type Logger = {
  debug: LogFn;
  info: LogFn;
  warn: LogFn;
  error: LogFn;
  fatal: LogFn;
  child(obj: AnyRecord): Logger;
};
