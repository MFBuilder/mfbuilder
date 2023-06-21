
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Workspace
 * 
 */
export type Workspace = {
  id: number
  name: string
}

/**
 * Model AccountSchema
 * 
 */
export type AccountSchema = {
  id: number
  schema: Prisma.JsonValue
  workspaceId: number
}

/**
 * Model Account
 * 
 */
export type Account = {
  id: number
  schemaId: number
  data: Prisma.JsonValue
}

/**
 * Model WorkspaceAccount
 * 
 */
export type WorkspaceAccount = {
  id: number
  accountId: number
  workspaceId: number
  role: string
}

/**
 * Model DataRecordSchema
 * 
 */
export type DataRecordSchema = {
  id: number
  name: string
  schema: Prisma.JsonValue
  workspaceId: number
}

/**
 * Model DataRecord
 * 
 */
export type DataRecord = {
  id: number
  schemaId: number
  data: Prisma.JsonValue
}

/**
 * Model Channel
 * 
 */
export type Channel = {
  id: number
  kind: string
  workspaceId: number
  configuration: Prisma.JsonValue
}

/**
 * Model AccountChannel
 * 
 */
export type AccountChannel = {
  id: number
  accountId: number
  channelId: number
  channelAccountId: number
  status: string
  data: Prisma.JsonValue
}

/**
 * Model FlowGroup
 * 
 */
export type FlowGroup = {
  id: number
  name: string
  workspaceId: number
}

/**
 * Model Flow
 * 
 */
export type Flow = {
  id: number
  name: string
  status: string
  flowGroupId: number
  contextSchema: Prisma.JsonValue
}

/**
 * Model FlowAction
 * 
 */
export type FlowAction = {
  id: number
  name: string
  kind: string
  flowId: number
  configuration: Prisma.JsonValue
}

/**
 * Model FlowActionConnection
 * 
 */
export type FlowActionConnection = {
  id: number
  flowId: number
  fromId: number
  toId: number
  socket: string
}

/**
 * Model FlowStack
 * 
 */
export type FlowStack = {
  id: number
  flowId: number
  parentId: number | null
  accountChannelId: number
  context: Prisma.JsonValue
  createdAt: Date
}

/**
 * Model FlowState
 * 
 */
export type FlowState = {
  id: number
  flowStackId: number
  flowActionId: number
  state: Prisma.JsonValue
  channelState: Prisma.JsonValue
  createdAt: Date
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workspaces
 * const workspaces = await prisma.workspace.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workspaces
   * const workspaces = await prisma.workspace.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<GlobalReject>;

  /**
   * `prisma.accountSchema`: Exposes CRUD operations for the **AccountSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountSchemas
    * const accountSchemas = await prisma.accountSchema.findMany()
    * ```
    */
  get accountSchema(): Prisma.AccountSchemaDelegate<GlobalReject>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<GlobalReject>;

  /**
   * `prisma.workspaceAccount`: Exposes CRUD operations for the **WorkspaceAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WorkspaceAccounts
    * const workspaceAccounts = await prisma.workspaceAccount.findMany()
    * ```
    */
  get workspaceAccount(): Prisma.WorkspaceAccountDelegate<GlobalReject>;

  /**
   * `prisma.dataRecordSchema`: Exposes CRUD operations for the **DataRecordSchema** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataRecordSchemas
    * const dataRecordSchemas = await prisma.dataRecordSchema.findMany()
    * ```
    */
  get dataRecordSchema(): Prisma.DataRecordSchemaDelegate<GlobalReject>;

  /**
   * `prisma.dataRecord`: Exposes CRUD operations for the **DataRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DataRecords
    * const dataRecords = await prisma.dataRecord.findMany()
    * ```
    */
  get dataRecord(): Prisma.DataRecordDelegate<GlobalReject>;

  /**
   * `prisma.channel`: Exposes CRUD operations for the **Channel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Channels
    * const channels = await prisma.channel.findMany()
    * ```
    */
  get channel(): Prisma.ChannelDelegate<GlobalReject>;

  /**
   * `prisma.accountChannel`: Exposes CRUD operations for the **AccountChannel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AccountChannels
    * const accountChannels = await prisma.accountChannel.findMany()
    * ```
    */
  get accountChannel(): Prisma.AccountChannelDelegate<GlobalReject>;

  /**
   * `prisma.flowGroup`: Exposes CRUD operations for the **FlowGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowGroups
    * const flowGroups = await prisma.flowGroup.findMany()
    * ```
    */
  get flowGroup(): Prisma.FlowGroupDelegate<GlobalReject>;

  /**
   * `prisma.flow`: Exposes CRUD operations for the **Flow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flows
    * const flows = await prisma.flow.findMany()
    * ```
    */
  get flow(): Prisma.FlowDelegate<GlobalReject>;

  /**
   * `prisma.flowAction`: Exposes CRUD operations for the **FlowAction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowActions
    * const flowActions = await prisma.flowAction.findMany()
    * ```
    */
  get flowAction(): Prisma.FlowActionDelegate<GlobalReject>;

  /**
   * `prisma.flowActionConnection`: Exposes CRUD operations for the **FlowActionConnection** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowActionConnections
    * const flowActionConnections = await prisma.flowActionConnection.findMany()
    * ```
    */
  get flowActionConnection(): Prisma.FlowActionConnectionDelegate<GlobalReject>;

  /**
   * `prisma.flowStack`: Exposes CRUD operations for the **FlowStack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowStacks
    * const flowStacks = await prisma.flowStack.findMany()
    * ```
    */
  get flowStack(): Prisma.FlowStackDelegate<GlobalReject>;

  /**
   * `prisma.flowState`: Exposes CRUD operations for the **FlowState** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlowStates
    * const flowStates = await prisma.flowState.findMany()
    * ```
    */
  get flowState(): Prisma.FlowStateDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.15.0
   * Query Engine version: 8fbc245156db7124f997f4cecdd8d1219e360944
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Workspace: 'Workspace',
    AccountSchema: 'AccountSchema',
    Account: 'Account',
    WorkspaceAccount: 'WorkspaceAccount',
    DataRecordSchema: 'DataRecordSchema',
    DataRecord: 'DataRecord',
    Channel: 'Channel',
    AccountChannel: 'AccountChannel',
    FlowGroup: 'FlowGroup',
    Flow: 'Flow',
    FlowAction: 'FlowAction',
    FlowActionConnection: 'FlowActionConnection',
    FlowStack: 'FlowStack',
    FlowState: 'FlowState'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type WorkspaceCountOutputType
   */


  export type WorkspaceCountOutputType = {
    accountSchemas: number
    dataRecordSchemas: number
    workspaceAccounts: number
    channels: number
    flowGroups: number
  }

  export type WorkspaceCountOutputTypeSelect = {
    accountSchemas?: boolean
    dataRecordSchemas?: boolean
    workspaceAccounts?: boolean
    channels?: boolean
    flowGroups?: boolean
  }

  export type WorkspaceCountOutputTypeGetPayload<S extends boolean | null | undefined | WorkspaceCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceCountOutputTypeArgs)
    ? WorkspaceCountOutputType 
    : S extends { select: any } & (WorkspaceCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof WorkspaceCountOutputType ? WorkspaceCountOutputType[P] : never
  } 
      : WorkspaceCountOutputType




  // Custom InputTypes

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect | null
  }



  /**
   * Count Type AccountSchemaCountOutputType
   */


  export type AccountSchemaCountOutputType = {
    accounts: number
  }

  export type AccountSchemaCountOutputTypeSelect = {
    accounts?: boolean
  }

  export type AccountSchemaCountOutputTypeGetPayload<S extends boolean | null | undefined | AccountSchemaCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountSchemaCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AccountSchemaCountOutputTypeArgs)
    ? AccountSchemaCountOutputType 
    : S extends { select: any } & (AccountSchemaCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AccountSchemaCountOutputType ? AccountSchemaCountOutputType[P] : never
  } 
      : AccountSchemaCountOutputType




  // Custom InputTypes

  /**
   * AccountSchemaCountOutputType without action
   */
  export type AccountSchemaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AccountSchemaCountOutputType
     */
    select?: AccountSchemaCountOutputTypeSelect | null
  }



  /**
   * Count Type AccountCountOutputType
   */


  export type AccountCountOutputType = {
    workspaceAccounts: number
    accountChannels: number
  }

  export type AccountCountOutputTypeSelect = {
    workspaceAccounts?: boolean
    accountChannels?: boolean
  }

  export type AccountCountOutputTypeGetPayload<S extends boolean | null | undefined | AccountCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AccountCountOutputTypeArgs)
    ? AccountCountOutputType 
    : S extends { select: any } & (AccountCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AccountCountOutputType ? AccountCountOutputType[P] : never
  } 
      : AccountCountOutputType




  // Custom InputTypes

  /**
   * AccountCountOutputType without action
   */
  export type AccountCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AccountCountOutputType
     */
    select?: AccountCountOutputTypeSelect | null
  }



  /**
   * Count Type DataRecordSchemaCountOutputType
   */


  export type DataRecordSchemaCountOutputType = {
    dataRecords: number
  }

  export type DataRecordSchemaCountOutputTypeSelect = {
    dataRecords?: boolean
  }

  export type DataRecordSchemaCountOutputTypeGetPayload<S extends boolean | null | undefined | DataRecordSchemaCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DataRecordSchemaCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (DataRecordSchemaCountOutputTypeArgs)
    ? DataRecordSchemaCountOutputType 
    : S extends { select: any } & (DataRecordSchemaCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof DataRecordSchemaCountOutputType ? DataRecordSchemaCountOutputType[P] : never
  } 
      : DataRecordSchemaCountOutputType




  // Custom InputTypes

  /**
   * DataRecordSchemaCountOutputType without action
   */
  export type DataRecordSchemaCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchemaCountOutputType
     */
    select?: DataRecordSchemaCountOutputTypeSelect | null
  }



  /**
   * Count Type ChannelCountOutputType
   */


  export type ChannelCountOutputType = {
    accountChannels: number
  }

  export type ChannelCountOutputTypeSelect = {
    accountChannels?: boolean
  }

  export type ChannelCountOutputTypeGetPayload<S extends boolean | null | undefined | ChannelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ChannelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ChannelCountOutputTypeArgs)
    ? ChannelCountOutputType 
    : S extends { select: any } & (ChannelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ChannelCountOutputType ? ChannelCountOutputType[P] : never
  } 
      : ChannelCountOutputType




  // Custom InputTypes

  /**
   * ChannelCountOutputType without action
   */
  export type ChannelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ChannelCountOutputType
     */
    select?: ChannelCountOutputTypeSelect | null
  }



  /**
   * Count Type AccountChannelCountOutputType
   */


  export type AccountChannelCountOutputType = {
    flowStacks: number
  }

  export type AccountChannelCountOutputTypeSelect = {
    flowStacks?: boolean
  }

  export type AccountChannelCountOutputTypeGetPayload<S extends boolean | null | undefined | AccountChannelCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountChannelCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AccountChannelCountOutputTypeArgs)
    ? AccountChannelCountOutputType 
    : S extends { select: any } & (AccountChannelCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AccountChannelCountOutputType ? AccountChannelCountOutputType[P] : never
  } 
      : AccountChannelCountOutputType




  // Custom InputTypes

  /**
   * AccountChannelCountOutputType without action
   */
  export type AccountChannelCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AccountChannelCountOutputType
     */
    select?: AccountChannelCountOutputTypeSelect | null
  }



  /**
   * Count Type FlowGroupCountOutputType
   */


  export type FlowGroupCountOutputType = {
    flows: number
  }

  export type FlowGroupCountOutputTypeSelect = {
    flows?: boolean
  }

  export type FlowGroupCountOutputTypeGetPayload<S extends boolean | null | undefined | FlowGroupCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowGroupCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FlowGroupCountOutputTypeArgs)
    ? FlowGroupCountOutputType 
    : S extends { select: any } & (FlowGroupCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FlowGroupCountOutputType ? FlowGroupCountOutputType[P] : never
  } 
      : FlowGroupCountOutputType




  // Custom InputTypes

  /**
   * FlowGroupCountOutputType without action
   */
  export type FlowGroupCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FlowGroupCountOutputType
     */
    select?: FlowGroupCountOutputTypeSelect | null
  }



  /**
   * Count Type FlowCountOutputType
   */


  export type FlowCountOutputType = {
    flowActions: number
    FlowActionConnection: number
    FlowStack: number
  }

  export type FlowCountOutputTypeSelect = {
    flowActions?: boolean
    FlowActionConnection?: boolean
    FlowStack?: boolean
  }

  export type FlowCountOutputTypeGetPayload<S extends boolean | null | undefined | FlowCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FlowCountOutputTypeArgs)
    ? FlowCountOutputType 
    : S extends { select: any } & (FlowCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FlowCountOutputType ? FlowCountOutputType[P] : never
  } 
      : FlowCountOutputType




  // Custom InputTypes

  /**
   * FlowCountOutputType without action
   */
  export type FlowCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FlowCountOutputType
     */
    select?: FlowCountOutputTypeSelect | null
  }



  /**
   * Count Type FlowActionCountOutputType
   */


  export type FlowActionCountOutputType = {
    fromFlowActionConnections: number
    toFlowActionConnections: number
    flowStates: number
  }

  export type FlowActionCountOutputTypeSelect = {
    fromFlowActionConnections?: boolean
    toFlowActionConnections?: boolean
    flowStates?: boolean
  }

  export type FlowActionCountOutputTypeGetPayload<S extends boolean | null | undefined | FlowActionCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowActionCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FlowActionCountOutputTypeArgs)
    ? FlowActionCountOutputType 
    : S extends { select: any } & (FlowActionCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FlowActionCountOutputType ? FlowActionCountOutputType[P] : never
  } 
      : FlowActionCountOutputType




  // Custom InputTypes

  /**
   * FlowActionCountOutputType without action
   */
  export type FlowActionCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FlowActionCountOutputType
     */
    select?: FlowActionCountOutputTypeSelect | null
  }



  /**
   * Count Type FlowStackCountOutputType
   */


  export type FlowStackCountOutputType = {
    children: number
    flowStates: number
  }

  export type FlowStackCountOutputTypeSelect = {
    children?: boolean
    flowStates?: boolean
  }

  export type FlowStackCountOutputTypeGetPayload<S extends boolean | null | undefined | FlowStackCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowStackCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (FlowStackCountOutputTypeArgs)
    ? FlowStackCountOutputType 
    : S extends { select: any } & (FlowStackCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof FlowStackCountOutputType ? FlowStackCountOutputType[P] : never
  } 
      : FlowStackCountOutputType




  // Custom InputTypes

  /**
   * FlowStackCountOutputType without action
   */
  export type FlowStackCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the FlowStackCountOutputType
     */
    select?: FlowStackCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Workspace
   */


  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceAvgAggregateOutputType = {
    id: number | null
  }

  export type WorkspaceSumAggregateOutputType = {
    id: number | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type WorkspaceAvgAggregateInputType = {
    id?: true
  }

  export type WorkspaceSumAggregateInputType = {
    id?: true
  }

  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs = {
    where?: WorkspaceWhereInput
    orderBy?: Enumerable<WorkspaceOrderByWithAggregationInput>
    by: WorkspaceScalarFieldEnum[]
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _avg?: WorkspaceAvgAggregateInputType
    _sum?: WorkspaceSumAggregateInputType
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }


  export type WorkspaceGroupByOutputType = {
    id: number
    name: string
    _count: WorkspaceCountAggregateOutputType | null
    _avg: WorkspaceAvgAggregateOutputType | null
    _sum: WorkspaceSumAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect = {
    id?: boolean
    name?: boolean
    accountSchemas?: boolean | Workspace$accountSchemasArgs
    dataRecordSchemas?: boolean | Workspace$dataRecordSchemasArgs
    workspaceAccounts?: boolean | Workspace$workspaceAccountsArgs
    channels?: boolean | Workspace$channelsArgs
    flowGroups?: boolean | Workspace$flowGroupsArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  }


  export type WorkspaceInclude = {
    accountSchemas?: boolean | Workspace$accountSchemasArgs
    dataRecordSchemas?: boolean | Workspace$dataRecordSchemasArgs
    workspaceAccounts?: boolean | Workspace$workspaceAccountsArgs
    channels?: boolean | Workspace$channelsArgs
    flowGroups?: boolean | Workspace$flowGroupsArgs
    _count?: boolean | WorkspaceCountOutputTypeArgs
  }

  export type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Workspace :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceArgs | WorkspaceFindManyArgs)
    ? Workspace  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'accountSchemas' ? Array < AccountSchemaGetPayload<S['include'][P]>>  :
        P extends 'dataRecordSchemas' ? Array < DataRecordSchemaGetPayload<S['include'][P]>>  :
        P extends 'workspaceAccounts' ? Array < WorkspaceAccountGetPayload<S['include'][P]>>  :
        P extends 'channels' ? Array < ChannelGetPayload<S['include'][P]>>  :
        P extends 'flowGroups' ? Array < FlowGroupGetPayload<S['include'][P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorkspaceArgs | WorkspaceFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'accountSchemas' ? Array < AccountSchemaGetPayload<S['select'][P]>>  :
        P extends 'dataRecordSchemas' ? Array < DataRecordSchemaGetPayload<S['select'][P]>>  :
        P extends 'workspaceAccounts' ? Array < WorkspaceAccountGetPayload<S['select'][P]>>  :
        P extends 'channels' ? Array < ChannelGetPayload<S['select'][P]>>  :
        P extends 'flowGroups' ? Array < FlowGroupGetPayload<S['select'][P]>>  :
        P extends '_count' ? WorkspaceCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Workspace ? Workspace[P] : never
  } 
      : Workspace


  type WorkspaceCountArgs = 
    Omit<WorkspaceFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Workspace'> extends True ? Prisma__WorkspaceClient<WorkspaceGetPayload<T>> : Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null, null>

    /**
     * Find one Workspace that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Workspace'> extends True ? Prisma__WorkspaceClient<WorkspaceGetPayload<T>> : Prisma__WorkspaceClient<WorkspaceGetPayload<T> | null, null>

    /**
     * Find the first Workspace that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkspaceFindManyArgs>(
      args?: SelectSubset<T, WorkspaceFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkspaceGetPayload<T>>>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceCreateArgs>(
      args: SelectSubset<T, WorkspaceCreateArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Create many Workspaces.
     *     @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     *     @example
     *     // Create many Workspaces
     *     const workspace = await prisma.workspace.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceDeleteArgs>(
      args: SelectSubset<T, WorkspaceDeleteArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceUpdateArgs>(
      args: SelectSubset<T, WorkspaceUpdateArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceUpsertArgs>(
      args: SelectSubset<T, WorkspaceUpsertArgs>
    ): Prisma__WorkspaceClient<WorkspaceGetPayload<T>>

    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    accountSchemas<T extends Workspace$accountSchemasArgs= {}>(args?: Subset<T, Workspace$accountSchemasArgs>): Prisma.PrismaPromise<Array<AccountSchemaGetPayload<T>>| Null>;

    dataRecordSchemas<T extends Workspace$dataRecordSchemasArgs= {}>(args?: Subset<T, Workspace$dataRecordSchemasArgs>): Prisma.PrismaPromise<Array<DataRecordSchemaGetPayload<T>>| Null>;

    workspaceAccounts<T extends Workspace$workspaceAccountsArgs= {}>(args?: Subset<T, Workspace$workspaceAccountsArgs>): Prisma.PrismaPromise<Array<WorkspaceAccountGetPayload<T>>| Null>;

    channels<T extends Workspace$channelsArgs= {}>(args?: Subset<T, Workspace$channelsArgs>): Prisma.PrismaPromise<Array<ChannelGetPayload<T>>| Null>;

    flowGroups<T extends Workspace$flowGroupsArgs= {}>(args?: Subset<T, Workspace$flowGroupsArgs>): Prisma.PrismaPromise<Array<FlowGroupGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Workspace base type for findUnique actions
   */
  export type WorkspaceFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUnique
   */
  export interface WorkspaceFindUniqueArgs extends WorkspaceFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace base type for findFirst actions
   */
  export type WorkspaceFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }

  /**
   * Workspace findFirst
   */
  export interface WorkspaceFindFirstArgs extends WorkspaceFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }


  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: Enumerable<WorkspaceOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: Enumerable<WorkspaceScalarFieldEnum>
  }


  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }


  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs = {
    /**
     * The data used to create many Workspaces.
     */
    data: Enumerable<WorkspaceCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }


  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }


  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
  }


  /**
   * Workspace.accountSchemas
   */
  export type Workspace$accountSchemasArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    where?: AccountSchemaWhereInput
    orderBy?: Enumerable<AccountSchemaOrderByWithRelationInput>
    cursor?: AccountSchemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountSchemaScalarFieldEnum>
  }


  /**
   * Workspace.dataRecordSchemas
   */
  export type Workspace$dataRecordSchemasArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    where?: DataRecordSchemaWhereInput
    orderBy?: Enumerable<DataRecordSchemaOrderByWithRelationInput>
    cursor?: DataRecordSchemaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DataRecordSchemaScalarFieldEnum>
  }


  /**
   * Workspace.workspaceAccounts
   */
  export type Workspace$workspaceAccountsArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    where?: WorkspaceAccountWhereInput
    orderBy?: Enumerable<WorkspaceAccountOrderByWithRelationInput>
    cursor?: WorkspaceAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorkspaceAccountScalarFieldEnum>
  }


  /**
   * Workspace.channels
   */
  export type Workspace$channelsArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    where?: ChannelWhereInput
    orderBy?: Enumerable<ChannelOrderByWithRelationInput>
    cursor?: ChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ChannelScalarFieldEnum>
  }


  /**
   * Workspace.flowGroups
   */
  export type Workspace$flowGroupsArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    where?: FlowGroupWhereInput
    orderBy?: Enumerable<FlowGroupOrderByWithRelationInput>
    cursor?: FlowGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowGroupScalarFieldEnum>
  }


  /**
   * Workspace without action
   */
  export type WorkspaceArgs = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceInclude | null
  }



  /**
   * Model AccountSchema
   */


  export type AggregateAccountSchema = {
    _count: AccountSchemaCountAggregateOutputType | null
    _avg: AccountSchemaAvgAggregateOutputType | null
    _sum: AccountSchemaSumAggregateOutputType | null
    _min: AccountSchemaMinAggregateOutputType | null
    _max: AccountSchemaMaxAggregateOutputType | null
  }

  export type AccountSchemaAvgAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type AccountSchemaSumAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type AccountSchemaMinAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type AccountSchemaMaxAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type AccountSchemaCountAggregateOutputType = {
    id: number
    schema: number
    workspaceId: number
    _all: number
  }


  export type AccountSchemaAvgAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type AccountSchemaSumAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type AccountSchemaMinAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type AccountSchemaMaxAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type AccountSchemaCountAggregateInputType = {
    id?: true
    schema?: true
    workspaceId?: true
    _all?: true
  }

  export type AccountSchemaAggregateArgs = {
    /**
     * Filter which AccountSchema to aggregate.
     */
    where?: AccountSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSchemas to fetch.
     */
    orderBy?: Enumerable<AccountSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountSchemas
    **/
    _count?: true | AccountSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountSchemaMaxAggregateInputType
  }

  export type GetAccountSchemaAggregateType<T extends AccountSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountSchema[P]>
      : GetScalarType<T[P], AggregateAccountSchema[P]>
  }




  export type AccountSchemaGroupByArgs = {
    where?: AccountSchemaWhereInput
    orderBy?: Enumerable<AccountSchemaOrderByWithAggregationInput>
    by: AccountSchemaScalarFieldEnum[]
    having?: AccountSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountSchemaCountAggregateInputType | true
    _avg?: AccountSchemaAvgAggregateInputType
    _sum?: AccountSchemaSumAggregateInputType
    _min?: AccountSchemaMinAggregateInputType
    _max?: AccountSchemaMaxAggregateInputType
  }


  export type AccountSchemaGroupByOutputType = {
    id: number
    schema: JsonValue
    workspaceId: number
    _count: AccountSchemaCountAggregateOutputType | null
    _avg: AccountSchemaAvgAggregateOutputType | null
    _sum: AccountSchemaSumAggregateOutputType | null
    _min: AccountSchemaMinAggregateOutputType | null
    _max: AccountSchemaMaxAggregateOutputType | null
  }

  type GetAccountSchemaGroupByPayload<T extends AccountSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], AccountSchemaGroupByOutputType[P]>
        }
      >
    >


  export type AccountSchemaSelect = {
    id?: boolean
    schema?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceArgs
    accounts?: boolean | AccountSchema$accountsArgs
    _count?: boolean | AccountSchemaCountOutputTypeArgs
  }


  export type AccountSchemaInclude = {
    workspace?: boolean | WorkspaceArgs
    accounts?: boolean | AccountSchema$accountsArgs
    _count?: boolean | AccountSchemaCountOutputTypeArgs
  }

  export type AccountSchemaGetPayload<S extends boolean | null | undefined | AccountSchemaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountSchema :
    S extends undefined ? never :
    S extends { include: any } & (AccountSchemaArgs | AccountSchemaFindManyArgs)
    ? AccountSchema  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['include'][P]> :
        P extends 'accounts' ? Array < AccountGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountSchemaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountSchemaArgs | AccountSchemaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['select'][P]> :
        P extends 'accounts' ? Array < AccountGetPayload<S['select'][P]>>  :
        P extends '_count' ? AccountSchemaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof AccountSchema ? AccountSchema[P] : never
  } 
      : AccountSchema


  type AccountSchemaCountArgs = 
    Omit<AccountSchemaFindManyArgs, 'select' | 'include'> & {
      select?: AccountSchemaCountAggregateInputType | true
    }

  export interface AccountSchemaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AccountSchema that matches the filter.
     * @param {AccountSchemaFindUniqueArgs} args - Arguments to find a AccountSchema
     * @example
     * // Get one AccountSchema
     * const accountSchema = await prisma.accountSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountSchemaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountSchemaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AccountSchema'> extends True ? Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>> : Prisma__AccountSchemaClient<AccountSchemaGetPayload<T> | null, null>

    /**
     * Find one AccountSchema that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountSchemaFindUniqueOrThrowArgs} args - Arguments to find a AccountSchema
     * @example
     * // Get one AccountSchema
     * const accountSchema = await prisma.accountSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountSchemaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountSchemaFindUniqueOrThrowArgs>
    ): Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>>

    /**
     * Find the first AccountSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSchemaFindFirstArgs} args - Arguments to find a AccountSchema
     * @example
     * // Get one AccountSchema
     * const accountSchema = await prisma.accountSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountSchemaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountSchemaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AccountSchema'> extends True ? Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>> : Prisma__AccountSchemaClient<AccountSchemaGetPayload<T> | null, null>

    /**
     * Find the first AccountSchema that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSchemaFindFirstOrThrowArgs} args - Arguments to find a AccountSchema
     * @example
     * // Get one AccountSchema
     * const accountSchema = await prisma.accountSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountSchemaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountSchemaFindFirstOrThrowArgs>
    ): Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>>

    /**
     * Find zero or more AccountSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSchemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountSchemas
     * const accountSchemas = await prisma.accountSchema.findMany()
     * 
     * // Get first 10 AccountSchemas
     * const accountSchemas = await prisma.accountSchema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountSchemaWithIdOnly = await prisma.accountSchema.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountSchemaFindManyArgs>(
      args?: SelectSubset<T, AccountSchemaFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccountSchemaGetPayload<T>>>

    /**
     * Create a AccountSchema.
     * @param {AccountSchemaCreateArgs} args - Arguments to create a AccountSchema.
     * @example
     * // Create one AccountSchema
     * const AccountSchema = await prisma.accountSchema.create({
     *   data: {
     *     // ... data to create a AccountSchema
     *   }
     * })
     * 
    **/
    create<T extends AccountSchemaCreateArgs>(
      args: SelectSubset<T, AccountSchemaCreateArgs>
    ): Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>>

    /**
     * Create many AccountSchemas.
     *     @param {AccountSchemaCreateManyArgs} args - Arguments to create many AccountSchemas.
     *     @example
     *     // Create many AccountSchemas
     *     const accountSchema = await prisma.accountSchema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountSchemaCreateManyArgs>(
      args?: SelectSubset<T, AccountSchemaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountSchema.
     * @param {AccountSchemaDeleteArgs} args - Arguments to delete one AccountSchema.
     * @example
     * // Delete one AccountSchema
     * const AccountSchema = await prisma.accountSchema.delete({
     *   where: {
     *     // ... filter to delete one AccountSchema
     *   }
     * })
     * 
    **/
    delete<T extends AccountSchemaDeleteArgs>(
      args: SelectSubset<T, AccountSchemaDeleteArgs>
    ): Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>>

    /**
     * Update one AccountSchema.
     * @param {AccountSchemaUpdateArgs} args - Arguments to update one AccountSchema.
     * @example
     * // Update one AccountSchema
     * const accountSchema = await prisma.accountSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountSchemaUpdateArgs>(
      args: SelectSubset<T, AccountSchemaUpdateArgs>
    ): Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>>

    /**
     * Delete zero or more AccountSchemas.
     * @param {AccountSchemaDeleteManyArgs} args - Arguments to filter AccountSchemas to delete.
     * @example
     * // Delete a few AccountSchemas
     * const { count } = await prisma.accountSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountSchemaDeleteManyArgs>(
      args?: SelectSubset<T, AccountSchemaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountSchemas
     * const accountSchema = await prisma.accountSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountSchemaUpdateManyArgs>(
      args: SelectSubset<T, AccountSchemaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountSchema.
     * @param {AccountSchemaUpsertArgs} args - Arguments to update or create a AccountSchema.
     * @example
     * // Update or create a AccountSchema
     * const accountSchema = await prisma.accountSchema.upsert({
     *   create: {
     *     // ... data to create a AccountSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountSchema we want to update
     *   }
     * })
    **/
    upsert<T extends AccountSchemaUpsertArgs>(
      args: SelectSubset<T, AccountSchemaUpsertArgs>
    ): Prisma__AccountSchemaClient<AccountSchemaGetPayload<T>>

    /**
     * Count the number of AccountSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSchemaCountArgs} args - Arguments to filter AccountSchemas to count.
     * @example
     * // Count the number of AccountSchemas
     * const count = await prisma.accountSchema.count({
     *   where: {
     *     // ... the filter for the AccountSchemas we want to count
     *   }
     * })
    **/
    count<T extends AccountSchemaCountArgs>(
      args?: Subset<T, AccountSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountSchemaAggregateArgs>(args: Subset<T, AccountSchemaAggregateArgs>): Prisma.PrismaPromise<GetAccountSchemaAggregateType<T>>

    /**
     * Group by AccountSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountSchemaGroupByArgs['orderBy'] }
        : { orderBy?: AccountSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountSchemaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    accounts<T extends AccountSchema$accountsArgs= {}>(args?: Subset<T, AccountSchema$accountsArgs>): Prisma.PrismaPromise<Array<AccountGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AccountSchema base type for findUnique actions
   */
  export type AccountSchemaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * Filter, which AccountSchema to fetch.
     */
    where: AccountSchemaWhereUniqueInput
  }

  /**
   * AccountSchema findUnique
   */
  export interface AccountSchemaFindUniqueArgs extends AccountSchemaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AccountSchema findUniqueOrThrow
   */
  export type AccountSchemaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * Filter, which AccountSchema to fetch.
     */
    where: AccountSchemaWhereUniqueInput
  }


  /**
   * AccountSchema base type for findFirst actions
   */
  export type AccountSchemaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * Filter, which AccountSchema to fetch.
     */
    where?: AccountSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSchemas to fetch.
     */
    orderBy?: Enumerable<AccountSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSchemas.
     */
    cursor?: AccountSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSchemas.
     */
    distinct?: Enumerable<AccountSchemaScalarFieldEnum>
  }

  /**
   * AccountSchema findFirst
   */
  export interface AccountSchemaFindFirstArgs extends AccountSchemaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AccountSchema findFirstOrThrow
   */
  export type AccountSchemaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * Filter, which AccountSchema to fetch.
     */
    where?: AccountSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSchemas to fetch.
     */
    orderBy?: Enumerable<AccountSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountSchemas.
     */
    cursor?: AccountSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountSchemas.
     */
    distinct?: Enumerable<AccountSchemaScalarFieldEnum>
  }


  /**
   * AccountSchema findMany
   */
  export type AccountSchemaFindManyArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * Filter, which AccountSchemas to fetch.
     */
    where?: AccountSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountSchemas to fetch.
     */
    orderBy?: Enumerable<AccountSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountSchemas.
     */
    cursor?: AccountSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountSchemas.
     */
    skip?: number
    distinct?: Enumerable<AccountSchemaScalarFieldEnum>
  }


  /**
   * AccountSchema create
   */
  export type AccountSchemaCreateArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * The data needed to create a AccountSchema.
     */
    data: XOR<AccountSchemaCreateInput, AccountSchemaUncheckedCreateInput>
  }


  /**
   * AccountSchema createMany
   */
  export type AccountSchemaCreateManyArgs = {
    /**
     * The data used to create many AccountSchemas.
     */
    data: Enumerable<AccountSchemaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AccountSchema update
   */
  export type AccountSchemaUpdateArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * The data needed to update a AccountSchema.
     */
    data: XOR<AccountSchemaUpdateInput, AccountSchemaUncheckedUpdateInput>
    /**
     * Choose, which AccountSchema to update.
     */
    where: AccountSchemaWhereUniqueInput
  }


  /**
   * AccountSchema updateMany
   */
  export type AccountSchemaUpdateManyArgs = {
    /**
     * The data used to update AccountSchemas.
     */
    data: XOR<AccountSchemaUpdateManyMutationInput, AccountSchemaUncheckedUpdateManyInput>
    /**
     * Filter which AccountSchemas to update
     */
    where?: AccountSchemaWhereInput
  }


  /**
   * AccountSchema upsert
   */
  export type AccountSchemaUpsertArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * The filter to search for the AccountSchema to update in case it exists.
     */
    where: AccountSchemaWhereUniqueInput
    /**
     * In case the AccountSchema found by the `where` argument doesn't exist, create a new AccountSchema with this data.
     */
    create: XOR<AccountSchemaCreateInput, AccountSchemaUncheckedCreateInput>
    /**
     * In case the AccountSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountSchemaUpdateInput, AccountSchemaUncheckedUpdateInput>
  }


  /**
   * AccountSchema delete
   */
  export type AccountSchemaDeleteArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
    /**
     * Filter which AccountSchema to delete.
     */
    where: AccountSchemaWhereUniqueInput
  }


  /**
   * AccountSchema deleteMany
   */
  export type AccountSchemaDeleteManyArgs = {
    /**
     * Filter which AccountSchemas to delete
     */
    where?: AccountSchemaWhereInput
  }


  /**
   * AccountSchema.accounts
   */
  export type AccountSchema$accountsArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * AccountSchema without action
   */
  export type AccountSchemaArgs = {
    /**
     * Select specific fields to fetch from the AccountSchema
     */
    select?: AccountSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountSchemaInclude | null
  }



  /**
   * Model Account
   */


  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type AccountSumAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type AccountMaxAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    schemaId: number
    data: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type AccountSumAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    schemaId?: true
    data?: true
    _all?: true
  }

  export type AccountAggregateArgs = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs = {
    where?: AccountWhereInput
    orderBy?: Enumerable<AccountOrderByWithAggregationInput>
    by: AccountScalarFieldEnum[]
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }


  export type AccountGroupByOutputType = {
    id: number
    schemaId: number
    data: JsonValue
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect = {
    id?: boolean
    schemaId?: boolean
    data?: boolean
    schema?: boolean | AccountSchemaArgs
    workspaceAccounts?: boolean | Account$workspaceAccountsArgs
    accountChannels?: boolean | Account$accountChannelsArgs
    _count?: boolean | AccountCountOutputTypeArgs
  }


  export type AccountInclude = {
    schema?: boolean | AccountSchemaArgs
    workspaceAccounts?: boolean | Account$workspaceAccountsArgs
    accountChannels?: boolean | Account$accountChannelsArgs
    _count?: boolean | AccountCountOutputTypeArgs
  }

  export type AccountGetPayload<S extends boolean | null | undefined | AccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Account :
    S extends undefined ? never :
    S extends { include: any } & (AccountArgs | AccountFindManyArgs)
    ? Account  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'schema' ? AccountSchemaGetPayload<S['include'][P]> :
        P extends 'workspaceAccounts' ? Array < WorkspaceAccountGetPayload<S['include'][P]>>  :
        P extends 'accountChannels' ? Array < AccountChannelGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountArgs | AccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'schema' ? AccountSchemaGetPayload<S['select'][P]> :
        P extends 'workspaceAccounts' ? Array < WorkspaceAccountGetPayload<S['select'][P]>>  :
        P extends 'accountChannels' ? Array < AccountChannelGetPayload<S['select'][P]>>  :
        P extends '_count' ? AccountCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Account ? Account[P] : never
  } 
      : Account


  type AccountCountArgs = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Account'> extends True ? Prisma__AccountClient<AccountGetPayload<T>> : Prisma__AccountClient<AccountGetPayload<T> | null, null>

    /**
     * Find the first Account that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs>(
      args?: SelectSubset<T, AccountFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccountGetPayload<T>>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs>(
      args: SelectSubset<T, AccountCreateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs>(
      args?: SelectSubset<T, AccountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs>(
      args: SelectSubset<T, AccountDeleteArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs>(
      args: SelectSubset<T, AccountUpdateArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs>(
      args?: SelectSubset<T, AccountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs>(
      args: SelectSubset<T, AccountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs>(
      args: SelectSubset<T, AccountUpsertArgs>
    ): Prisma__AccountClient<AccountGetPayload<T>>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    schema<T extends AccountSchemaArgs= {}>(args?: Subset<T, AccountSchemaArgs>): Prisma__AccountSchemaClient<AccountSchemaGetPayload<T> | Null>;

    workspaceAccounts<T extends Account$workspaceAccountsArgs= {}>(args?: Subset<T, Account$workspaceAccountsArgs>): Prisma.PrismaPromise<Array<WorkspaceAccountGetPayload<T>>| Null>;

    accountChannels<T extends Account$accountChannelsArgs= {}>(args?: Subset<T, Account$accountChannelsArgs>): Prisma.PrismaPromise<Array<AccountChannelGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Account base type for findUnique actions
   */
  export type AccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUnique
   */
  export interface AccountFindUniqueArgs extends AccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account base type for findFirst actions
   */
  export type AccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }

  /**
   * Account findFirst
   */
  export interface AccountFindFirstArgs extends AccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: Enumerable<AccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: Enumerable<AccountScalarFieldEnum>
  }


  /**
   * Account create
   */
  export type AccountCreateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs = {
    /**
     * The data used to create many Accounts.
     */
    data: Enumerable<AccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account.workspaceAccounts
   */
  export type Account$workspaceAccountsArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    where?: WorkspaceAccountWhereInput
    orderBy?: Enumerable<WorkspaceAccountOrderByWithRelationInput>
    cursor?: WorkspaceAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<WorkspaceAccountScalarFieldEnum>
  }


  /**
   * Account.accountChannels
   */
  export type Account$accountChannelsArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    where?: AccountChannelWhereInput
    orderBy?: Enumerable<AccountChannelOrderByWithRelationInput>
    cursor?: AccountChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountChannelScalarFieldEnum>
  }


  /**
   * Account without action
   */
  export type AccountArgs = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude | null
  }



  /**
   * Model WorkspaceAccount
   */


  export type AggregateWorkspaceAccount = {
    _count: WorkspaceAccountCountAggregateOutputType | null
    _avg: WorkspaceAccountAvgAggregateOutputType | null
    _sum: WorkspaceAccountSumAggregateOutputType | null
    _min: WorkspaceAccountMinAggregateOutputType | null
    _max: WorkspaceAccountMaxAggregateOutputType | null
  }

  export type WorkspaceAccountAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    workspaceId: number | null
  }

  export type WorkspaceAccountSumAggregateOutputType = {
    id: number | null
    accountId: number | null
    workspaceId: number | null
  }

  export type WorkspaceAccountMinAggregateOutputType = {
    id: number | null
    accountId: number | null
    workspaceId: number | null
    role: string | null
  }

  export type WorkspaceAccountMaxAggregateOutputType = {
    id: number | null
    accountId: number | null
    workspaceId: number | null
    role: string | null
  }

  export type WorkspaceAccountCountAggregateOutputType = {
    id: number
    accountId: number
    workspaceId: number
    role: number
    _all: number
  }


  export type WorkspaceAccountAvgAggregateInputType = {
    id?: true
    accountId?: true
    workspaceId?: true
  }

  export type WorkspaceAccountSumAggregateInputType = {
    id?: true
    accountId?: true
    workspaceId?: true
  }

  export type WorkspaceAccountMinAggregateInputType = {
    id?: true
    accountId?: true
    workspaceId?: true
    role?: true
  }

  export type WorkspaceAccountMaxAggregateInputType = {
    id?: true
    accountId?: true
    workspaceId?: true
    role?: true
  }

  export type WorkspaceAccountCountAggregateInputType = {
    id?: true
    accountId?: true
    workspaceId?: true
    role?: true
    _all?: true
  }

  export type WorkspaceAccountAggregateArgs = {
    /**
     * Filter which WorkspaceAccount to aggregate.
     */
    where?: WorkspaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceAccounts to fetch.
     */
    orderBy?: Enumerable<WorkspaceAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WorkspaceAccounts
    **/
    _count?: true | WorkspaceAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorkspaceAccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorkspaceAccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceAccountMaxAggregateInputType
  }

  export type GetWorkspaceAccountAggregateType<T extends WorkspaceAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspaceAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspaceAccount[P]>
      : GetScalarType<T[P], AggregateWorkspaceAccount[P]>
  }




  export type WorkspaceAccountGroupByArgs = {
    where?: WorkspaceAccountWhereInput
    orderBy?: Enumerable<WorkspaceAccountOrderByWithAggregationInput>
    by: WorkspaceAccountScalarFieldEnum[]
    having?: WorkspaceAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceAccountCountAggregateInputType | true
    _avg?: WorkspaceAccountAvgAggregateInputType
    _sum?: WorkspaceAccountSumAggregateInputType
    _min?: WorkspaceAccountMinAggregateInputType
    _max?: WorkspaceAccountMaxAggregateInputType
  }


  export type WorkspaceAccountGroupByOutputType = {
    id: number
    accountId: number
    workspaceId: number
    role: string
    _count: WorkspaceAccountCountAggregateOutputType | null
    _avg: WorkspaceAccountAvgAggregateOutputType | null
    _sum: WorkspaceAccountSumAggregateOutputType | null
    _min: WorkspaceAccountMinAggregateOutputType | null
    _max: WorkspaceAccountMaxAggregateOutputType | null
  }

  type GetWorkspaceAccountGroupByPayload<T extends WorkspaceAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<WorkspaceAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceAccountGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceAccountGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceAccountSelect = {
    id?: boolean
    accountId?: boolean
    workspaceId?: boolean
    role?: boolean
    workspace?: boolean | WorkspaceArgs
    account?: boolean | AccountArgs
  }


  export type WorkspaceAccountInclude = {
    workspace?: boolean | WorkspaceArgs
    account?: boolean | AccountArgs
  }

  export type WorkspaceAccountGetPayload<S extends boolean | null | undefined | WorkspaceAccountArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? WorkspaceAccount :
    S extends undefined ? never :
    S extends { include: any } & (WorkspaceAccountArgs | WorkspaceAccountFindManyArgs)
    ? WorkspaceAccount  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['include'][P]> :
        P extends 'account' ? AccountGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (WorkspaceAccountArgs | WorkspaceAccountFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['select'][P]> :
        P extends 'account' ? AccountGetPayload<S['select'][P]> :  P extends keyof WorkspaceAccount ? WorkspaceAccount[P] : never
  } 
      : WorkspaceAccount


  type WorkspaceAccountCountArgs = 
    Omit<WorkspaceAccountFindManyArgs, 'select' | 'include'> & {
      select?: WorkspaceAccountCountAggregateInputType | true
    }

  export interface WorkspaceAccountDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one WorkspaceAccount that matches the filter.
     * @param {WorkspaceAccountFindUniqueArgs} args - Arguments to find a WorkspaceAccount
     * @example
     * // Get one WorkspaceAccount
     * const workspaceAccount = await prisma.workspaceAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends WorkspaceAccountFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, WorkspaceAccountFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'WorkspaceAccount'> extends True ? Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>> : Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T> | null, null>

    /**
     * Find one WorkspaceAccount that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {WorkspaceAccountFindUniqueOrThrowArgs} args - Arguments to find a WorkspaceAccount
     * @example
     * // Get one WorkspaceAccount
     * const workspaceAccount = await prisma.workspaceAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends WorkspaceAccountFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceAccountFindUniqueOrThrowArgs>
    ): Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>>

    /**
     * Find the first WorkspaceAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAccountFindFirstArgs} args - Arguments to find a WorkspaceAccount
     * @example
     * // Get one WorkspaceAccount
     * const workspaceAccount = await prisma.workspaceAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends WorkspaceAccountFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, WorkspaceAccountFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'WorkspaceAccount'> extends True ? Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>> : Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T> | null, null>

    /**
     * Find the first WorkspaceAccount that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAccountFindFirstOrThrowArgs} args - Arguments to find a WorkspaceAccount
     * @example
     * // Get one WorkspaceAccount
     * const workspaceAccount = await prisma.workspaceAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends WorkspaceAccountFindFirstOrThrowArgs>(
      args?: SelectSubset<T, WorkspaceAccountFindFirstOrThrowArgs>
    ): Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>>

    /**
     * Find zero or more WorkspaceAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WorkspaceAccounts
     * const workspaceAccounts = await prisma.workspaceAccount.findMany()
     * 
     * // Get first 10 WorkspaceAccounts
     * const workspaceAccounts = await prisma.workspaceAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceAccountWithIdOnly = await prisma.workspaceAccount.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends WorkspaceAccountFindManyArgs>(
      args?: SelectSubset<T, WorkspaceAccountFindManyArgs>
    ): Prisma.PrismaPromise<Array<WorkspaceAccountGetPayload<T>>>

    /**
     * Create a WorkspaceAccount.
     * @param {WorkspaceAccountCreateArgs} args - Arguments to create a WorkspaceAccount.
     * @example
     * // Create one WorkspaceAccount
     * const WorkspaceAccount = await prisma.workspaceAccount.create({
     *   data: {
     *     // ... data to create a WorkspaceAccount
     *   }
     * })
     * 
    **/
    create<T extends WorkspaceAccountCreateArgs>(
      args: SelectSubset<T, WorkspaceAccountCreateArgs>
    ): Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>>

    /**
     * Create many WorkspaceAccounts.
     *     @param {WorkspaceAccountCreateManyArgs} args - Arguments to create many WorkspaceAccounts.
     *     @example
     *     // Create many WorkspaceAccounts
     *     const workspaceAccount = await prisma.workspaceAccount.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends WorkspaceAccountCreateManyArgs>(
      args?: SelectSubset<T, WorkspaceAccountCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a WorkspaceAccount.
     * @param {WorkspaceAccountDeleteArgs} args - Arguments to delete one WorkspaceAccount.
     * @example
     * // Delete one WorkspaceAccount
     * const WorkspaceAccount = await prisma.workspaceAccount.delete({
     *   where: {
     *     // ... filter to delete one WorkspaceAccount
     *   }
     * })
     * 
    **/
    delete<T extends WorkspaceAccountDeleteArgs>(
      args: SelectSubset<T, WorkspaceAccountDeleteArgs>
    ): Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>>

    /**
     * Update one WorkspaceAccount.
     * @param {WorkspaceAccountUpdateArgs} args - Arguments to update one WorkspaceAccount.
     * @example
     * // Update one WorkspaceAccount
     * const workspaceAccount = await prisma.workspaceAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends WorkspaceAccountUpdateArgs>(
      args: SelectSubset<T, WorkspaceAccountUpdateArgs>
    ): Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>>

    /**
     * Delete zero or more WorkspaceAccounts.
     * @param {WorkspaceAccountDeleteManyArgs} args - Arguments to filter WorkspaceAccounts to delete.
     * @example
     * // Delete a few WorkspaceAccounts
     * const { count } = await prisma.workspaceAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends WorkspaceAccountDeleteManyArgs>(
      args?: SelectSubset<T, WorkspaceAccountDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WorkspaceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WorkspaceAccounts
     * const workspaceAccount = await prisma.workspaceAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends WorkspaceAccountUpdateManyArgs>(
      args: SelectSubset<T, WorkspaceAccountUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WorkspaceAccount.
     * @param {WorkspaceAccountUpsertArgs} args - Arguments to update or create a WorkspaceAccount.
     * @example
     * // Update or create a WorkspaceAccount
     * const workspaceAccount = await prisma.workspaceAccount.upsert({
     *   create: {
     *     // ... data to create a WorkspaceAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WorkspaceAccount we want to update
     *   }
     * })
    **/
    upsert<T extends WorkspaceAccountUpsertArgs>(
      args: SelectSubset<T, WorkspaceAccountUpsertArgs>
    ): Prisma__WorkspaceAccountClient<WorkspaceAccountGetPayload<T>>

    /**
     * Count the number of WorkspaceAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAccountCountArgs} args - Arguments to filter WorkspaceAccounts to count.
     * @example
     * // Count the number of WorkspaceAccounts
     * const count = await prisma.workspaceAccount.count({
     *   where: {
     *     // ... the filter for the WorkspaceAccounts we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceAccountCountArgs>(
      args?: Subset<T, WorkspaceAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WorkspaceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WorkspaceAccountAggregateArgs>(args: Subset<T, WorkspaceAccountAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAccountAggregateType<T>>

    /**
     * Group by WorkspaceAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WorkspaceAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceAccountGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WorkspaceAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for WorkspaceAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__WorkspaceAccountClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    account<T extends AccountArgs= {}>(args?: Subset<T, AccountArgs>): Prisma__AccountClient<AccountGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * WorkspaceAccount base type for findUnique actions
   */
  export type WorkspaceAccountFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * Filter, which WorkspaceAccount to fetch.
     */
    where: WorkspaceAccountWhereUniqueInput
  }

  /**
   * WorkspaceAccount findUnique
   */
  export interface WorkspaceAccountFindUniqueArgs extends WorkspaceAccountFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceAccount findUniqueOrThrow
   */
  export type WorkspaceAccountFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * Filter, which WorkspaceAccount to fetch.
     */
    where: WorkspaceAccountWhereUniqueInput
  }


  /**
   * WorkspaceAccount base type for findFirst actions
   */
  export type WorkspaceAccountFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * Filter, which WorkspaceAccount to fetch.
     */
    where?: WorkspaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceAccounts to fetch.
     */
    orderBy?: Enumerable<WorkspaceAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceAccounts.
     */
    cursor?: WorkspaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceAccounts.
     */
    distinct?: Enumerable<WorkspaceAccountScalarFieldEnum>
  }

  /**
   * WorkspaceAccount findFirst
   */
  export interface WorkspaceAccountFindFirstArgs extends WorkspaceAccountFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * WorkspaceAccount findFirstOrThrow
   */
  export type WorkspaceAccountFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * Filter, which WorkspaceAccount to fetch.
     */
    where?: WorkspaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceAccounts to fetch.
     */
    orderBy?: Enumerable<WorkspaceAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WorkspaceAccounts.
     */
    cursor?: WorkspaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WorkspaceAccounts.
     */
    distinct?: Enumerable<WorkspaceAccountScalarFieldEnum>
  }


  /**
   * WorkspaceAccount findMany
   */
  export type WorkspaceAccountFindManyArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * Filter, which WorkspaceAccounts to fetch.
     */
    where?: WorkspaceAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WorkspaceAccounts to fetch.
     */
    orderBy?: Enumerable<WorkspaceAccountOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WorkspaceAccounts.
     */
    cursor?: WorkspaceAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WorkspaceAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WorkspaceAccounts.
     */
    skip?: number
    distinct?: Enumerable<WorkspaceAccountScalarFieldEnum>
  }


  /**
   * WorkspaceAccount create
   */
  export type WorkspaceAccountCreateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * The data needed to create a WorkspaceAccount.
     */
    data: XOR<WorkspaceAccountCreateInput, WorkspaceAccountUncheckedCreateInput>
  }


  /**
   * WorkspaceAccount createMany
   */
  export type WorkspaceAccountCreateManyArgs = {
    /**
     * The data used to create many WorkspaceAccounts.
     */
    data: Enumerable<WorkspaceAccountCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * WorkspaceAccount update
   */
  export type WorkspaceAccountUpdateArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * The data needed to update a WorkspaceAccount.
     */
    data: XOR<WorkspaceAccountUpdateInput, WorkspaceAccountUncheckedUpdateInput>
    /**
     * Choose, which WorkspaceAccount to update.
     */
    where: WorkspaceAccountWhereUniqueInput
  }


  /**
   * WorkspaceAccount updateMany
   */
  export type WorkspaceAccountUpdateManyArgs = {
    /**
     * The data used to update WorkspaceAccounts.
     */
    data: XOR<WorkspaceAccountUpdateManyMutationInput, WorkspaceAccountUncheckedUpdateManyInput>
    /**
     * Filter which WorkspaceAccounts to update
     */
    where?: WorkspaceAccountWhereInput
  }


  /**
   * WorkspaceAccount upsert
   */
  export type WorkspaceAccountUpsertArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * The filter to search for the WorkspaceAccount to update in case it exists.
     */
    where: WorkspaceAccountWhereUniqueInput
    /**
     * In case the WorkspaceAccount found by the `where` argument doesn't exist, create a new WorkspaceAccount with this data.
     */
    create: XOR<WorkspaceAccountCreateInput, WorkspaceAccountUncheckedCreateInput>
    /**
     * In case the WorkspaceAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceAccountUpdateInput, WorkspaceAccountUncheckedUpdateInput>
  }


  /**
   * WorkspaceAccount delete
   */
  export type WorkspaceAccountDeleteArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
    /**
     * Filter which WorkspaceAccount to delete.
     */
    where: WorkspaceAccountWhereUniqueInput
  }


  /**
   * WorkspaceAccount deleteMany
   */
  export type WorkspaceAccountDeleteManyArgs = {
    /**
     * Filter which WorkspaceAccounts to delete
     */
    where?: WorkspaceAccountWhereInput
  }


  /**
   * WorkspaceAccount without action
   */
  export type WorkspaceAccountArgs = {
    /**
     * Select specific fields to fetch from the WorkspaceAccount
     */
    select?: WorkspaceAccountSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: WorkspaceAccountInclude | null
  }



  /**
   * Model DataRecordSchema
   */


  export type AggregateDataRecordSchema = {
    _count: DataRecordSchemaCountAggregateOutputType | null
    _avg: DataRecordSchemaAvgAggregateOutputType | null
    _sum: DataRecordSchemaSumAggregateOutputType | null
    _min: DataRecordSchemaMinAggregateOutputType | null
    _max: DataRecordSchemaMaxAggregateOutputType | null
  }

  export type DataRecordSchemaAvgAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type DataRecordSchemaSumAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type DataRecordSchemaMinAggregateOutputType = {
    id: number | null
    name: string | null
    workspaceId: number | null
  }

  export type DataRecordSchemaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    workspaceId: number | null
  }

  export type DataRecordSchemaCountAggregateOutputType = {
    id: number
    name: number
    schema: number
    workspaceId: number
    _all: number
  }


  export type DataRecordSchemaAvgAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type DataRecordSchemaSumAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type DataRecordSchemaMinAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
  }

  export type DataRecordSchemaMaxAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
  }

  export type DataRecordSchemaCountAggregateInputType = {
    id?: true
    name?: true
    schema?: true
    workspaceId?: true
    _all?: true
  }

  export type DataRecordSchemaAggregateArgs = {
    /**
     * Filter which DataRecordSchema to aggregate.
     */
    where?: DataRecordSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecordSchemas to fetch.
     */
    orderBy?: Enumerable<DataRecordSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataRecordSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecordSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecordSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataRecordSchemas
    **/
    _count?: true | DataRecordSchemaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataRecordSchemaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataRecordSchemaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataRecordSchemaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataRecordSchemaMaxAggregateInputType
  }

  export type GetDataRecordSchemaAggregateType<T extends DataRecordSchemaAggregateArgs> = {
        [P in keyof T & keyof AggregateDataRecordSchema]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataRecordSchema[P]>
      : GetScalarType<T[P], AggregateDataRecordSchema[P]>
  }




  export type DataRecordSchemaGroupByArgs = {
    where?: DataRecordSchemaWhereInput
    orderBy?: Enumerable<DataRecordSchemaOrderByWithAggregationInput>
    by: DataRecordSchemaScalarFieldEnum[]
    having?: DataRecordSchemaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataRecordSchemaCountAggregateInputType | true
    _avg?: DataRecordSchemaAvgAggregateInputType
    _sum?: DataRecordSchemaSumAggregateInputType
    _min?: DataRecordSchemaMinAggregateInputType
    _max?: DataRecordSchemaMaxAggregateInputType
  }


  export type DataRecordSchemaGroupByOutputType = {
    id: number
    name: string
    schema: JsonValue
    workspaceId: number
    _count: DataRecordSchemaCountAggregateOutputType | null
    _avg: DataRecordSchemaAvgAggregateOutputType | null
    _sum: DataRecordSchemaSumAggregateOutputType | null
    _min: DataRecordSchemaMinAggregateOutputType | null
    _max: DataRecordSchemaMaxAggregateOutputType | null
  }

  type GetDataRecordSchemaGroupByPayload<T extends DataRecordSchemaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataRecordSchemaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataRecordSchemaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataRecordSchemaGroupByOutputType[P]>
            : GetScalarType<T[P], DataRecordSchemaGroupByOutputType[P]>
        }
      >
    >


  export type DataRecordSchemaSelect = {
    id?: boolean
    name?: boolean
    schema?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceArgs
    dataRecords?: boolean | DataRecordSchema$dataRecordsArgs
    _count?: boolean | DataRecordSchemaCountOutputTypeArgs
  }


  export type DataRecordSchemaInclude = {
    workspace?: boolean | WorkspaceArgs
    dataRecords?: boolean | DataRecordSchema$dataRecordsArgs
    _count?: boolean | DataRecordSchemaCountOutputTypeArgs
  }

  export type DataRecordSchemaGetPayload<S extends boolean | null | undefined | DataRecordSchemaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DataRecordSchema :
    S extends undefined ? never :
    S extends { include: any } & (DataRecordSchemaArgs | DataRecordSchemaFindManyArgs)
    ? DataRecordSchema  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['include'][P]> :
        P extends 'dataRecords' ? Array < DataRecordGetPayload<S['include'][P]>>  :
        P extends '_count' ? DataRecordSchemaCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DataRecordSchemaArgs | DataRecordSchemaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['select'][P]> :
        P extends 'dataRecords' ? Array < DataRecordGetPayload<S['select'][P]>>  :
        P extends '_count' ? DataRecordSchemaCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof DataRecordSchema ? DataRecordSchema[P] : never
  } 
      : DataRecordSchema


  type DataRecordSchemaCountArgs = 
    Omit<DataRecordSchemaFindManyArgs, 'select' | 'include'> & {
      select?: DataRecordSchemaCountAggregateInputType | true
    }

  export interface DataRecordSchemaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataRecordSchema that matches the filter.
     * @param {DataRecordSchemaFindUniqueArgs} args - Arguments to find a DataRecordSchema
     * @example
     * // Get one DataRecordSchema
     * const dataRecordSchema = await prisma.dataRecordSchema.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DataRecordSchemaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DataRecordSchemaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DataRecordSchema'> extends True ? Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>> : Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T> | null, null>

    /**
     * Find one DataRecordSchema that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DataRecordSchemaFindUniqueOrThrowArgs} args - Arguments to find a DataRecordSchema
     * @example
     * // Get one DataRecordSchema
     * const dataRecordSchema = await prisma.dataRecordSchema.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DataRecordSchemaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DataRecordSchemaFindUniqueOrThrowArgs>
    ): Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>>

    /**
     * Find the first DataRecordSchema that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordSchemaFindFirstArgs} args - Arguments to find a DataRecordSchema
     * @example
     * // Get one DataRecordSchema
     * const dataRecordSchema = await prisma.dataRecordSchema.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DataRecordSchemaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DataRecordSchemaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DataRecordSchema'> extends True ? Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>> : Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T> | null, null>

    /**
     * Find the first DataRecordSchema that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordSchemaFindFirstOrThrowArgs} args - Arguments to find a DataRecordSchema
     * @example
     * // Get one DataRecordSchema
     * const dataRecordSchema = await prisma.dataRecordSchema.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DataRecordSchemaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DataRecordSchemaFindFirstOrThrowArgs>
    ): Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>>

    /**
     * Find zero or more DataRecordSchemas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordSchemaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataRecordSchemas
     * const dataRecordSchemas = await prisma.dataRecordSchema.findMany()
     * 
     * // Get first 10 DataRecordSchemas
     * const dataRecordSchemas = await prisma.dataRecordSchema.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataRecordSchemaWithIdOnly = await prisma.dataRecordSchema.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DataRecordSchemaFindManyArgs>(
      args?: SelectSubset<T, DataRecordSchemaFindManyArgs>
    ): Prisma.PrismaPromise<Array<DataRecordSchemaGetPayload<T>>>

    /**
     * Create a DataRecordSchema.
     * @param {DataRecordSchemaCreateArgs} args - Arguments to create a DataRecordSchema.
     * @example
     * // Create one DataRecordSchema
     * const DataRecordSchema = await prisma.dataRecordSchema.create({
     *   data: {
     *     // ... data to create a DataRecordSchema
     *   }
     * })
     * 
    **/
    create<T extends DataRecordSchemaCreateArgs>(
      args: SelectSubset<T, DataRecordSchemaCreateArgs>
    ): Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>>

    /**
     * Create many DataRecordSchemas.
     *     @param {DataRecordSchemaCreateManyArgs} args - Arguments to create many DataRecordSchemas.
     *     @example
     *     // Create many DataRecordSchemas
     *     const dataRecordSchema = await prisma.dataRecordSchema.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DataRecordSchemaCreateManyArgs>(
      args?: SelectSubset<T, DataRecordSchemaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataRecordSchema.
     * @param {DataRecordSchemaDeleteArgs} args - Arguments to delete one DataRecordSchema.
     * @example
     * // Delete one DataRecordSchema
     * const DataRecordSchema = await prisma.dataRecordSchema.delete({
     *   where: {
     *     // ... filter to delete one DataRecordSchema
     *   }
     * })
     * 
    **/
    delete<T extends DataRecordSchemaDeleteArgs>(
      args: SelectSubset<T, DataRecordSchemaDeleteArgs>
    ): Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>>

    /**
     * Update one DataRecordSchema.
     * @param {DataRecordSchemaUpdateArgs} args - Arguments to update one DataRecordSchema.
     * @example
     * // Update one DataRecordSchema
     * const dataRecordSchema = await prisma.dataRecordSchema.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DataRecordSchemaUpdateArgs>(
      args: SelectSubset<T, DataRecordSchemaUpdateArgs>
    ): Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>>

    /**
     * Delete zero or more DataRecordSchemas.
     * @param {DataRecordSchemaDeleteManyArgs} args - Arguments to filter DataRecordSchemas to delete.
     * @example
     * // Delete a few DataRecordSchemas
     * const { count } = await prisma.dataRecordSchema.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DataRecordSchemaDeleteManyArgs>(
      args?: SelectSubset<T, DataRecordSchemaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataRecordSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordSchemaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataRecordSchemas
     * const dataRecordSchema = await prisma.dataRecordSchema.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DataRecordSchemaUpdateManyArgs>(
      args: SelectSubset<T, DataRecordSchemaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataRecordSchema.
     * @param {DataRecordSchemaUpsertArgs} args - Arguments to update or create a DataRecordSchema.
     * @example
     * // Update or create a DataRecordSchema
     * const dataRecordSchema = await prisma.dataRecordSchema.upsert({
     *   create: {
     *     // ... data to create a DataRecordSchema
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataRecordSchema we want to update
     *   }
     * })
    **/
    upsert<T extends DataRecordSchemaUpsertArgs>(
      args: SelectSubset<T, DataRecordSchemaUpsertArgs>
    ): Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T>>

    /**
     * Count the number of DataRecordSchemas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordSchemaCountArgs} args - Arguments to filter DataRecordSchemas to count.
     * @example
     * // Count the number of DataRecordSchemas
     * const count = await prisma.dataRecordSchema.count({
     *   where: {
     *     // ... the filter for the DataRecordSchemas we want to count
     *   }
     * })
    **/
    count<T extends DataRecordSchemaCountArgs>(
      args?: Subset<T, DataRecordSchemaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataRecordSchemaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataRecordSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordSchemaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataRecordSchemaAggregateArgs>(args: Subset<T, DataRecordSchemaAggregateArgs>): Prisma.PrismaPromise<GetDataRecordSchemaAggregateType<T>>

    /**
     * Group by DataRecordSchema.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordSchemaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataRecordSchemaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataRecordSchemaGroupByArgs['orderBy'] }
        : { orderBy?: DataRecordSchemaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataRecordSchemaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataRecordSchemaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DataRecordSchema.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DataRecordSchemaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    dataRecords<T extends DataRecordSchema$dataRecordsArgs= {}>(args?: Subset<T, DataRecordSchema$dataRecordsArgs>): Prisma.PrismaPromise<Array<DataRecordGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DataRecordSchema base type for findUnique actions
   */
  export type DataRecordSchemaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * Filter, which DataRecordSchema to fetch.
     */
    where: DataRecordSchemaWhereUniqueInput
  }

  /**
   * DataRecordSchema findUnique
   */
  export interface DataRecordSchemaFindUniqueArgs extends DataRecordSchemaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DataRecordSchema findUniqueOrThrow
   */
  export type DataRecordSchemaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * Filter, which DataRecordSchema to fetch.
     */
    where: DataRecordSchemaWhereUniqueInput
  }


  /**
   * DataRecordSchema base type for findFirst actions
   */
  export type DataRecordSchemaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * Filter, which DataRecordSchema to fetch.
     */
    where?: DataRecordSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecordSchemas to fetch.
     */
    orderBy?: Enumerable<DataRecordSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataRecordSchemas.
     */
    cursor?: DataRecordSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecordSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecordSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataRecordSchemas.
     */
    distinct?: Enumerable<DataRecordSchemaScalarFieldEnum>
  }

  /**
   * DataRecordSchema findFirst
   */
  export interface DataRecordSchemaFindFirstArgs extends DataRecordSchemaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DataRecordSchema findFirstOrThrow
   */
  export type DataRecordSchemaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * Filter, which DataRecordSchema to fetch.
     */
    where?: DataRecordSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecordSchemas to fetch.
     */
    orderBy?: Enumerable<DataRecordSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataRecordSchemas.
     */
    cursor?: DataRecordSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecordSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecordSchemas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataRecordSchemas.
     */
    distinct?: Enumerable<DataRecordSchemaScalarFieldEnum>
  }


  /**
   * DataRecordSchema findMany
   */
  export type DataRecordSchemaFindManyArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * Filter, which DataRecordSchemas to fetch.
     */
    where?: DataRecordSchemaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecordSchemas to fetch.
     */
    orderBy?: Enumerable<DataRecordSchemaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataRecordSchemas.
     */
    cursor?: DataRecordSchemaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecordSchemas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecordSchemas.
     */
    skip?: number
    distinct?: Enumerable<DataRecordSchemaScalarFieldEnum>
  }


  /**
   * DataRecordSchema create
   */
  export type DataRecordSchemaCreateArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * The data needed to create a DataRecordSchema.
     */
    data: XOR<DataRecordSchemaCreateInput, DataRecordSchemaUncheckedCreateInput>
  }


  /**
   * DataRecordSchema createMany
   */
  export type DataRecordSchemaCreateManyArgs = {
    /**
     * The data used to create many DataRecordSchemas.
     */
    data: Enumerable<DataRecordSchemaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DataRecordSchema update
   */
  export type DataRecordSchemaUpdateArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * The data needed to update a DataRecordSchema.
     */
    data: XOR<DataRecordSchemaUpdateInput, DataRecordSchemaUncheckedUpdateInput>
    /**
     * Choose, which DataRecordSchema to update.
     */
    where: DataRecordSchemaWhereUniqueInput
  }


  /**
   * DataRecordSchema updateMany
   */
  export type DataRecordSchemaUpdateManyArgs = {
    /**
     * The data used to update DataRecordSchemas.
     */
    data: XOR<DataRecordSchemaUpdateManyMutationInput, DataRecordSchemaUncheckedUpdateManyInput>
    /**
     * Filter which DataRecordSchemas to update
     */
    where?: DataRecordSchemaWhereInput
  }


  /**
   * DataRecordSchema upsert
   */
  export type DataRecordSchemaUpsertArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * The filter to search for the DataRecordSchema to update in case it exists.
     */
    where: DataRecordSchemaWhereUniqueInput
    /**
     * In case the DataRecordSchema found by the `where` argument doesn't exist, create a new DataRecordSchema with this data.
     */
    create: XOR<DataRecordSchemaCreateInput, DataRecordSchemaUncheckedCreateInput>
    /**
     * In case the DataRecordSchema was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataRecordSchemaUpdateInput, DataRecordSchemaUncheckedUpdateInput>
  }


  /**
   * DataRecordSchema delete
   */
  export type DataRecordSchemaDeleteArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
    /**
     * Filter which DataRecordSchema to delete.
     */
    where: DataRecordSchemaWhereUniqueInput
  }


  /**
   * DataRecordSchema deleteMany
   */
  export type DataRecordSchemaDeleteManyArgs = {
    /**
     * Filter which DataRecordSchemas to delete
     */
    where?: DataRecordSchemaWhereInput
  }


  /**
   * DataRecordSchema.dataRecords
   */
  export type DataRecordSchema$dataRecordsArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    where?: DataRecordWhereInput
    orderBy?: Enumerable<DataRecordOrderByWithRelationInput>
    cursor?: DataRecordWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<DataRecordScalarFieldEnum>
  }


  /**
   * DataRecordSchema without action
   */
  export type DataRecordSchemaArgs = {
    /**
     * Select specific fields to fetch from the DataRecordSchema
     */
    select?: DataRecordSchemaSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordSchemaInclude | null
  }



  /**
   * Model DataRecord
   */


  export type AggregateDataRecord = {
    _count: DataRecordCountAggregateOutputType | null
    _avg: DataRecordAvgAggregateOutputType | null
    _sum: DataRecordSumAggregateOutputType | null
    _min: DataRecordMinAggregateOutputType | null
    _max: DataRecordMaxAggregateOutputType | null
  }

  export type DataRecordAvgAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type DataRecordSumAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type DataRecordMinAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type DataRecordMaxAggregateOutputType = {
    id: number | null
    schemaId: number | null
  }

  export type DataRecordCountAggregateOutputType = {
    id: number
    schemaId: number
    data: number
    _all: number
  }


  export type DataRecordAvgAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type DataRecordSumAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type DataRecordMinAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type DataRecordMaxAggregateInputType = {
    id?: true
    schemaId?: true
  }

  export type DataRecordCountAggregateInputType = {
    id?: true
    schemaId?: true
    data?: true
    _all?: true
  }

  export type DataRecordAggregateArgs = {
    /**
     * Filter which DataRecord to aggregate.
     */
    where?: DataRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecords to fetch.
     */
    orderBy?: Enumerable<DataRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DataRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DataRecords
    **/
    _count?: true | DataRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DataRecordAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DataRecordSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DataRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DataRecordMaxAggregateInputType
  }

  export type GetDataRecordAggregateType<T extends DataRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDataRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDataRecord[P]>
      : GetScalarType<T[P], AggregateDataRecord[P]>
  }




  export type DataRecordGroupByArgs = {
    where?: DataRecordWhereInput
    orderBy?: Enumerable<DataRecordOrderByWithAggregationInput>
    by: DataRecordScalarFieldEnum[]
    having?: DataRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DataRecordCountAggregateInputType | true
    _avg?: DataRecordAvgAggregateInputType
    _sum?: DataRecordSumAggregateInputType
    _min?: DataRecordMinAggregateInputType
    _max?: DataRecordMaxAggregateInputType
  }


  export type DataRecordGroupByOutputType = {
    id: number
    schemaId: number
    data: JsonValue
    _count: DataRecordCountAggregateOutputType | null
    _avg: DataRecordAvgAggregateOutputType | null
    _sum: DataRecordSumAggregateOutputType | null
    _min: DataRecordMinAggregateOutputType | null
    _max: DataRecordMaxAggregateOutputType | null
  }

  type GetDataRecordGroupByPayload<T extends DataRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<DataRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DataRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DataRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DataRecordGroupByOutputType[P]>
        }
      >
    >


  export type DataRecordSelect = {
    id?: boolean
    schemaId?: boolean
    data?: boolean
    schema?: boolean | DataRecordSchemaArgs
  }


  export type DataRecordInclude = {
    schema?: boolean | DataRecordSchemaArgs
  }

  export type DataRecordGetPayload<S extends boolean | null | undefined | DataRecordArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? DataRecord :
    S extends undefined ? never :
    S extends { include: any } & (DataRecordArgs | DataRecordFindManyArgs)
    ? DataRecord  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'schema' ? DataRecordSchemaGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (DataRecordArgs | DataRecordFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'schema' ? DataRecordSchemaGetPayload<S['select'][P]> :  P extends keyof DataRecord ? DataRecord[P] : never
  } 
      : DataRecord


  type DataRecordCountArgs = 
    Omit<DataRecordFindManyArgs, 'select' | 'include'> & {
      select?: DataRecordCountAggregateInputType | true
    }

  export interface DataRecordDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one DataRecord that matches the filter.
     * @param {DataRecordFindUniqueArgs} args - Arguments to find a DataRecord
     * @example
     * // Get one DataRecord
     * const dataRecord = await prisma.dataRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends DataRecordFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, DataRecordFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'DataRecord'> extends True ? Prisma__DataRecordClient<DataRecordGetPayload<T>> : Prisma__DataRecordClient<DataRecordGetPayload<T> | null, null>

    /**
     * Find one DataRecord that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {DataRecordFindUniqueOrThrowArgs} args - Arguments to find a DataRecord
     * @example
     * // Get one DataRecord
     * const dataRecord = await prisma.dataRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends DataRecordFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, DataRecordFindUniqueOrThrowArgs>
    ): Prisma__DataRecordClient<DataRecordGetPayload<T>>

    /**
     * Find the first DataRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordFindFirstArgs} args - Arguments to find a DataRecord
     * @example
     * // Get one DataRecord
     * const dataRecord = await prisma.dataRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends DataRecordFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, DataRecordFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'DataRecord'> extends True ? Prisma__DataRecordClient<DataRecordGetPayload<T>> : Prisma__DataRecordClient<DataRecordGetPayload<T> | null, null>

    /**
     * Find the first DataRecord that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordFindFirstOrThrowArgs} args - Arguments to find a DataRecord
     * @example
     * // Get one DataRecord
     * const dataRecord = await prisma.dataRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends DataRecordFindFirstOrThrowArgs>(
      args?: SelectSubset<T, DataRecordFindFirstOrThrowArgs>
    ): Prisma__DataRecordClient<DataRecordGetPayload<T>>

    /**
     * Find zero or more DataRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DataRecords
     * const dataRecords = await prisma.dataRecord.findMany()
     * 
     * // Get first 10 DataRecords
     * const dataRecords = await prisma.dataRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dataRecordWithIdOnly = await prisma.dataRecord.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends DataRecordFindManyArgs>(
      args?: SelectSubset<T, DataRecordFindManyArgs>
    ): Prisma.PrismaPromise<Array<DataRecordGetPayload<T>>>

    /**
     * Create a DataRecord.
     * @param {DataRecordCreateArgs} args - Arguments to create a DataRecord.
     * @example
     * // Create one DataRecord
     * const DataRecord = await prisma.dataRecord.create({
     *   data: {
     *     // ... data to create a DataRecord
     *   }
     * })
     * 
    **/
    create<T extends DataRecordCreateArgs>(
      args: SelectSubset<T, DataRecordCreateArgs>
    ): Prisma__DataRecordClient<DataRecordGetPayload<T>>

    /**
     * Create many DataRecords.
     *     @param {DataRecordCreateManyArgs} args - Arguments to create many DataRecords.
     *     @example
     *     // Create many DataRecords
     *     const dataRecord = await prisma.dataRecord.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends DataRecordCreateManyArgs>(
      args?: SelectSubset<T, DataRecordCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a DataRecord.
     * @param {DataRecordDeleteArgs} args - Arguments to delete one DataRecord.
     * @example
     * // Delete one DataRecord
     * const DataRecord = await prisma.dataRecord.delete({
     *   where: {
     *     // ... filter to delete one DataRecord
     *   }
     * })
     * 
    **/
    delete<T extends DataRecordDeleteArgs>(
      args: SelectSubset<T, DataRecordDeleteArgs>
    ): Prisma__DataRecordClient<DataRecordGetPayload<T>>

    /**
     * Update one DataRecord.
     * @param {DataRecordUpdateArgs} args - Arguments to update one DataRecord.
     * @example
     * // Update one DataRecord
     * const dataRecord = await prisma.dataRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends DataRecordUpdateArgs>(
      args: SelectSubset<T, DataRecordUpdateArgs>
    ): Prisma__DataRecordClient<DataRecordGetPayload<T>>

    /**
     * Delete zero or more DataRecords.
     * @param {DataRecordDeleteManyArgs} args - Arguments to filter DataRecords to delete.
     * @example
     * // Delete a few DataRecords
     * const { count } = await prisma.dataRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends DataRecordDeleteManyArgs>(
      args?: SelectSubset<T, DataRecordDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DataRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DataRecords
     * const dataRecord = await prisma.dataRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends DataRecordUpdateManyArgs>(
      args: SelectSubset<T, DataRecordUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DataRecord.
     * @param {DataRecordUpsertArgs} args - Arguments to update or create a DataRecord.
     * @example
     * // Update or create a DataRecord
     * const dataRecord = await prisma.dataRecord.upsert({
     *   create: {
     *     // ... data to create a DataRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DataRecord we want to update
     *   }
     * })
    **/
    upsert<T extends DataRecordUpsertArgs>(
      args: SelectSubset<T, DataRecordUpsertArgs>
    ): Prisma__DataRecordClient<DataRecordGetPayload<T>>

    /**
     * Count the number of DataRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordCountArgs} args - Arguments to filter DataRecords to count.
     * @example
     * // Count the number of DataRecords
     * const count = await prisma.dataRecord.count({
     *   where: {
     *     // ... the filter for the DataRecords we want to count
     *   }
     * })
    **/
    count<T extends DataRecordCountArgs>(
      args?: Subset<T, DataRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DataRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DataRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DataRecordAggregateArgs>(args: Subset<T, DataRecordAggregateArgs>): Prisma.PrismaPromise<GetDataRecordAggregateType<T>>

    /**
     * Group by DataRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DataRecordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DataRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DataRecordGroupByArgs['orderBy'] }
        : { orderBy?: DataRecordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DataRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDataRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for DataRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__DataRecordClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    schema<T extends DataRecordSchemaArgs= {}>(args?: Subset<T, DataRecordSchemaArgs>): Prisma__DataRecordSchemaClient<DataRecordSchemaGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * DataRecord base type for findUnique actions
   */
  export type DataRecordFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * Filter, which DataRecord to fetch.
     */
    where: DataRecordWhereUniqueInput
  }

  /**
   * DataRecord findUnique
   */
  export interface DataRecordFindUniqueArgs extends DataRecordFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DataRecord findUniqueOrThrow
   */
  export type DataRecordFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * Filter, which DataRecord to fetch.
     */
    where: DataRecordWhereUniqueInput
  }


  /**
   * DataRecord base type for findFirst actions
   */
  export type DataRecordFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * Filter, which DataRecord to fetch.
     */
    where?: DataRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecords to fetch.
     */
    orderBy?: Enumerable<DataRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataRecords.
     */
    cursor?: DataRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataRecords.
     */
    distinct?: Enumerable<DataRecordScalarFieldEnum>
  }

  /**
   * DataRecord findFirst
   */
  export interface DataRecordFindFirstArgs extends DataRecordFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * DataRecord findFirstOrThrow
   */
  export type DataRecordFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * Filter, which DataRecord to fetch.
     */
    where?: DataRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecords to fetch.
     */
    orderBy?: Enumerable<DataRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DataRecords.
     */
    cursor?: DataRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DataRecords.
     */
    distinct?: Enumerable<DataRecordScalarFieldEnum>
  }


  /**
   * DataRecord findMany
   */
  export type DataRecordFindManyArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * Filter, which DataRecords to fetch.
     */
    where?: DataRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DataRecords to fetch.
     */
    orderBy?: Enumerable<DataRecordOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DataRecords.
     */
    cursor?: DataRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DataRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DataRecords.
     */
    skip?: number
    distinct?: Enumerable<DataRecordScalarFieldEnum>
  }


  /**
   * DataRecord create
   */
  export type DataRecordCreateArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * The data needed to create a DataRecord.
     */
    data: XOR<DataRecordCreateInput, DataRecordUncheckedCreateInput>
  }


  /**
   * DataRecord createMany
   */
  export type DataRecordCreateManyArgs = {
    /**
     * The data used to create many DataRecords.
     */
    data: Enumerable<DataRecordCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * DataRecord update
   */
  export type DataRecordUpdateArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * The data needed to update a DataRecord.
     */
    data: XOR<DataRecordUpdateInput, DataRecordUncheckedUpdateInput>
    /**
     * Choose, which DataRecord to update.
     */
    where: DataRecordWhereUniqueInput
  }


  /**
   * DataRecord updateMany
   */
  export type DataRecordUpdateManyArgs = {
    /**
     * The data used to update DataRecords.
     */
    data: XOR<DataRecordUpdateManyMutationInput, DataRecordUncheckedUpdateManyInput>
    /**
     * Filter which DataRecords to update
     */
    where?: DataRecordWhereInput
  }


  /**
   * DataRecord upsert
   */
  export type DataRecordUpsertArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * The filter to search for the DataRecord to update in case it exists.
     */
    where: DataRecordWhereUniqueInput
    /**
     * In case the DataRecord found by the `where` argument doesn't exist, create a new DataRecord with this data.
     */
    create: XOR<DataRecordCreateInput, DataRecordUncheckedCreateInput>
    /**
     * In case the DataRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DataRecordUpdateInput, DataRecordUncheckedUpdateInput>
  }


  /**
   * DataRecord delete
   */
  export type DataRecordDeleteArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
    /**
     * Filter which DataRecord to delete.
     */
    where: DataRecordWhereUniqueInput
  }


  /**
   * DataRecord deleteMany
   */
  export type DataRecordDeleteManyArgs = {
    /**
     * Filter which DataRecords to delete
     */
    where?: DataRecordWhereInput
  }


  /**
   * DataRecord without action
   */
  export type DataRecordArgs = {
    /**
     * Select specific fields to fetch from the DataRecord
     */
    select?: DataRecordSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: DataRecordInclude | null
  }



  /**
   * Model Channel
   */


  export type AggregateChannel = {
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  export type ChannelAvgAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type ChannelSumAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type ChannelMinAggregateOutputType = {
    id: number | null
    kind: string | null
    workspaceId: number | null
  }

  export type ChannelMaxAggregateOutputType = {
    id: number | null
    kind: string | null
    workspaceId: number | null
  }

  export type ChannelCountAggregateOutputType = {
    id: number
    kind: number
    workspaceId: number
    configuration: number
    _all: number
  }


  export type ChannelAvgAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type ChannelSumAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type ChannelMinAggregateInputType = {
    id?: true
    kind?: true
    workspaceId?: true
  }

  export type ChannelMaxAggregateInputType = {
    id?: true
    kind?: true
    workspaceId?: true
  }

  export type ChannelCountAggregateInputType = {
    id?: true
    kind?: true
    workspaceId?: true
    configuration?: true
    _all?: true
  }

  export type ChannelAggregateArgs = {
    /**
     * Filter which Channel to aggregate.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: Enumerable<ChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Channels
    **/
    _count?: true | ChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChannelMaxAggregateInputType
  }

  export type GetChannelAggregateType<T extends ChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChannel[P]>
      : GetScalarType<T[P], AggregateChannel[P]>
  }




  export type ChannelGroupByArgs = {
    where?: ChannelWhereInput
    orderBy?: Enumerable<ChannelOrderByWithAggregationInput>
    by: ChannelScalarFieldEnum[]
    having?: ChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChannelCountAggregateInputType | true
    _avg?: ChannelAvgAggregateInputType
    _sum?: ChannelSumAggregateInputType
    _min?: ChannelMinAggregateInputType
    _max?: ChannelMaxAggregateInputType
  }


  export type ChannelGroupByOutputType = {
    id: number
    kind: string
    workspaceId: number
    configuration: JsonValue
    _count: ChannelCountAggregateOutputType | null
    _avg: ChannelAvgAggregateOutputType | null
    _sum: ChannelSumAggregateOutputType | null
    _min: ChannelMinAggregateOutputType | null
    _max: ChannelMaxAggregateOutputType | null
  }

  type GetChannelGroupByPayload<T extends ChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChannelGroupByOutputType[P]>
            : GetScalarType<T[P], ChannelGroupByOutputType[P]>
        }
      >
    >


  export type ChannelSelect = {
    id?: boolean
    kind?: boolean
    workspaceId?: boolean
    configuration?: boolean
    workspace?: boolean | WorkspaceArgs
    accountChannels?: boolean | Channel$accountChannelsArgs
    _count?: boolean | ChannelCountOutputTypeArgs
  }


  export type ChannelInclude = {
    workspace?: boolean | WorkspaceArgs
    accountChannels?: boolean | Channel$accountChannelsArgs
    _count?: boolean | ChannelCountOutputTypeArgs
  }

  export type ChannelGetPayload<S extends boolean | null | undefined | ChannelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Channel :
    S extends undefined ? never :
    S extends { include: any } & (ChannelArgs | ChannelFindManyArgs)
    ? Channel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['include'][P]> :
        P extends 'accountChannels' ? Array < AccountChannelGetPayload<S['include'][P]>>  :
        P extends '_count' ? ChannelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ChannelArgs | ChannelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['select'][P]> :
        P extends 'accountChannels' ? Array < AccountChannelGetPayload<S['select'][P]>>  :
        P extends '_count' ? ChannelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Channel ? Channel[P] : never
  } 
      : Channel


  type ChannelCountArgs = 
    Omit<ChannelFindManyArgs, 'select' | 'include'> & {
      select?: ChannelCountAggregateInputType | true
    }

  export interface ChannelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Channel that matches the filter.
     * @param {ChannelFindUniqueArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ChannelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ChannelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Channel'> extends True ? Prisma__ChannelClient<ChannelGetPayload<T>> : Prisma__ChannelClient<ChannelGetPayload<T> | null, null>

    /**
     * Find one Channel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ChannelFindUniqueOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ChannelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ChannelFindUniqueOrThrowArgs>
    ): Prisma__ChannelClient<ChannelGetPayload<T>>

    /**
     * Find the first Channel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ChannelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ChannelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Channel'> extends True ? Prisma__ChannelClient<ChannelGetPayload<T>> : Prisma__ChannelClient<ChannelGetPayload<T> | null, null>

    /**
     * Find the first Channel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindFirstOrThrowArgs} args - Arguments to find a Channel
     * @example
     * // Get one Channel
     * const channel = await prisma.channel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ChannelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ChannelFindFirstOrThrowArgs>
    ): Prisma__ChannelClient<ChannelGetPayload<T>>

    /**
     * Find zero or more Channels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Channels
     * const channels = await prisma.channel.findMany()
     * 
     * // Get first 10 Channels
     * const channels = await prisma.channel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const channelWithIdOnly = await prisma.channel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ChannelFindManyArgs>(
      args?: SelectSubset<T, ChannelFindManyArgs>
    ): Prisma.PrismaPromise<Array<ChannelGetPayload<T>>>

    /**
     * Create a Channel.
     * @param {ChannelCreateArgs} args - Arguments to create a Channel.
     * @example
     * // Create one Channel
     * const Channel = await prisma.channel.create({
     *   data: {
     *     // ... data to create a Channel
     *   }
     * })
     * 
    **/
    create<T extends ChannelCreateArgs>(
      args: SelectSubset<T, ChannelCreateArgs>
    ): Prisma__ChannelClient<ChannelGetPayload<T>>

    /**
     * Create many Channels.
     *     @param {ChannelCreateManyArgs} args - Arguments to create many Channels.
     *     @example
     *     // Create many Channels
     *     const channel = await prisma.channel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ChannelCreateManyArgs>(
      args?: SelectSubset<T, ChannelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Channel.
     * @param {ChannelDeleteArgs} args - Arguments to delete one Channel.
     * @example
     * // Delete one Channel
     * const Channel = await prisma.channel.delete({
     *   where: {
     *     // ... filter to delete one Channel
     *   }
     * })
     * 
    **/
    delete<T extends ChannelDeleteArgs>(
      args: SelectSubset<T, ChannelDeleteArgs>
    ): Prisma__ChannelClient<ChannelGetPayload<T>>

    /**
     * Update one Channel.
     * @param {ChannelUpdateArgs} args - Arguments to update one Channel.
     * @example
     * // Update one Channel
     * const channel = await prisma.channel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ChannelUpdateArgs>(
      args: SelectSubset<T, ChannelUpdateArgs>
    ): Prisma__ChannelClient<ChannelGetPayload<T>>

    /**
     * Delete zero or more Channels.
     * @param {ChannelDeleteManyArgs} args - Arguments to filter Channels to delete.
     * @example
     * // Delete a few Channels
     * const { count } = await prisma.channel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ChannelDeleteManyArgs>(
      args?: SelectSubset<T, ChannelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Channels
     * const channel = await prisma.channel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ChannelUpdateManyArgs>(
      args: SelectSubset<T, ChannelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Channel.
     * @param {ChannelUpsertArgs} args - Arguments to update or create a Channel.
     * @example
     * // Update or create a Channel
     * const channel = await prisma.channel.upsert({
     *   create: {
     *     // ... data to create a Channel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Channel we want to update
     *   }
     * })
    **/
    upsert<T extends ChannelUpsertArgs>(
      args: SelectSubset<T, ChannelUpsertArgs>
    ): Prisma__ChannelClient<ChannelGetPayload<T>>

    /**
     * Count the number of Channels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelCountArgs} args - Arguments to filter Channels to count.
     * @example
     * // Count the number of Channels
     * const count = await prisma.channel.count({
     *   where: {
     *     // ... the filter for the Channels we want to count
     *   }
     * })
    **/
    count<T extends ChannelCountArgs>(
      args?: Subset<T, ChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChannelAggregateArgs>(args: Subset<T, ChannelAggregateArgs>): Prisma.PrismaPromise<GetChannelAggregateType<T>>

    /**
     * Group by Channel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChannelGroupByArgs['orderBy'] }
        : { orderBy?: ChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Channel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ChannelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    accountChannels<T extends Channel$accountChannelsArgs= {}>(args?: Subset<T, Channel$accountChannelsArgs>): Prisma.PrismaPromise<Array<AccountChannelGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Channel base type for findUnique actions
   */
  export type ChannelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }

  /**
   * Channel findUnique
   */
  export interface ChannelFindUniqueArgs extends ChannelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Channel findUniqueOrThrow
   */
  export type ChannelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * Filter, which Channel to fetch.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel base type for findFirst actions
   */
  export type ChannelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: Enumerable<ChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: Enumerable<ChannelScalarFieldEnum>
  }

  /**
   * Channel findFirst
   */
  export interface ChannelFindFirstArgs extends ChannelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Channel findFirstOrThrow
   */
  export type ChannelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * Filter, which Channel to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: Enumerable<ChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Channels.
     */
    distinct?: Enumerable<ChannelScalarFieldEnum>
  }


  /**
   * Channel findMany
   */
  export type ChannelFindManyArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * Filter, which Channels to fetch.
     */
    where?: ChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Channels to fetch.
     */
    orderBy?: Enumerable<ChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Channels.
     */
    cursor?: ChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Channels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Channels.
     */
    skip?: number
    distinct?: Enumerable<ChannelScalarFieldEnum>
  }


  /**
   * Channel create
   */
  export type ChannelCreateArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * The data needed to create a Channel.
     */
    data: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
  }


  /**
   * Channel createMany
   */
  export type ChannelCreateManyArgs = {
    /**
     * The data used to create many Channels.
     */
    data: Enumerable<ChannelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Channel update
   */
  export type ChannelUpdateArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * The data needed to update a Channel.
     */
    data: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
    /**
     * Choose, which Channel to update.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel updateMany
   */
  export type ChannelUpdateManyArgs = {
    /**
     * The data used to update Channels.
     */
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyInput>
    /**
     * Filter which Channels to update
     */
    where?: ChannelWhereInput
  }


  /**
   * Channel upsert
   */
  export type ChannelUpsertArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * The filter to search for the Channel to update in case it exists.
     */
    where: ChannelWhereUniqueInput
    /**
     * In case the Channel found by the `where` argument doesn't exist, create a new Channel with this data.
     */
    create: XOR<ChannelCreateInput, ChannelUncheckedCreateInput>
    /**
     * In case the Channel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChannelUpdateInput, ChannelUncheckedUpdateInput>
  }


  /**
   * Channel delete
   */
  export type ChannelDeleteArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
    /**
     * Filter which Channel to delete.
     */
    where: ChannelWhereUniqueInput
  }


  /**
   * Channel deleteMany
   */
  export type ChannelDeleteManyArgs = {
    /**
     * Filter which Channels to delete
     */
    where?: ChannelWhereInput
  }


  /**
   * Channel.accountChannels
   */
  export type Channel$accountChannelsArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    where?: AccountChannelWhereInput
    orderBy?: Enumerable<AccountChannelOrderByWithRelationInput>
    cursor?: AccountChannelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AccountChannelScalarFieldEnum>
  }


  /**
   * Channel without action
   */
  export type ChannelArgs = {
    /**
     * Select specific fields to fetch from the Channel
     */
    select?: ChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ChannelInclude | null
  }



  /**
   * Model AccountChannel
   */


  export type AggregateAccountChannel = {
    _count: AccountChannelCountAggregateOutputType | null
    _avg: AccountChannelAvgAggregateOutputType | null
    _sum: AccountChannelSumAggregateOutputType | null
    _min: AccountChannelMinAggregateOutputType | null
    _max: AccountChannelMaxAggregateOutputType | null
  }

  export type AccountChannelAvgAggregateOutputType = {
    id: number | null
    accountId: number | null
    channelId: number | null
    channelAccountId: number | null
  }

  export type AccountChannelSumAggregateOutputType = {
    id: number | null
    accountId: number | null
    channelId: number | null
    channelAccountId: number | null
  }

  export type AccountChannelMinAggregateOutputType = {
    id: number | null
    accountId: number | null
    channelId: number | null
    channelAccountId: number | null
    status: string | null
  }

  export type AccountChannelMaxAggregateOutputType = {
    id: number | null
    accountId: number | null
    channelId: number | null
    channelAccountId: number | null
    status: string | null
  }

  export type AccountChannelCountAggregateOutputType = {
    id: number
    accountId: number
    channelId: number
    channelAccountId: number
    status: number
    data: number
    _all: number
  }


  export type AccountChannelAvgAggregateInputType = {
    id?: true
    accountId?: true
    channelId?: true
    channelAccountId?: true
  }

  export type AccountChannelSumAggregateInputType = {
    id?: true
    accountId?: true
    channelId?: true
    channelAccountId?: true
  }

  export type AccountChannelMinAggregateInputType = {
    id?: true
    accountId?: true
    channelId?: true
    channelAccountId?: true
    status?: true
  }

  export type AccountChannelMaxAggregateInputType = {
    id?: true
    accountId?: true
    channelId?: true
    channelAccountId?: true
    status?: true
  }

  export type AccountChannelCountAggregateInputType = {
    id?: true
    accountId?: true
    channelId?: true
    channelAccountId?: true
    status?: true
    data?: true
    _all?: true
  }

  export type AccountChannelAggregateArgs = {
    /**
     * Filter which AccountChannel to aggregate.
     */
    where?: AccountChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountChannels to fetch.
     */
    orderBy?: Enumerable<AccountChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AccountChannels
    **/
    _count?: true | AccountChannelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountChannelAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountChannelSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountChannelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountChannelMaxAggregateInputType
  }

  export type GetAccountChannelAggregateType<T extends AccountChannelAggregateArgs> = {
        [P in keyof T & keyof AggregateAccountChannel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccountChannel[P]>
      : GetScalarType<T[P], AggregateAccountChannel[P]>
  }




  export type AccountChannelGroupByArgs = {
    where?: AccountChannelWhereInput
    orderBy?: Enumerable<AccountChannelOrderByWithAggregationInput>
    by: AccountChannelScalarFieldEnum[]
    having?: AccountChannelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountChannelCountAggregateInputType | true
    _avg?: AccountChannelAvgAggregateInputType
    _sum?: AccountChannelSumAggregateInputType
    _min?: AccountChannelMinAggregateInputType
    _max?: AccountChannelMaxAggregateInputType
  }


  export type AccountChannelGroupByOutputType = {
    id: number
    accountId: number
    channelId: number
    channelAccountId: number
    status: string
    data: JsonValue
    _count: AccountChannelCountAggregateOutputType | null
    _avg: AccountChannelAvgAggregateOutputType | null
    _sum: AccountChannelSumAggregateOutputType | null
    _min: AccountChannelMinAggregateOutputType | null
    _max: AccountChannelMaxAggregateOutputType | null
  }

  type GetAccountChannelGroupByPayload<T extends AccountChannelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AccountChannelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountChannelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountChannelGroupByOutputType[P]>
            : GetScalarType<T[P], AccountChannelGroupByOutputType[P]>
        }
      >
    >


  export type AccountChannelSelect = {
    id?: boolean
    accountId?: boolean
    channelId?: boolean
    channelAccountId?: boolean
    status?: boolean
    data?: boolean
    account?: boolean | AccountArgs
    channel?: boolean | ChannelArgs
    flowStacks?: boolean | AccountChannel$flowStacksArgs
    _count?: boolean | AccountChannelCountOutputTypeArgs
  }


  export type AccountChannelInclude = {
    account?: boolean | AccountArgs
    channel?: boolean | ChannelArgs
    flowStacks?: boolean | AccountChannel$flowStacksArgs
    _count?: boolean | AccountChannelCountOutputTypeArgs
  }

  export type AccountChannelGetPayload<S extends boolean | null | undefined | AccountChannelArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AccountChannel :
    S extends undefined ? never :
    S extends { include: any } & (AccountChannelArgs | AccountChannelFindManyArgs)
    ? AccountChannel  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'account' ? AccountGetPayload<S['include'][P]> :
        P extends 'channel' ? ChannelGetPayload<S['include'][P]> :
        P extends 'flowStacks' ? Array < FlowStackGetPayload<S['include'][P]>>  :
        P extends '_count' ? AccountChannelCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AccountChannelArgs | AccountChannelFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'account' ? AccountGetPayload<S['select'][P]> :
        P extends 'channel' ? ChannelGetPayload<S['select'][P]> :
        P extends 'flowStacks' ? Array < FlowStackGetPayload<S['select'][P]>>  :
        P extends '_count' ? AccountChannelCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof AccountChannel ? AccountChannel[P] : never
  } 
      : AccountChannel


  type AccountChannelCountArgs = 
    Omit<AccountChannelFindManyArgs, 'select' | 'include'> & {
      select?: AccountChannelCountAggregateInputType | true
    }

  export interface AccountChannelDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AccountChannel that matches the filter.
     * @param {AccountChannelFindUniqueArgs} args - Arguments to find a AccountChannel
     * @example
     * // Get one AccountChannel
     * const accountChannel = await prisma.accountChannel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountChannelFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AccountChannelFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AccountChannel'> extends True ? Prisma__AccountChannelClient<AccountChannelGetPayload<T>> : Prisma__AccountChannelClient<AccountChannelGetPayload<T> | null, null>

    /**
     * Find one AccountChannel that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountChannelFindUniqueOrThrowArgs} args - Arguments to find a AccountChannel
     * @example
     * // Get one AccountChannel
     * const accountChannel = await prisma.accountChannel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountChannelFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AccountChannelFindUniqueOrThrowArgs>
    ): Prisma__AccountChannelClient<AccountChannelGetPayload<T>>

    /**
     * Find the first AccountChannel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChannelFindFirstArgs} args - Arguments to find a AccountChannel
     * @example
     * // Get one AccountChannel
     * const accountChannel = await prisma.accountChannel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountChannelFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AccountChannelFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AccountChannel'> extends True ? Prisma__AccountChannelClient<AccountChannelGetPayload<T>> : Prisma__AccountChannelClient<AccountChannelGetPayload<T> | null, null>

    /**
     * Find the first AccountChannel that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChannelFindFirstOrThrowArgs} args - Arguments to find a AccountChannel
     * @example
     * // Get one AccountChannel
     * const accountChannel = await prisma.accountChannel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountChannelFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AccountChannelFindFirstOrThrowArgs>
    ): Prisma__AccountChannelClient<AccountChannelGetPayload<T>>

    /**
     * Find zero or more AccountChannels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChannelFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AccountChannels
     * const accountChannels = await prisma.accountChannel.findMany()
     * 
     * // Get first 10 AccountChannels
     * const accountChannels = await prisma.accountChannel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountChannelWithIdOnly = await prisma.accountChannel.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountChannelFindManyArgs>(
      args?: SelectSubset<T, AccountChannelFindManyArgs>
    ): Prisma.PrismaPromise<Array<AccountChannelGetPayload<T>>>

    /**
     * Create a AccountChannel.
     * @param {AccountChannelCreateArgs} args - Arguments to create a AccountChannel.
     * @example
     * // Create one AccountChannel
     * const AccountChannel = await prisma.accountChannel.create({
     *   data: {
     *     // ... data to create a AccountChannel
     *   }
     * })
     * 
    **/
    create<T extends AccountChannelCreateArgs>(
      args: SelectSubset<T, AccountChannelCreateArgs>
    ): Prisma__AccountChannelClient<AccountChannelGetPayload<T>>

    /**
     * Create many AccountChannels.
     *     @param {AccountChannelCreateManyArgs} args - Arguments to create many AccountChannels.
     *     @example
     *     // Create many AccountChannels
     *     const accountChannel = await prisma.accountChannel.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountChannelCreateManyArgs>(
      args?: SelectSubset<T, AccountChannelCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AccountChannel.
     * @param {AccountChannelDeleteArgs} args - Arguments to delete one AccountChannel.
     * @example
     * // Delete one AccountChannel
     * const AccountChannel = await prisma.accountChannel.delete({
     *   where: {
     *     // ... filter to delete one AccountChannel
     *   }
     * })
     * 
    **/
    delete<T extends AccountChannelDeleteArgs>(
      args: SelectSubset<T, AccountChannelDeleteArgs>
    ): Prisma__AccountChannelClient<AccountChannelGetPayload<T>>

    /**
     * Update one AccountChannel.
     * @param {AccountChannelUpdateArgs} args - Arguments to update one AccountChannel.
     * @example
     * // Update one AccountChannel
     * const accountChannel = await prisma.accountChannel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountChannelUpdateArgs>(
      args: SelectSubset<T, AccountChannelUpdateArgs>
    ): Prisma__AccountChannelClient<AccountChannelGetPayload<T>>

    /**
     * Delete zero or more AccountChannels.
     * @param {AccountChannelDeleteManyArgs} args - Arguments to filter AccountChannels to delete.
     * @example
     * // Delete a few AccountChannels
     * const { count } = await prisma.accountChannel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountChannelDeleteManyArgs>(
      args?: SelectSubset<T, AccountChannelDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AccountChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChannelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AccountChannels
     * const accountChannel = await prisma.accountChannel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountChannelUpdateManyArgs>(
      args: SelectSubset<T, AccountChannelUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AccountChannel.
     * @param {AccountChannelUpsertArgs} args - Arguments to update or create a AccountChannel.
     * @example
     * // Update or create a AccountChannel
     * const accountChannel = await prisma.accountChannel.upsert({
     *   create: {
     *     // ... data to create a AccountChannel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AccountChannel we want to update
     *   }
     * })
    **/
    upsert<T extends AccountChannelUpsertArgs>(
      args: SelectSubset<T, AccountChannelUpsertArgs>
    ): Prisma__AccountChannelClient<AccountChannelGetPayload<T>>

    /**
     * Count the number of AccountChannels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChannelCountArgs} args - Arguments to filter AccountChannels to count.
     * @example
     * // Count the number of AccountChannels
     * const count = await prisma.accountChannel.count({
     *   where: {
     *     // ... the filter for the AccountChannels we want to count
     *   }
     * })
    **/
    count<T extends AccountChannelCountArgs>(
      args?: Subset<T, AccountChannelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountChannelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AccountChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChannelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountChannelAggregateArgs>(args: Subset<T, AccountChannelAggregateArgs>): Prisma.PrismaPromise<GetAccountChannelAggregateType<T>>

    /**
     * Group by AccountChannel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountChannelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountChannelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountChannelGroupByArgs['orderBy'] }
        : { orderBy?: AccountChannelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountChannelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountChannelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AccountChannel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AccountChannelClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    account<T extends AccountArgs= {}>(args?: Subset<T, AccountArgs>): Prisma__AccountClient<AccountGetPayload<T> | Null>;

    channel<T extends ChannelArgs= {}>(args?: Subset<T, ChannelArgs>): Prisma__ChannelClient<ChannelGetPayload<T> | Null>;

    flowStacks<T extends AccountChannel$flowStacksArgs= {}>(args?: Subset<T, AccountChannel$flowStacksArgs>): Prisma.PrismaPromise<Array<FlowStackGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AccountChannel base type for findUnique actions
   */
  export type AccountChannelFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * Filter, which AccountChannel to fetch.
     */
    where: AccountChannelWhereUniqueInput
  }

  /**
   * AccountChannel findUnique
   */
  export interface AccountChannelFindUniqueArgs extends AccountChannelFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AccountChannel findUniqueOrThrow
   */
  export type AccountChannelFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * Filter, which AccountChannel to fetch.
     */
    where: AccountChannelWhereUniqueInput
  }


  /**
   * AccountChannel base type for findFirst actions
   */
  export type AccountChannelFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * Filter, which AccountChannel to fetch.
     */
    where?: AccountChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountChannels to fetch.
     */
    orderBy?: Enumerable<AccountChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountChannels.
     */
    cursor?: AccountChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountChannels.
     */
    distinct?: Enumerable<AccountChannelScalarFieldEnum>
  }

  /**
   * AccountChannel findFirst
   */
  export interface AccountChannelFindFirstArgs extends AccountChannelFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AccountChannel findFirstOrThrow
   */
  export type AccountChannelFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * Filter, which AccountChannel to fetch.
     */
    where?: AccountChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountChannels to fetch.
     */
    orderBy?: Enumerable<AccountChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AccountChannels.
     */
    cursor?: AccountChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountChannels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AccountChannels.
     */
    distinct?: Enumerable<AccountChannelScalarFieldEnum>
  }


  /**
   * AccountChannel findMany
   */
  export type AccountChannelFindManyArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * Filter, which AccountChannels to fetch.
     */
    where?: AccountChannelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AccountChannels to fetch.
     */
    orderBy?: Enumerable<AccountChannelOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AccountChannels.
     */
    cursor?: AccountChannelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AccountChannels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AccountChannels.
     */
    skip?: number
    distinct?: Enumerable<AccountChannelScalarFieldEnum>
  }


  /**
   * AccountChannel create
   */
  export type AccountChannelCreateArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * The data needed to create a AccountChannel.
     */
    data: XOR<AccountChannelCreateInput, AccountChannelUncheckedCreateInput>
  }


  /**
   * AccountChannel createMany
   */
  export type AccountChannelCreateManyArgs = {
    /**
     * The data used to create many AccountChannels.
     */
    data: Enumerable<AccountChannelCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AccountChannel update
   */
  export type AccountChannelUpdateArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * The data needed to update a AccountChannel.
     */
    data: XOR<AccountChannelUpdateInput, AccountChannelUncheckedUpdateInput>
    /**
     * Choose, which AccountChannel to update.
     */
    where: AccountChannelWhereUniqueInput
  }


  /**
   * AccountChannel updateMany
   */
  export type AccountChannelUpdateManyArgs = {
    /**
     * The data used to update AccountChannels.
     */
    data: XOR<AccountChannelUpdateManyMutationInput, AccountChannelUncheckedUpdateManyInput>
    /**
     * Filter which AccountChannels to update
     */
    where?: AccountChannelWhereInput
  }


  /**
   * AccountChannel upsert
   */
  export type AccountChannelUpsertArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * The filter to search for the AccountChannel to update in case it exists.
     */
    where: AccountChannelWhereUniqueInput
    /**
     * In case the AccountChannel found by the `where` argument doesn't exist, create a new AccountChannel with this data.
     */
    create: XOR<AccountChannelCreateInput, AccountChannelUncheckedCreateInput>
    /**
     * In case the AccountChannel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountChannelUpdateInput, AccountChannelUncheckedUpdateInput>
  }


  /**
   * AccountChannel delete
   */
  export type AccountChannelDeleteArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
    /**
     * Filter which AccountChannel to delete.
     */
    where: AccountChannelWhereUniqueInput
  }


  /**
   * AccountChannel deleteMany
   */
  export type AccountChannelDeleteManyArgs = {
    /**
     * Filter which AccountChannels to delete
     */
    where?: AccountChannelWhereInput
  }


  /**
   * AccountChannel.flowStacks
   */
  export type AccountChannel$flowStacksArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    where?: FlowStackWhereInput
    orderBy?: Enumerable<FlowStackOrderByWithRelationInput>
    cursor?: FlowStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowStackScalarFieldEnum>
  }


  /**
   * AccountChannel without action
   */
  export type AccountChannelArgs = {
    /**
     * Select specific fields to fetch from the AccountChannel
     */
    select?: AccountChannelSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountChannelInclude | null
  }



  /**
   * Model FlowGroup
   */


  export type AggregateFlowGroup = {
    _count: FlowGroupCountAggregateOutputType | null
    _avg: FlowGroupAvgAggregateOutputType | null
    _sum: FlowGroupSumAggregateOutputType | null
    _min: FlowGroupMinAggregateOutputType | null
    _max: FlowGroupMaxAggregateOutputType | null
  }

  export type FlowGroupAvgAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type FlowGroupSumAggregateOutputType = {
    id: number | null
    workspaceId: number | null
  }

  export type FlowGroupMinAggregateOutputType = {
    id: number | null
    name: string | null
    workspaceId: number | null
  }

  export type FlowGroupMaxAggregateOutputType = {
    id: number | null
    name: string | null
    workspaceId: number | null
  }

  export type FlowGroupCountAggregateOutputType = {
    id: number
    name: number
    workspaceId: number
    _all: number
  }


  export type FlowGroupAvgAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type FlowGroupSumAggregateInputType = {
    id?: true
    workspaceId?: true
  }

  export type FlowGroupMinAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
  }

  export type FlowGroupMaxAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
  }

  export type FlowGroupCountAggregateInputType = {
    id?: true
    name?: true
    workspaceId?: true
    _all?: true
  }

  export type FlowGroupAggregateArgs = {
    /**
     * Filter which FlowGroup to aggregate.
     */
    where?: FlowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowGroups to fetch.
     */
    orderBy?: Enumerable<FlowGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowGroups
    **/
    _count?: true | FlowGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowGroupMaxAggregateInputType
  }

  export type GetFlowGroupAggregateType<T extends FlowGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowGroup[P]>
      : GetScalarType<T[P], AggregateFlowGroup[P]>
  }




  export type FlowGroupGroupByArgs = {
    where?: FlowGroupWhereInput
    orderBy?: Enumerable<FlowGroupOrderByWithAggregationInput>
    by: FlowGroupScalarFieldEnum[]
    having?: FlowGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowGroupCountAggregateInputType | true
    _avg?: FlowGroupAvgAggregateInputType
    _sum?: FlowGroupSumAggregateInputType
    _min?: FlowGroupMinAggregateInputType
    _max?: FlowGroupMaxAggregateInputType
  }


  export type FlowGroupGroupByOutputType = {
    id: number
    name: string
    workspaceId: number
    _count: FlowGroupCountAggregateOutputType | null
    _avg: FlowGroupAvgAggregateOutputType | null
    _sum: FlowGroupSumAggregateOutputType | null
    _min: FlowGroupMinAggregateOutputType | null
    _max: FlowGroupMaxAggregateOutputType | null
  }

  type GetFlowGroupGroupByPayload<T extends FlowGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FlowGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowGroupGroupByOutputType[P]>
            : GetScalarType<T[P], FlowGroupGroupByOutputType[P]>
        }
      >
    >


  export type FlowGroupSelect = {
    id?: boolean
    name?: boolean
    workspaceId?: boolean
    workspace?: boolean | WorkspaceArgs
    flows?: boolean | FlowGroup$flowsArgs
    _count?: boolean | FlowGroupCountOutputTypeArgs
  }


  export type FlowGroupInclude = {
    workspace?: boolean | WorkspaceArgs
    flows?: boolean | FlowGroup$flowsArgs
    _count?: boolean | FlowGroupCountOutputTypeArgs
  }

  export type FlowGroupGetPayload<S extends boolean | null | undefined | FlowGroupArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowGroup :
    S extends undefined ? never :
    S extends { include: any } & (FlowGroupArgs | FlowGroupFindManyArgs)
    ? FlowGroup  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['include'][P]> :
        P extends 'flows' ? Array < FlowGetPayload<S['include'][P]>>  :
        P extends '_count' ? FlowGroupCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FlowGroupArgs | FlowGroupFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'workspace' ? WorkspaceGetPayload<S['select'][P]> :
        P extends 'flows' ? Array < FlowGetPayload<S['select'][P]>>  :
        P extends '_count' ? FlowGroupCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof FlowGroup ? FlowGroup[P] : never
  } 
      : FlowGroup


  type FlowGroupCountArgs = 
    Omit<FlowGroupFindManyArgs, 'select' | 'include'> & {
      select?: FlowGroupCountAggregateInputType | true
    }

  export interface FlowGroupDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FlowGroup that matches the filter.
     * @param {FlowGroupFindUniqueArgs} args - Arguments to find a FlowGroup
     * @example
     * // Get one FlowGroup
     * const flowGroup = await prisma.flowGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlowGroupFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlowGroupFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FlowGroup'> extends True ? Prisma__FlowGroupClient<FlowGroupGetPayload<T>> : Prisma__FlowGroupClient<FlowGroupGetPayload<T> | null, null>

    /**
     * Find one FlowGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlowGroupFindUniqueOrThrowArgs} args - Arguments to find a FlowGroup
     * @example
     * // Get one FlowGroup
     * const flowGroup = await prisma.flowGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlowGroupFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FlowGroupFindUniqueOrThrowArgs>
    ): Prisma__FlowGroupClient<FlowGroupGetPayload<T>>

    /**
     * Find the first FlowGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupFindFirstArgs} args - Arguments to find a FlowGroup
     * @example
     * // Get one FlowGroup
     * const flowGroup = await prisma.flowGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlowGroupFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlowGroupFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FlowGroup'> extends True ? Prisma__FlowGroupClient<FlowGroupGetPayload<T>> : Prisma__FlowGroupClient<FlowGroupGetPayload<T> | null, null>

    /**
     * Find the first FlowGroup that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupFindFirstOrThrowArgs} args - Arguments to find a FlowGroup
     * @example
     * // Get one FlowGroup
     * const flowGroup = await prisma.flowGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlowGroupFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FlowGroupFindFirstOrThrowArgs>
    ): Prisma__FlowGroupClient<FlowGroupGetPayload<T>>

    /**
     * Find zero or more FlowGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowGroups
     * const flowGroups = await prisma.flowGroup.findMany()
     * 
     * // Get first 10 FlowGroups
     * const flowGroups = await prisma.flowGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowGroupWithIdOnly = await prisma.flowGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FlowGroupFindManyArgs>(
      args?: SelectSubset<T, FlowGroupFindManyArgs>
    ): Prisma.PrismaPromise<Array<FlowGroupGetPayload<T>>>

    /**
     * Create a FlowGroup.
     * @param {FlowGroupCreateArgs} args - Arguments to create a FlowGroup.
     * @example
     * // Create one FlowGroup
     * const FlowGroup = await prisma.flowGroup.create({
     *   data: {
     *     // ... data to create a FlowGroup
     *   }
     * })
     * 
    **/
    create<T extends FlowGroupCreateArgs>(
      args: SelectSubset<T, FlowGroupCreateArgs>
    ): Prisma__FlowGroupClient<FlowGroupGetPayload<T>>

    /**
     * Create many FlowGroups.
     *     @param {FlowGroupCreateManyArgs} args - Arguments to create many FlowGroups.
     *     @example
     *     // Create many FlowGroups
     *     const flowGroup = await prisma.flowGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlowGroupCreateManyArgs>(
      args?: SelectSubset<T, FlowGroupCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowGroup.
     * @param {FlowGroupDeleteArgs} args - Arguments to delete one FlowGroup.
     * @example
     * // Delete one FlowGroup
     * const FlowGroup = await prisma.flowGroup.delete({
     *   where: {
     *     // ... filter to delete one FlowGroup
     *   }
     * })
     * 
    **/
    delete<T extends FlowGroupDeleteArgs>(
      args: SelectSubset<T, FlowGroupDeleteArgs>
    ): Prisma__FlowGroupClient<FlowGroupGetPayload<T>>

    /**
     * Update one FlowGroup.
     * @param {FlowGroupUpdateArgs} args - Arguments to update one FlowGroup.
     * @example
     * // Update one FlowGroup
     * const flowGroup = await prisma.flowGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlowGroupUpdateArgs>(
      args: SelectSubset<T, FlowGroupUpdateArgs>
    ): Prisma__FlowGroupClient<FlowGroupGetPayload<T>>

    /**
     * Delete zero or more FlowGroups.
     * @param {FlowGroupDeleteManyArgs} args - Arguments to filter FlowGroups to delete.
     * @example
     * // Delete a few FlowGroups
     * const { count } = await prisma.flowGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlowGroupDeleteManyArgs>(
      args?: SelectSubset<T, FlowGroupDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowGroups
     * const flowGroup = await prisma.flowGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlowGroupUpdateManyArgs>(
      args: SelectSubset<T, FlowGroupUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowGroup.
     * @param {FlowGroupUpsertArgs} args - Arguments to update or create a FlowGroup.
     * @example
     * // Update or create a FlowGroup
     * const flowGroup = await prisma.flowGroup.upsert({
     *   create: {
     *     // ... data to create a FlowGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowGroup we want to update
     *   }
     * })
    **/
    upsert<T extends FlowGroupUpsertArgs>(
      args: SelectSubset<T, FlowGroupUpsertArgs>
    ): Prisma__FlowGroupClient<FlowGroupGetPayload<T>>

    /**
     * Count the number of FlowGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupCountArgs} args - Arguments to filter FlowGroups to count.
     * @example
     * // Count the number of FlowGroups
     * const count = await prisma.flowGroup.count({
     *   where: {
     *     // ... the filter for the FlowGroups we want to count
     *   }
     * })
    **/
    count<T extends FlowGroupCountArgs>(
      args?: Subset<T, FlowGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowGroupAggregateArgs>(args: Subset<T, FlowGroupAggregateArgs>): Prisma.PrismaPromise<GetFlowGroupAggregateType<T>>

    /**
     * Group by FlowGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowGroupGroupByArgs['orderBy'] }
        : { orderBy?: FlowGroupGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlowGroupClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    workspace<T extends WorkspaceArgs= {}>(args?: Subset<T, WorkspaceArgs>): Prisma__WorkspaceClient<WorkspaceGetPayload<T> | Null>;

    flows<T extends FlowGroup$flowsArgs= {}>(args?: Subset<T, FlowGroup$flowsArgs>): Prisma.PrismaPromise<Array<FlowGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FlowGroup base type for findUnique actions
   */
  export type FlowGroupFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * Filter, which FlowGroup to fetch.
     */
    where: FlowGroupWhereUniqueInput
  }

  /**
   * FlowGroup findUnique
   */
  export interface FlowGroupFindUniqueArgs extends FlowGroupFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowGroup findUniqueOrThrow
   */
  export type FlowGroupFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * Filter, which FlowGroup to fetch.
     */
    where: FlowGroupWhereUniqueInput
  }


  /**
   * FlowGroup base type for findFirst actions
   */
  export type FlowGroupFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * Filter, which FlowGroup to fetch.
     */
    where?: FlowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowGroups to fetch.
     */
    orderBy?: Enumerable<FlowGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowGroups.
     */
    cursor?: FlowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowGroups.
     */
    distinct?: Enumerable<FlowGroupScalarFieldEnum>
  }

  /**
   * FlowGroup findFirst
   */
  export interface FlowGroupFindFirstArgs extends FlowGroupFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowGroup findFirstOrThrow
   */
  export type FlowGroupFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * Filter, which FlowGroup to fetch.
     */
    where?: FlowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowGroups to fetch.
     */
    orderBy?: Enumerable<FlowGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowGroups.
     */
    cursor?: FlowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowGroups.
     */
    distinct?: Enumerable<FlowGroupScalarFieldEnum>
  }


  /**
   * FlowGroup findMany
   */
  export type FlowGroupFindManyArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * Filter, which FlowGroups to fetch.
     */
    where?: FlowGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowGroups to fetch.
     */
    orderBy?: Enumerable<FlowGroupOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowGroups.
     */
    cursor?: FlowGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowGroups.
     */
    skip?: number
    distinct?: Enumerable<FlowGroupScalarFieldEnum>
  }


  /**
   * FlowGroup create
   */
  export type FlowGroupCreateArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * The data needed to create a FlowGroup.
     */
    data: XOR<FlowGroupCreateInput, FlowGroupUncheckedCreateInput>
  }


  /**
   * FlowGroup createMany
   */
  export type FlowGroupCreateManyArgs = {
    /**
     * The data used to create many FlowGroups.
     */
    data: Enumerable<FlowGroupCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FlowGroup update
   */
  export type FlowGroupUpdateArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * The data needed to update a FlowGroup.
     */
    data: XOR<FlowGroupUpdateInput, FlowGroupUncheckedUpdateInput>
    /**
     * Choose, which FlowGroup to update.
     */
    where: FlowGroupWhereUniqueInput
  }


  /**
   * FlowGroup updateMany
   */
  export type FlowGroupUpdateManyArgs = {
    /**
     * The data used to update FlowGroups.
     */
    data: XOR<FlowGroupUpdateManyMutationInput, FlowGroupUncheckedUpdateManyInput>
    /**
     * Filter which FlowGroups to update
     */
    where?: FlowGroupWhereInput
  }


  /**
   * FlowGroup upsert
   */
  export type FlowGroupUpsertArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * The filter to search for the FlowGroup to update in case it exists.
     */
    where: FlowGroupWhereUniqueInput
    /**
     * In case the FlowGroup found by the `where` argument doesn't exist, create a new FlowGroup with this data.
     */
    create: XOR<FlowGroupCreateInput, FlowGroupUncheckedCreateInput>
    /**
     * In case the FlowGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowGroupUpdateInput, FlowGroupUncheckedUpdateInput>
  }


  /**
   * FlowGroup delete
   */
  export type FlowGroupDeleteArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
    /**
     * Filter which FlowGroup to delete.
     */
    where: FlowGroupWhereUniqueInput
  }


  /**
   * FlowGroup deleteMany
   */
  export type FlowGroupDeleteManyArgs = {
    /**
     * Filter which FlowGroups to delete
     */
    where?: FlowGroupWhereInput
  }


  /**
   * FlowGroup.flows
   */
  export type FlowGroup$flowsArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    where?: FlowWhereInput
    orderBy?: Enumerable<FlowOrderByWithRelationInput>
    cursor?: FlowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowScalarFieldEnum>
  }


  /**
   * FlowGroup without action
   */
  export type FlowGroupArgs = {
    /**
     * Select specific fields to fetch from the FlowGroup
     */
    select?: FlowGroupSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowGroupInclude | null
  }



  /**
   * Model Flow
   */


  export type AggregateFlow = {
    _count: FlowCountAggregateOutputType | null
    _avg: FlowAvgAggregateOutputType | null
    _sum: FlowSumAggregateOutputType | null
    _min: FlowMinAggregateOutputType | null
    _max: FlowMaxAggregateOutputType | null
  }

  export type FlowAvgAggregateOutputType = {
    id: number | null
    flowGroupId: number | null
  }

  export type FlowSumAggregateOutputType = {
    id: number | null
    flowGroupId: number | null
  }

  export type FlowMinAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    flowGroupId: number | null
  }

  export type FlowMaxAggregateOutputType = {
    id: number | null
    name: string | null
    status: string | null
    flowGroupId: number | null
  }

  export type FlowCountAggregateOutputType = {
    id: number
    name: number
    status: number
    flowGroupId: number
    contextSchema: number
    _all: number
  }


  export type FlowAvgAggregateInputType = {
    id?: true
    flowGroupId?: true
  }

  export type FlowSumAggregateInputType = {
    id?: true
    flowGroupId?: true
  }

  export type FlowMinAggregateInputType = {
    id?: true
    name?: true
    status?: true
    flowGroupId?: true
  }

  export type FlowMaxAggregateInputType = {
    id?: true
    name?: true
    status?: true
    flowGroupId?: true
  }

  export type FlowCountAggregateInputType = {
    id?: true
    name?: true
    status?: true
    flowGroupId?: true
    contextSchema?: true
    _all?: true
  }

  export type FlowAggregateArgs = {
    /**
     * Filter which Flow to aggregate.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: Enumerable<FlowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Flows
    **/
    _count?: true | FlowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowMaxAggregateInputType
  }

  export type GetFlowAggregateType<T extends FlowAggregateArgs> = {
        [P in keyof T & keyof AggregateFlow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlow[P]>
      : GetScalarType<T[P], AggregateFlow[P]>
  }




  export type FlowGroupByArgs = {
    where?: FlowWhereInput
    orderBy?: Enumerable<FlowOrderByWithAggregationInput>
    by: FlowScalarFieldEnum[]
    having?: FlowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowCountAggregateInputType | true
    _avg?: FlowAvgAggregateInputType
    _sum?: FlowSumAggregateInputType
    _min?: FlowMinAggregateInputType
    _max?: FlowMaxAggregateInputType
  }


  export type FlowGroupByOutputType = {
    id: number
    name: string
    status: string
    flowGroupId: number
    contextSchema: JsonValue
    _count: FlowCountAggregateOutputType | null
    _avg: FlowAvgAggregateOutputType | null
    _sum: FlowSumAggregateOutputType | null
    _min: FlowMinAggregateOutputType | null
    _max: FlowMaxAggregateOutputType | null
  }

  type GetFlowGroupByPayload<T extends FlowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FlowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowGroupByOutputType[P]>
            : GetScalarType<T[P], FlowGroupByOutputType[P]>
        }
      >
    >


  export type FlowSelect = {
    id?: boolean
    name?: boolean
    status?: boolean
    flowGroupId?: boolean
    contextSchema?: boolean
    flowGroup?: boolean | FlowGroupArgs
    flowActions?: boolean | Flow$flowActionsArgs
    FlowActionConnection?: boolean | Flow$FlowActionConnectionArgs
    FlowStack?: boolean | Flow$FlowStackArgs
    _count?: boolean | FlowCountOutputTypeArgs
  }


  export type FlowInclude = {
    flowGroup?: boolean | FlowGroupArgs
    flowActions?: boolean | Flow$flowActionsArgs
    FlowActionConnection?: boolean | Flow$FlowActionConnectionArgs
    FlowStack?: boolean | Flow$FlowStackArgs
    _count?: boolean | FlowCountOutputTypeArgs
  }

  export type FlowGetPayload<S extends boolean | null | undefined | FlowArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Flow :
    S extends undefined ? never :
    S extends { include: any } & (FlowArgs | FlowFindManyArgs)
    ? Flow  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'flowGroup' ? FlowGroupGetPayload<S['include'][P]> :
        P extends 'flowActions' ? Array < FlowActionGetPayload<S['include'][P]>>  :
        P extends 'FlowActionConnection' ? Array < FlowActionConnectionGetPayload<S['include'][P]>>  :
        P extends 'FlowStack' ? Array < FlowStackGetPayload<S['include'][P]>>  :
        P extends '_count' ? FlowCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FlowArgs | FlowFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'flowGroup' ? FlowGroupGetPayload<S['select'][P]> :
        P extends 'flowActions' ? Array < FlowActionGetPayload<S['select'][P]>>  :
        P extends 'FlowActionConnection' ? Array < FlowActionConnectionGetPayload<S['select'][P]>>  :
        P extends 'FlowStack' ? Array < FlowStackGetPayload<S['select'][P]>>  :
        P extends '_count' ? FlowCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Flow ? Flow[P] : never
  } 
      : Flow


  type FlowCountArgs = 
    Omit<FlowFindManyArgs, 'select' | 'include'> & {
      select?: FlowCountAggregateInputType | true
    }

  export interface FlowDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Flow that matches the filter.
     * @param {FlowFindUniqueArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlowFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlowFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Flow'> extends True ? Prisma__FlowClient<FlowGetPayload<T>> : Prisma__FlowClient<FlowGetPayload<T> | null, null>

    /**
     * Find one Flow that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlowFindUniqueOrThrowArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlowFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FlowFindUniqueOrThrowArgs>
    ): Prisma__FlowClient<FlowGetPayload<T>>

    /**
     * Find the first Flow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindFirstArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlowFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlowFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Flow'> extends True ? Prisma__FlowClient<FlowGetPayload<T>> : Prisma__FlowClient<FlowGetPayload<T> | null, null>

    /**
     * Find the first Flow that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindFirstOrThrowArgs} args - Arguments to find a Flow
     * @example
     * // Get one Flow
     * const flow = await prisma.flow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlowFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FlowFindFirstOrThrowArgs>
    ): Prisma__FlowClient<FlowGetPayload<T>>

    /**
     * Find zero or more Flows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flows
     * const flows = await prisma.flow.findMany()
     * 
     * // Get first 10 Flows
     * const flows = await prisma.flow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowWithIdOnly = await prisma.flow.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FlowFindManyArgs>(
      args?: SelectSubset<T, FlowFindManyArgs>
    ): Prisma.PrismaPromise<Array<FlowGetPayload<T>>>

    /**
     * Create a Flow.
     * @param {FlowCreateArgs} args - Arguments to create a Flow.
     * @example
     * // Create one Flow
     * const Flow = await prisma.flow.create({
     *   data: {
     *     // ... data to create a Flow
     *   }
     * })
     * 
    **/
    create<T extends FlowCreateArgs>(
      args: SelectSubset<T, FlowCreateArgs>
    ): Prisma__FlowClient<FlowGetPayload<T>>

    /**
     * Create many Flows.
     *     @param {FlowCreateManyArgs} args - Arguments to create many Flows.
     *     @example
     *     // Create many Flows
     *     const flow = await prisma.flow.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlowCreateManyArgs>(
      args?: SelectSubset<T, FlowCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flow.
     * @param {FlowDeleteArgs} args - Arguments to delete one Flow.
     * @example
     * // Delete one Flow
     * const Flow = await prisma.flow.delete({
     *   where: {
     *     // ... filter to delete one Flow
     *   }
     * })
     * 
    **/
    delete<T extends FlowDeleteArgs>(
      args: SelectSubset<T, FlowDeleteArgs>
    ): Prisma__FlowClient<FlowGetPayload<T>>

    /**
     * Update one Flow.
     * @param {FlowUpdateArgs} args - Arguments to update one Flow.
     * @example
     * // Update one Flow
     * const flow = await prisma.flow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlowUpdateArgs>(
      args: SelectSubset<T, FlowUpdateArgs>
    ): Prisma__FlowClient<FlowGetPayload<T>>

    /**
     * Delete zero or more Flows.
     * @param {FlowDeleteManyArgs} args - Arguments to filter Flows to delete.
     * @example
     * // Delete a few Flows
     * const { count } = await prisma.flow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlowDeleteManyArgs>(
      args?: SelectSubset<T, FlowDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flows
     * const flow = await prisma.flow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlowUpdateManyArgs>(
      args: SelectSubset<T, FlowUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flow.
     * @param {FlowUpsertArgs} args - Arguments to update or create a Flow.
     * @example
     * // Update or create a Flow
     * const flow = await prisma.flow.upsert({
     *   create: {
     *     // ... data to create a Flow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flow we want to update
     *   }
     * })
    **/
    upsert<T extends FlowUpsertArgs>(
      args: SelectSubset<T, FlowUpsertArgs>
    ): Prisma__FlowClient<FlowGetPayload<T>>

    /**
     * Count the number of Flows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowCountArgs} args - Arguments to filter Flows to count.
     * @example
     * // Count the number of Flows
     * const count = await prisma.flow.count({
     *   where: {
     *     // ... the filter for the Flows we want to count
     *   }
     * })
    **/
    count<T extends FlowCountArgs>(
      args?: Subset<T, FlowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowAggregateArgs>(args: Subset<T, FlowAggregateArgs>): Prisma.PrismaPromise<GetFlowAggregateType<T>>

    /**
     * Group by Flow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowGroupByArgs['orderBy'] }
        : { orderBy?: FlowGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Flow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlowClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    flowGroup<T extends FlowGroupArgs= {}>(args?: Subset<T, FlowGroupArgs>): Prisma__FlowGroupClient<FlowGroupGetPayload<T> | Null>;

    flowActions<T extends Flow$flowActionsArgs= {}>(args?: Subset<T, Flow$flowActionsArgs>): Prisma.PrismaPromise<Array<FlowActionGetPayload<T>>| Null>;

    FlowActionConnection<T extends Flow$FlowActionConnectionArgs= {}>(args?: Subset<T, Flow$FlowActionConnectionArgs>): Prisma.PrismaPromise<Array<FlowActionConnectionGetPayload<T>>| Null>;

    FlowStack<T extends Flow$FlowStackArgs= {}>(args?: Subset<T, Flow$FlowStackArgs>): Prisma.PrismaPromise<Array<FlowStackGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Flow base type for findUnique actions
   */
  export type FlowFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * Filter, which Flow to fetch.
     */
    where: FlowWhereUniqueInput
  }

  /**
   * Flow findUnique
   */
  export interface FlowFindUniqueArgs extends FlowFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Flow findUniqueOrThrow
   */
  export type FlowFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * Filter, which Flow to fetch.
     */
    where: FlowWhereUniqueInput
  }


  /**
   * Flow base type for findFirst actions
   */
  export type FlowFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * Filter, which Flow to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: Enumerable<FlowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flows.
     */
    distinct?: Enumerable<FlowScalarFieldEnum>
  }

  /**
   * Flow findFirst
   */
  export interface FlowFindFirstArgs extends FlowFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Flow findFirstOrThrow
   */
  export type FlowFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * Filter, which Flow to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: Enumerable<FlowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Flows.
     */
    distinct?: Enumerable<FlowScalarFieldEnum>
  }


  /**
   * Flow findMany
   */
  export type FlowFindManyArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * Filter, which Flows to fetch.
     */
    where?: FlowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Flows to fetch.
     */
    orderBy?: Enumerable<FlowOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Flows.
     */
    cursor?: FlowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Flows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Flows.
     */
    skip?: number
    distinct?: Enumerable<FlowScalarFieldEnum>
  }


  /**
   * Flow create
   */
  export type FlowCreateArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * The data needed to create a Flow.
     */
    data: XOR<FlowCreateInput, FlowUncheckedCreateInput>
  }


  /**
   * Flow createMany
   */
  export type FlowCreateManyArgs = {
    /**
     * The data used to create many Flows.
     */
    data: Enumerable<FlowCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Flow update
   */
  export type FlowUpdateArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * The data needed to update a Flow.
     */
    data: XOR<FlowUpdateInput, FlowUncheckedUpdateInput>
    /**
     * Choose, which Flow to update.
     */
    where: FlowWhereUniqueInput
  }


  /**
   * Flow updateMany
   */
  export type FlowUpdateManyArgs = {
    /**
     * The data used to update Flows.
     */
    data: XOR<FlowUpdateManyMutationInput, FlowUncheckedUpdateManyInput>
    /**
     * Filter which Flows to update
     */
    where?: FlowWhereInput
  }


  /**
   * Flow upsert
   */
  export type FlowUpsertArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * The filter to search for the Flow to update in case it exists.
     */
    where: FlowWhereUniqueInput
    /**
     * In case the Flow found by the `where` argument doesn't exist, create a new Flow with this data.
     */
    create: XOR<FlowCreateInput, FlowUncheckedCreateInput>
    /**
     * In case the Flow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowUpdateInput, FlowUncheckedUpdateInput>
  }


  /**
   * Flow delete
   */
  export type FlowDeleteArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
    /**
     * Filter which Flow to delete.
     */
    where: FlowWhereUniqueInput
  }


  /**
   * Flow deleteMany
   */
  export type FlowDeleteManyArgs = {
    /**
     * Filter which Flows to delete
     */
    where?: FlowWhereInput
  }


  /**
   * Flow.flowActions
   */
  export type Flow$flowActionsArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    where?: FlowActionWhereInput
    orderBy?: Enumerable<FlowActionOrderByWithRelationInput>
    cursor?: FlowActionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowActionScalarFieldEnum>
  }


  /**
   * Flow.FlowActionConnection
   */
  export type Flow$FlowActionConnectionArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    where?: FlowActionConnectionWhereInput
    orderBy?: Enumerable<FlowActionConnectionOrderByWithRelationInput>
    cursor?: FlowActionConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowActionConnectionScalarFieldEnum>
  }


  /**
   * Flow.FlowStack
   */
  export type Flow$FlowStackArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    where?: FlowStackWhereInput
    orderBy?: Enumerable<FlowStackOrderByWithRelationInput>
    cursor?: FlowStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowStackScalarFieldEnum>
  }


  /**
   * Flow without action
   */
  export type FlowArgs = {
    /**
     * Select specific fields to fetch from the Flow
     */
    select?: FlowSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowInclude | null
  }



  /**
   * Model FlowAction
   */


  export type AggregateFlowAction = {
    _count: FlowActionCountAggregateOutputType | null
    _avg: FlowActionAvgAggregateOutputType | null
    _sum: FlowActionSumAggregateOutputType | null
    _min: FlowActionMinAggregateOutputType | null
    _max: FlowActionMaxAggregateOutputType | null
  }

  export type FlowActionAvgAggregateOutputType = {
    id: number | null
    flowId: number | null
  }

  export type FlowActionSumAggregateOutputType = {
    id: number | null
    flowId: number | null
  }

  export type FlowActionMinAggregateOutputType = {
    id: number | null
    name: string | null
    kind: string | null
    flowId: number | null
  }

  export type FlowActionMaxAggregateOutputType = {
    id: number | null
    name: string | null
    kind: string | null
    flowId: number | null
  }

  export type FlowActionCountAggregateOutputType = {
    id: number
    name: number
    kind: number
    flowId: number
    configuration: number
    _all: number
  }


  export type FlowActionAvgAggregateInputType = {
    id?: true
    flowId?: true
  }

  export type FlowActionSumAggregateInputType = {
    id?: true
    flowId?: true
  }

  export type FlowActionMinAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    flowId?: true
  }

  export type FlowActionMaxAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    flowId?: true
  }

  export type FlowActionCountAggregateInputType = {
    id?: true
    name?: true
    kind?: true
    flowId?: true
    configuration?: true
    _all?: true
  }

  export type FlowActionAggregateArgs = {
    /**
     * Filter which FlowAction to aggregate.
     */
    where?: FlowActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActions to fetch.
     */
    orderBy?: Enumerable<FlowActionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowActions
    **/
    _count?: true | FlowActionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowActionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowActionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowActionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowActionMaxAggregateInputType
  }

  export type GetFlowActionAggregateType<T extends FlowActionAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowAction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowAction[P]>
      : GetScalarType<T[P], AggregateFlowAction[P]>
  }




  export type FlowActionGroupByArgs = {
    where?: FlowActionWhereInput
    orderBy?: Enumerable<FlowActionOrderByWithAggregationInput>
    by: FlowActionScalarFieldEnum[]
    having?: FlowActionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowActionCountAggregateInputType | true
    _avg?: FlowActionAvgAggregateInputType
    _sum?: FlowActionSumAggregateInputType
    _min?: FlowActionMinAggregateInputType
    _max?: FlowActionMaxAggregateInputType
  }


  export type FlowActionGroupByOutputType = {
    id: number
    name: string
    kind: string
    flowId: number
    configuration: JsonValue
    _count: FlowActionCountAggregateOutputType | null
    _avg: FlowActionAvgAggregateOutputType | null
    _sum: FlowActionSumAggregateOutputType | null
    _min: FlowActionMinAggregateOutputType | null
    _max: FlowActionMaxAggregateOutputType | null
  }

  type GetFlowActionGroupByPayload<T extends FlowActionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FlowActionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowActionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowActionGroupByOutputType[P]>
            : GetScalarType<T[P], FlowActionGroupByOutputType[P]>
        }
      >
    >


  export type FlowActionSelect = {
    id?: boolean
    name?: boolean
    kind?: boolean
    flowId?: boolean
    configuration?: boolean
    flow?: boolean | FlowArgs
    fromFlowActionConnections?: boolean | FlowAction$fromFlowActionConnectionsArgs
    toFlowActionConnections?: boolean | FlowAction$toFlowActionConnectionsArgs
    flowStates?: boolean | FlowAction$flowStatesArgs
    _count?: boolean | FlowActionCountOutputTypeArgs
  }


  export type FlowActionInclude = {
    flow?: boolean | FlowArgs
    fromFlowActionConnections?: boolean | FlowAction$fromFlowActionConnectionsArgs
    toFlowActionConnections?: boolean | FlowAction$toFlowActionConnectionsArgs
    flowStates?: boolean | FlowAction$flowStatesArgs
    _count?: boolean | FlowActionCountOutputTypeArgs
  }

  export type FlowActionGetPayload<S extends boolean | null | undefined | FlowActionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowAction :
    S extends undefined ? never :
    S extends { include: any } & (FlowActionArgs | FlowActionFindManyArgs)
    ? FlowAction  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'flow' ? FlowGetPayload<S['include'][P]> :
        P extends 'fromFlowActionConnections' ? Array < FlowActionConnectionGetPayload<S['include'][P]>>  :
        P extends 'toFlowActionConnections' ? Array < FlowActionConnectionGetPayload<S['include'][P]>>  :
        P extends 'flowStates' ? Array < FlowStateGetPayload<S['include'][P]>>  :
        P extends '_count' ? FlowActionCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FlowActionArgs | FlowActionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'flow' ? FlowGetPayload<S['select'][P]> :
        P extends 'fromFlowActionConnections' ? Array < FlowActionConnectionGetPayload<S['select'][P]>>  :
        P extends 'toFlowActionConnections' ? Array < FlowActionConnectionGetPayload<S['select'][P]>>  :
        P extends 'flowStates' ? Array < FlowStateGetPayload<S['select'][P]>>  :
        P extends '_count' ? FlowActionCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof FlowAction ? FlowAction[P] : never
  } 
      : FlowAction


  type FlowActionCountArgs = 
    Omit<FlowActionFindManyArgs, 'select' | 'include'> & {
      select?: FlowActionCountAggregateInputType | true
    }

  export interface FlowActionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FlowAction that matches the filter.
     * @param {FlowActionFindUniqueArgs} args - Arguments to find a FlowAction
     * @example
     * // Get one FlowAction
     * const flowAction = await prisma.flowAction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlowActionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlowActionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FlowAction'> extends True ? Prisma__FlowActionClient<FlowActionGetPayload<T>> : Prisma__FlowActionClient<FlowActionGetPayload<T> | null, null>

    /**
     * Find one FlowAction that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlowActionFindUniqueOrThrowArgs} args - Arguments to find a FlowAction
     * @example
     * // Get one FlowAction
     * const flowAction = await prisma.flowAction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlowActionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FlowActionFindUniqueOrThrowArgs>
    ): Prisma__FlowActionClient<FlowActionGetPayload<T>>

    /**
     * Find the first FlowAction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionFindFirstArgs} args - Arguments to find a FlowAction
     * @example
     * // Get one FlowAction
     * const flowAction = await prisma.flowAction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlowActionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlowActionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FlowAction'> extends True ? Prisma__FlowActionClient<FlowActionGetPayload<T>> : Prisma__FlowActionClient<FlowActionGetPayload<T> | null, null>

    /**
     * Find the first FlowAction that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionFindFirstOrThrowArgs} args - Arguments to find a FlowAction
     * @example
     * // Get one FlowAction
     * const flowAction = await prisma.flowAction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlowActionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FlowActionFindFirstOrThrowArgs>
    ): Prisma__FlowActionClient<FlowActionGetPayload<T>>

    /**
     * Find zero or more FlowActions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowActions
     * const flowActions = await prisma.flowAction.findMany()
     * 
     * // Get first 10 FlowActions
     * const flowActions = await prisma.flowAction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowActionWithIdOnly = await prisma.flowAction.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FlowActionFindManyArgs>(
      args?: SelectSubset<T, FlowActionFindManyArgs>
    ): Prisma.PrismaPromise<Array<FlowActionGetPayload<T>>>

    /**
     * Create a FlowAction.
     * @param {FlowActionCreateArgs} args - Arguments to create a FlowAction.
     * @example
     * // Create one FlowAction
     * const FlowAction = await prisma.flowAction.create({
     *   data: {
     *     // ... data to create a FlowAction
     *   }
     * })
     * 
    **/
    create<T extends FlowActionCreateArgs>(
      args: SelectSubset<T, FlowActionCreateArgs>
    ): Prisma__FlowActionClient<FlowActionGetPayload<T>>

    /**
     * Create many FlowActions.
     *     @param {FlowActionCreateManyArgs} args - Arguments to create many FlowActions.
     *     @example
     *     // Create many FlowActions
     *     const flowAction = await prisma.flowAction.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlowActionCreateManyArgs>(
      args?: SelectSubset<T, FlowActionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowAction.
     * @param {FlowActionDeleteArgs} args - Arguments to delete one FlowAction.
     * @example
     * // Delete one FlowAction
     * const FlowAction = await prisma.flowAction.delete({
     *   where: {
     *     // ... filter to delete one FlowAction
     *   }
     * })
     * 
    **/
    delete<T extends FlowActionDeleteArgs>(
      args: SelectSubset<T, FlowActionDeleteArgs>
    ): Prisma__FlowActionClient<FlowActionGetPayload<T>>

    /**
     * Update one FlowAction.
     * @param {FlowActionUpdateArgs} args - Arguments to update one FlowAction.
     * @example
     * // Update one FlowAction
     * const flowAction = await prisma.flowAction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlowActionUpdateArgs>(
      args: SelectSubset<T, FlowActionUpdateArgs>
    ): Prisma__FlowActionClient<FlowActionGetPayload<T>>

    /**
     * Delete zero or more FlowActions.
     * @param {FlowActionDeleteManyArgs} args - Arguments to filter FlowActions to delete.
     * @example
     * // Delete a few FlowActions
     * const { count } = await prisma.flowAction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlowActionDeleteManyArgs>(
      args?: SelectSubset<T, FlowActionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowActions
     * const flowAction = await prisma.flowAction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlowActionUpdateManyArgs>(
      args: SelectSubset<T, FlowActionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowAction.
     * @param {FlowActionUpsertArgs} args - Arguments to update or create a FlowAction.
     * @example
     * // Update or create a FlowAction
     * const flowAction = await prisma.flowAction.upsert({
     *   create: {
     *     // ... data to create a FlowAction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowAction we want to update
     *   }
     * })
    **/
    upsert<T extends FlowActionUpsertArgs>(
      args: SelectSubset<T, FlowActionUpsertArgs>
    ): Prisma__FlowActionClient<FlowActionGetPayload<T>>

    /**
     * Count the number of FlowActions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionCountArgs} args - Arguments to filter FlowActions to count.
     * @example
     * // Count the number of FlowActions
     * const count = await prisma.flowAction.count({
     *   where: {
     *     // ... the filter for the FlowActions we want to count
     *   }
     * })
    **/
    count<T extends FlowActionCountArgs>(
      args?: Subset<T, FlowActionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowActionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowActionAggregateArgs>(args: Subset<T, FlowActionAggregateArgs>): Prisma.PrismaPromise<GetFlowActionAggregateType<T>>

    /**
     * Group by FlowAction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowActionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowActionGroupByArgs['orderBy'] }
        : { orderBy?: FlowActionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowActionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowActionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowAction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlowActionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    flow<T extends FlowArgs= {}>(args?: Subset<T, FlowArgs>): Prisma__FlowClient<FlowGetPayload<T> | Null>;

    fromFlowActionConnections<T extends FlowAction$fromFlowActionConnectionsArgs= {}>(args?: Subset<T, FlowAction$fromFlowActionConnectionsArgs>): Prisma.PrismaPromise<Array<FlowActionConnectionGetPayload<T>>| Null>;

    toFlowActionConnections<T extends FlowAction$toFlowActionConnectionsArgs= {}>(args?: Subset<T, FlowAction$toFlowActionConnectionsArgs>): Prisma.PrismaPromise<Array<FlowActionConnectionGetPayload<T>>| Null>;

    flowStates<T extends FlowAction$flowStatesArgs= {}>(args?: Subset<T, FlowAction$flowStatesArgs>): Prisma.PrismaPromise<Array<FlowStateGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FlowAction base type for findUnique actions
   */
  export type FlowActionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * Filter, which FlowAction to fetch.
     */
    where: FlowActionWhereUniqueInput
  }

  /**
   * FlowAction findUnique
   */
  export interface FlowActionFindUniqueArgs extends FlowActionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowAction findUniqueOrThrow
   */
  export type FlowActionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * Filter, which FlowAction to fetch.
     */
    where: FlowActionWhereUniqueInput
  }


  /**
   * FlowAction base type for findFirst actions
   */
  export type FlowActionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * Filter, which FlowAction to fetch.
     */
    where?: FlowActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActions to fetch.
     */
    orderBy?: Enumerable<FlowActionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowActions.
     */
    cursor?: FlowActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowActions.
     */
    distinct?: Enumerable<FlowActionScalarFieldEnum>
  }

  /**
   * FlowAction findFirst
   */
  export interface FlowActionFindFirstArgs extends FlowActionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowAction findFirstOrThrow
   */
  export type FlowActionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * Filter, which FlowAction to fetch.
     */
    where?: FlowActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActions to fetch.
     */
    orderBy?: Enumerable<FlowActionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowActions.
     */
    cursor?: FlowActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowActions.
     */
    distinct?: Enumerable<FlowActionScalarFieldEnum>
  }


  /**
   * FlowAction findMany
   */
  export type FlowActionFindManyArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * Filter, which FlowActions to fetch.
     */
    where?: FlowActionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActions to fetch.
     */
    orderBy?: Enumerable<FlowActionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowActions.
     */
    cursor?: FlowActionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActions.
     */
    skip?: number
    distinct?: Enumerable<FlowActionScalarFieldEnum>
  }


  /**
   * FlowAction create
   */
  export type FlowActionCreateArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * The data needed to create a FlowAction.
     */
    data: XOR<FlowActionCreateInput, FlowActionUncheckedCreateInput>
  }


  /**
   * FlowAction createMany
   */
  export type FlowActionCreateManyArgs = {
    /**
     * The data used to create many FlowActions.
     */
    data: Enumerable<FlowActionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FlowAction update
   */
  export type FlowActionUpdateArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * The data needed to update a FlowAction.
     */
    data: XOR<FlowActionUpdateInput, FlowActionUncheckedUpdateInput>
    /**
     * Choose, which FlowAction to update.
     */
    where: FlowActionWhereUniqueInput
  }


  /**
   * FlowAction updateMany
   */
  export type FlowActionUpdateManyArgs = {
    /**
     * The data used to update FlowActions.
     */
    data: XOR<FlowActionUpdateManyMutationInput, FlowActionUncheckedUpdateManyInput>
    /**
     * Filter which FlowActions to update
     */
    where?: FlowActionWhereInput
  }


  /**
   * FlowAction upsert
   */
  export type FlowActionUpsertArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * The filter to search for the FlowAction to update in case it exists.
     */
    where: FlowActionWhereUniqueInput
    /**
     * In case the FlowAction found by the `where` argument doesn't exist, create a new FlowAction with this data.
     */
    create: XOR<FlowActionCreateInput, FlowActionUncheckedCreateInput>
    /**
     * In case the FlowAction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowActionUpdateInput, FlowActionUncheckedUpdateInput>
  }


  /**
   * FlowAction delete
   */
  export type FlowActionDeleteArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
    /**
     * Filter which FlowAction to delete.
     */
    where: FlowActionWhereUniqueInput
  }


  /**
   * FlowAction deleteMany
   */
  export type FlowActionDeleteManyArgs = {
    /**
     * Filter which FlowActions to delete
     */
    where?: FlowActionWhereInput
  }


  /**
   * FlowAction.fromFlowActionConnections
   */
  export type FlowAction$fromFlowActionConnectionsArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    where?: FlowActionConnectionWhereInput
    orderBy?: Enumerable<FlowActionConnectionOrderByWithRelationInput>
    cursor?: FlowActionConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowActionConnectionScalarFieldEnum>
  }


  /**
   * FlowAction.toFlowActionConnections
   */
  export type FlowAction$toFlowActionConnectionsArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    where?: FlowActionConnectionWhereInput
    orderBy?: Enumerable<FlowActionConnectionOrderByWithRelationInput>
    cursor?: FlowActionConnectionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowActionConnectionScalarFieldEnum>
  }


  /**
   * FlowAction.flowStates
   */
  export type FlowAction$flowStatesArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    where?: FlowStateWhereInput
    orderBy?: Enumerable<FlowStateOrderByWithRelationInput>
    cursor?: FlowStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowStateScalarFieldEnum>
  }


  /**
   * FlowAction without action
   */
  export type FlowActionArgs = {
    /**
     * Select specific fields to fetch from the FlowAction
     */
    select?: FlowActionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionInclude | null
  }



  /**
   * Model FlowActionConnection
   */


  export type AggregateFlowActionConnection = {
    _count: FlowActionConnectionCountAggregateOutputType | null
    _avg: FlowActionConnectionAvgAggregateOutputType | null
    _sum: FlowActionConnectionSumAggregateOutputType | null
    _min: FlowActionConnectionMinAggregateOutputType | null
    _max: FlowActionConnectionMaxAggregateOutputType | null
  }

  export type FlowActionConnectionAvgAggregateOutputType = {
    id: number | null
    flowId: number | null
    fromId: number | null
    toId: number | null
  }

  export type FlowActionConnectionSumAggregateOutputType = {
    id: number | null
    flowId: number | null
    fromId: number | null
    toId: number | null
  }

  export type FlowActionConnectionMinAggregateOutputType = {
    id: number | null
    flowId: number | null
    fromId: number | null
    toId: number | null
    socket: string | null
  }

  export type FlowActionConnectionMaxAggregateOutputType = {
    id: number | null
    flowId: number | null
    fromId: number | null
    toId: number | null
    socket: string | null
  }

  export type FlowActionConnectionCountAggregateOutputType = {
    id: number
    flowId: number
    fromId: number
    toId: number
    socket: number
    _all: number
  }


  export type FlowActionConnectionAvgAggregateInputType = {
    id?: true
    flowId?: true
    fromId?: true
    toId?: true
  }

  export type FlowActionConnectionSumAggregateInputType = {
    id?: true
    flowId?: true
    fromId?: true
    toId?: true
  }

  export type FlowActionConnectionMinAggregateInputType = {
    id?: true
    flowId?: true
    fromId?: true
    toId?: true
    socket?: true
  }

  export type FlowActionConnectionMaxAggregateInputType = {
    id?: true
    flowId?: true
    fromId?: true
    toId?: true
    socket?: true
  }

  export type FlowActionConnectionCountAggregateInputType = {
    id?: true
    flowId?: true
    fromId?: true
    toId?: true
    socket?: true
    _all?: true
  }

  export type FlowActionConnectionAggregateArgs = {
    /**
     * Filter which FlowActionConnection to aggregate.
     */
    where?: FlowActionConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActionConnections to fetch.
     */
    orderBy?: Enumerable<FlowActionConnectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowActionConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActionConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActionConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowActionConnections
    **/
    _count?: true | FlowActionConnectionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowActionConnectionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowActionConnectionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowActionConnectionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowActionConnectionMaxAggregateInputType
  }

  export type GetFlowActionConnectionAggregateType<T extends FlowActionConnectionAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowActionConnection]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowActionConnection[P]>
      : GetScalarType<T[P], AggregateFlowActionConnection[P]>
  }




  export type FlowActionConnectionGroupByArgs = {
    where?: FlowActionConnectionWhereInput
    orderBy?: Enumerable<FlowActionConnectionOrderByWithAggregationInput>
    by: FlowActionConnectionScalarFieldEnum[]
    having?: FlowActionConnectionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowActionConnectionCountAggregateInputType | true
    _avg?: FlowActionConnectionAvgAggregateInputType
    _sum?: FlowActionConnectionSumAggregateInputType
    _min?: FlowActionConnectionMinAggregateInputType
    _max?: FlowActionConnectionMaxAggregateInputType
  }


  export type FlowActionConnectionGroupByOutputType = {
    id: number
    flowId: number
    fromId: number
    toId: number
    socket: string
    _count: FlowActionConnectionCountAggregateOutputType | null
    _avg: FlowActionConnectionAvgAggregateOutputType | null
    _sum: FlowActionConnectionSumAggregateOutputType | null
    _min: FlowActionConnectionMinAggregateOutputType | null
    _max: FlowActionConnectionMaxAggregateOutputType | null
  }

  type GetFlowActionConnectionGroupByPayload<T extends FlowActionConnectionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FlowActionConnectionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowActionConnectionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowActionConnectionGroupByOutputType[P]>
            : GetScalarType<T[P], FlowActionConnectionGroupByOutputType[P]>
        }
      >
    >


  export type FlowActionConnectionSelect = {
    id?: boolean
    flowId?: boolean
    fromId?: boolean
    toId?: boolean
    socket?: boolean
    flow?: boolean | FlowArgs
    fromFlowAction?: boolean | FlowActionArgs
    toFlowAction?: boolean | FlowActionArgs
  }


  export type FlowActionConnectionInclude = {
    flow?: boolean | FlowArgs
    fromFlowAction?: boolean | FlowActionArgs
    toFlowAction?: boolean | FlowActionArgs
  }

  export type FlowActionConnectionGetPayload<S extends boolean | null | undefined | FlowActionConnectionArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowActionConnection :
    S extends undefined ? never :
    S extends { include: any } & (FlowActionConnectionArgs | FlowActionConnectionFindManyArgs)
    ? FlowActionConnection  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'flow' ? FlowGetPayload<S['include'][P]> :
        P extends 'fromFlowAction' ? FlowActionGetPayload<S['include'][P]> :
        P extends 'toFlowAction' ? FlowActionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FlowActionConnectionArgs | FlowActionConnectionFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'flow' ? FlowGetPayload<S['select'][P]> :
        P extends 'fromFlowAction' ? FlowActionGetPayload<S['select'][P]> :
        P extends 'toFlowAction' ? FlowActionGetPayload<S['select'][P]> :  P extends keyof FlowActionConnection ? FlowActionConnection[P] : never
  } 
      : FlowActionConnection


  type FlowActionConnectionCountArgs = 
    Omit<FlowActionConnectionFindManyArgs, 'select' | 'include'> & {
      select?: FlowActionConnectionCountAggregateInputType | true
    }

  export interface FlowActionConnectionDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FlowActionConnection that matches the filter.
     * @param {FlowActionConnectionFindUniqueArgs} args - Arguments to find a FlowActionConnection
     * @example
     * // Get one FlowActionConnection
     * const flowActionConnection = await prisma.flowActionConnection.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlowActionConnectionFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlowActionConnectionFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FlowActionConnection'> extends True ? Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>> : Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T> | null, null>

    /**
     * Find one FlowActionConnection that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlowActionConnectionFindUniqueOrThrowArgs} args - Arguments to find a FlowActionConnection
     * @example
     * // Get one FlowActionConnection
     * const flowActionConnection = await prisma.flowActionConnection.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlowActionConnectionFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FlowActionConnectionFindUniqueOrThrowArgs>
    ): Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>>

    /**
     * Find the first FlowActionConnection that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionConnectionFindFirstArgs} args - Arguments to find a FlowActionConnection
     * @example
     * // Get one FlowActionConnection
     * const flowActionConnection = await prisma.flowActionConnection.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlowActionConnectionFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlowActionConnectionFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FlowActionConnection'> extends True ? Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>> : Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T> | null, null>

    /**
     * Find the first FlowActionConnection that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionConnectionFindFirstOrThrowArgs} args - Arguments to find a FlowActionConnection
     * @example
     * // Get one FlowActionConnection
     * const flowActionConnection = await prisma.flowActionConnection.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlowActionConnectionFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FlowActionConnectionFindFirstOrThrowArgs>
    ): Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>>

    /**
     * Find zero or more FlowActionConnections that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionConnectionFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowActionConnections
     * const flowActionConnections = await prisma.flowActionConnection.findMany()
     * 
     * // Get first 10 FlowActionConnections
     * const flowActionConnections = await prisma.flowActionConnection.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowActionConnectionWithIdOnly = await prisma.flowActionConnection.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FlowActionConnectionFindManyArgs>(
      args?: SelectSubset<T, FlowActionConnectionFindManyArgs>
    ): Prisma.PrismaPromise<Array<FlowActionConnectionGetPayload<T>>>

    /**
     * Create a FlowActionConnection.
     * @param {FlowActionConnectionCreateArgs} args - Arguments to create a FlowActionConnection.
     * @example
     * // Create one FlowActionConnection
     * const FlowActionConnection = await prisma.flowActionConnection.create({
     *   data: {
     *     // ... data to create a FlowActionConnection
     *   }
     * })
     * 
    **/
    create<T extends FlowActionConnectionCreateArgs>(
      args: SelectSubset<T, FlowActionConnectionCreateArgs>
    ): Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>>

    /**
     * Create many FlowActionConnections.
     *     @param {FlowActionConnectionCreateManyArgs} args - Arguments to create many FlowActionConnections.
     *     @example
     *     // Create many FlowActionConnections
     *     const flowActionConnection = await prisma.flowActionConnection.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlowActionConnectionCreateManyArgs>(
      args?: SelectSubset<T, FlowActionConnectionCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowActionConnection.
     * @param {FlowActionConnectionDeleteArgs} args - Arguments to delete one FlowActionConnection.
     * @example
     * // Delete one FlowActionConnection
     * const FlowActionConnection = await prisma.flowActionConnection.delete({
     *   where: {
     *     // ... filter to delete one FlowActionConnection
     *   }
     * })
     * 
    **/
    delete<T extends FlowActionConnectionDeleteArgs>(
      args: SelectSubset<T, FlowActionConnectionDeleteArgs>
    ): Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>>

    /**
     * Update one FlowActionConnection.
     * @param {FlowActionConnectionUpdateArgs} args - Arguments to update one FlowActionConnection.
     * @example
     * // Update one FlowActionConnection
     * const flowActionConnection = await prisma.flowActionConnection.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlowActionConnectionUpdateArgs>(
      args: SelectSubset<T, FlowActionConnectionUpdateArgs>
    ): Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>>

    /**
     * Delete zero or more FlowActionConnections.
     * @param {FlowActionConnectionDeleteManyArgs} args - Arguments to filter FlowActionConnections to delete.
     * @example
     * // Delete a few FlowActionConnections
     * const { count } = await prisma.flowActionConnection.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlowActionConnectionDeleteManyArgs>(
      args?: SelectSubset<T, FlowActionConnectionDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowActionConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionConnectionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowActionConnections
     * const flowActionConnection = await prisma.flowActionConnection.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlowActionConnectionUpdateManyArgs>(
      args: SelectSubset<T, FlowActionConnectionUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowActionConnection.
     * @param {FlowActionConnectionUpsertArgs} args - Arguments to update or create a FlowActionConnection.
     * @example
     * // Update or create a FlowActionConnection
     * const flowActionConnection = await prisma.flowActionConnection.upsert({
     *   create: {
     *     // ... data to create a FlowActionConnection
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowActionConnection we want to update
     *   }
     * })
    **/
    upsert<T extends FlowActionConnectionUpsertArgs>(
      args: SelectSubset<T, FlowActionConnectionUpsertArgs>
    ): Prisma__FlowActionConnectionClient<FlowActionConnectionGetPayload<T>>

    /**
     * Count the number of FlowActionConnections.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionConnectionCountArgs} args - Arguments to filter FlowActionConnections to count.
     * @example
     * // Count the number of FlowActionConnections
     * const count = await prisma.flowActionConnection.count({
     *   where: {
     *     // ... the filter for the FlowActionConnections we want to count
     *   }
     * })
    **/
    count<T extends FlowActionConnectionCountArgs>(
      args?: Subset<T, FlowActionConnectionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowActionConnectionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowActionConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionConnectionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowActionConnectionAggregateArgs>(args: Subset<T, FlowActionConnectionAggregateArgs>): Prisma.PrismaPromise<GetFlowActionConnectionAggregateType<T>>

    /**
     * Group by FlowActionConnection.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowActionConnectionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowActionConnectionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowActionConnectionGroupByArgs['orderBy'] }
        : { orderBy?: FlowActionConnectionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowActionConnectionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowActionConnectionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowActionConnection.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlowActionConnectionClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    flow<T extends FlowArgs= {}>(args?: Subset<T, FlowArgs>): Prisma__FlowClient<FlowGetPayload<T> | Null>;

    fromFlowAction<T extends FlowActionArgs= {}>(args?: Subset<T, FlowActionArgs>): Prisma__FlowActionClient<FlowActionGetPayload<T> | Null>;

    toFlowAction<T extends FlowActionArgs= {}>(args?: Subset<T, FlowActionArgs>): Prisma__FlowActionClient<FlowActionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FlowActionConnection base type for findUnique actions
   */
  export type FlowActionConnectionFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * Filter, which FlowActionConnection to fetch.
     */
    where: FlowActionConnectionWhereUniqueInput
  }

  /**
   * FlowActionConnection findUnique
   */
  export interface FlowActionConnectionFindUniqueArgs extends FlowActionConnectionFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowActionConnection findUniqueOrThrow
   */
  export type FlowActionConnectionFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * Filter, which FlowActionConnection to fetch.
     */
    where: FlowActionConnectionWhereUniqueInput
  }


  /**
   * FlowActionConnection base type for findFirst actions
   */
  export type FlowActionConnectionFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * Filter, which FlowActionConnection to fetch.
     */
    where?: FlowActionConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActionConnections to fetch.
     */
    orderBy?: Enumerable<FlowActionConnectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowActionConnections.
     */
    cursor?: FlowActionConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActionConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActionConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowActionConnections.
     */
    distinct?: Enumerable<FlowActionConnectionScalarFieldEnum>
  }

  /**
   * FlowActionConnection findFirst
   */
  export interface FlowActionConnectionFindFirstArgs extends FlowActionConnectionFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowActionConnection findFirstOrThrow
   */
  export type FlowActionConnectionFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * Filter, which FlowActionConnection to fetch.
     */
    where?: FlowActionConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActionConnections to fetch.
     */
    orderBy?: Enumerable<FlowActionConnectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowActionConnections.
     */
    cursor?: FlowActionConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActionConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActionConnections.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowActionConnections.
     */
    distinct?: Enumerable<FlowActionConnectionScalarFieldEnum>
  }


  /**
   * FlowActionConnection findMany
   */
  export type FlowActionConnectionFindManyArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * Filter, which FlowActionConnections to fetch.
     */
    where?: FlowActionConnectionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowActionConnections to fetch.
     */
    orderBy?: Enumerable<FlowActionConnectionOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowActionConnections.
     */
    cursor?: FlowActionConnectionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowActionConnections from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowActionConnections.
     */
    skip?: number
    distinct?: Enumerable<FlowActionConnectionScalarFieldEnum>
  }


  /**
   * FlowActionConnection create
   */
  export type FlowActionConnectionCreateArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * The data needed to create a FlowActionConnection.
     */
    data: XOR<FlowActionConnectionCreateInput, FlowActionConnectionUncheckedCreateInput>
  }


  /**
   * FlowActionConnection createMany
   */
  export type FlowActionConnectionCreateManyArgs = {
    /**
     * The data used to create many FlowActionConnections.
     */
    data: Enumerable<FlowActionConnectionCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FlowActionConnection update
   */
  export type FlowActionConnectionUpdateArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * The data needed to update a FlowActionConnection.
     */
    data: XOR<FlowActionConnectionUpdateInput, FlowActionConnectionUncheckedUpdateInput>
    /**
     * Choose, which FlowActionConnection to update.
     */
    where: FlowActionConnectionWhereUniqueInput
  }


  /**
   * FlowActionConnection updateMany
   */
  export type FlowActionConnectionUpdateManyArgs = {
    /**
     * The data used to update FlowActionConnections.
     */
    data: XOR<FlowActionConnectionUpdateManyMutationInput, FlowActionConnectionUncheckedUpdateManyInput>
    /**
     * Filter which FlowActionConnections to update
     */
    where?: FlowActionConnectionWhereInput
  }


  /**
   * FlowActionConnection upsert
   */
  export type FlowActionConnectionUpsertArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * The filter to search for the FlowActionConnection to update in case it exists.
     */
    where: FlowActionConnectionWhereUniqueInput
    /**
     * In case the FlowActionConnection found by the `where` argument doesn't exist, create a new FlowActionConnection with this data.
     */
    create: XOR<FlowActionConnectionCreateInput, FlowActionConnectionUncheckedCreateInput>
    /**
     * In case the FlowActionConnection was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowActionConnectionUpdateInput, FlowActionConnectionUncheckedUpdateInput>
  }


  /**
   * FlowActionConnection delete
   */
  export type FlowActionConnectionDeleteArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
    /**
     * Filter which FlowActionConnection to delete.
     */
    where: FlowActionConnectionWhereUniqueInput
  }


  /**
   * FlowActionConnection deleteMany
   */
  export type FlowActionConnectionDeleteManyArgs = {
    /**
     * Filter which FlowActionConnections to delete
     */
    where?: FlowActionConnectionWhereInput
  }


  /**
   * FlowActionConnection without action
   */
  export type FlowActionConnectionArgs = {
    /**
     * Select specific fields to fetch from the FlowActionConnection
     */
    select?: FlowActionConnectionSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowActionConnectionInclude | null
  }



  /**
   * Model FlowStack
   */


  export type AggregateFlowStack = {
    _count: FlowStackCountAggregateOutputType | null
    _avg: FlowStackAvgAggregateOutputType | null
    _sum: FlowStackSumAggregateOutputType | null
    _min: FlowStackMinAggregateOutputType | null
    _max: FlowStackMaxAggregateOutputType | null
  }

  export type FlowStackAvgAggregateOutputType = {
    id: number | null
    flowId: number | null
    parentId: number | null
    accountChannelId: number | null
  }

  export type FlowStackSumAggregateOutputType = {
    id: number | null
    flowId: number | null
    parentId: number | null
    accountChannelId: number | null
  }

  export type FlowStackMinAggregateOutputType = {
    id: number | null
    flowId: number | null
    parentId: number | null
    accountChannelId: number | null
    createdAt: Date | null
  }

  export type FlowStackMaxAggregateOutputType = {
    id: number | null
    flowId: number | null
    parentId: number | null
    accountChannelId: number | null
    createdAt: Date | null
  }

  export type FlowStackCountAggregateOutputType = {
    id: number
    flowId: number
    parentId: number
    accountChannelId: number
    context: number
    createdAt: number
    _all: number
  }


  export type FlowStackAvgAggregateInputType = {
    id?: true
    flowId?: true
    parentId?: true
    accountChannelId?: true
  }

  export type FlowStackSumAggregateInputType = {
    id?: true
    flowId?: true
    parentId?: true
    accountChannelId?: true
  }

  export type FlowStackMinAggregateInputType = {
    id?: true
    flowId?: true
    parentId?: true
    accountChannelId?: true
    createdAt?: true
  }

  export type FlowStackMaxAggregateInputType = {
    id?: true
    flowId?: true
    parentId?: true
    accountChannelId?: true
    createdAt?: true
  }

  export type FlowStackCountAggregateInputType = {
    id?: true
    flowId?: true
    parentId?: true
    accountChannelId?: true
    context?: true
    createdAt?: true
    _all?: true
  }

  export type FlowStackAggregateArgs = {
    /**
     * Filter which FlowStack to aggregate.
     */
    where?: FlowStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStacks to fetch.
     */
    orderBy?: Enumerable<FlowStackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowStacks
    **/
    _count?: true | FlowStackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowStackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowStackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowStackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowStackMaxAggregateInputType
  }

  export type GetFlowStackAggregateType<T extends FlowStackAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowStack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowStack[P]>
      : GetScalarType<T[P], AggregateFlowStack[P]>
  }




  export type FlowStackGroupByArgs = {
    where?: FlowStackWhereInput
    orderBy?: Enumerable<FlowStackOrderByWithAggregationInput>
    by: FlowStackScalarFieldEnum[]
    having?: FlowStackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowStackCountAggregateInputType | true
    _avg?: FlowStackAvgAggregateInputType
    _sum?: FlowStackSumAggregateInputType
    _min?: FlowStackMinAggregateInputType
    _max?: FlowStackMaxAggregateInputType
  }


  export type FlowStackGroupByOutputType = {
    id: number
    flowId: number
    parentId: number | null
    accountChannelId: number
    context: JsonValue
    createdAt: Date
    _count: FlowStackCountAggregateOutputType | null
    _avg: FlowStackAvgAggregateOutputType | null
    _sum: FlowStackSumAggregateOutputType | null
    _min: FlowStackMinAggregateOutputType | null
    _max: FlowStackMaxAggregateOutputType | null
  }

  type GetFlowStackGroupByPayload<T extends FlowStackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FlowStackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowStackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowStackGroupByOutputType[P]>
            : GetScalarType<T[P], FlowStackGroupByOutputType[P]>
        }
      >
    >


  export type FlowStackSelect = {
    id?: boolean
    flowId?: boolean
    parentId?: boolean
    accountChannelId?: boolean
    context?: boolean
    createdAt?: boolean
    flow?: boolean | FlowArgs
    parent?: boolean | FlowStackArgs
    accountChannel?: boolean | AccountChannelArgs
    children?: boolean | FlowStack$childrenArgs
    flowStates?: boolean | FlowStack$flowStatesArgs
    _count?: boolean | FlowStackCountOutputTypeArgs
  }


  export type FlowStackInclude = {
    flow?: boolean | FlowArgs
    parent?: boolean | FlowStackArgs
    accountChannel?: boolean | AccountChannelArgs
    children?: boolean | FlowStack$childrenArgs
    flowStates?: boolean | FlowStack$flowStatesArgs
    _count?: boolean | FlowStackCountOutputTypeArgs
  }

  export type FlowStackGetPayload<S extends boolean | null | undefined | FlowStackArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowStack :
    S extends undefined ? never :
    S extends { include: any } & (FlowStackArgs | FlowStackFindManyArgs)
    ? FlowStack  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'flow' ? FlowGetPayload<S['include'][P]> :
        P extends 'parent' ? FlowStackGetPayload<S['include'][P]> | null :
        P extends 'accountChannel' ? AccountChannelGetPayload<S['include'][P]> :
        P extends 'children' ? Array < FlowStackGetPayload<S['include'][P]>>  :
        P extends 'flowStates' ? Array < FlowStateGetPayload<S['include'][P]>>  :
        P extends '_count' ? FlowStackCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FlowStackArgs | FlowStackFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'flow' ? FlowGetPayload<S['select'][P]> :
        P extends 'parent' ? FlowStackGetPayload<S['select'][P]> | null :
        P extends 'accountChannel' ? AccountChannelGetPayload<S['select'][P]> :
        P extends 'children' ? Array < FlowStackGetPayload<S['select'][P]>>  :
        P extends 'flowStates' ? Array < FlowStateGetPayload<S['select'][P]>>  :
        P extends '_count' ? FlowStackCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof FlowStack ? FlowStack[P] : never
  } 
      : FlowStack


  type FlowStackCountArgs = 
    Omit<FlowStackFindManyArgs, 'select' | 'include'> & {
      select?: FlowStackCountAggregateInputType | true
    }

  export interface FlowStackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FlowStack that matches the filter.
     * @param {FlowStackFindUniqueArgs} args - Arguments to find a FlowStack
     * @example
     * // Get one FlowStack
     * const flowStack = await prisma.flowStack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlowStackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlowStackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FlowStack'> extends True ? Prisma__FlowStackClient<FlowStackGetPayload<T>> : Prisma__FlowStackClient<FlowStackGetPayload<T> | null, null>

    /**
     * Find one FlowStack that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlowStackFindUniqueOrThrowArgs} args - Arguments to find a FlowStack
     * @example
     * // Get one FlowStack
     * const flowStack = await prisma.flowStack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlowStackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FlowStackFindUniqueOrThrowArgs>
    ): Prisma__FlowStackClient<FlowStackGetPayload<T>>

    /**
     * Find the first FlowStack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStackFindFirstArgs} args - Arguments to find a FlowStack
     * @example
     * // Get one FlowStack
     * const flowStack = await prisma.flowStack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlowStackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlowStackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FlowStack'> extends True ? Prisma__FlowStackClient<FlowStackGetPayload<T>> : Prisma__FlowStackClient<FlowStackGetPayload<T> | null, null>

    /**
     * Find the first FlowStack that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStackFindFirstOrThrowArgs} args - Arguments to find a FlowStack
     * @example
     * // Get one FlowStack
     * const flowStack = await prisma.flowStack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlowStackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FlowStackFindFirstOrThrowArgs>
    ): Prisma__FlowStackClient<FlowStackGetPayload<T>>

    /**
     * Find zero or more FlowStacks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowStacks
     * const flowStacks = await prisma.flowStack.findMany()
     * 
     * // Get first 10 FlowStacks
     * const flowStacks = await prisma.flowStack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowStackWithIdOnly = await prisma.flowStack.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FlowStackFindManyArgs>(
      args?: SelectSubset<T, FlowStackFindManyArgs>
    ): Prisma.PrismaPromise<Array<FlowStackGetPayload<T>>>

    /**
     * Create a FlowStack.
     * @param {FlowStackCreateArgs} args - Arguments to create a FlowStack.
     * @example
     * // Create one FlowStack
     * const FlowStack = await prisma.flowStack.create({
     *   data: {
     *     // ... data to create a FlowStack
     *   }
     * })
     * 
    **/
    create<T extends FlowStackCreateArgs>(
      args: SelectSubset<T, FlowStackCreateArgs>
    ): Prisma__FlowStackClient<FlowStackGetPayload<T>>

    /**
     * Create many FlowStacks.
     *     @param {FlowStackCreateManyArgs} args - Arguments to create many FlowStacks.
     *     @example
     *     // Create many FlowStacks
     *     const flowStack = await prisma.flowStack.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlowStackCreateManyArgs>(
      args?: SelectSubset<T, FlowStackCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowStack.
     * @param {FlowStackDeleteArgs} args - Arguments to delete one FlowStack.
     * @example
     * // Delete one FlowStack
     * const FlowStack = await prisma.flowStack.delete({
     *   where: {
     *     // ... filter to delete one FlowStack
     *   }
     * })
     * 
    **/
    delete<T extends FlowStackDeleteArgs>(
      args: SelectSubset<T, FlowStackDeleteArgs>
    ): Prisma__FlowStackClient<FlowStackGetPayload<T>>

    /**
     * Update one FlowStack.
     * @param {FlowStackUpdateArgs} args - Arguments to update one FlowStack.
     * @example
     * // Update one FlowStack
     * const flowStack = await prisma.flowStack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlowStackUpdateArgs>(
      args: SelectSubset<T, FlowStackUpdateArgs>
    ): Prisma__FlowStackClient<FlowStackGetPayload<T>>

    /**
     * Delete zero or more FlowStacks.
     * @param {FlowStackDeleteManyArgs} args - Arguments to filter FlowStacks to delete.
     * @example
     * // Delete a few FlowStacks
     * const { count } = await prisma.flowStack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlowStackDeleteManyArgs>(
      args?: SelectSubset<T, FlowStackDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowStacks
     * const flowStack = await prisma.flowStack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlowStackUpdateManyArgs>(
      args: SelectSubset<T, FlowStackUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowStack.
     * @param {FlowStackUpsertArgs} args - Arguments to update or create a FlowStack.
     * @example
     * // Update or create a FlowStack
     * const flowStack = await prisma.flowStack.upsert({
     *   create: {
     *     // ... data to create a FlowStack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowStack we want to update
     *   }
     * })
    **/
    upsert<T extends FlowStackUpsertArgs>(
      args: SelectSubset<T, FlowStackUpsertArgs>
    ): Prisma__FlowStackClient<FlowStackGetPayload<T>>

    /**
     * Count the number of FlowStacks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStackCountArgs} args - Arguments to filter FlowStacks to count.
     * @example
     * // Count the number of FlowStacks
     * const count = await prisma.flowStack.count({
     *   where: {
     *     // ... the filter for the FlowStacks we want to count
     *   }
     * })
    **/
    count<T extends FlowStackCountArgs>(
      args?: Subset<T, FlowStackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowStackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowStackAggregateArgs>(args: Subset<T, FlowStackAggregateArgs>): Prisma.PrismaPromise<GetFlowStackAggregateType<T>>

    /**
     * Group by FlowStack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowStackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowStackGroupByArgs['orderBy'] }
        : { orderBy?: FlowStackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowStackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowStackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowStack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlowStackClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    flow<T extends FlowArgs= {}>(args?: Subset<T, FlowArgs>): Prisma__FlowClient<FlowGetPayload<T> | Null>;

    parent<T extends FlowStackArgs= {}>(args?: Subset<T, FlowStackArgs>): Prisma__FlowStackClient<FlowStackGetPayload<T> | Null>;

    accountChannel<T extends AccountChannelArgs= {}>(args?: Subset<T, AccountChannelArgs>): Prisma__AccountChannelClient<AccountChannelGetPayload<T> | Null>;

    children<T extends FlowStack$childrenArgs= {}>(args?: Subset<T, FlowStack$childrenArgs>): Prisma.PrismaPromise<Array<FlowStackGetPayload<T>>| Null>;

    flowStates<T extends FlowStack$flowStatesArgs= {}>(args?: Subset<T, FlowStack$flowStatesArgs>): Prisma.PrismaPromise<Array<FlowStateGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FlowStack base type for findUnique actions
   */
  export type FlowStackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * Filter, which FlowStack to fetch.
     */
    where: FlowStackWhereUniqueInput
  }

  /**
   * FlowStack findUnique
   */
  export interface FlowStackFindUniqueArgs extends FlowStackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowStack findUniqueOrThrow
   */
  export type FlowStackFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * Filter, which FlowStack to fetch.
     */
    where: FlowStackWhereUniqueInput
  }


  /**
   * FlowStack base type for findFirst actions
   */
  export type FlowStackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * Filter, which FlowStack to fetch.
     */
    where?: FlowStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStacks to fetch.
     */
    orderBy?: Enumerable<FlowStackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowStacks.
     */
    cursor?: FlowStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowStacks.
     */
    distinct?: Enumerable<FlowStackScalarFieldEnum>
  }

  /**
   * FlowStack findFirst
   */
  export interface FlowStackFindFirstArgs extends FlowStackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowStack findFirstOrThrow
   */
  export type FlowStackFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * Filter, which FlowStack to fetch.
     */
    where?: FlowStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStacks to fetch.
     */
    orderBy?: Enumerable<FlowStackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowStacks.
     */
    cursor?: FlowStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStacks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowStacks.
     */
    distinct?: Enumerable<FlowStackScalarFieldEnum>
  }


  /**
   * FlowStack findMany
   */
  export type FlowStackFindManyArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * Filter, which FlowStacks to fetch.
     */
    where?: FlowStackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStacks to fetch.
     */
    orderBy?: Enumerable<FlowStackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowStacks.
     */
    cursor?: FlowStackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStacks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStacks.
     */
    skip?: number
    distinct?: Enumerable<FlowStackScalarFieldEnum>
  }


  /**
   * FlowStack create
   */
  export type FlowStackCreateArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * The data needed to create a FlowStack.
     */
    data: XOR<FlowStackCreateInput, FlowStackUncheckedCreateInput>
  }


  /**
   * FlowStack createMany
   */
  export type FlowStackCreateManyArgs = {
    /**
     * The data used to create many FlowStacks.
     */
    data: Enumerable<FlowStackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FlowStack update
   */
  export type FlowStackUpdateArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * The data needed to update a FlowStack.
     */
    data: XOR<FlowStackUpdateInput, FlowStackUncheckedUpdateInput>
    /**
     * Choose, which FlowStack to update.
     */
    where: FlowStackWhereUniqueInput
  }


  /**
   * FlowStack updateMany
   */
  export type FlowStackUpdateManyArgs = {
    /**
     * The data used to update FlowStacks.
     */
    data: XOR<FlowStackUpdateManyMutationInput, FlowStackUncheckedUpdateManyInput>
    /**
     * Filter which FlowStacks to update
     */
    where?: FlowStackWhereInput
  }


  /**
   * FlowStack upsert
   */
  export type FlowStackUpsertArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * The filter to search for the FlowStack to update in case it exists.
     */
    where: FlowStackWhereUniqueInput
    /**
     * In case the FlowStack found by the `where` argument doesn't exist, create a new FlowStack with this data.
     */
    create: XOR<FlowStackCreateInput, FlowStackUncheckedCreateInput>
    /**
     * In case the FlowStack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowStackUpdateInput, FlowStackUncheckedUpdateInput>
  }


  /**
   * FlowStack delete
   */
  export type FlowStackDeleteArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    /**
     * Filter which FlowStack to delete.
     */
    where: FlowStackWhereUniqueInput
  }


  /**
   * FlowStack deleteMany
   */
  export type FlowStackDeleteManyArgs = {
    /**
     * Filter which FlowStacks to delete
     */
    where?: FlowStackWhereInput
  }


  /**
   * FlowStack.children
   */
  export type FlowStack$childrenArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
    where?: FlowStackWhereInput
    orderBy?: Enumerable<FlowStackOrderByWithRelationInput>
    cursor?: FlowStackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowStackScalarFieldEnum>
  }


  /**
   * FlowStack.flowStates
   */
  export type FlowStack$flowStatesArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    where?: FlowStateWhereInput
    orderBy?: Enumerable<FlowStateOrderByWithRelationInput>
    cursor?: FlowStateWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<FlowStateScalarFieldEnum>
  }


  /**
   * FlowStack without action
   */
  export type FlowStackArgs = {
    /**
     * Select specific fields to fetch from the FlowStack
     */
    select?: FlowStackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStackInclude | null
  }



  /**
   * Model FlowState
   */


  export type AggregateFlowState = {
    _count: FlowStateCountAggregateOutputType | null
    _avg: FlowStateAvgAggregateOutputType | null
    _sum: FlowStateSumAggregateOutputType | null
    _min: FlowStateMinAggregateOutputType | null
    _max: FlowStateMaxAggregateOutputType | null
  }

  export type FlowStateAvgAggregateOutputType = {
    id: number | null
    flowStackId: number | null
    flowActionId: number | null
  }

  export type FlowStateSumAggregateOutputType = {
    id: number | null
    flowStackId: number | null
    flowActionId: number | null
  }

  export type FlowStateMinAggregateOutputType = {
    id: number | null
    flowStackId: number | null
    flowActionId: number | null
    createdAt: Date | null
  }

  export type FlowStateMaxAggregateOutputType = {
    id: number | null
    flowStackId: number | null
    flowActionId: number | null
    createdAt: Date | null
  }

  export type FlowStateCountAggregateOutputType = {
    id: number
    flowStackId: number
    flowActionId: number
    state: number
    channelState: number
    createdAt: number
    _all: number
  }


  export type FlowStateAvgAggregateInputType = {
    id?: true
    flowStackId?: true
    flowActionId?: true
  }

  export type FlowStateSumAggregateInputType = {
    id?: true
    flowStackId?: true
    flowActionId?: true
  }

  export type FlowStateMinAggregateInputType = {
    id?: true
    flowStackId?: true
    flowActionId?: true
    createdAt?: true
  }

  export type FlowStateMaxAggregateInputType = {
    id?: true
    flowStackId?: true
    flowActionId?: true
    createdAt?: true
  }

  export type FlowStateCountAggregateInputType = {
    id?: true
    flowStackId?: true
    flowActionId?: true
    state?: true
    channelState?: true
    createdAt?: true
    _all?: true
  }

  export type FlowStateAggregateArgs = {
    /**
     * Filter which FlowState to aggregate.
     */
    where?: FlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStates to fetch.
     */
    orderBy?: Enumerable<FlowStateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlowStates
    **/
    _count?: true | FlowStateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FlowStateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FlowStateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlowStateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlowStateMaxAggregateInputType
  }

  export type GetFlowStateAggregateType<T extends FlowStateAggregateArgs> = {
        [P in keyof T & keyof AggregateFlowState]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlowState[P]>
      : GetScalarType<T[P], AggregateFlowState[P]>
  }




  export type FlowStateGroupByArgs = {
    where?: FlowStateWhereInput
    orderBy?: Enumerable<FlowStateOrderByWithAggregationInput>
    by: FlowStateScalarFieldEnum[]
    having?: FlowStateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlowStateCountAggregateInputType | true
    _avg?: FlowStateAvgAggregateInputType
    _sum?: FlowStateSumAggregateInputType
    _min?: FlowStateMinAggregateInputType
    _max?: FlowStateMaxAggregateInputType
  }


  export type FlowStateGroupByOutputType = {
    id: number
    flowStackId: number
    flowActionId: number
    state: JsonValue
    channelState: JsonValue
    createdAt: Date
    _count: FlowStateCountAggregateOutputType | null
    _avg: FlowStateAvgAggregateOutputType | null
    _sum: FlowStateSumAggregateOutputType | null
    _min: FlowStateMinAggregateOutputType | null
    _max: FlowStateMaxAggregateOutputType | null
  }

  type GetFlowStateGroupByPayload<T extends FlowStateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<FlowStateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlowStateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlowStateGroupByOutputType[P]>
            : GetScalarType<T[P], FlowStateGroupByOutputType[P]>
        }
      >
    >


  export type FlowStateSelect = {
    id?: boolean
    flowStackId?: boolean
    flowActionId?: boolean
    state?: boolean
    channelState?: boolean
    createdAt?: boolean
    flowStack?: boolean | FlowStackArgs
    flowAction?: boolean | FlowActionArgs
  }


  export type FlowStateInclude = {
    flowStack?: boolean | FlowStackArgs
    flowAction?: boolean | FlowActionArgs
  }

  export type FlowStateGetPayload<S extends boolean | null | undefined | FlowStateArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? FlowState :
    S extends undefined ? never :
    S extends { include: any } & (FlowStateArgs | FlowStateFindManyArgs)
    ? FlowState  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'flowStack' ? FlowStackGetPayload<S['include'][P]> :
        P extends 'flowAction' ? FlowActionGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (FlowStateArgs | FlowStateFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'flowStack' ? FlowStackGetPayload<S['select'][P]> :
        P extends 'flowAction' ? FlowActionGetPayload<S['select'][P]> :  P extends keyof FlowState ? FlowState[P] : never
  } 
      : FlowState


  type FlowStateCountArgs = 
    Omit<FlowStateFindManyArgs, 'select' | 'include'> & {
      select?: FlowStateCountAggregateInputType | true
    }

  export interface FlowStateDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one FlowState that matches the filter.
     * @param {FlowStateFindUniqueArgs} args - Arguments to find a FlowState
     * @example
     * // Get one FlowState
     * const flowState = await prisma.flowState.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FlowStateFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, FlowStateFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'FlowState'> extends True ? Prisma__FlowStateClient<FlowStateGetPayload<T>> : Prisma__FlowStateClient<FlowStateGetPayload<T> | null, null>

    /**
     * Find one FlowState that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FlowStateFindUniqueOrThrowArgs} args - Arguments to find a FlowState
     * @example
     * // Get one FlowState
     * const flowState = await prisma.flowState.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FlowStateFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, FlowStateFindUniqueOrThrowArgs>
    ): Prisma__FlowStateClient<FlowStateGetPayload<T>>

    /**
     * Find the first FlowState that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStateFindFirstArgs} args - Arguments to find a FlowState
     * @example
     * // Get one FlowState
     * const flowState = await prisma.flowState.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FlowStateFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, FlowStateFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'FlowState'> extends True ? Prisma__FlowStateClient<FlowStateGetPayload<T>> : Prisma__FlowStateClient<FlowStateGetPayload<T> | null, null>

    /**
     * Find the first FlowState that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStateFindFirstOrThrowArgs} args - Arguments to find a FlowState
     * @example
     * // Get one FlowState
     * const flowState = await prisma.flowState.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FlowStateFindFirstOrThrowArgs>(
      args?: SelectSubset<T, FlowStateFindFirstOrThrowArgs>
    ): Prisma__FlowStateClient<FlowStateGetPayload<T>>

    /**
     * Find zero or more FlowStates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStateFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlowStates
     * const flowStates = await prisma.flowState.findMany()
     * 
     * // Get first 10 FlowStates
     * const flowStates = await prisma.flowState.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flowStateWithIdOnly = await prisma.flowState.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FlowStateFindManyArgs>(
      args?: SelectSubset<T, FlowStateFindManyArgs>
    ): Prisma.PrismaPromise<Array<FlowStateGetPayload<T>>>

    /**
     * Create a FlowState.
     * @param {FlowStateCreateArgs} args - Arguments to create a FlowState.
     * @example
     * // Create one FlowState
     * const FlowState = await prisma.flowState.create({
     *   data: {
     *     // ... data to create a FlowState
     *   }
     * })
     * 
    **/
    create<T extends FlowStateCreateArgs>(
      args: SelectSubset<T, FlowStateCreateArgs>
    ): Prisma__FlowStateClient<FlowStateGetPayload<T>>

    /**
     * Create many FlowStates.
     *     @param {FlowStateCreateManyArgs} args - Arguments to create many FlowStates.
     *     @example
     *     // Create many FlowStates
     *     const flowState = await prisma.flowState.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FlowStateCreateManyArgs>(
      args?: SelectSubset<T, FlowStateCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlowState.
     * @param {FlowStateDeleteArgs} args - Arguments to delete one FlowState.
     * @example
     * // Delete one FlowState
     * const FlowState = await prisma.flowState.delete({
     *   where: {
     *     // ... filter to delete one FlowState
     *   }
     * })
     * 
    **/
    delete<T extends FlowStateDeleteArgs>(
      args: SelectSubset<T, FlowStateDeleteArgs>
    ): Prisma__FlowStateClient<FlowStateGetPayload<T>>

    /**
     * Update one FlowState.
     * @param {FlowStateUpdateArgs} args - Arguments to update one FlowState.
     * @example
     * // Update one FlowState
     * const flowState = await prisma.flowState.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FlowStateUpdateArgs>(
      args: SelectSubset<T, FlowStateUpdateArgs>
    ): Prisma__FlowStateClient<FlowStateGetPayload<T>>

    /**
     * Delete zero or more FlowStates.
     * @param {FlowStateDeleteManyArgs} args - Arguments to filter FlowStates to delete.
     * @example
     * // Delete a few FlowStates
     * const { count } = await prisma.flowState.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FlowStateDeleteManyArgs>(
      args?: SelectSubset<T, FlowStateDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlowStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlowStates
     * const flowState = await prisma.flowState.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FlowStateUpdateManyArgs>(
      args: SelectSubset<T, FlowStateUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlowState.
     * @param {FlowStateUpsertArgs} args - Arguments to update or create a FlowState.
     * @example
     * // Update or create a FlowState
     * const flowState = await prisma.flowState.upsert({
     *   create: {
     *     // ... data to create a FlowState
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlowState we want to update
     *   }
     * })
    **/
    upsert<T extends FlowStateUpsertArgs>(
      args: SelectSubset<T, FlowStateUpsertArgs>
    ): Prisma__FlowStateClient<FlowStateGetPayload<T>>

    /**
     * Count the number of FlowStates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStateCountArgs} args - Arguments to filter FlowStates to count.
     * @example
     * // Count the number of FlowStates
     * const count = await prisma.flowState.count({
     *   where: {
     *     // ... the filter for the FlowStates we want to count
     *   }
     * })
    **/
    count<T extends FlowStateCountArgs>(
      args?: Subset<T, FlowStateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlowStateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlowState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlowStateAggregateArgs>(args: Subset<T, FlowStateAggregateArgs>): Prisma.PrismaPromise<GetFlowStateAggregateType<T>>

    /**
     * Group by FlowState.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlowStateGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlowStateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlowStateGroupByArgs['orderBy'] }
        : { orderBy?: FlowStateGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlowStateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlowStateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for FlowState.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__FlowStateClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    flowStack<T extends FlowStackArgs= {}>(args?: Subset<T, FlowStackArgs>): Prisma__FlowStackClient<FlowStackGetPayload<T> | Null>;

    flowAction<T extends FlowActionArgs= {}>(args?: Subset<T, FlowActionArgs>): Prisma__FlowActionClient<FlowActionGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * FlowState base type for findUnique actions
   */
  export type FlowStateFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * Filter, which FlowState to fetch.
     */
    where: FlowStateWhereUniqueInput
  }

  /**
   * FlowState findUnique
   */
  export interface FlowStateFindUniqueArgs extends FlowStateFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowState findUniqueOrThrow
   */
  export type FlowStateFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * Filter, which FlowState to fetch.
     */
    where: FlowStateWhereUniqueInput
  }


  /**
   * FlowState base type for findFirst actions
   */
  export type FlowStateFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * Filter, which FlowState to fetch.
     */
    where?: FlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStates to fetch.
     */
    orderBy?: Enumerable<FlowStateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowStates.
     */
    cursor?: FlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowStates.
     */
    distinct?: Enumerable<FlowStateScalarFieldEnum>
  }

  /**
   * FlowState findFirst
   */
  export interface FlowStateFindFirstArgs extends FlowStateFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * FlowState findFirstOrThrow
   */
  export type FlowStateFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * Filter, which FlowState to fetch.
     */
    where?: FlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStates to fetch.
     */
    orderBy?: Enumerable<FlowStateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlowStates.
     */
    cursor?: FlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlowStates.
     */
    distinct?: Enumerable<FlowStateScalarFieldEnum>
  }


  /**
   * FlowState findMany
   */
  export type FlowStateFindManyArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * Filter, which FlowStates to fetch.
     */
    where?: FlowStateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlowStates to fetch.
     */
    orderBy?: Enumerable<FlowStateOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlowStates.
     */
    cursor?: FlowStateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlowStates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlowStates.
     */
    skip?: number
    distinct?: Enumerable<FlowStateScalarFieldEnum>
  }


  /**
   * FlowState create
   */
  export type FlowStateCreateArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * The data needed to create a FlowState.
     */
    data: XOR<FlowStateCreateInput, FlowStateUncheckedCreateInput>
  }


  /**
   * FlowState createMany
   */
  export type FlowStateCreateManyArgs = {
    /**
     * The data used to create many FlowStates.
     */
    data: Enumerable<FlowStateCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * FlowState update
   */
  export type FlowStateUpdateArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * The data needed to update a FlowState.
     */
    data: XOR<FlowStateUpdateInput, FlowStateUncheckedUpdateInput>
    /**
     * Choose, which FlowState to update.
     */
    where: FlowStateWhereUniqueInput
  }


  /**
   * FlowState updateMany
   */
  export type FlowStateUpdateManyArgs = {
    /**
     * The data used to update FlowStates.
     */
    data: XOR<FlowStateUpdateManyMutationInput, FlowStateUncheckedUpdateManyInput>
    /**
     * Filter which FlowStates to update
     */
    where?: FlowStateWhereInput
  }


  /**
   * FlowState upsert
   */
  export type FlowStateUpsertArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * The filter to search for the FlowState to update in case it exists.
     */
    where: FlowStateWhereUniqueInput
    /**
     * In case the FlowState found by the `where` argument doesn't exist, create a new FlowState with this data.
     */
    create: XOR<FlowStateCreateInput, FlowStateUncheckedCreateInput>
    /**
     * In case the FlowState was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlowStateUpdateInput, FlowStateUncheckedUpdateInput>
  }


  /**
   * FlowState delete
   */
  export type FlowStateDeleteArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
    /**
     * Filter which FlowState to delete.
     */
    where: FlowStateWhereUniqueInput
  }


  /**
   * FlowState deleteMany
   */
  export type FlowStateDeleteManyArgs = {
    /**
     * Filter which FlowStates to delete
     */
    where?: FlowStateWhereInput
  }


  /**
   * FlowState without action
   */
  export type FlowStateArgs = {
    /**
     * Select specific fields to fetch from the FlowState
     */
    select?: FlowStateSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FlowStateInclude | null
  }



  /**
   * Enums
   */

  export const AccountChannelScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    channelId: 'channelId',
    channelAccountId: 'channelAccountId',
    status: 'status',
    data: 'data'
  };

  export type AccountChannelScalarFieldEnum = (typeof AccountChannelScalarFieldEnum)[keyof typeof AccountChannelScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    schemaId: 'schemaId',
    data: 'data'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const AccountSchemaScalarFieldEnum: {
    id: 'id',
    schema: 'schema',
    workspaceId: 'workspaceId'
  };

  export type AccountSchemaScalarFieldEnum = (typeof AccountSchemaScalarFieldEnum)[keyof typeof AccountSchemaScalarFieldEnum]


  export const ChannelScalarFieldEnum: {
    id: 'id',
    kind: 'kind',
    workspaceId: 'workspaceId',
    configuration: 'configuration'
  };

  export type ChannelScalarFieldEnum = (typeof ChannelScalarFieldEnum)[keyof typeof ChannelScalarFieldEnum]


  export const DataRecordScalarFieldEnum: {
    id: 'id',
    schemaId: 'schemaId',
    data: 'data'
  };

  export type DataRecordScalarFieldEnum = (typeof DataRecordScalarFieldEnum)[keyof typeof DataRecordScalarFieldEnum]


  export const DataRecordSchemaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    schema: 'schema',
    workspaceId: 'workspaceId'
  };

  export type DataRecordSchemaScalarFieldEnum = (typeof DataRecordSchemaScalarFieldEnum)[keyof typeof DataRecordSchemaScalarFieldEnum]


  export const FlowActionConnectionScalarFieldEnum: {
    id: 'id',
    flowId: 'flowId',
    fromId: 'fromId',
    toId: 'toId',
    socket: 'socket'
  };

  export type FlowActionConnectionScalarFieldEnum = (typeof FlowActionConnectionScalarFieldEnum)[keyof typeof FlowActionConnectionScalarFieldEnum]


  export const FlowActionScalarFieldEnum: {
    id: 'id',
    name: 'name',
    kind: 'kind',
    flowId: 'flowId',
    configuration: 'configuration'
  };

  export type FlowActionScalarFieldEnum = (typeof FlowActionScalarFieldEnum)[keyof typeof FlowActionScalarFieldEnum]


  export const FlowGroupScalarFieldEnum: {
    id: 'id',
    name: 'name',
    workspaceId: 'workspaceId'
  };

  export type FlowGroupScalarFieldEnum = (typeof FlowGroupScalarFieldEnum)[keyof typeof FlowGroupScalarFieldEnum]


  export const FlowScalarFieldEnum: {
    id: 'id',
    name: 'name',
    status: 'status',
    flowGroupId: 'flowGroupId',
    contextSchema: 'contextSchema'
  };

  export type FlowScalarFieldEnum = (typeof FlowScalarFieldEnum)[keyof typeof FlowScalarFieldEnum]


  export const FlowStackScalarFieldEnum: {
    id: 'id',
    flowId: 'flowId',
    parentId: 'parentId',
    accountChannelId: 'accountChannelId',
    context: 'context',
    createdAt: 'createdAt'
  };

  export type FlowStackScalarFieldEnum = (typeof FlowStackScalarFieldEnum)[keyof typeof FlowStackScalarFieldEnum]


  export const FlowStateScalarFieldEnum: {
    id: 'id',
    flowStackId: 'flowStackId',
    flowActionId: 'flowActionId',
    state: 'state',
    channelState: 'channelState',
    createdAt: 'createdAt'
  };

  export type FlowStateScalarFieldEnum = (typeof FlowStateScalarFieldEnum)[keyof typeof FlowStateScalarFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkspaceAccountScalarFieldEnum: {
    id: 'id',
    accountId: 'accountId',
    workspaceId: 'workspaceId',
    role: 'role'
  };

  export type WorkspaceAccountScalarFieldEnum = (typeof WorkspaceAccountScalarFieldEnum)[keyof typeof WorkspaceAccountScalarFieldEnum]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type WorkspaceWhereInput = {
    AND?: Enumerable<WorkspaceWhereInput>
    OR?: Enumerable<WorkspaceWhereInput>
    NOT?: Enumerable<WorkspaceWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    accountSchemas?: AccountSchemaListRelationFilter
    dataRecordSchemas?: DataRecordSchemaListRelationFilter
    workspaceAccounts?: WorkspaceAccountListRelationFilter
    channels?: ChannelListRelationFilter
    flowGroups?: FlowGroupListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    accountSchemas?: AccountSchemaOrderByRelationAggregateInput
    dataRecordSchemas?: DataRecordSchemaOrderByRelationAggregateInput
    workspaceAccounts?: WorkspaceAccountOrderByRelationAggregateInput
    channels?: ChannelOrderByRelationAggregateInput
    flowGroups?: FlowGroupOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = {
    id?: number
  }

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _avg?: WorkspaceAvgOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
    _sum?: WorkspaceSumOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
  }

  export type AccountSchemaWhereInput = {
    AND?: Enumerable<AccountSchemaWhereInput>
    OR?: Enumerable<AccountSchemaWhereInput>
    NOT?: Enumerable<AccountSchemaWhereInput>
    id?: IntFilter | number
    schema?: JsonFilter
    workspaceId?: IntFilter | number
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    accounts?: AccountListRelationFilter
  }

  export type AccountSchemaOrderByWithRelationInput = {
    id?: SortOrder
    schema?: SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    accounts?: AccountOrderByRelationAggregateInput
  }

  export type AccountSchemaWhereUniqueInput = {
    id?: number
  }

  export type AccountSchemaOrderByWithAggregationInput = {
    id?: SortOrder
    schema?: SortOrder
    workspaceId?: SortOrder
    _count?: AccountSchemaCountOrderByAggregateInput
    _avg?: AccountSchemaAvgOrderByAggregateInput
    _max?: AccountSchemaMaxOrderByAggregateInput
    _min?: AccountSchemaMinOrderByAggregateInput
    _sum?: AccountSchemaSumOrderByAggregateInput
  }

  export type AccountSchemaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountSchemaScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountSchemaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountSchemaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    schema?: JsonWithAggregatesFilter
    workspaceId?: IntWithAggregatesFilter | number
  }

  export type AccountWhereInput = {
    AND?: Enumerable<AccountWhereInput>
    OR?: Enumerable<AccountWhereInput>
    NOT?: Enumerable<AccountWhereInput>
    id?: IntFilter | number
    schemaId?: IntFilter | number
    data?: JsonFilter
    schema?: XOR<AccountSchemaRelationFilter, AccountSchemaWhereInput>
    workspaceAccounts?: WorkspaceAccountListRelationFilter
    accountChannels?: AccountChannelListRelationFilter
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    schemaId?: SortOrder
    data?: SortOrder
    schema?: AccountSchemaOrderByWithRelationInput
    workspaceAccounts?: WorkspaceAccountOrderByRelationAggregateInput
    accountChannels?: AccountChannelOrderByRelationAggregateInput
  }

  export type AccountWhereUniqueInput = {
    id?: number
  }

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    schemaId?: SortOrder
    data?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    schemaId?: IntWithAggregatesFilter | number
    data?: JsonWithAggregatesFilter
  }

  export type WorkspaceAccountWhereInput = {
    AND?: Enumerable<WorkspaceAccountWhereInput>
    OR?: Enumerable<WorkspaceAccountWhereInput>
    NOT?: Enumerable<WorkspaceAccountWhereInput>
    id?: IntFilter | number
    accountId?: IntFilter | number
    workspaceId?: IntFilter | number
    role?: StringFilter | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    account?: XOR<AccountRelationFilter, AccountWhereInput>
  }

  export type WorkspaceAccountOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    account?: AccountOrderByWithRelationInput
  }

  export type WorkspaceAccountWhereUniqueInput = {
    id?: number
  }

  export type WorkspaceAccountOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
    _count?: WorkspaceAccountCountOrderByAggregateInput
    _avg?: WorkspaceAccountAvgOrderByAggregateInput
    _max?: WorkspaceAccountMaxOrderByAggregateInput
    _min?: WorkspaceAccountMinOrderByAggregateInput
    _sum?: WorkspaceAccountSumOrderByAggregateInput
  }

  export type WorkspaceAccountScalarWhereWithAggregatesInput = {
    AND?: Enumerable<WorkspaceAccountScalarWhereWithAggregatesInput>
    OR?: Enumerable<WorkspaceAccountScalarWhereWithAggregatesInput>
    NOT?: Enumerable<WorkspaceAccountScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    accountId?: IntWithAggregatesFilter | number
    workspaceId?: IntWithAggregatesFilter | number
    role?: StringWithAggregatesFilter | string
  }

  export type DataRecordSchemaWhereInput = {
    AND?: Enumerable<DataRecordSchemaWhereInput>
    OR?: Enumerable<DataRecordSchemaWhereInput>
    NOT?: Enumerable<DataRecordSchemaWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    schema?: JsonFilter
    workspaceId?: IntFilter | number
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    dataRecords?: DataRecordListRelationFilter
  }

  export type DataRecordSchemaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    schema?: SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    dataRecords?: DataRecordOrderByRelationAggregateInput
  }

  export type DataRecordSchemaWhereUniqueInput = {
    id?: number
  }

  export type DataRecordSchemaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    schema?: SortOrder
    workspaceId?: SortOrder
    _count?: DataRecordSchemaCountOrderByAggregateInput
    _avg?: DataRecordSchemaAvgOrderByAggregateInput
    _max?: DataRecordSchemaMaxOrderByAggregateInput
    _min?: DataRecordSchemaMinOrderByAggregateInput
    _sum?: DataRecordSchemaSumOrderByAggregateInput
  }

  export type DataRecordSchemaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DataRecordSchemaScalarWhereWithAggregatesInput>
    OR?: Enumerable<DataRecordSchemaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DataRecordSchemaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    schema?: JsonWithAggregatesFilter
    workspaceId?: IntWithAggregatesFilter | number
  }

  export type DataRecordWhereInput = {
    AND?: Enumerable<DataRecordWhereInput>
    OR?: Enumerable<DataRecordWhereInput>
    NOT?: Enumerable<DataRecordWhereInput>
    id?: IntFilter | number
    schemaId?: IntFilter | number
    data?: JsonFilter
    schema?: XOR<DataRecordSchemaRelationFilter, DataRecordSchemaWhereInput>
  }

  export type DataRecordOrderByWithRelationInput = {
    id?: SortOrder
    schemaId?: SortOrder
    data?: SortOrder
    schema?: DataRecordSchemaOrderByWithRelationInput
  }

  export type DataRecordWhereUniqueInput = {
    id?: number
  }

  export type DataRecordOrderByWithAggregationInput = {
    id?: SortOrder
    schemaId?: SortOrder
    data?: SortOrder
    _count?: DataRecordCountOrderByAggregateInput
    _avg?: DataRecordAvgOrderByAggregateInput
    _max?: DataRecordMaxOrderByAggregateInput
    _min?: DataRecordMinOrderByAggregateInput
    _sum?: DataRecordSumOrderByAggregateInput
  }

  export type DataRecordScalarWhereWithAggregatesInput = {
    AND?: Enumerable<DataRecordScalarWhereWithAggregatesInput>
    OR?: Enumerable<DataRecordScalarWhereWithAggregatesInput>
    NOT?: Enumerable<DataRecordScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    schemaId?: IntWithAggregatesFilter | number
    data?: JsonWithAggregatesFilter
  }

  export type ChannelWhereInput = {
    AND?: Enumerable<ChannelWhereInput>
    OR?: Enumerable<ChannelWhereInput>
    NOT?: Enumerable<ChannelWhereInput>
    id?: IntFilter | number
    kind?: StringFilter | string
    workspaceId?: IntFilter | number
    configuration?: JsonFilter
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    accountChannels?: AccountChannelListRelationFilter
  }

  export type ChannelOrderByWithRelationInput = {
    id?: SortOrder
    kind?: SortOrder
    workspaceId?: SortOrder
    configuration?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    accountChannels?: AccountChannelOrderByRelationAggregateInput
  }

  export type ChannelWhereUniqueInput = {
    id?: number
  }

  export type ChannelOrderByWithAggregationInput = {
    id?: SortOrder
    kind?: SortOrder
    workspaceId?: SortOrder
    configuration?: SortOrder
    _count?: ChannelCountOrderByAggregateInput
    _avg?: ChannelAvgOrderByAggregateInput
    _max?: ChannelMaxOrderByAggregateInput
    _min?: ChannelMinOrderByAggregateInput
    _sum?: ChannelSumOrderByAggregateInput
  }

  export type ChannelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ChannelScalarWhereWithAggregatesInput>
    OR?: Enumerable<ChannelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ChannelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    kind?: StringWithAggregatesFilter | string
    workspaceId?: IntWithAggregatesFilter | number
    configuration?: JsonWithAggregatesFilter
  }

  export type AccountChannelWhereInput = {
    AND?: Enumerable<AccountChannelWhereInput>
    OR?: Enumerable<AccountChannelWhereInput>
    NOT?: Enumerable<AccountChannelWhereInput>
    id?: IntFilter | number
    accountId?: IntFilter | number
    channelId?: IntFilter | number
    channelAccountId?: IntFilter | number
    status?: StringFilter | string
    data?: JsonFilter
    account?: XOR<AccountRelationFilter, AccountWhereInput>
    channel?: XOR<ChannelRelationFilter, ChannelWhereInput>
    flowStacks?: FlowStackListRelationFilter
  }

  export type AccountChannelOrderByWithRelationInput = {
    id?: SortOrder
    accountId?: SortOrder
    channelId?: SortOrder
    channelAccountId?: SortOrder
    status?: SortOrder
    data?: SortOrder
    account?: AccountOrderByWithRelationInput
    channel?: ChannelOrderByWithRelationInput
    flowStacks?: FlowStackOrderByRelationAggregateInput
  }

  export type AccountChannelWhereUniqueInput = {
    id?: number
  }

  export type AccountChannelOrderByWithAggregationInput = {
    id?: SortOrder
    accountId?: SortOrder
    channelId?: SortOrder
    channelAccountId?: SortOrder
    status?: SortOrder
    data?: SortOrder
    _count?: AccountChannelCountOrderByAggregateInput
    _avg?: AccountChannelAvgOrderByAggregateInput
    _max?: AccountChannelMaxOrderByAggregateInput
    _min?: AccountChannelMinOrderByAggregateInput
    _sum?: AccountChannelSumOrderByAggregateInput
  }

  export type AccountChannelScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AccountChannelScalarWhereWithAggregatesInput>
    OR?: Enumerable<AccountChannelScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AccountChannelScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    accountId?: IntWithAggregatesFilter | number
    channelId?: IntWithAggregatesFilter | number
    channelAccountId?: IntWithAggregatesFilter | number
    status?: StringWithAggregatesFilter | string
    data?: JsonWithAggregatesFilter
  }

  export type FlowGroupWhereInput = {
    AND?: Enumerable<FlowGroupWhereInput>
    OR?: Enumerable<FlowGroupWhereInput>
    NOT?: Enumerable<FlowGroupWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    workspaceId?: IntFilter | number
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    flows?: FlowListRelationFilter
  }

  export type FlowGroupOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    flows?: FlowOrderByRelationAggregateInput
  }

  export type FlowGroupWhereUniqueInput = {
    id?: number
  }

  export type FlowGroupOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
    _count?: FlowGroupCountOrderByAggregateInput
    _avg?: FlowGroupAvgOrderByAggregateInput
    _max?: FlowGroupMaxOrderByAggregateInput
    _min?: FlowGroupMinOrderByAggregateInput
    _sum?: FlowGroupSumOrderByAggregateInput
  }

  export type FlowGroupScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlowGroupScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlowGroupScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlowGroupScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    workspaceId?: IntWithAggregatesFilter | number
  }

  export type FlowWhereInput = {
    AND?: Enumerable<FlowWhereInput>
    OR?: Enumerable<FlowWhereInput>
    NOT?: Enumerable<FlowWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    status?: StringFilter | string
    flowGroupId?: IntFilter | number
    contextSchema?: JsonFilter
    flowGroup?: XOR<FlowGroupRelationFilter, FlowGroupWhereInput>
    flowActions?: FlowActionListRelationFilter
    FlowActionConnection?: FlowActionConnectionListRelationFilter
    FlowStack?: FlowStackListRelationFilter
  }

  export type FlowOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    flowGroupId?: SortOrder
    contextSchema?: SortOrder
    flowGroup?: FlowGroupOrderByWithRelationInput
    flowActions?: FlowActionOrderByRelationAggregateInput
    FlowActionConnection?: FlowActionConnectionOrderByRelationAggregateInput
    FlowStack?: FlowStackOrderByRelationAggregateInput
  }

  export type FlowWhereUniqueInput = {
    id?: number
  }

  export type FlowOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    flowGroupId?: SortOrder
    contextSchema?: SortOrder
    _count?: FlowCountOrderByAggregateInput
    _avg?: FlowAvgOrderByAggregateInput
    _max?: FlowMaxOrderByAggregateInput
    _min?: FlowMinOrderByAggregateInput
    _sum?: FlowSumOrderByAggregateInput
  }

  export type FlowScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlowScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlowScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlowScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    status?: StringWithAggregatesFilter | string
    flowGroupId?: IntWithAggregatesFilter | number
    contextSchema?: JsonWithAggregatesFilter
  }

  export type FlowActionWhereInput = {
    AND?: Enumerable<FlowActionWhereInput>
    OR?: Enumerable<FlowActionWhereInput>
    NOT?: Enumerable<FlowActionWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    kind?: StringFilter | string
    flowId?: IntFilter | number
    configuration?: JsonFilter
    flow?: XOR<FlowRelationFilter, FlowWhereInput>
    fromFlowActionConnections?: FlowActionConnectionListRelationFilter
    toFlowActionConnections?: FlowActionConnectionListRelationFilter
    flowStates?: FlowStateListRelationFilter
  }

  export type FlowActionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    flowId?: SortOrder
    configuration?: SortOrder
    flow?: FlowOrderByWithRelationInput
    fromFlowActionConnections?: FlowActionConnectionOrderByRelationAggregateInput
    toFlowActionConnections?: FlowActionConnectionOrderByRelationAggregateInput
    flowStates?: FlowStateOrderByRelationAggregateInput
  }

  export type FlowActionWhereUniqueInput = {
    id?: number
  }

  export type FlowActionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    flowId?: SortOrder
    configuration?: SortOrder
    _count?: FlowActionCountOrderByAggregateInput
    _avg?: FlowActionAvgOrderByAggregateInput
    _max?: FlowActionMaxOrderByAggregateInput
    _min?: FlowActionMinOrderByAggregateInput
    _sum?: FlowActionSumOrderByAggregateInput
  }

  export type FlowActionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlowActionScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlowActionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlowActionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    kind?: StringWithAggregatesFilter | string
    flowId?: IntWithAggregatesFilter | number
    configuration?: JsonWithAggregatesFilter
  }

  export type FlowActionConnectionWhereInput = {
    AND?: Enumerable<FlowActionConnectionWhereInput>
    OR?: Enumerable<FlowActionConnectionWhereInput>
    NOT?: Enumerable<FlowActionConnectionWhereInput>
    id?: IntFilter | number
    flowId?: IntFilter | number
    fromId?: IntFilter | number
    toId?: IntFilter | number
    socket?: StringFilter | string
    flow?: XOR<FlowRelationFilter, FlowWhereInput>
    fromFlowAction?: XOR<FlowActionRelationFilter, FlowActionWhereInput>
    toFlowAction?: XOR<FlowActionRelationFilter, FlowActionWhereInput>
  }

  export type FlowActionConnectionOrderByWithRelationInput = {
    id?: SortOrder
    flowId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    socket?: SortOrder
    flow?: FlowOrderByWithRelationInput
    fromFlowAction?: FlowActionOrderByWithRelationInput
    toFlowAction?: FlowActionOrderByWithRelationInput
  }

  export type FlowActionConnectionWhereUniqueInput = {
    id?: number
  }

  export type FlowActionConnectionOrderByWithAggregationInput = {
    id?: SortOrder
    flowId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    socket?: SortOrder
    _count?: FlowActionConnectionCountOrderByAggregateInput
    _avg?: FlowActionConnectionAvgOrderByAggregateInput
    _max?: FlowActionConnectionMaxOrderByAggregateInput
    _min?: FlowActionConnectionMinOrderByAggregateInput
    _sum?: FlowActionConnectionSumOrderByAggregateInput
  }

  export type FlowActionConnectionScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlowActionConnectionScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlowActionConnectionScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlowActionConnectionScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    flowId?: IntWithAggregatesFilter | number
    fromId?: IntWithAggregatesFilter | number
    toId?: IntWithAggregatesFilter | number
    socket?: StringWithAggregatesFilter | string
  }

  export type FlowStackWhereInput = {
    AND?: Enumerable<FlowStackWhereInput>
    OR?: Enumerable<FlowStackWhereInput>
    NOT?: Enumerable<FlowStackWhereInput>
    id?: IntFilter | number
    flowId?: IntFilter | number
    parentId?: IntNullableFilter | number | null
    accountChannelId?: IntFilter | number
    context?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    flow?: XOR<FlowRelationFilter, FlowWhereInput>
    parent?: XOR<FlowStackRelationFilter, FlowStackWhereInput> | null
    accountChannel?: XOR<AccountChannelRelationFilter, AccountChannelWhereInput>
    children?: FlowStackListRelationFilter
    flowStates?: FlowStateListRelationFilter
  }

  export type FlowStackOrderByWithRelationInput = {
    id?: SortOrder
    flowId?: SortOrder
    parentId?: SortOrder
    accountChannelId?: SortOrder
    context?: SortOrder
    createdAt?: SortOrder
    flow?: FlowOrderByWithRelationInput
    parent?: FlowStackOrderByWithRelationInput
    accountChannel?: AccountChannelOrderByWithRelationInput
    children?: FlowStackOrderByRelationAggregateInput
    flowStates?: FlowStateOrderByRelationAggregateInput
  }

  export type FlowStackWhereUniqueInput = {
    id?: number
  }

  export type FlowStackOrderByWithAggregationInput = {
    id?: SortOrder
    flowId?: SortOrder
    parentId?: SortOrder
    accountChannelId?: SortOrder
    context?: SortOrder
    createdAt?: SortOrder
    _count?: FlowStackCountOrderByAggregateInput
    _avg?: FlowStackAvgOrderByAggregateInput
    _max?: FlowStackMaxOrderByAggregateInput
    _min?: FlowStackMinOrderByAggregateInput
    _sum?: FlowStackSumOrderByAggregateInput
  }

  export type FlowStackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlowStackScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlowStackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlowStackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    flowId?: IntWithAggregatesFilter | number
    parentId?: IntNullableWithAggregatesFilter | number | null
    accountChannelId?: IntWithAggregatesFilter | number
    context?: JsonWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type FlowStateWhereInput = {
    AND?: Enumerable<FlowStateWhereInput>
    OR?: Enumerable<FlowStateWhereInput>
    NOT?: Enumerable<FlowStateWhereInput>
    id?: IntFilter | number
    flowStackId?: IntFilter | number
    flowActionId?: IntFilter | number
    state?: JsonFilter
    channelState?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
    flowStack?: XOR<FlowStackRelationFilter, FlowStackWhereInput>
    flowAction?: XOR<FlowActionRelationFilter, FlowActionWhereInput>
  }

  export type FlowStateOrderByWithRelationInput = {
    id?: SortOrder
    flowStackId?: SortOrder
    flowActionId?: SortOrder
    state?: SortOrder
    channelState?: SortOrder
    createdAt?: SortOrder
    flowStack?: FlowStackOrderByWithRelationInput
    flowAction?: FlowActionOrderByWithRelationInput
  }

  export type FlowStateWhereUniqueInput = {
    id?: number
  }

  export type FlowStateOrderByWithAggregationInput = {
    id?: SortOrder
    flowStackId?: SortOrder
    flowActionId?: SortOrder
    state?: SortOrder
    channelState?: SortOrder
    createdAt?: SortOrder
    _count?: FlowStateCountOrderByAggregateInput
    _avg?: FlowStateAvgOrderByAggregateInput
    _max?: FlowStateMaxOrderByAggregateInput
    _min?: FlowStateMinOrderByAggregateInput
    _sum?: FlowStateSumOrderByAggregateInput
  }

  export type FlowStateScalarWhereWithAggregatesInput = {
    AND?: Enumerable<FlowStateScalarWhereWithAggregatesInput>
    OR?: Enumerable<FlowStateScalarWhereWithAggregatesInput>
    NOT?: Enumerable<FlowStateScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    flowStackId?: IntWithAggregatesFilter | number
    flowActionId?: IntWithAggregatesFilter | number
    state?: JsonWithAggregatesFilter
    channelState?: JsonWithAggregatesFilter
    createdAt?: DateTimeWithAggregatesFilter | Date | string
  }

  export type WorkspaceCreateInput = {
    name: string
    accountSchemas?: AccountSchemaCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: number
    name: string
    accountSchemas?: AccountSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: number
    name: string
  }

  export type WorkspaceUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AccountSchemaCreateInput = {
    schema: JsonNullValueInput | InputJsonValue
    workspace: WorkspaceCreateNestedOneWithoutAccountSchemasInput
    accounts?: AccountCreateNestedManyWithoutSchemaInput
  }

  export type AccountSchemaUncheckedCreateInput = {
    id?: number
    schema: JsonNullValueInput | InputJsonValue
    workspaceId: number
    accounts?: AccountUncheckedCreateNestedManyWithoutSchemaInput
  }

  export type AccountSchemaUpdateInput = {
    schema?: JsonNullValueInput | InputJsonValue
    workspace?: WorkspaceUpdateOneRequiredWithoutAccountSchemasNestedInput
    accounts?: AccountUpdateManyWithoutSchemaNestedInput
  }

  export type AccountSchemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schema?: JsonNullValueInput | InputJsonValue
    workspaceId?: IntFieldUpdateOperationsInput | number
    accounts?: AccountUncheckedUpdateManyWithoutSchemaNestedInput
  }

  export type AccountSchemaCreateManyInput = {
    id?: number
    schema: JsonNullValueInput | InputJsonValue
    workspaceId: number
  }

  export type AccountSchemaUpdateManyMutationInput = {
    schema?: JsonNullValueInput | InputJsonValue
  }

  export type AccountSchemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schema?: JsonNullValueInput | InputJsonValue
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateInput = {
    data: JsonNullValueInput | InputJsonValue
    schema: AccountSchemaCreateNestedOneWithoutAccountsInput
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutAccountInput
    accountChannels?: AccountChannelCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateInput = {
    id?: number
    schemaId: number
    data: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutAccountInput
    accountChannels?: AccountChannelUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountUpdateInput = {
    data?: JsonNullValueInput | InputJsonValue
    schema?: AccountSchemaUpdateOneRequiredWithoutAccountsNestedInput
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutAccountNestedInput
    accountChannels?: AccountChannelUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schemaId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutAccountNestedInput
    accountChannels?: AccountChannelUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountCreateManyInput = {
    id?: number
    schemaId: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type AccountUpdateManyMutationInput = {
    data?: JsonNullValueInput | InputJsonValue
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schemaId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type WorkspaceAccountCreateInput = {
    role: string
    workspace: WorkspaceCreateNestedOneWithoutWorkspaceAccountsInput
    account: AccountCreateNestedOneWithoutWorkspaceAccountsInput
  }

  export type WorkspaceAccountUncheckedCreateInput = {
    id?: number
    accountId: number
    workspaceId: number
    role: string
  }

  export type WorkspaceAccountUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutWorkspaceAccountsNestedInput
    account?: AccountUpdateOneRequiredWithoutWorkspaceAccountsNestedInput
  }

  export type WorkspaceAccountUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceAccountCreateManyInput = {
    id?: number
    accountId: number
    workspaceId: number
    role: string
  }

  export type WorkspaceAccountUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceAccountUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type DataRecordSchemaCreateInput = {
    name: string
    schema: JsonNullValueInput | InputJsonValue
    workspace: WorkspaceCreateNestedOneWithoutDataRecordSchemasInput
    dataRecords?: DataRecordCreateNestedManyWithoutSchemaInput
  }

  export type DataRecordSchemaUncheckedCreateInput = {
    id?: number
    name: string
    schema: JsonNullValueInput | InputJsonValue
    workspaceId: number
    dataRecords?: DataRecordUncheckedCreateNestedManyWithoutSchemaInput
  }

  export type DataRecordSchemaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
    workspace?: WorkspaceUpdateOneRequiredWithoutDataRecordSchemasNestedInput
    dataRecords?: DataRecordUpdateManyWithoutSchemaNestedInput
  }

  export type DataRecordSchemaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
    workspaceId?: IntFieldUpdateOperationsInput | number
    dataRecords?: DataRecordUncheckedUpdateManyWithoutSchemaNestedInput
  }

  export type DataRecordSchemaCreateManyInput = {
    id?: number
    name: string
    schema: JsonNullValueInput | InputJsonValue
    workspaceId: number
  }

  export type DataRecordSchemaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordSchemaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type DataRecordCreateInput = {
    data: JsonNullValueInput | InputJsonValue
    schema: DataRecordSchemaCreateNestedOneWithoutDataRecordsInput
  }

  export type DataRecordUncheckedCreateInput = {
    id?: number
    schemaId: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordUpdateInput = {
    data?: JsonNullValueInput | InputJsonValue
    schema?: DataRecordSchemaUpdateOneRequiredWithoutDataRecordsNestedInput
  }

  export type DataRecordUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    schemaId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordCreateManyInput = {
    id?: number
    schemaId: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordUpdateManyMutationInput = {
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    schemaId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type ChannelCreateInput = {
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    workspace: WorkspaceCreateNestedOneWithoutChannelsInput
    accountChannels?: AccountChannelCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateInput = {
    id?: number
    kind: string
    workspaceId: number
    configuration: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelUpdateInput = {
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelsNestedInput
    accountChannels?: AccountChannelUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelCreateManyInput = {
    id?: number
    kind: string
    workspaceId: number
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type ChannelUpdateManyMutationInput = {
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type ChannelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type AccountChannelCreateInput = {
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
    account: AccountCreateNestedOneWithoutAccountChannelsInput
    channel: ChannelCreateNestedOneWithoutAccountChannelsInput
    flowStacks?: FlowStackCreateNestedManyWithoutAccountChannelInput
  }

  export type AccountChannelUncheckedCreateInput = {
    id?: number
    accountId: number
    channelId: number
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
    flowStacks?: FlowStackUncheckedCreateNestedManyWithoutAccountChannelInput
  }

  export type AccountChannelUpdateInput = {
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    account?: AccountUpdateOneRequiredWithoutAccountChannelsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutAccountChannelsNestedInput
    flowStacks?: FlowStackUpdateManyWithoutAccountChannelNestedInput
  }

  export type AccountChannelUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    flowStacks?: FlowStackUncheckedUpdateManyWithoutAccountChannelNestedInput
  }

  export type AccountChannelCreateManyInput = {
    id?: number
    accountId: number
    channelId: number
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type AccountChannelUpdateManyMutationInput = {
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type AccountChannelUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type FlowGroupCreateInput = {
    name: string
    workspace: WorkspaceCreateNestedOneWithoutFlowGroupsInput
    flows?: FlowCreateNestedManyWithoutFlowGroupInput
  }

  export type FlowGroupUncheckedCreateInput = {
    id?: number
    name: string
    workspaceId: number
    flows?: FlowUncheckedCreateNestedManyWithoutFlowGroupInput
  }

  export type FlowGroupUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutFlowGroupsNestedInput
    flows?: FlowUpdateManyWithoutFlowGroupNestedInput
  }

  export type FlowGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
    flows?: FlowUncheckedUpdateManyWithoutFlowGroupNestedInput
  }

  export type FlowGroupCreateManyInput = {
    id?: number
    name: string
    workspaceId: number
  }

  export type FlowGroupUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FlowGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowCreateInput = {
    name: string
    status: string
    contextSchema: JsonNullValueInput | InputJsonValue
    flowGroup: FlowGroupCreateNestedOneWithoutFlowsInput
    flowActions?: FlowActionCreateNestedManyWithoutFlowInput
    FlowActionConnection?: FlowActionConnectionCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateInput = {
    id?: number
    name: string
    status: string
    flowGroupId: number
    contextSchema: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedCreateNestedManyWithoutFlowInput
    FlowActionConnection?: FlowActionConnectionUncheckedCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowGroup?: FlowGroupUpdateOneRequiredWithoutFlowsNestedInput
    flowActions?: FlowActionUpdateManyWithoutFlowNestedInput
    FlowActionConnection?: FlowActionConnectionUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    flowGroupId?: IntFieldUpdateOperationsInput | number
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedUpdateManyWithoutFlowNestedInput
    FlowActionConnection?: FlowActionConnectionUncheckedUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowCreateManyInput = {
    id?: number
    name: string
    status: string
    flowGroupId: number
    contextSchema: JsonNullValueInput | InputJsonValue
  }

  export type FlowUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
  }

  export type FlowUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    flowGroupId?: IntFieldUpdateOperationsInput | number
    contextSchema?: JsonNullValueInput | InputJsonValue
  }

  export type FlowActionCreateInput = {
    name: string
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    flow: FlowCreateNestedOneWithoutFlowActionsInput
    fromFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutFromFlowActionInput
    toFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutToFlowActionInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionUncheckedCreateInput = {
    id?: number
    name: string
    kind: string
    flowId: number
    configuration: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutFromFlowActionInput
    toFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutToFlowActionInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    flow?: FlowUpdateOneRequiredWithoutFlowActionsNestedInput
    fromFlowActionConnections?: FlowActionConnectionUpdateManyWithoutFromFlowActionNestedInput
    toFlowActionConnections?: FlowActionConnectionUpdateManyWithoutToFlowActionNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowActionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    flowId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutFromFlowActionNestedInput
    toFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutToFlowActionNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowActionCreateManyInput = {
    id?: number
    name: string
    kind: string
    flowId: number
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type FlowActionUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type FlowActionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    flowId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type FlowActionConnectionCreateInput = {
    socket: string
    flow: FlowCreateNestedOneWithoutFlowActionConnectionInput
    fromFlowAction: FlowActionCreateNestedOneWithoutFromFlowActionConnectionsInput
    toFlowAction: FlowActionCreateNestedOneWithoutToFlowActionConnectionsInput
  }

  export type FlowActionConnectionUncheckedCreateInput = {
    id?: number
    flowId: number
    fromId: number
    toId: number
    socket: string
  }

  export type FlowActionConnectionUpdateInput = {
    socket?: StringFieldUpdateOperationsInput | string
    flow?: FlowUpdateOneRequiredWithoutFlowActionConnectionNestedInput
    fromFlowAction?: FlowActionUpdateOneRequiredWithoutFromFlowActionConnectionsNestedInput
    toFlowAction?: FlowActionUpdateOneRequiredWithoutToFlowActionConnectionsNestedInput
  }

  export type FlowActionConnectionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowActionConnectionCreateManyInput = {
    id?: number
    flowId: number
    fromId: number
    toId: number
    socket: string
  }

  export type FlowActionConnectionUpdateManyMutationInput = {
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowActionConnectionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowStackCreateInput = {
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flow: FlowCreateNestedOneWithoutFlowStackInput
    parent?: FlowStackCreateNestedOneWithoutChildrenInput
    accountChannel: AccountChannelCreateNestedOneWithoutFlowStacksInput
    children?: FlowStackCreateNestedManyWithoutParentInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackUncheckedCreateInput = {
    id?: number
    flowId: number
    parentId?: number | null
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    children?: FlowStackUncheckedCreateNestedManyWithoutParentInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackUpdateInput = {
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutFlowStackNestedInput
    parent?: FlowStackUpdateOneWithoutChildrenNestedInput
    accountChannel?: AccountChannelUpdateOneRequiredWithoutFlowStacksNestedInput
    children?: FlowStackUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FlowStackUncheckedUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackCreateManyInput = {
    id?: number
    flowId: number
    parentId?: number | null
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStackUpdateManyMutationInput = {
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowStackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowStateCreateInput = {
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flowStack: FlowStackCreateNestedOneWithoutFlowStatesInput
    flowAction: FlowActionCreateNestedOneWithoutFlowStatesInput
  }

  export type FlowStateUncheckedCreateInput = {
    id?: number
    flowStackId: number
    flowActionId: number
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStateUpdateInput = {
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowStack?: FlowStackUpdateOneRequiredWithoutFlowStatesNestedInput
    flowAction?: FlowActionUpdateOneRequiredWithoutFlowStatesNestedInput
  }

  export type FlowStateUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowStackId?: IntFieldUpdateOperationsInput | number
    flowActionId?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowStateCreateManyInput = {
    id?: number
    flowStackId: number
    flowActionId: number
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStateUpdateManyMutationInput = {
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowStateUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowStackId?: IntFieldUpdateOperationsInput | number
    flowActionId?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type AccountSchemaListRelationFilter = {
    every?: AccountSchemaWhereInput
    some?: AccountSchemaWhereInput
    none?: AccountSchemaWhereInput
  }

  export type DataRecordSchemaListRelationFilter = {
    every?: DataRecordSchemaWhereInput
    some?: DataRecordSchemaWhereInput
    none?: DataRecordSchemaWhereInput
  }

  export type WorkspaceAccountListRelationFilter = {
    every?: WorkspaceAccountWhereInput
    some?: WorkspaceAccountWhereInput
    none?: WorkspaceAccountWhereInput
  }

  export type ChannelListRelationFilter = {
    every?: ChannelWhereInput
    some?: ChannelWhereInput
    none?: ChannelWhereInput
  }

  export type FlowGroupListRelationFilter = {
    every?: FlowGroupWhereInput
    some?: FlowGroupWhereInput
    none?: FlowGroupWhereInput
  }

  export type AccountSchemaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataRecordSchemaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WorkspaceAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type WorkspaceSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type JsonFilter = 
    | PatchUndefined<
        Either<Required<JsonFilterBase>, Exclude<keyof Required<JsonFilterBase>, 'path'>>,
        Required<JsonFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase>, 'path'>>

  export type JsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type WorkspaceRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountSchemaCountOrderByAggregateInput = {
    id?: SortOrder
    schema?: SortOrder
    workspaceId?: SortOrder
  }

  export type AccountSchemaAvgOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type AccountSchemaMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type AccountSchemaMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type AccountSchemaSumOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }
  export type JsonWithAggregatesFilter = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase>, Exclude<keyof Required<JsonWithAggregatesFilterBase>, 'path'>>,
        Required<JsonWithAggregatesFilterBase>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase>, 'path'>>

  export type JsonWithAggregatesFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
    _count?: NestedIntFilter
    _min?: NestedJsonFilter
    _max?: NestedJsonFilter
  }

  export type AccountSchemaRelationFilter = {
    is?: AccountSchemaWhereInput
    isNot?: AccountSchemaWhereInput
  }

  export type AccountChannelListRelationFilter = {
    every?: AccountChannelWhereInput
    some?: AccountChannelWhereInput
    none?: AccountChannelWhereInput
  }

  export type AccountChannelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
    data?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type AccountRelationFilter = {
    is?: AccountWhereInput
    isNot?: AccountWhereInput
  }

  export type WorkspaceAccountCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
  }

  export type WorkspaceAccountAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    workspaceId?: SortOrder
  }

  export type WorkspaceAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
  }

  export type WorkspaceAccountMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    workspaceId?: SortOrder
    role?: SortOrder
  }

  export type WorkspaceAccountSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    workspaceId?: SortOrder
  }

  export type DataRecordListRelationFilter = {
    every?: DataRecordWhereInput
    some?: DataRecordWhereInput
    none?: DataRecordWhereInput
  }

  export type DataRecordOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DataRecordSchemaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    schema?: SortOrder
    workspaceId?: SortOrder
  }

  export type DataRecordSchemaAvgOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type DataRecordSchemaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
  }

  export type DataRecordSchemaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
  }

  export type DataRecordSchemaSumOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type DataRecordSchemaRelationFilter = {
    is?: DataRecordSchemaWhereInput
    isNot?: DataRecordSchemaWhereInput
  }

  export type DataRecordCountOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
    data?: SortOrder
  }

  export type DataRecordAvgOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type DataRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type DataRecordMinOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type DataRecordSumOrderByAggregateInput = {
    id?: SortOrder
    schemaId?: SortOrder
  }

  export type ChannelCountOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    workspaceId?: SortOrder
    configuration?: SortOrder
  }

  export type ChannelAvgOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type ChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    workspaceId?: SortOrder
  }

  export type ChannelMinOrderByAggregateInput = {
    id?: SortOrder
    kind?: SortOrder
    workspaceId?: SortOrder
  }

  export type ChannelSumOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type ChannelRelationFilter = {
    is?: ChannelWhereInput
    isNot?: ChannelWhereInput
  }

  export type FlowStackListRelationFilter = {
    every?: FlowStackWhereInput
    some?: FlowStackWhereInput
    none?: FlowStackWhereInput
  }

  export type FlowStackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AccountChannelCountOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    channelId?: SortOrder
    channelAccountId?: SortOrder
    status?: SortOrder
    data?: SortOrder
  }

  export type AccountChannelAvgOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    channelId?: SortOrder
    channelAccountId?: SortOrder
  }

  export type AccountChannelMaxOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    channelId?: SortOrder
    channelAccountId?: SortOrder
    status?: SortOrder
  }

  export type AccountChannelMinOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    channelId?: SortOrder
    channelAccountId?: SortOrder
    status?: SortOrder
  }

  export type AccountChannelSumOrderByAggregateInput = {
    id?: SortOrder
    accountId?: SortOrder
    channelId?: SortOrder
    channelAccountId?: SortOrder
  }

  export type FlowListRelationFilter = {
    every?: FlowWhereInput
    some?: FlowWhereInput
    none?: FlowWhereInput
  }

  export type FlowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowGroupCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
  }

  export type FlowGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type FlowGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
  }

  export type FlowGroupMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    workspaceId?: SortOrder
  }

  export type FlowGroupSumOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
  }

  export type FlowGroupRelationFilter = {
    is?: FlowGroupWhereInput
    isNot?: FlowGroupWhereInput
  }

  export type FlowActionListRelationFilter = {
    every?: FlowActionWhereInput
    some?: FlowActionWhereInput
    none?: FlowActionWhereInput
  }

  export type FlowActionConnectionListRelationFilter = {
    every?: FlowActionConnectionWhereInput
    some?: FlowActionConnectionWhereInput
    none?: FlowActionConnectionWhereInput
  }

  export type FlowActionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowActionConnectionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    flowGroupId?: SortOrder
    contextSchema?: SortOrder
  }

  export type FlowAvgOrderByAggregateInput = {
    id?: SortOrder
    flowGroupId?: SortOrder
  }

  export type FlowMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    flowGroupId?: SortOrder
  }

  export type FlowMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    status?: SortOrder
    flowGroupId?: SortOrder
  }

  export type FlowSumOrderByAggregateInput = {
    id?: SortOrder
    flowGroupId?: SortOrder
  }

  export type FlowRelationFilter = {
    is?: FlowWhereInput
    isNot?: FlowWhereInput
  }

  export type FlowStateListRelationFilter = {
    every?: FlowStateWhereInput
    some?: FlowStateWhereInput
    none?: FlowStateWhereInput
  }

  export type FlowStateOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FlowActionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    flowId?: SortOrder
    configuration?: SortOrder
  }

  export type FlowActionAvgOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
  }

  export type FlowActionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    flowId?: SortOrder
  }

  export type FlowActionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    kind?: SortOrder
    flowId?: SortOrder
  }

  export type FlowActionSumOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
  }

  export type FlowActionRelationFilter = {
    is?: FlowActionWhereInput
    isNot?: FlowActionWhereInput
  }

  export type FlowActionConnectionCountOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    socket?: SortOrder
  }

  export type FlowActionConnectionAvgOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type FlowActionConnectionMaxOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    socket?: SortOrder
  }

  export type FlowActionConnectionMinOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
    socket?: SortOrder
  }

  export type FlowActionConnectionSumOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    fromId?: SortOrder
    toId?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type FlowStackRelationFilter = {
    is?: FlowStackWhereInput
    isNot?: FlowStackWhereInput
  }

  export type AccountChannelRelationFilter = {
    is?: AccountChannelWhereInput
    isNot?: AccountChannelWhereInput
  }

  export type FlowStackCountOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    parentId?: SortOrder
    accountChannelId?: SortOrder
    context?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowStackAvgOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    parentId?: SortOrder
    accountChannelId?: SortOrder
  }

  export type FlowStackMaxOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    parentId?: SortOrder
    accountChannelId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowStackMinOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    parentId?: SortOrder
    accountChannelId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowStackSumOrderByAggregateInput = {
    id?: SortOrder
    flowId?: SortOrder
    parentId?: SortOrder
    accountChannelId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type FlowStateCountOrderByAggregateInput = {
    id?: SortOrder
    flowStackId?: SortOrder
    flowActionId?: SortOrder
    state?: SortOrder
    channelState?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowStateAvgOrderByAggregateInput = {
    id?: SortOrder
    flowStackId?: SortOrder
    flowActionId?: SortOrder
  }

  export type FlowStateMaxOrderByAggregateInput = {
    id?: SortOrder
    flowStackId?: SortOrder
    flowActionId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowStateMinOrderByAggregateInput = {
    id?: SortOrder
    flowStackId?: SortOrder
    flowActionId?: SortOrder
    createdAt?: SortOrder
  }

  export type FlowStateSumOrderByAggregateInput = {
    id?: SortOrder
    flowStackId?: SortOrder
    flowActionId?: SortOrder
  }

  export type AccountSchemaCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<AccountSchemaCreateWithoutWorkspaceInput>, Enumerable<AccountSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<AccountSchemaCreateOrConnectWithoutWorkspaceInput>
    createMany?: AccountSchemaCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<AccountSchemaWhereUniqueInput>
  }

  export type DataRecordSchemaCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<DataRecordSchemaCreateWithoutWorkspaceInput>, Enumerable<DataRecordSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<DataRecordSchemaCreateOrConnectWithoutWorkspaceInput>
    createMany?: DataRecordSchemaCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<DataRecordSchemaWhereUniqueInput>
  }

  export type WorkspaceAccountCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutWorkspaceInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutWorkspaceInput>
    createMany?: WorkspaceAccountCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
  }

  export type ChannelCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<ChannelCreateWithoutWorkspaceInput>, Enumerable<ChannelUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ChannelCreateOrConnectWithoutWorkspaceInput>
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<ChannelWhereUniqueInput>
  }

  export type FlowGroupCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<FlowGroupCreateWithoutWorkspaceInput>, Enumerable<FlowGroupUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<FlowGroupCreateOrConnectWithoutWorkspaceInput>
    createMany?: FlowGroupCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<FlowGroupWhereUniqueInput>
  }

  export type AccountSchemaUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<AccountSchemaCreateWithoutWorkspaceInput>, Enumerable<AccountSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<AccountSchemaCreateOrConnectWithoutWorkspaceInput>
    createMany?: AccountSchemaCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<AccountSchemaWhereUniqueInput>
  }

  export type DataRecordSchemaUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<DataRecordSchemaCreateWithoutWorkspaceInput>, Enumerable<DataRecordSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<DataRecordSchemaCreateOrConnectWithoutWorkspaceInput>
    createMany?: DataRecordSchemaCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<DataRecordSchemaWhereUniqueInput>
  }

  export type WorkspaceAccountUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutWorkspaceInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutWorkspaceInput>
    createMany?: WorkspaceAccountCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
  }

  export type ChannelUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<ChannelCreateWithoutWorkspaceInput>, Enumerable<ChannelUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ChannelCreateOrConnectWithoutWorkspaceInput>
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<ChannelWhereUniqueInput>
  }

  export type FlowGroupUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<Enumerable<FlowGroupCreateWithoutWorkspaceInput>, Enumerable<FlowGroupUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<FlowGroupCreateOrConnectWithoutWorkspaceInput>
    createMany?: FlowGroupCreateManyWorkspaceInputEnvelope
    connect?: Enumerable<FlowGroupWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AccountSchemaUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<AccountSchemaCreateWithoutWorkspaceInput>, Enumerable<AccountSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<AccountSchemaCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<AccountSchemaUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: AccountSchemaCreateManyWorkspaceInputEnvelope
    set?: Enumerable<AccountSchemaWhereUniqueInput>
    disconnect?: Enumerable<AccountSchemaWhereUniqueInput>
    delete?: Enumerable<AccountSchemaWhereUniqueInput>
    connect?: Enumerable<AccountSchemaWhereUniqueInput>
    update?: Enumerable<AccountSchemaUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<AccountSchemaUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<AccountSchemaScalarWhereInput>
  }

  export type DataRecordSchemaUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<DataRecordSchemaCreateWithoutWorkspaceInput>, Enumerable<DataRecordSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<DataRecordSchemaCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<DataRecordSchemaUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: DataRecordSchemaCreateManyWorkspaceInputEnvelope
    set?: Enumerable<DataRecordSchemaWhereUniqueInput>
    disconnect?: Enumerable<DataRecordSchemaWhereUniqueInput>
    delete?: Enumerable<DataRecordSchemaWhereUniqueInput>
    connect?: Enumerable<DataRecordSchemaWhereUniqueInput>
    update?: Enumerable<DataRecordSchemaUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<DataRecordSchemaUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<DataRecordSchemaScalarWhereInput>
  }

  export type WorkspaceAccountUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutWorkspaceInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<WorkspaceAccountUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: WorkspaceAccountCreateManyWorkspaceInputEnvelope
    set?: Enumerable<WorkspaceAccountWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    delete?: Enumerable<WorkspaceAccountWhereUniqueInput>
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    update?: Enumerable<WorkspaceAccountUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<WorkspaceAccountUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<WorkspaceAccountScalarWhereInput>
  }

  export type ChannelUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<ChannelCreateWithoutWorkspaceInput>, Enumerable<ChannelUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ChannelCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<ChannelUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    set?: Enumerable<ChannelWhereUniqueInput>
    disconnect?: Enumerable<ChannelWhereUniqueInput>
    delete?: Enumerable<ChannelWhereUniqueInput>
    connect?: Enumerable<ChannelWhereUniqueInput>
    update?: Enumerable<ChannelUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<ChannelUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<ChannelScalarWhereInput>
  }

  export type FlowGroupUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<FlowGroupCreateWithoutWorkspaceInput>, Enumerable<FlowGroupUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<FlowGroupCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<FlowGroupUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: FlowGroupCreateManyWorkspaceInputEnvelope
    set?: Enumerable<FlowGroupWhereUniqueInput>
    disconnect?: Enumerable<FlowGroupWhereUniqueInput>
    delete?: Enumerable<FlowGroupWhereUniqueInput>
    connect?: Enumerable<FlowGroupWhereUniqueInput>
    update?: Enumerable<FlowGroupUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<FlowGroupUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<FlowGroupScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AccountSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<AccountSchemaCreateWithoutWorkspaceInput>, Enumerable<AccountSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<AccountSchemaCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<AccountSchemaUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: AccountSchemaCreateManyWorkspaceInputEnvelope
    set?: Enumerable<AccountSchemaWhereUniqueInput>
    disconnect?: Enumerable<AccountSchemaWhereUniqueInput>
    delete?: Enumerable<AccountSchemaWhereUniqueInput>
    connect?: Enumerable<AccountSchemaWhereUniqueInput>
    update?: Enumerable<AccountSchemaUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<AccountSchemaUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<AccountSchemaScalarWhereInput>
  }

  export type DataRecordSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<DataRecordSchemaCreateWithoutWorkspaceInput>, Enumerable<DataRecordSchemaUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<DataRecordSchemaCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<DataRecordSchemaUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: DataRecordSchemaCreateManyWorkspaceInputEnvelope
    set?: Enumerable<DataRecordSchemaWhereUniqueInput>
    disconnect?: Enumerable<DataRecordSchemaWhereUniqueInput>
    delete?: Enumerable<DataRecordSchemaWhereUniqueInput>
    connect?: Enumerable<DataRecordSchemaWhereUniqueInput>
    update?: Enumerable<DataRecordSchemaUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<DataRecordSchemaUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<DataRecordSchemaScalarWhereInput>
  }

  export type WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutWorkspaceInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<WorkspaceAccountUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: WorkspaceAccountCreateManyWorkspaceInputEnvelope
    set?: Enumerable<WorkspaceAccountWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    delete?: Enumerable<WorkspaceAccountWhereUniqueInput>
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    update?: Enumerable<WorkspaceAccountUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<WorkspaceAccountUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<WorkspaceAccountScalarWhereInput>
  }

  export type ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<ChannelCreateWithoutWorkspaceInput>, Enumerable<ChannelUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<ChannelCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<ChannelUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: ChannelCreateManyWorkspaceInputEnvelope
    set?: Enumerable<ChannelWhereUniqueInput>
    disconnect?: Enumerable<ChannelWhereUniqueInput>
    delete?: Enumerable<ChannelWhereUniqueInput>
    connect?: Enumerable<ChannelWhereUniqueInput>
    update?: Enumerable<ChannelUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<ChannelUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<ChannelScalarWhereInput>
  }

  export type FlowGroupUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<Enumerable<FlowGroupCreateWithoutWorkspaceInput>, Enumerable<FlowGroupUncheckedCreateWithoutWorkspaceInput>>
    connectOrCreate?: Enumerable<FlowGroupCreateOrConnectWithoutWorkspaceInput>
    upsert?: Enumerable<FlowGroupUpsertWithWhereUniqueWithoutWorkspaceInput>
    createMany?: FlowGroupCreateManyWorkspaceInputEnvelope
    set?: Enumerable<FlowGroupWhereUniqueInput>
    disconnect?: Enumerable<FlowGroupWhereUniqueInput>
    delete?: Enumerable<FlowGroupWhereUniqueInput>
    connect?: Enumerable<FlowGroupWhereUniqueInput>
    update?: Enumerable<FlowGroupUpdateWithWhereUniqueWithoutWorkspaceInput>
    updateMany?: Enumerable<FlowGroupUpdateManyWithWhereWithoutWorkspaceInput>
    deleteMany?: Enumerable<FlowGroupScalarWhereInput>
  }

  export type WorkspaceCreateNestedOneWithoutAccountSchemasInput = {
    create?: XOR<WorkspaceCreateWithoutAccountSchemasInput, WorkspaceUncheckedCreateWithoutAccountSchemasInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutAccountSchemasInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type AccountCreateNestedManyWithoutSchemaInput = {
    create?: XOR<Enumerable<AccountCreateWithoutSchemaInput>, Enumerable<AccountUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutSchemaInput>
    createMany?: AccountCreateManySchemaInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type AccountUncheckedCreateNestedManyWithoutSchemaInput = {
    create?: XOR<Enumerable<AccountCreateWithoutSchemaInput>, Enumerable<AccountUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutSchemaInput>
    createMany?: AccountCreateManySchemaInputEnvelope
    connect?: Enumerable<AccountWhereUniqueInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutAccountSchemasNestedInput = {
    create?: XOR<WorkspaceCreateWithoutAccountSchemasInput, WorkspaceUncheckedCreateWithoutAccountSchemasInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutAccountSchemasInput
    upsert?: WorkspaceUpsertWithoutAccountSchemasInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutAccountSchemasInput, WorkspaceUncheckedUpdateWithoutAccountSchemasInput>
  }

  export type AccountUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutSchemaInput>, Enumerable<AccountUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutSchemaInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutSchemaInput>
    createMany?: AccountCreateManySchemaInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutSchemaInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutSchemaInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type AccountUncheckedUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<Enumerable<AccountCreateWithoutSchemaInput>, Enumerable<AccountUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<AccountCreateOrConnectWithoutSchemaInput>
    upsert?: Enumerable<AccountUpsertWithWhereUniqueWithoutSchemaInput>
    createMany?: AccountCreateManySchemaInputEnvelope
    set?: Enumerable<AccountWhereUniqueInput>
    disconnect?: Enumerable<AccountWhereUniqueInput>
    delete?: Enumerable<AccountWhereUniqueInput>
    connect?: Enumerable<AccountWhereUniqueInput>
    update?: Enumerable<AccountUpdateWithWhereUniqueWithoutSchemaInput>
    updateMany?: Enumerable<AccountUpdateManyWithWhereWithoutSchemaInput>
    deleteMany?: Enumerable<AccountScalarWhereInput>
  }

  export type AccountSchemaCreateNestedOneWithoutAccountsInput = {
    create?: XOR<AccountSchemaCreateWithoutAccountsInput, AccountSchemaUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: AccountSchemaCreateOrConnectWithoutAccountsInput
    connect?: AccountSchemaWhereUniqueInput
  }

  export type WorkspaceAccountCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutAccountInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutAccountInput>
    createMany?: WorkspaceAccountCreateManyAccountInputEnvelope
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
  }

  export type AccountChannelCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutAccountInput>, Enumerable<AccountChannelUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutAccountInput>
    createMany?: AccountChannelCreateManyAccountInputEnvelope
    connect?: Enumerable<AccountChannelWhereUniqueInput>
  }

  export type WorkspaceAccountUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutAccountInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutAccountInput>
    createMany?: WorkspaceAccountCreateManyAccountInputEnvelope
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
  }

  export type AccountChannelUncheckedCreateNestedManyWithoutAccountInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutAccountInput>, Enumerable<AccountChannelUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutAccountInput>
    createMany?: AccountChannelCreateManyAccountInputEnvelope
    connect?: Enumerable<AccountChannelWhereUniqueInput>
  }

  export type AccountSchemaUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<AccountSchemaCreateWithoutAccountsInput, AccountSchemaUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: AccountSchemaCreateOrConnectWithoutAccountsInput
    upsert?: AccountSchemaUpsertWithoutAccountsInput
    connect?: AccountSchemaWhereUniqueInput
    update?: XOR<AccountSchemaUpdateWithoutAccountsInput, AccountSchemaUncheckedUpdateWithoutAccountsInput>
  }

  export type WorkspaceAccountUpdateManyWithoutAccountNestedInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutAccountInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<WorkspaceAccountUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: WorkspaceAccountCreateManyAccountInputEnvelope
    set?: Enumerable<WorkspaceAccountWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    delete?: Enumerable<WorkspaceAccountWhereUniqueInput>
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    update?: Enumerable<WorkspaceAccountUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<WorkspaceAccountUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<WorkspaceAccountScalarWhereInput>
  }

  export type AccountChannelUpdateManyWithoutAccountNestedInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutAccountInput>, Enumerable<AccountChannelUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<AccountChannelUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: AccountChannelCreateManyAccountInputEnvelope
    set?: Enumerable<AccountChannelWhereUniqueInput>
    disconnect?: Enumerable<AccountChannelWhereUniqueInput>
    delete?: Enumerable<AccountChannelWhereUniqueInput>
    connect?: Enumerable<AccountChannelWhereUniqueInput>
    update?: Enumerable<AccountChannelUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<AccountChannelUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<AccountChannelScalarWhereInput>
  }

  export type WorkspaceAccountUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<Enumerable<WorkspaceAccountCreateWithoutAccountInput>, Enumerable<WorkspaceAccountUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<WorkspaceAccountCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<WorkspaceAccountUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: WorkspaceAccountCreateManyAccountInputEnvelope
    set?: Enumerable<WorkspaceAccountWhereUniqueInput>
    disconnect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    delete?: Enumerable<WorkspaceAccountWhereUniqueInput>
    connect?: Enumerable<WorkspaceAccountWhereUniqueInput>
    update?: Enumerable<WorkspaceAccountUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<WorkspaceAccountUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<WorkspaceAccountScalarWhereInput>
  }

  export type AccountChannelUncheckedUpdateManyWithoutAccountNestedInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutAccountInput>, Enumerable<AccountChannelUncheckedCreateWithoutAccountInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutAccountInput>
    upsert?: Enumerable<AccountChannelUpsertWithWhereUniqueWithoutAccountInput>
    createMany?: AccountChannelCreateManyAccountInputEnvelope
    set?: Enumerable<AccountChannelWhereUniqueInput>
    disconnect?: Enumerable<AccountChannelWhereUniqueInput>
    delete?: Enumerable<AccountChannelWhereUniqueInput>
    connect?: Enumerable<AccountChannelWhereUniqueInput>
    update?: Enumerable<AccountChannelUpdateWithWhereUniqueWithoutAccountInput>
    updateMany?: Enumerable<AccountChannelUpdateManyWithWhereWithoutAccountInput>
    deleteMany?: Enumerable<AccountChannelScalarWhereInput>
  }

  export type WorkspaceCreateNestedOneWithoutWorkspaceAccountsInput = {
    create?: XOR<WorkspaceCreateWithoutWorkspaceAccountsInput, WorkspaceUncheckedCreateWithoutWorkspaceAccountsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWorkspaceAccountsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type AccountCreateNestedOneWithoutWorkspaceAccountsInput = {
    create?: XOR<AccountCreateWithoutWorkspaceAccountsInput, AccountUncheckedCreateWithoutWorkspaceAccountsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutWorkspaceAccountsInput
    connect?: AccountWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutWorkspaceAccountsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutWorkspaceAccountsInput, WorkspaceUncheckedCreateWithoutWorkspaceAccountsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutWorkspaceAccountsInput
    upsert?: WorkspaceUpsertWithoutWorkspaceAccountsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutWorkspaceAccountsInput, WorkspaceUncheckedUpdateWithoutWorkspaceAccountsInput>
  }

  export type AccountUpdateOneRequiredWithoutWorkspaceAccountsNestedInput = {
    create?: XOR<AccountCreateWithoutWorkspaceAccountsInput, AccountUncheckedCreateWithoutWorkspaceAccountsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutWorkspaceAccountsInput
    upsert?: AccountUpsertWithoutWorkspaceAccountsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<AccountUpdateWithoutWorkspaceAccountsInput, AccountUncheckedUpdateWithoutWorkspaceAccountsInput>
  }

  export type WorkspaceCreateNestedOneWithoutDataRecordSchemasInput = {
    create?: XOR<WorkspaceCreateWithoutDataRecordSchemasInput, WorkspaceUncheckedCreateWithoutDataRecordSchemasInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutDataRecordSchemasInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type DataRecordCreateNestedManyWithoutSchemaInput = {
    create?: XOR<Enumerable<DataRecordCreateWithoutSchemaInput>, Enumerable<DataRecordUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<DataRecordCreateOrConnectWithoutSchemaInput>
    createMany?: DataRecordCreateManySchemaInputEnvelope
    connect?: Enumerable<DataRecordWhereUniqueInput>
  }

  export type DataRecordUncheckedCreateNestedManyWithoutSchemaInput = {
    create?: XOR<Enumerable<DataRecordCreateWithoutSchemaInput>, Enumerable<DataRecordUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<DataRecordCreateOrConnectWithoutSchemaInput>
    createMany?: DataRecordCreateManySchemaInputEnvelope
    connect?: Enumerable<DataRecordWhereUniqueInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutDataRecordSchemasNestedInput = {
    create?: XOR<WorkspaceCreateWithoutDataRecordSchemasInput, WorkspaceUncheckedCreateWithoutDataRecordSchemasInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutDataRecordSchemasInput
    upsert?: WorkspaceUpsertWithoutDataRecordSchemasInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutDataRecordSchemasInput, WorkspaceUncheckedUpdateWithoutDataRecordSchemasInput>
  }

  export type DataRecordUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<Enumerable<DataRecordCreateWithoutSchemaInput>, Enumerable<DataRecordUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<DataRecordCreateOrConnectWithoutSchemaInput>
    upsert?: Enumerable<DataRecordUpsertWithWhereUniqueWithoutSchemaInput>
    createMany?: DataRecordCreateManySchemaInputEnvelope
    set?: Enumerable<DataRecordWhereUniqueInput>
    disconnect?: Enumerable<DataRecordWhereUniqueInput>
    delete?: Enumerable<DataRecordWhereUniqueInput>
    connect?: Enumerable<DataRecordWhereUniqueInput>
    update?: Enumerable<DataRecordUpdateWithWhereUniqueWithoutSchemaInput>
    updateMany?: Enumerable<DataRecordUpdateManyWithWhereWithoutSchemaInput>
    deleteMany?: Enumerable<DataRecordScalarWhereInput>
  }

  export type DataRecordUncheckedUpdateManyWithoutSchemaNestedInput = {
    create?: XOR<Enumerable<DataRecordCreateWithoutSchemaInput>, Enumerable<DataRecordUncheckedCreateWithoutSchemaInput>>
    connectOrCreate?: Enumerable<DataRecordCreateOrConnectWithoutSchemaInput>
    upsert?: Enumerable<DataRecordUpsertWithWhereUniqueWithoutSchemaInput>
    createMany?: DataRecordCreateManySchemaInputEnvelope
    set?: Enumerable<DataRecordWhereUniqueInput>
    disconnect?: Enumerable<DataRecordWhereUniqueInput>
    delete?: Enumerable<DataRecordWhereUniqueInput>
    connect?: Enumerable<DataRecordWhereUniqueInput>
    update?: Enumerable<DataRecordUpdateWithWhereUniqueWithoutSchemaInput>
    updateMany?: Enumerable<DataRecordUpdateManyWithWhereWithoutSchemaInput>
    deleteMany?: Enumerable<DataRecordScalarWhereInput>
  }

  export type DataRecordSchemaCreateNestedOneWithoutDataRecordsInput = {
    create?: XOR<DataRecordSchemaCreateWithoutDataRecordsInput, DataRecordSchemaUncheckedCreateWithoutDataRecordsInput>
    connectOrCreate?: DataRecordSchemaCreateOrConnectWithoutDataRecordsInput
    connect?: DataRecordSchemaWhereUniqueInput
  }

  export type DataRecordSchemaUpdateOneRequiredWithoutDataRecordsNestedInput = {
    create?: XOR<DataRecordSchemaCreateWithoutDataRecordsInput, DataRecordSchemaUncheckedCreateWithoutDataRecordsInput>
    connectOrCreate?: DataRecordSchemaCreateOrConnectWithoutDataRecordsInput
    upsert?: DataRecordSchemaUpsertWithoutDataRecordsInput
    connect?: DataRecordSchemaWhereUniqueInput
    update?: XOR<DataRecordSchemaUpdateWithoutDataRecordsInput, DataRecordSchemaUncheckedUpdateWithoutDataRecordsInput>
  }

  export type WorkspaceCreateNestedOneWithoutChannelsInput = {
    create?: XOR<WorkspaceCreateWithoutChannelsInput, WorkspaceUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutChannelsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type AccountChannelCreateNestedManyWithoutChannelInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutChannelInput>, Enumerable<AccountChannelUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutChannelInput>
    createMany?: AccountChannelCreateManyChannelInputEnvelope
    connect?: Enumerable<AccountChannelWhereUniqueInput>
  }

  export type AccountChannelUncheckedCreateNestedManyWithoutChannelInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutChannelInput>, Enumerable<AccountChannelUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutChannelInput>
    createMany?: AccountChannelCreateManyChannelInputEnvelope
    connect?: Enumerable<AccountChannelWhereUniqueInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutChannelsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutChannelsInput, WorkspaceUncheckedCreateWithoutChannelsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutChannelsInput
    upsert?: WorkspaceUpsertWithoutChannelsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutChannelsInput, WorkspaceUncheckedUpdateWithoutChannelsInput>
  }

  export type AccountChannelUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutChannelInput>, Enumerable<AccountChannelUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutChannelInput>
    upsert?: Enumerable<AccountChannelUpsertWithWhereUniqueWithoutChannelInput>
    createMany?: AccountChannelCreateManyChannelInputEnvelope
    set?: Enumerable<AccountChannelWhereUniqueInput>
    disconnect?: Enumerable<AccountChannelWhereUniqueInput>
    delete?: Enumerable<AccountChannelWhereUniqueInput>
    connect?: Enumerable<AccountChannelWhereUniqueInput>
    update?: Enumerable<AccountChannelUpdateWithWhereUniqueWithoutChannelInput>
    updateMany?: Enumerable<AccountChannelUpdateManyWithWhereWithoutChannelInput>
    deleteMany?: Enumerable<AccountChannelScalarWhereInput>
  }

  export type AccountChannelUncheckedUpdateManyWithoutChannelNestedInput = {
    create?: XOR<Enumerable<AccountChannelCreateWithoutChannelInput>, Enumerable<AccountChannelUncheckedCreateWithoutChannelInput>>
    connectOrCreate?: Enumerable<AccountChannelCreateOrConnectWithoutChannelInput>
    upsert?: Enumerable<AccountChannelUpsertWithWhereUniqueWithoutChannelInput>
    createMany?: AccountChannelCreateManyChannelInputEnvelope
    set?: Enumerable<AccountChannelWhereUniqueInput>
    disconnect?: Enumerable<AccountChannelWhereUniqueInput>
    delete?: Enumerable<AccountChannelWhereUniqueInput>
    connect?: Enumerable<AccountChannelWhereUniqueInput>
    update?: Enumerable<AccountChannelUpdateWithWhereUniqueWithoutChannelInput>
    updateMany?: Enumerable<AccountChannelUpdateManyWithWhereWithoutChannelInput>
    deleteMany?: Enumerable<AccountChannelScalarWhereInput>
  }

  export type AccountCreateNestedOneWithoutAccountChannelsInput = {
    create?: XOR<AccountCreateWithoutAccountChannelsInput, AccountUncheckedCreateWithoutAccountChannelsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountChannelsInput
    connect?: AccountWhereUniqueInput
  }

  export type ChannelCreateNestedOneWithoutAccountChannelsInput = {
    create?: XOR<ChannelCreateWithoutAccountChannelsInput, ChannelUncheckedCreateWithoutAccountChannelsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutAccountChannelsInput
    connect?: ChannelWhereUniqueInput
  }

  export type FlowStackCreateNestedManyWithoutAccountChannelInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutAccountChannelInput>, Enumerable<FlowStackUncheckedCreateWithoutAccountChannelInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutAccountChannelInput>
    createMany?: FlowStackCreateManyAccountChannelInputEnvelope
    connect?: Enumerable<FlowStackWhereUniqueInput>
  }

  export type FlowStackUncheckedCreateNestedManyWithoutAccountChannelInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutAccountChannelInput>, Enumerable<FlowStackUncheckedCreateWithoutAccountChannelInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutAccountChannelInput>
    createMany?: FlowStackCreateManyAccountChannelInputEnvelope
    connect?: Enumerable<FlowStackWhereUniqueInput>
  }

  export type AccountUpdateOneRequiredWithoutAccountChannelsNestedInput = {
    create?: XOR<AccountCreateWithoutAccountChannelsInput, AccountUncheckedCreateWithoutAccountChannelsInput>
    connectOrCreate?: AccountCreateOrConnectWithoutAccountChannelsInput
    upsert?: AccountUpsertWithoutAccountChannelsInput
    connect?: AccountWhereUniqueInput
    update?: XOR<AccountUpdateWithoutAccountChannelsInput, AccountUncheckedUpdateWithoutAccountChannelsInput>
  }

  export type ChannelUpdateOneRequiredWithoutAccountChannelsNestedInput = {
    create?: XOR<ChannelCreateWithoutAccountChannelsInput, ChannelUncheckedCreateWithoutAccountChannelsInput>
    connectOrCreate?: ChannelCreateOrConnectWithoutAccountChannelsInput
    upsert?: ChannelUpsertWithoutAccountChannelsInput
    connect?: ChannelWhereUniqueInput
    update?: XOR<ChannelUpdateWithoutAccountChannelsInput, ChannelUncheckedUpdateWithoutAccountChannelsInput>
  }

  export type FlowStackUpdateManyWithoutAccountChannelNestedInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutAccountChannelInput>, Enumerable<FlowStackUncheckedCreateWithoutAccountChannelInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutAccountChannelInput>
    upsert?: Enumerable<FlowStackUpsertWithWhereUniqueWithoutAccountChannelInput>
    createMany?: FlowStackCreateManyAccountChannelInputEnvelope
    set?: Enumerable<FlowStackWhereUniqueInput>
    disconnect?: Enumerable<FlowStackWhereUniqueInput>
    delete?: Enumerable<FlowStackWhereUniqueInput>
    connect?: Enumerable<FlowStackWhereUniqueInput>
    update?: Enumerable<FlowStackUpdateWithWhereUniqueWithoutAccountChannelInput>
    updateMany?: Enumerable<FlowStackUpdateManyWithWhereWithoutAccountChannelInput>
    deleteMany?: Enumerable<FlowStackScalarWhereInput>
  }

  export type FlowStackUncheckedUpdateManyWithoutAccountChannelNestedInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutAccountChannelInput>, Enumerable<FlowStackUncheckedCreateWithoutAccountChannelInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutAccountChannelInput>
    upsert?: Enumerable<FlowStackUpsertWithWhereUniqueWithoutAccountChannelInput>
    createMany?: FlowStackCreateManyAccountChannelInputEnvelope
    set?: Enumerable<FlowStackWhereUniqueInput>
    disconnect?: Enumerable<FlowStackWhereUniqueInput>
    delete?: Enumerable<FlowStackWhereUniqueInput>
    connect?: Enumerable<FlowStackWhereUniqueInput>
    update?: Enumerable<FlowStackUpdateWithWhereUniqueWithoutAccountChannelInput>
    updateMany?: Enumerable<FlowStackUpdateManyWithWhereWithoutAccountChannelInput>
    deleteMany?: Enumerable<FlowStackScalarWhereInput>
  }

  export type WorkspaceCreateNestedOneWithoutFlowGroupsInput = {
    create?: XOR<WorkspaceCreateWithoutFlowGroupsInput, WorkspaceUncheckedCreateWithoutFlowGroupsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutFlowGroupsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type FlowCreateNestedManyWithoutFlowGroupInput = {
    create?: XOR<Enumerable<FlowCreateWithoutFlowGroupInput>, Enumerable<FlowUncheckedCreateWithoutFlowGroupInput>>
    connectOrCreate?: Enumerable<FlowCreateOrConnectWithoutFlowGroupInput>
    createMany?: FlowCreateManyFlowGroupInputEnvelope
    connect?: Enumerable<FlowWhereUniqueInput>
  }

  export type FlowUncheckedCreateNestedManyWithoutFlowGroupInput = {
    create?: XOR<Enumerable<FlowCreateWithoutFlowGroupInput>, Enumerable<FlowUncheckedCreateWithoutFlowGroupInput>>
    connectOrCreate?: Enumerable<FlowCreateOrConnectWithoutFlowGroupInput>
    createMany?: FlowCreateManyFlowGroupInputEnvelope
    connect?: Enumerable<FlowWhereUniqueInput>
  }

  export type WorkspaceUpdateOneRequiredWithoutFlowGroupsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutFlowGroupsInput, WorkspaceUncheckedCreateWithoutFlowGroupsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutFlowGroupsInput
    upsert?: WorkspaceUpsertWithoutFlowGroupsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<WorkspaceUpdateWithoutFlowGroupsInput, WorkspaceUncheckedUpdateWithoutFlowGroupsInput>
  }

  export type FlowUpdateManyWithoutFlowGroupNestedInput = {
    create?: XOR<Enumerable<FlowCreateWithoutFlowGroupInput>, Enumerable<FlowUncheckedCreateWithoutFlowGroupInput>>
    connectOrCreate?: Enumerable<FlowCreateOrConnectWithoutFlowGroupInput>
    upsert?: Enumerable<FlowUpsertWithWhereUniqueWithoutFlowGroupInput>
    createMany?: FlowCreateManyFlowGroupInputEnvelope
    set?: Enumerable<FlowWhereUniqueInput>
    disconnect?: Enumerable<FlowWhereUniqueInput>
    delete?: Enumerable<FlowWhereUniqueInput>
    connect?: Enumerable<FlowWhereUniqueInput>
    update?: Enumerable<FlowUpdateWithWhereUniqueWithoutFlowGroupInput>
    updateMany?: Enumerable<FlowUpdateManyWithWhereWithoutFlowGroupInput>
    deleteMany?: Enumerable<FlowScalarWhereInput>
  }

  export type FlowUncheckedUpdateManyWithoutFlowGroupNestedInput = {
    create?: XOR<Enumerable<FlowCreateWithoutFlowGroupInput>, Enumerable<FlowUncheckedCreateWithoutFlowGroupInput>>
    connectOrCreate?: Enumerable<FlowCreateOrConnectWithoutFlowGroupInput>
    upsert?: Enumerable<FlowUpsertWithWhereUniqueWithoutFlowGroupInput>
    createMany?: FlowCreateManyFlowGroupInputEnvelope
    set?: Enumerable<FlowWhereUniqueInput>
    disconnect?: Enumerable<FlowWhereUniqueInput>
    delete?: Enumerable<FlowWhereUniqueInput>
    connect?: Enumerable<FlowWhereUniqueInput>
    update?: Enumerable<FlowUpdateWithWhereUniqueWithoutFlowGroupInput>
    updateMany?: Enumerable<FlowUpdateManyWithWhereWithoutFlowGroupInput>
    deleteMany?: Enumerable<FlowScalarWhereInput>
  }

  export type FlowGroupCreateNestedOneWithoutFlowsInput = {
    create?: XOR<FlowGroupCreateWithoutFlowsInput, FlowGroupUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: FlowGroupCreateOrConnectWithoutFlowsInput
    connect?: FlowGroupWhereUniqueInput
  }

  export type FlowActionCreateNestedManyWithoutFlowInput = {
    create?: XOR<Enumerable<FlowActionCreateWithoutFlowInput>, Enumerable<FlowActionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionCreateOrConnectWithoutFlowInput>
    createMany?: FlowActionCreateManyFlowInputEnvelope
    connect?: Enumerable<FlowActionWhereUniqueInput>
  }

  export type FlowActionConnectionCreateNestedManyWithoutFlowInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFlowInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFlowInput>
    createMany?: FlowActionConnectionCreateManyFlowInputEnvelope
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
  }

  export type FlowStackCreateNestedManyWithoutFlowInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutFlowInput>, Enumerable<FlowStackUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutFlowInput>
    createMany?: FlowStackCreateManyFlowInputEnvelope
    connect?: Enumerable<FlowStackWhereUniqueInput>
  }

  export type FlowActionUncheckedCreateNestedManyWithoutFlowInput = {
    create?: XOR<Enumerable<FlowActionCreateWithoutFlowInput>, Enumerable<FlowActionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionCreateOrConnectWithoutFlowInput>
    createMany?: FlowActionCreateManyFlowInputEnvelope
    connect?: Enumerable<FlowActionWhereUniqueInput>
  }

  export type FlowActionConnectionUncheckedCreateNestedManyWithoutFlowInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFlowInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFlowInput>
    createMany?: FlowActionConnectionCreateManyFlowInputEnvelope
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
  }

  export type FlowStackUncheckedCreateNestedManyWithoutFlowInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutFlowInput>, Enumerable<FlowStackUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutFlowInput>
    createMany?: FlowStackCreateManyFlowInputEnvelope
    connect?: Enumerable<FlowStackWhereUniqueInput>
  }

  export type FlowGroupUpdateOneRequiredWithoutFlowsNestedInput = {
    create?: XOR<FlowGroupCreateWithoutFlowsInput, FlowGroupUncheckedCreateWithoutFlowsInput>
    connectOrCreate?: FlowGroupCreateOrConnectWithoutFlowsInput
    upsert?: FlowGroupUpsertWithoutFlowsInput
    connect?: FlowGroupWhereUniqueInput
    update?: XOR<FlowGroupUpdateWithoutFlowsInput, FlowGroupUncheckedUpdateWithoutFlowsInput>
  }

  export type FlowActionUpdateManyWithoutFlowNestedInput = {
    create?: XOR<Enumerable<FlowActionCreateWithoutFlowInput>, Enumerable<FlowActionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionCreateOrConnectWithoutFlowInput>
    upsert?: Enumerable<FlowActionUpsertWithWhereUniqueWithoutFlowInput>
    createMany?: FlowActionCreateManyFlowInputEnvelope
    set?: Enumerable<FlowActionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionWhereUniqueInput>
    delete?: Enumerable<FlowActionWhereUniqueInput>
    connect?: Enumerable<FlowActionWhereUniqueInput>
    update?: Enumerable<FlowActionUpdateWithWhereUniqueWithoutFlowInput>
    updateMany?: Enumerable<FlowActionUpdateManyWithWhereWithoutFlowInput>
    deleteMany?: Enumerable<FlowActionScalarWhereInput>
  }

  export type FlowActionConnectionUpdateManyWithoutFlowNestedInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFlowInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFlowInput>
    upsert?: Enumerable<FlowActionConnectionUpsertWithWhereUniqueWithoutFlowInput>
    createMany?: FlowActionConnectionCreateManyFlowInputEnvelope
    set?: Enumerable<FlowActionConnectionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    delete?: Enumerable<FlowActionConnectionWhereUniqueInput>
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    update?: Enumerable<FlowActionConnectionUpdateWithWhereUniqueWithoutFlowInput>
    updateMany?: Enumerable<FlowActionConnectionUpdateManyWithWhereWithoutFlowInput>
    deleteMany?: Enumerable<FlowActionConnectionScalarWhereInput>
  }

  export type FlowStackUpdateManyWithoutFlowNestedInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutFlowInput>, Enumerable<FlowStackUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutFlowInput>
    upsert?: Enumerable<FlowStackUpsertWithWhereUniqueWithoutFlowInput>
    createMany?: FlowStackCreateManyFlowInputEnvelope
    set?: Enumerable<FlowStackWhereUniqueInput>
    disconnect?: Enumerable<FlowStackWhereUniqueInput>
    delete?: Enumerable<FlowStackWhereUniqueInput>
    connect?: Enumerable<FlowStackWhereUniqueInput>
    update?: Enumerable<FlowStackUpdateWithWhereUniqueWithoutFlowInput>
    updateMany?: Enumerable<FlowStackUpdateManyWithWhereWithoutFlowInput>
    deleteMany?: Enumerable<FlowStackScalarWhereInput>
  }

  export type FlowActionUncheckedUpdateManyWithoutFlowNestedInput = {
    create?: XOR<Enumerable<FlowActionCreateWithoutFlowInput>, Enumerable<FlowActionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionCreateOrConnectWithoutFlowInput>
    upsert?: Enumerable<FlowActionUpsertWithWhereUniqueWithoutFlowInput>
    createMany?: FlowActionCreateManyFlowInputEnvelope
    set?: Enumerable<FlowActionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionWhereUniqueInput>
    delete?: Enumerable<FlowActionWhereUniqueInput>
    connect?: Enumerable<FlowActionWhereUniqueInput>
    update?: Enumerable<FlowActionUpdateWithWhereUniqueWithoutFlowInput>
    updateMany?: Enumerable<FlowActionUpdateManyWithWhereWithoutFlowInput>
    deleteMany?: Enumerable<FlowActionScalarWhereInput>
  }

  export type FlowActionConnectionUncheckedUpdateManyWithoutFlowNestedInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFlowInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFlowInput>
    upsert?: Enumerable<FlowActionConnectionUpsertWithWhereUniqueWithoutFlowInput>
    createMany?: FlowActionConnectionCreateManyFlowInputEnvelope
    set?: Enumerable<FlowActionConnectionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    delete?: Enumerable<FlowActionConnectionWhereUniqueInput>
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    update?: Enumerable<FlowActionConnectionUpdateWithWhereUniqueWithoutFlowInput>
    updateMany?: Enumerable<FlowActionConnectionUpdateManyWithWhereWithoutFlowInput>
    deleteMany?: Enumerable<FlowActionConnectionScalarWhereInput>
  }

  export type FlowStackUncheckedUpdateManyWithoutFlowNestedInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutFlowInput>, Enumerable<FlowStackUncheckedCreateWithoutFlowInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutFlowInput>
    upsert?: Enumerable<FlowStackUpsertWithWhereUniqueWithoutFlowInput>
    createMany?: FlowStackCreateManyFlowInputEnvelope
    set?: Enumerable<FlowStackWhereUniqueInput>
    disconnect?: Enumerable<FlowStackWhereUniqueInput>
    delete?: Enumerable<FlowStackWhereUniqueInput>
    connect?: Enumerable<FlowStackWhereUniqueInput>
    update?: Enumerable<FlowStackUpdateWithWhereUniqueWithoutFlowInput>
    updateMany?: Enumerable<FlowStackUpdateManyWithWhereWithoutFlowInput>
    deleteMany?: Enumerable<FlowStackScalarWhereInput>
  }

  export type FlowCreateNestedOneWithoutFlowActionsInput = {
    create?: XOR<FlowCreateWithoutFlowActionsInput, FlowUncheckedCreateWithoutFlowActionsInput>
    connectOrCreate?: FlowCreateOrConnectWithoutFlowActionsInput
    connect?: FlowWhereUniqueInput
  }

  export type FlowActionConnectionCreateNestedManyWithoutFromFlowActionInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFromFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFromFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFromFlowActionInput>
    createMany?: FlowActionConnectionCreateManyFromFlowActionInputEnvelope
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
  }

  export type FlowActionConnectionCreateNestedManyWithoutToFlowActionInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutToFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutToFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutToFlowActionInput>
    createMany?: FlowActionConnectionCreateManyToFlowActionInputEnvelope
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
  }

  export type FlowStateCreateNestedManyWithoutFlowActionInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowActionInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowActionInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowActionInput>
    createMany?: FlowStateCreateManyFlowActionInputEnvelope
    connect?: Enumerable<FlowStateWhereUniqueInput>
  }

  export type FlowActionConnectionUncheckedCreateNestedManyWithoutFromFlowActionInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFromFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFromFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFromFlowActionInput>
    createMany?: FlowActionConnectionCreateManyFromFlowActionInputEnvelope
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
  }

  export type FlowActionConnectionUncheckedCreateNestedManyWithoutToFlowActionInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutToFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutToFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutToFlowActionInput>
    createMany?: FlowActionConnectionCreateManyToFlowActionInputEnvelope
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
  }

  export type FlowStateUncheckedCreateNestedManyWithoutFlowActionInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowActionInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowActionInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowActionInput>
    createMany?: FlowStateCreateManyFlowActionInputEnvelope
    connect?: Enumerable<FlowStateWhereUniqueInput>
  }

  export type FlowUpdateOneRequiredWithoutFlowActionsNestedInput = {
    create?: XOR<FlowCreateWithoutFlowActionsInput, FlowUncheckedCreateWithoutFlowActionsInput>
    connectOrCreate?: FlowCreateOrConnectWithoutFlowActionsInput
    upsert?: FlowUpsertWithoutFlowActionsInput
    connect?: FlowWhereUniqueInput
    update?: XOR<FlowUpdateWithoutFlowActionsInput, FlowUncheckedUpdateWithoutFlowActionsInput>
  }

  export type FlowActionConnectionUpdateManyWithoutFromFlowActionNestedInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFromFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFromFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFromFlowActionInput>
    upsert?: Enumerable<FlowActionConnectionUpsertWithWhereUniqueWithoutFromFlowActionInput>
    createMany?: FlowActionConnectionCreateManyFromFlowActionInputEnvelope
    set?: Enumerable<FlowActionConnectionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    delete?: Enumerable<FlowActionConnectionWhereUniqueInput>
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    update?: Enumerable<FlowActionConnectionUpdateWithWhereUniqueWithoutFromFlowActionInput>
    updateMany?: Enumerable<FlowActionConnectionUpdateManyWithWhereWithoutFromFlowActionInput>
    deleteMany?: Enumerable<FlowActionConnectionScalarWhereInput>
  }

  export type FlowActionConnectionUpdateManyWithoutToFlowActionNestedInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutToFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutToFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutToFlowActionInput>
    upsert?: Enumerable<FlowActionConnectionUpsertWithWhereUniqueWithoutToFlowActionInput>
    createMany?: FlowActionConnectionCreateManyToFlowActionInputEnvelope
    set?: Enumerable<FlowActionConnectionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    delete?: Enumerable<FlowActionConnectionWhereUniqueInput>
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    update?: Enumerable<FlowActionConnectionUpdateWithWhereUniqueWithoutToFlowActionInput>
    updateMany?: Enumerable<FlowActionConnectionUpdateManyWithWhereWithoutToFlowActionInput>
    deleteMany?: Enumerable<FlowActionConnectionScalarWhereInput>
  }

  export type FlowStateUpdateManyWithoutFlowActionNestedInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowActionInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowActionInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowActionInput>
    upsert?: Enumerable<FlowStateUpsertWithWhereUniqueWithoutFlowActionInput>
    createMany?: FlowStateCreateManyFlowActionInputEnvelope
    set?: Enumerable<FlowStateWhereUniqueInput>
    disconnect?: Enumerable<FlowStateWhereUniqueInput>
    delete?: Enumerable<FlowStateWhereUniqueInput>
    connect?: Enumerable<FlowStateWhereUniqueInput>
    update?: Enumerable<FlowStateUpdateWithWhereUniqueWithoutFlowActionInput>
    updateMany?: Enumerable<FlowStateUpdateManyWithWhereWithoutFlowActionInput>
    deleteMany?: Enumerable<FlowStateScalarWhereInput>
  }

  export type FlowActionConnectionUncheckedUpdateManyWithoutFromFlowActionNestedInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutFromFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutFromFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutFromFlowActionInput>
    upsert?: Enumerable<FlowActionConnectionUpsertWithWhereUniqueWithoutFromFlowActionInput>
    createMany?: FlowActionConnectionCreateManyFromFlowActionInputEnvelope
    set?: Enumerable<FlowActionConnectionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    delete?: Enumerable<FlowActionConnectionWhereUniqueInput>
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    update?: Enumerable<FlowActionConnectionUpdateWithWhereUniqueWithoutFromFlowActionInput>
    updateMany?: Enumerable<FlowActionConnectionUpdateManyWithWhereWithoutFromFlowActionInput>
    deleteMany?: Enumerable<FlowActionConnectionScalarWhereInput>
  }

  export type FlowActionConnectionUncheckedUpdateManyWithoutToFlowActionNestedInput = {
    create?: XOR<Enumerable<FlowActionConnectionCreateWithoutToFlowActionInput>, Enumerable<FlowActionConnectionUncheckedCreateWithoutToFlowActionInput>>
    connectOrCreate?: Enumerable<FlowActionConnectionCreateOrConnectWithoutToFlowActionInput>
    upsert?: Enumerable<FlowActionConnectionUpsertWithWhereUniqueWithoutToFlowActionInput>
    createMany?: FlowActionConnectionCreateManyToFlowActionInputEnvelope
    set?: Enumerable<FlowActionConnectionWhereUniqueInput>
    disconnect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    delete?: Enumerable<FlowActionConnectionWhereUniqueInput>
    connect?: Enumerable<FlowActionConnectionWhereUniqueInput>
    update?: Enumerable<FlowActionConnectionUpdateWithWhereUniqueWithoutToFlowActionInput>
    updateMany?: Enumerable<FlowActionConnectionUpdateManyWithWhereWithoutToFlowActionInput>
    deleteMany?: Enumerable<FlowActionConnectionScalarWhereInput>
  }

  export type FlowStateUncheckedUpdateManyWithoutFlowActionNestedInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowActionInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowActionInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowActionInput>
    upsert?: Enumerable<FlowStateUpsertWithWhereUniqueWithoutFlowActionInput>
    createMany?: FlowStateCreateManyFlowActionInputEnvelope
    set?: Enumerable<FlowStateWhereUniqueInput>
    disconnect?: Enumerable<FlowStateWhereUniqueInput>
    delete?: Enumerable<FlowStateWhereUniqueInput>
    connect?: Enumerable<FlowStateWhereUniqueInput>
    update?: Enumerable<FlowStateUpdateWithWhereUniqueWithoutFlowActionInput>
    updateMany?: Enumerable<FlowStateUpdateManyWithWhereWithoutFlowActionInput>
    deleteMany?: Enumerable<FlowStateScalarWhereInput>
  }

  export type FlowCreateNestedOneWithoutFlowActionConnectionInput = {
    create?: XOR<FlowCreateWithoutFlowActionConnectionInput, FlowUncheckedCreateWithoutFlowActionConnectionInput>
    connectOrCreate?: FlowCreateOrConnectWithoutFlowActionConnectionInput
    connect?: FlowWhereUniqueInput
  }

  export type FlowActionCreateNestedOneWithoutFromFlowActionConnectionsInput = {
    create?: XOR<FlowActionCreateWithoutFromFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutFromFlowActionConnectionsInput>
    connectOrCreate?: FlowActionCreateOrConnectWithoutFromFlowActionConnectionsInput
    connect?: FlowActionWhereUniqueInput
  }

  export type FlowActionCreateNestedOneWithoutToFlowActionConnectionsInput = {
    create?: XOR<FlowActionCreateWithoutToFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutToFlowActionConnectionsInput>
    connectOrCreate?: FlowActionCreateOrConnectWithoutToFlowActionConnectionsInput
    connect?: FlowActionWhereUniqueInput
  }

  export type FlowUpdateOneRequiredWithoutFlowActionConnectionNestedInput = {
    create?: XOR<FlowCreateWithoutFlowActionConnectionInput, FlowUncheckedCreateWithoutFlowActionConnectionInput>
    connectOrCreate?: FlowCreateOrConnectWithoutFlowActionConnectionInput
    upsert?: FlowUpsertWithoutFlowActionConnectionInput
    connect?: FlowWhereUniqueInput
    update?: XOR<FlowUpdateWithoutFlowActionConnectionInput, FlowUncheckedUpdateWithoutFlowActionConnectionInput>
  }

  export type FlowActionUpdateOneRequiredWithoutFromFlowActionConnectionsNestedInput = {
    create?: XOR<FlowActionCreateWithoutFromFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutFromFlowActionConnectionsInput>
    connectOrCreate?: FlowActionCreateOrConnectWithoutFromFlowActionConnectionsInput
    upsert?: FlowActionUpsertWithoutFromFlowActionConnectionsInput
    connect?: FlowActionWhereUniqueInput
    update?: XOR<FlowActionUpdateWithoutFromFlowActionConnectionsInput, FlowActionUncheckedUpdateWithoutFromFlowActionConnectionsInput>
  }

  export type FlowActionUpdateOneRequiredWithoutToFlowActionConnectionsNestedInput = {
    create?: XOR<FlowActionCreateWithoutToFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutToFlowActionConnectionsInput>
    connectOrCreate?: FlowActionCreateOrConnectWithoutToFlowActionConnectionsInput
    upsert?: FlowActionUpsertWithoutToFlowActionConnectionsInput
    connect?: FlowActionWhereUniqueInput
    update?: XOR<FlowActionUpdateWithoutToFlowActionConnectionsInput, FlowActionUncheckedUpdateWithoutToFlowActionConnectionsInput>
  }

  export type FlowCreateNestedOneWithoutFlowStackInput = {
    create?: XOR<FlowCreateWithoutFlowStackInput, FlowUncheckedCreateWithoutFlowStackInput>
    connectOrCreate?: FlowCreateOrConnectWithoutFlowStackInput
    connect?: FlowWhereUniqueInput
  }

  export type FlowStackCreateNestedOneWithoutChildrenInput = {
    create?: XOR<FlowStackCreateWithoutChildrenInput, FlowStackUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FlowStackCreateOrConnectWithoutChildrenInput
    connect?: FlowStackWhereUniqueInput
  }

  export type AccountChannelCreateNestedOneWithoutFlowStacksInput = {
    create?: XOR<AccountChannelCreateWithoutFlowStacksInput, AccountChannelUncheckedCreateWithoutFlowStacksInput>
    connectOrCreate?: AccountChannelCreateOrConnectWithoutFlowStacksInput
    connect?: AccountChannelWhereUniqueInput
  }

  export type FlowStackCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutParentInput>, Enumerable<FlowStackUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutParentInput>
    createMany?: FlowStackCreateManyParentInputEnvelope
    connect?: Enumerable<FlowStackWhereUniqueInput>
  }

  export type FlowStateCreateNestedManyWithoutFlowStackInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowStackInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowStackInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowStackInput>
    createMany?: FlowStateCreateManyFlowStackInputEnvelope
    connect?: Enumerable<FlowStateWhereUniqueInput>
  }

  export type FlowStackUncheckedCreateNestedManyWithoutParentInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutParentInput>, Enumerable<FlowStackUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutParentInput>
    createMany?: FlowStackCreateManyParentInputEnvelope
    connect?: Enumerable<FlowStackWhereUniqueInput>
  }

  export type FlowStateUncheckedCreateNestedManyWithoutFlowStackInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowStackInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowStackInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowStackInput>
    createMany?: FlowStateCreateManyFlowStackInputEnvelope
    connect?: Enumerable<FlowStateWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlowUpdateOneRequiredWithoutFlowStackNestedInput = {
    create?: XOR<FlowCreateWithoutFlowStackInput, FlowUncheckedCreateWithoutFlowStackInput>
    connectOrCreate?: FlowCreateOrConnectWithoutFlowStackInput
    upsert?: FlowUpsertWithoutFlowStackInput
    connect?: FlowWhereUniqueInput
    update?: XOR<FlowUpdateWithoutFlowStackInput, FlowUncheckedUpdateWithoutFlowStackInput>
  }

  export type FlowStackUpdateOneWithoutChildrenNestedInput = {
    create?: XOR<FlowStackCreateWithoutChildrenInput, FlowStackUncheckedCreateWithoutChildrenInput>
    connectOrCreate?: FlowStackCreateOrConnectWithoutChildrenInput
    upsert?: FlowStackUpsertWithoutChildrenInput
    disconnect?: boolean
    delete?: boolean
    connect?: FlowStackWhereUniqueInput
    update?: XOR<FlowStackUpdateWithoutChildrenInput, FlowStackUncheckedUpdateWithoutChildrenInput>
  }

  export type AccountChannelUpdateOneRequiredWithoutFlowStacksNestedInput = {
    create?: XOR<AccountChannelCreateWithoutFlowStacksInput, AccountChannelUncheckedCreateWithoutFlowStacksInput>
    connectOrCreate?: AccountChannelCreateOrConnectWithoutFlowStacksInput
    upsert?: AccountChannelUpsertWithoutFlowStacksInput
    connect?: AccountChannelWhereUniqueInput
    update?: XOR<AccountChannelUpdateWithoutFlowStacksInput, AccountChannelUncheckedUpdateWithoutFlowStacksInput>
  }

  export type FlowStackUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutParentInput>, Enumerable<FlowStackUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<FlowStackUpsertWithWhereUniqueWithoutParentInput>
    createMany?: FlowStackCreateManyParentInputEnvelope
    set?: Enumerable<FlowStackWhereUniqueInput>
    disconnect?: Enumerable<FlowStackWhereUniqueInput>
    delete?: Enumerable<FlowStackWhereUniqueInput>
    connect?: Enumerable<FlowStackWhereUniqueInput>
    update?: Enumerable<FlowStackUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<FlowStackUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<FlowStackScalarWhereInput>
  }

  export type FlowStateUpdateManyWithoutFlowStackNestedInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowStackInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowStackInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowStackInput>
    upsert?: Enumerable<FlowStateUpsertWithWhereUniqueWithoutFlowStackInput>
    createMany?: FlowStateCreateManyFlowStackInputEnvelope
    set?: Enumerable<FlowStateWhereUniqueInput>
    disconnect?: Enumerable<FlowStateWhereUniqueInput>
    delete?: Enumerable<FlowStateWhereUniqueInput>
    connect?: Enumerable<FlowStateWhereUniqueInput>
    update?: Enumerable<FlowStateUpdateWithWhereUniqueWithoutFlowStackInput>
    updateMany?: Enumerable<FlowStateUpdateManyWithWhereWithoutFlowStackInput>
    deleteMany?: Enumerable<FlowStateScalarWhereInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FlowStackUncheckedUpdateManyWithoutParentNestedInput = {
    create?: XOR<Enumerable<FlowStackCreateWithoutParentInput>, Enumerable<FlowStackUncheckedCreateWithoutParentInput>>
    connectOrCreate?: Enumerable<FlowStackCreateOrConnectWithoutParentInput>
    upsert?: Enumerable<FlowStackUpsertWithWhereUniqueWithoutParentInput>
    createMany?: FlowStackCreateManyParentInputEnvelope
    set?: Enumerable<FlowStackWhereUniqueInput>
    disconnect?: Enumerable<FlowStackWhereUniqueInput>
    delete?: Enumerable<FlowStackWhereUniqueInput>
    connect?: Enumerable<FlowStackWhereUniqueInput>
    update?: Enumerable<FlowStackUpdateWithWhereUniqueWithoutParentInput>
    updateMany?: Enumerable<FlowStackUpdateManyWithWhereWithoutParentInput>
    deleteMany?: Enumerable<FlowStackScalarWhereInput>
  }

  export type FlowStateUncheckedUpdateManyWithoutFlowStackNestedInput = {
    create?: XOR<Enumerable<FlowStateCreateWithoutFlowStackInput>, Enumerable<FlowStateUncheckedCreateWithoutFlowStackInput>>
    connectOrCreate?: Enumerable<FlowStateCreateOrConnectWithoutFlowStackInput>
    upsert?: Enumerable<FlowStateUpsertWithWhereUniqueWithoutFlowStackInput>
    createMany?: FlowStateCreateManyFlowStackInputEnvelope
    set?: Enumerable<FlowStateWhereUniqueInput>
    disconnect?: Enumerable<FlowStateWhereUniqueInput>
    delete?: Enumerable<FlowStateWhereUniqueInput>
    connect?: Enumerable<FlowStateWhereUniqueInput>
    update?: Enumerable<FlowStateUpdateWithWhereUniqueWithoutFlowStackInput>
    updateMany?: Enumerable<FlowStateUpdateManyWithWhereWithoutFlowStackInput>
    deleteMany?: Enumerable<FlowStateScalarWhereInput>
  }

  export type FlowStackCreateNestedOneWithoutFlowStatesInput = {
    create?: XOR<FlowStackCreateWithoutFlowStatesInput, FlowStackUncheckedCreateWithoutFlowStatesInput>
    connectOrCreate?: FlowStackCreateOrConnectWithoutFlowStatesInput
    connect?: FlowStackWhereUniqueInput
  }

  export type FlowActionCreateNestedOneWithoutFlowStatesInput = {
    create?: XOR<FlowActionCreateWithoutFlowStatesInput, FlowActionUncheckedCreateWithoutFlowStatesInput>
    connectOrCreate?: FlowActionCreateOrConnectWithoutFlowStatesInput
    connect?: FlowActionWhereUniqueInput
  }

  export type FlowStackUpdateOneRequiredWithoutFlowStatesNestedInput = {
    create?: XOR<FlowStackCreateWithoutFlowStatesInput, FlowStackUncheckedCreateWithoutFlowStatesInput>
    connectOrCreate?: FlowStackCreateOrConnectWithoutFlowStatesInput
    upsert?: FlowStackUpsertWithoutFlowStatesInput
    connect?: FlowStackWhereUniqueInput
    update?: XOR<FlowStackUpdateWithoutFlowStatesInput, FlowStackUncheckedUpdateWithoutFlowStatesInput>
  }

  export type FlowActionUpdateOneRequiredWithoutFlowStatesNestedInput = {
    create?: XOR<FlowActionCreateWithoutFlowStatesInput, FlowActionUncheckedCreateWithoutFlowStatesInput>
    connectOrCreate?: FlowActionCreateOrConnectWithoutFlowStatesInput
    upsert?: FlowActionUpsertWithoutFlowStatesInput
    connect?: FlowActionWhereUniqueInput
    update?: XOR<FlowActionUpdateWithoutFlowStatesInput, FlowActionUncheckedUpdateWithoutFlowStatesInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number> | number
    notIn?: Enumerable<number> | number
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string> | string
    notIn?: Enumerable<string> | string
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }
  export type NestedJsonFilter = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase>, Exclude<keyof Required<NestedJsonFilterBase>, 'path'>>,
        Required<NestedJsonFilterBase>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase>, 'path'>>

  export type NestedJsonFilterBase = {
    equals?: InputJsonValue | JsonNullValueFilter
    path?: string[]
    string_contains?: string
    string_starts_with?: string
    string_ends_with?: string
    array_contains?: InputJsonValue | null
    array_starts_with?: InputJsonValue | null
    array_ends_with?: InputJsonValue | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonNullValueFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | number | null
    notIn?: Enumerable<number> | number | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string> | Date | string
    notIn?: Enumerable<Date> | Enumerable<string> | Date | string
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type AccountSchemaCreateWithoutWorkspaceInput = {
    schema: JsonNullValueInput | InputJsonValue
    accounts?: AccountCreateNestedManyWithoutSchemaInput
  }

  export type AccountSchemaUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    schema: JsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedCreateNestedManyWithoutSchemaInput
  }

  export type AccountSchemaCreateOrConnectWithoutWorkspaceInput = {
    where: AccountSchemaWhereUniqueInput
    create: XOR<AccountSchemaCreateWithoutWorkspaceInput, AccountSchemaUncheckedCreateWithoutWorkspaceInput>
  }

  export type AccountSchemaCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<AccountSchemaCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type DataRecordSchemaCreateWithoutWorkspaceInput = {
    name: string
    schema: JsonNullValueInput | InputJsonValue
    dataRecords?: DataRecordCreateNestedManyWithoutSchemaInput
  }

  export type DataRecordSchemaUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    name: string
    schema: JsonNullValueInput | InputJsonValue
    dataRecords?: DataRecordUncheckedCreateNestedManyWithoutSchemaInput
  }

  export type DataRecordSchemaCreateOrConnectWithoutWorkspaceInput = {
    where: DataRecordSchemaWhereUniqueInput
    create: XOR<DataRecordSchemaCreateWithoutWorkspaceInput, DataRecordSchemaUncheckedCreateWithoutWorkspaceInput>
  }

  export type DataRecordSchemaCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<DataRecordSchemaCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceAccountCreateWithoutWorkspaceInput = {
    role: string
    account: AccountCreateNestedOneWithoutWorkspaceAccountsInput
  }

  export type WorkspaceAccountUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    accountId: number
    role: string
  }

  export type WorkspaceAccountCreateOrConnectWithoutWorkspaceInput = {
    where: WorkspaceAccountWhereUniqueInput
    create: XOR<WorkspaceAccountCreateWithoutWorkspaceInput, WorkspaceAccountUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceAccountCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<WorkspaceAccountCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type ChannelCreateWithoutWorkspaceInput = {
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelCreateNestedManyWithoutChannelInput
  }

  export type ChannelUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelUncheckedCreateNestedManyWithoutChannelInput
  }

  export type ChannelCreateOrConnectWithoutWorkspaceInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput>
  }

  export type ChannelCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<ChannelCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type FlowGroupCreateWithoutWorkspaceInput = {
    name: string
    flows?: FlowCreateNestedManyWithoutFlowGroupInput
  }

  export type FlowGroupUncheckedCreateWithoutWorkspaceInput = {
    id?: number
    name: string
    flows?: FlowUncheckedCreateNestedManyWithoutFlowGroupInput
  }

  export type FlowGroupCreateOrConnectWithoutWorkspaceInput = {
    where: FlowGroupWhereUniqueInput
    create: XOR<FlowGroupCreateWithoutWorkspaceInput, FlowGroupUncheckedCreateWithoutWorkspaceInput>
  }

  export type FlowGroupCreateManyWorkspaceInputEnvelope = {
    data: Enumerable<FlowGroupCreateManyWorkspaceInput>
    skipDuplicates?: boolean
  }

  export type AccountSchemaUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: AccountSchemaWhereUniqueInput
    update: XOR<AccountSchemaUpdateWithoutWorkspaceInput, AccountSchemaUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<AccountSchemaCreateWithoutWorkspaceInput, AccountSchemaUncheckedCreateWithoutWorkspaceInput>
  }

  export type AccountSchemaUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: AccountSchemaWhereUniqueInput
    data: XOR<AccountSchemaUpdateWithoutWorkspaceInput, AccountSchemaUncheckedUpdateWithoutWorkspaceInput>
  }

  export type AccountSchemaUpdateManyWithWhereWithoutWorkspaceInput = {
    where: AccountSchemaScalarWhereInput
    data: XOR<AccountSchemaUpdateManyMutationInput, AccountSchemaUncheckedUpdateManyWithoutAccountSchemasInput>
  }

  export type AccountSchemaScalarWhereInput = {
    AND?: Enumerable<AccountSchemaScalarWhereInput>
    OR?: Enumerable<AccountSchemaScalarWhereInput>
    NOT?: Enumerable<AccountSchemaScalarWhereInput>
    id?: IntFilter | number
    schema?: JsonFilter
    workspaceId?: IntFilter | number
  }

  export type DataRecordSchemaUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: DataRecordSchemaWhereUniqueInput
    update: XOR<DataRecordSchemaUpdateWithoutWorkspaceInput, DataRecordSchemaUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<DataRecordSchemaCreateWithoutWorkspaceInput, DataRecordSchemaUncheckedCreateWithoutWorkspaceInput>
  }

  export type DataRecordSchemaUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: DataRecordSchemaWhereUniqueInput
    data: XOR<DataRecordSchemaUpdateWithoutWorkspaceInput, DataRecordSchemaUncheckedUpdateWithoutWorkspaceInput>
  }

  export type DataRecordSchemaUpdateManyWithWhereWithoutWorkspaceInput = {
    where: DataRecordSchemaScalarWhereInput
    data: XOR<DataRecordSchemaUpdateManyMutationInput, DataRecordSchemaUncheckedUpdateManyWithoutDataRecordSchemasInput>
  }

  export type DataRecordSchemaScalarWhereInput = {
    AND?: Enumerable<DataRecordSchemaScalarWhereInput>
    OR?: Enumerable<DataRecordSchemaScalarWhereInput>
    NOT?: Enumerable<DataRecordSchemaScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    schema?: JsonFilter
    workspaceId?: IntFilter | number
  }

  export type WorkspaceAccountUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceAccountWhereUniqueInput
    update: XOR<WorkspaceAccountUpdateWithoutWorkspaceInput, WorkspaceAccountUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<WorkspaceAccountCreateWithoutWorkspaceInput, WorkspaceAccountUncheckedCreateWithoutWorkspaceInput>
  }

  export type WorkspaceAccountUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: WorkspaceAccountWhereUniqueInput
    data: XOR<WorkspaceAccountUpdateWithoutWorkspaceInput, WorkspaceAccountUncheckedUpdateWithoutWorkspaceInput>
  }

  export type WorkspaceAccountUpdateManyWithWhereWithoutWorkspaceInput = {
    where: WorkspaceAccountScalarWhereInput
    data: XOR<WorkspaceAccountUpdateManyMutationInput, WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceAccountsInput>
  }

  export type WorkspaceAccountScalarWhereInput = {
    AND?: Enumerable<WorkspaceAccountScalarWhereInput>
    OR?: Enumerable<WorkspaceAccountScalarWhereInput>
    NOT?: Enumerable<WorkspaceAccountScalarWhereInput>
    id?: IntFilter | number
    accountId?: IntFilter | number
    workspaceId?: IntFilter | number
    role?: StringFilter | string
  }

  export type ChannelUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ChannelWhereUniqueInput
    update: XOR<ChannelUpdateWithoutWorkspaceInput, ChannelUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ChannelCreateWithoutWorkspaceInput, ChannelUncheckedCreateWithoutWorkspaceInput>
  }

  export type ChannelUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ChannelWhereUniqueInput
    data: XOR<ChannelUpdateWithoutWorkspaceInput, ChannelUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ChannelUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ChannelScalarWhereInput
    data: XOR<ChannelUpdateManyMutationInput, ChannelUncheckedUpdateManyWithoutChannelsInput>
  }

  export type ChannelScalarWhereInput = {
    AND?: Enumerable<ChannelScalarWhereInput>
    OR?: Enumerable<ChannelScalarWhereInput>
    NOT?: Enumerable<ChannelScalarWhereInput>
    id?: IntFilter | number
    kind?: StringFilter | string
    workspaceId?: IntFilter | number
    configuration?: JsonFilter
  }

  export type FlowGroupUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: FlowGroupWhereUniqueInput
    update: XOR<FlowGroupUpdateWithoutWorkspaceInput, FlowGroupUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<FlowGroupCreateWithoutWorkspaceInput, FlowGroupUncheckedCreateWithoutWorkspaceInput>
  }

  export type FlowGroupUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: FlowGroupWhereUniqueInput
    data: XOR<FlowGroupUpdateWithoutWorkspaceInput, FlowGroupUncheckedUpdateWithoutWorkspaceInput>
  }

  export type FlowGroupUpdateManyWithWhereWithoutWorkspaceInput = {
    where: FlowGroupScalarWhereInput
    data: XOR<FlowGroupUpdateManyMutationInput, FlowGroupUncheckedUpdateManyWithoutFlowGroupsInput>
  }

  export type FlowGroupScalarWhereInput = {
    AND?: Enumerable<FlowGroupScalarWhereInput>
    OR?: Enumerable<FlowGroupScalarWhereInput>
    NOT?: Enumerable<FlowGroupScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    workspaceId?: IntFilter | number
  }

  export type WorkspaceCreateWithoutAccountSchemasInput = {
    name: string
    dataRecordSchemas?: DataRecordSchemaCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutAccountSchemasInput = {
    id?: number
    name: string
    dataRecordSchemas?: DataRecordSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutAccountSchemasInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutAccountSchemasInput, WorkspaceUncheckedCreateWithoutAccountSchemasInput>
  }

  export type AccountCreateWithoutSchemaInput = {
    data: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutAccountInput
    accountChannels?: AccountChannelCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutSchemaInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutAccountInput
    accountChannels?: AccountChannelUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutSchemaInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutSchemaInput, AccountUncheckedCreateWithoutSchemaInput>
  }

  export type AccountCreateManySchemaInputEnvelope = {
    data: Enumerable<AccountCreateManySchemaInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutAccountSchemasInput = {
    update: XOR<WorkspaceUpdateWithoutAccountSchemasInput, WorkspaceUncheckedUpdateWithoutAccountSchemasInput>
    create: XOR<WorkspaceCreateWithoutAccountSchemasInput, WorkspaceUncheckedCreateWithoutAccountSchemasInput>
  }

  export type WorkspaceUpdateWithoutAccountSchemasInput = {
    name?: StringFieldUpdateOperationsInput | string
    dataRecordSchemas?: DataRecordSchemaUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutAccountSchemasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    dataRecordSchemas?: DataRecordSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type AccountUpsertWithWhereUniqueWithoutSchemaInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutSchemaInput, AccountUncheckedUpdateWithoutSchemaInput>
    create: XOR<AccountCreateWithoutSchemaInput, AccountUncheckedCreateWithoutSchemaInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutSchemaInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutSchemaInput, AccountUncheckedUpdateWithoutSchemaInput>
  }

  export type AccountUpdateManyWithWhereWithoutSchemaInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutAccountsInput>
  }

  export type AccountScalarWhereInput = {
    AND?: Enumerable<AccountScalarWhereInput>
    OR?: Enumerable<AccountScalarWhereInput>
    NOT?: Enumerable<AccountScalarWhereInput>
    id?: IntFilter | number
    schemaId?: IntFilter | number
    data?: JsonFilter
  }

  export type AccountSchemaCreateWithoutAccountsInput = {
    schema: JsonNullValueInput | InputJsonValue
    workspace: WorkspaceCreateNestedOneWithoutAccountSchemasInput
  }

  export type AccountSchemaUncheckedCreateWithoutAccountsInput = {
    id?: number
    schema: JsonNullValueInput | InputJsonValue
    workspaceId: number
  }

  export type AccountSchemaCreateOrConnectWithoutAccountsInput = {
    where: AccountSchemaWhereUniqueInput
    create: XOR<AccountSchemaCreateWithoutAccountsInput, AccountSchemaUncheckedCreateWithoutAccountsInput>
  }

  export type WorkspaceAccountCreateWithoutAccountInput = {
    role: string
    workspace: WorkspaceCreateNestedOneWithoutWorkspaceAccountsInput
  }

  export type WorkspaceAccountUncheckedCreateWithoutAccountInput = {
    id?: number
    workspaceId: number
    role: string
  }

  export type WorkspaceAccountCreateOrConnectWithoutAccountInput = {
    where: WorkspaceAccountWhereUniqueInput
    create: XOR<WorkspaceAccountCreateWithoutAccountInput, WorkspaceAccountUncheckedCreateWithoutAccountInput>
  }

  export type WorkspaceAccountCreateManyAccountInputEnvelope = {
    data: Enumerable<WorkspaceAccountCreateManyAccountInput>
    skipDuplicates?: boolean
  }

  export type AccountChannelCreateWithoutAccountInput = {
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
    channel: ChannelCreateNestedOneWithoutAccountChannelsInput
    flowStacks?: FlowStackCreateNestedManyWithoutAccountChannelInput
  }

  export type AccountChannelUncheckedCreateWithoutAccountInput = {
    id?: number
    channelId: number
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
    flowStacks?: FlowStackUncheckedCreateNestedManyWithoutAccountChannelInput
  }

  export type AccountChannelCreateOrConnectWithoutAccountInput = {
    where: AccountChannelWhereUniqueInput
    create: XOR<AccountChannelCreateWithoutAccountInput, AccountChannelUncheckedCreateWithoutAccountInput>
  }

  export type AccountChannelCreateManyAccountInputEnvelope = {
    data: Enumerable<AccountChannelCreateManyAccountInput>
    skipDuplicates?: boolean
  }

  export type AccountSchemaUpsertWithoutAccountsInput = {
    update: XOR<AccountSchemaUpdateWithoutAccountsInput, AccountSchemaUncheckedUpdateWithoutAccountsInput>
    create: XOR<AccountSchemaCreateWithoutAccountsInput, AccountSchemaUncheckedCreateWithoutAccountsInput>
  }

  export type AccountSchemaUpdateWithoutAccountsInput = {
    schema?: JsonNullValueInput | InputJsonValue
    workspace?: WorkspaceUpdateOneRequiredWithoutAccountSchemasNestedInput
  }

  export type AccountSchemaUncheckedUpdateWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    schema?: JsonNullValueInput | InputJsonValue
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceAccountUpsertWithWhereUniqueWithoutAccountInput = {
    where: WorkspaceAccountWhereUniqueInput
    update: XOR<WorkspaceAccountUpdateWithoutAccountInput, WorkspaceAccountUncheckedUpdateWithoutAccountInput>
    create: XOR<WorkspaceAccountCreateWithoutAccountInput, WorkspaceAccountUncheckedCreateWithoutAccountInput>
  }

  export type WorkspaceAccountUpdateWithWhereUniqueWithoutAccountInput = {
    where: WorkspaceAccountWhereUniqueInput
    data: XOR<WorkspaceAccountUpdateWithoutAccountInput, WorkspaceAccountUncheckedUpdateWithoutAccountInput>
  }

  export type WorkspaceAccountUpdateManyWithWhereWithoutAccountInput = {
    where: WorkspaceAccountScalarWhereInput
    data: XOR<WorkspaceAccountUpdateManyMutationInput, WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceAccountsInput>
  }

  export type AccountChannelUpsertWithWhereUniqueWithoutAccountInput = {
    where: AccountChannelWhereUniqueInput
    update: XOR<AccountChannelUpdateWithoutAccountInput, AccountChannelUncheckedUpdateWithoutAccountInput>
    create: XOR<AccountChannelCreateWithoutAccountInput, AccountChannelUncheckedCreateWithoutAccountInput>
  }

  export type AccountChannelUpdateWithWhereUniqueWithoutAccountInput = {
    where: AccountChannelWhereUniqueInput
    data: XOR<AccountChannelUpdateWithoutAccountInput, AccountChannelUncheckedUpdateWithoutAccountInput>
  }

  export type AccountChannelUpdateManyWithWhereWithoutAccountInput = {
    where: AccountChannelScalarWhereInput
    data: XOR<AccountChannelUpdateManyMutationInput, AccountChannelUncheckedUpdateManyWithoutAccountChannelsInput>
  }

  export type AccountChannelScalarWhereInput = {
    AND?: Enumerable<AccountChannelScalarWhereInput>
    OR?: Enumerable<AccountChannelScalarWhereInput>
    NOT?: Enumerable<AccountChannelScalarWhereInput>
    id?: IntFilter | number
    accountId?: IntFilter | number
    channelId?: IntFilter | number
    channelAccountId?: IntFilter | number
    status?: StringFilter | string
    data?: JsonFilter
  }

  export type WorkspaceCreateWithoutWorkspaceAccountsInput = {
    name: string
    accountSchemas?: AccountSchemaCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutWorkspaceAccountsInput = {
    id?: number
    name: string
    accountSchemas?: AccountSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutWorkspaceAccountsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutWorkspaceAccountsInput, WorkspaceUncheckedCreateWithoutWorkspaceAccountsInput>
  }

  export type AccountCreateWithoutWorkspaceAccountsInput = {
    data: JsonNullValueInput | InputJsonValue
    schema: AccountSchemaCreateNestedOneWithoutAccountsInput
    accountChannels?: AccountChannelCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutWorkspaceAccountsInput = {
    id?: number
    schemaId: number
    data: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutWorkspaceAccountsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutWorkspaceAccountsInput, AccountUncheckedCreateWithoutWorkspaceAccountsInput>
  }

  export type WorkspaceUpsertWithoutWorkspaceAccountsInput = {
    update: XOR<WorkspaceUpdateWithoutWorkspaceAccountsInput, WorkspaceUncheckedUpdateWithoutWorkspaceAccountsInput>
    create: XOR<WorkspaceCreateWithoutWorkspaceAccountsInput, WorkspaceUncheckedCreateWithoutWorkspaceAccountsInput>
  }

  export type WorkspaceUpdateWithoutWorkspaceAccountsInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutWorkspaceAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type AccountUpsertWithoutWorkspaceAccountsInput = {
    update: XOR<AccountUpdateWithoutWorkspaceAccountsInput, AccountUncheckedUpdateWithoutWorkspaceAccountsInput>
    create: XOR<AccountCreateWithoutWorkspaceAccountsInput, AccountUncheckedCreateWithoutWorkspaceAccountsInput>
  }

  export type AccountUpdateWithoutWorkspaceAccountsInput = {
    data?: JsonNullValueInput | InputJsonValue
    schema?: AccountSchemaUpdateOneRequiredWithoutAccountsNestedInput
    accountChannels?: AccountChannelUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutWorkspaceAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    schemaId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type WorkspaceCreateWithoutDataRecordSchemasInput = {
    name: string
    accountSchemas?: AccountSchemaCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutDataRecordSchemasInput = {
    id?: number
    name: string
    accountSchemas?: AccountSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutDataRecordSchemasInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutDataRecordSchemasInput, WorkspaceUncheckedCreateWithoutDataRecordSchemasInput>
  }

  export type DataRecordCreateWithoutSchemaInput = {
    data: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordUncheckedCreateWithoutSchemaInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordCreateOrConnectWithoutSchemaInput = {
    where: DataRecordWhereUniqueInput
    create: XOR<DataRecordCreateWithoutSchemaInput, DataRecordUncheckedCreateWithoutSchemaInput>
  }

  export type DataRecordCreateManySchemaInputEnvelope = {
    data: Enumerable<DataRecordCreateManySchemaInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutDataRecordSchemasInput = {
    update: XOR<WorkspaceUpdateWithoutDataRecordSchemasInput, WorkspaceUncheckedUpdateWithoutDataRecordSchemasInput>
    create: XOR<WorkspaceCreateWithoutDataRecordSchemasInput, WorkspaceUncheckedCreateWithoutDataRecordSchemasInput>
  }

  export type WorkspaceUpdateWithoutDataRecordSchemasInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutDataRecordSchemasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type DataRecordUpsertWithWhereUniqueWithoutSchemaInput = {
    where: DataRecordWhereUniqueInput
    update: XOR<DataRecordUpdateWithoutSchemaInput, DataRecordUncheckedUpdateWithoutSchemaInput>
    create: XOR<DataRecordCreateWithoutSchemaInput, DataRecordUncheckedCreateWithoutSchemaInput>
  }

  export type DataRecordUpdateWithWhereUniqueWithoutSchemaInput = {
    where: DataRecordWhereUniqueInput
    data: XOR<DataRecordUpdateWithoutSchemaInput, DataRecordUncheckedUpdateWithoutSchemaInput>
  }

  export type DataRecordUpdateManyWithWhereWithoutSchemaInput = {
    where: DataRecordScalarWhereInput
    data: XOR<DataRecordUpdateManyMutationInput, DataRecordUncheckedUpdateManyWithoutDataRecordsInput>
  }

  export type DataRecordScalarWhereInput = {
    AND?: Enumerable<DataRecordScalarWhereInput>
    OR?: Enumerable<DataRecordScalarWhereInput>
    NOT?: Enumerable<DataRecordScalarWhereInput>
    id?: IntFilter | number
    schemaId?: IntFilter | number
    data?: JsonFilter
  }

  export type DataRecordSchemaCreateWithoutDataRecordsInput = {
    name: string
    schema: JsonNullValueInput | InputJsonValue
    workspace: WorkspaceCreateNestedOneWithoutDataRecordSchemasInput
  }

  export type DataRecordSchemaUncheckedCreateWithoutDataRecordsInput = {
    id?: number
    name: string
    schema: JsonNullValueInput | InputJsonValue
    workspaceId: number
  }

  export type DataRecordSchemaCreateOrConnectWithoutDataRecordsInput = {
    where: DataRecordSchemaWhereUniqueInput
    create: XOR<DataRecordSchemaCreateWithoutDataRecordsInput, DataRecordSchemaUncheckedCreateWithoutDataRecordsInput>
  }

  export type DataRecordSchemaUpsertWithoutDataRecordsInput = {
    update: XOR<DataRecordSchemaUpdateWithoutDataRecordsInput, DataRecordSchemaUncheckedUpdateWithoutDataRecordsInput>
    create: XOR<DataRecordSchemaCreateWithoutDataRecordsInput, DataRecordSchemaUncheckedCreateWithoutDataRecordsInput>
  }

  export type DataRecordSchemaUpdateWithoutDataRecordsInput = {
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
    workspace?: WorkspaceUpdateOneRequiredWithoutDataRecordSchemasNestedInput
  }

  export type DataRecordSchemaUncheckedUpdateWithoutDataRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type WorkspaceCreateWithoutChannelsInput = {
    name: string
    accountSchemas?: AccountSchemaCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutChannelsInput = {
    id?: number
    name: string
    accountSchemas?: AccountSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutWorkspaceInput
    flowGroups?: FlowGroupUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutChannelsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutChannelsInput, WorkspaceUncheckedCreateWithoutChannelsInput>
  }

  export type AccountChannelCreateWithoutChannelInput = {
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
    account: AccountCreateNestedOneWithoutAccountChannelsInput
    flowStacks?: FlowStackCreateNestedManyWithoutAccountChannelInput
  }

  export type AccountChannelUncheckedCreateWithoutChannelInput = {
    id?: number
    accountId: number
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
    flowStacks?: FlowStackUncheckedCreateNestedManyWithoutAccountChannelInput
  }

  export type AccountChannelCreateOrConnectWithoutChannelInput = {
    where: AccountChannelWhereUniqueInput
    create: XOR<AccountChannelCreateWithoutChannelInput, AccountChannelUncheckedCreateWithoutChannelInput>
  }

  export type AccountChannelCreateManyChannelInputEnvelope = {
    data: Enumerable<AccountChannelCreateManyChannelInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutChannelsInput = {
    update: XOR<WorkspaceUpdateWithoutChannelsInput, WorkspaceUncheckedUpdateWithoutChannelsInput>
    create: XOR<WorkspaceCreateWithoutChannelsInput, WorkspaceUncheckedCreateWithoutChannelsInput>
  }

  export type WorkspaceUpdateWithoutChannelsInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceNestedInput
    flowGroups?: FlowGroupUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type AccountChannelUpsertWithWhereUniqueWithoutChannelInput = {
    where: AccountChannelWhereUniqueInput
    update: XOR<AccountChannelUpdateWithoutChannelInput, AccountChannelUncheckedUpdateWithoutChannelInput>
    create: XOR<AccountChannelCreateWithoutChannelInput, AccountChannelUncheckedCreateWithoutChannelInput>
  }

  export type AccountChannelUpdateWithWhereUniqueWithoutChannelInput = {
    where: AccountChannelWhereUniqueInput
    data: XOR<AccountChannelUpdateWithoutChannelInput, AccountChannelUncheckedUpdateWithoutChannelInput>
  }

  export type AccountChannelUpdateManyWithWhereWithoutChannelInput = {
    where: AccountChannelScalarWhereInput
    data: XOR<AccountChannelUpdateManyMutationInput, AccountChannelUncheckedUpdateManyWithoutAccountChannelsInput>
  }

  export type AccountCreateWithoutAccountChannelsInput = {
    data: JsonNullValueInput | InputJsonValue
    schema: AccountSchemaCreateNestedOneWithoutAccountsInput
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutAccountInput
  }

  export type AccountUncheckedCreateWithoutAccountChannelsInput = {
    id?: number
    schemaId: number
    data: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutAccountInput
  }

  export type AccountCreateOrConnectWithoutAccountChannelsInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutAccountChannelsInput, AccountUncheckedCreateWithoutAccountChannelsInput>
  }

  export type ChannelCreateWithoutAccountChannelsInput = {
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    workspace: WorkspaceCreateNestedOneWithoutChannelsInput
  }

  export type ChannelUncheckedCreateWithoutAccountChannelsInput = {
    id?: number
    kind: string
    workspaceId: number
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type ChannelCreateOrConnectWithoutAccountChannelsInput = {
    where: ChannelWhereUniqueInput
    create: XOR<ChannelCreateWithoutAccountChannelsInput, ChannelUncheckedCreateWithoutAccountChannelsInput>
  }

  export type FlowStackCreateWithoutAccountChannelInput = {
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flow: FlowCreateNestedOneWithoutFlowStackInput
    parent?: FlowStackCreateNestedOneWithoutChildrenInput
    children?: FlowStackCreateNestedManyWithoutParentInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackUncheckedCreateWithoutAccountChannelInput = {
    id?: number
    flowId: number
    parentId?: number | null
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    children?: FlowStackUncheckedCreateNestedManyWithoutParentInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackCreateOrConnectWithoutAccountChannelInput = {
    where: FlowStackWhereUniqueInput
    create: XOR<FlowStackCreateWithoutAccountChannelInput, FlowStackUncheckedCreateWithoutAccountChannelInput>
  }

  export type FlowStackCreateManyAccountChannelInputEnvelope = {
    data: Enumerable<FlowStackCreateManyAccountChannelInput>
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithoutAccountChannelsInput = {
    update: XOR<AccountUpdateWithoutAccountChannelsInput, AccountUncheckedUpdateWithoutAccountChannelsInput>
    create: XOR<AccountCreateWithoutAccountChannelsInput, AccountUncheckedCreateWithoutAccountChannelsInput>
  }

  export type AccountUpdateWithoutAccountChannelsInput = {
    data?: JsonNullValueInput | InputJsonValue
    schema?: AccountSchemaUpdateOneRequiredWithoutAccountsNestedInput
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutAccountChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    schemaId?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type ChannelUpsertWithoutAccountChannelsInput = {
    update: XOR<ChannelUpdateWithoutAccountChannelsInput, ChannelUncheckedUpdateWithoutAccountChannelsInput>
    create: XOR<ChannelCreateWithoutAccountChannelsInput, ChannelUncheckedCreateWithoutAccountChannelsInput>
  }

  export type ChannelUpdateWithoutAccountChannelsInput = {
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    workspace?: WorkspaceUpdateOneRequiredWithoutChannelsNestedInput
  }

  export type ChannelUncheckedUpdateWithoutAccountChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type FlowStackUpsertWithWhereUniqueWithoutAccountChannelInput = {
    where: FlowStackWhereUniqueInput
    update: XOR<FlowStackUpdateWithoutAccountChannelInput, FlowStackUncheckedUpdateWithoutAccountChannelInput>
    create: XOR<FlowStackCreateWithoutAccountChannelInput, FlowStackUncheckedCreateWithoutAccountChannelInput>
  }

  export type FlowStackUpdateWithWhereUniqueWithoutAccountChannelInput = {
    where: FlowStackWhereUniqueInput
    data: XOR<FlowStackUpdateWithoutAccountChannelInput, FlowStackUncheckedUpdateWithoutAccountChannelInput>
  }

  export type FlowStackUpdateManyWithWhereWithoutAccountChannelInput = {
    where: FlowStackScalarWhereInput
    data: XOR<FlowStackUpdateManyMutationInput, FlowStackUncheckedUpdateManyWithoutFlowStacksInput>
  }

  export type FlowStackScalarWhereInput = {
    AND?: Enumerable<FlowStackScalarWhereInput>
    OR?: Enumerable<FlowStackScalarWhereInput>
    NOT?: Enumerable<FlowStackScalarWhereInput>
    id?: IntFilter | number
    flowId?: IntFilter | number
    parentId?: IntNullableFilter | number | null
    accountChannelId?: IntFilter | number
    context?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type WorkspaceCreateWithoutFlowGroupsInput = {
    name: string
    accountSchemas?: AccountSchemaCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutFlowGroupsInput = {
    id?: number
    name: string
    accountSchemas?: AccountSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    dataRecordSchemas?: DataRecordSchemaUncheckedCreateNestedManyWithoutWorkspaceInput
    workspaceAccounts?: WorkspaceAccountUncheckedCreateNestedManyWithoutWorkspaceInput
    channels?: ChannelUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutFlowGroupsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutFlowGroupsInput, WorkspaceUncheckedCreateWithoutFlowGroupsInput>
  }

  export type FlowCreateWithoutFlowGroupInput = {
    name: string
    status: string
    contextSchema: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionCreateNestedManyWithoutFlowInput
    FlowActionConnection?: FlowActionConnectionCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutFlowGroupInput = {
    id?: number
    name: string
    status: string
    contextSchema: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedCreateNestedManyWithoutFlowInput
    FlowActionConnection?: FlowActionConnectionUncheckedCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutFlowGroupInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutFlowGroupInput, FlowUncheckedCreateWithoutFlowGroupInput>
  }

  export type FlowCreateManyFlowGroupInputEnvelope = {
    data: Enumerable<FlowCreateManyFlowGroupInput>
    skipDuplicates?: boolean
  }

  export type WorkspaceUpsertWithoutFlowGroupsInput = {
    update: XOR<WorkspaceUpdateWithoutFlowGroupsInput, WorkspaceUncheckedUpdateWithoutFlowGroupsInput>
    create: XOR<WorkspaceCreateWithoutFlowGroupsInput, WorkspaceUncheckedCreateWithoutFlowGroupsInput>
  }

  export type WorkspaceUpdateWithoutFlowGroupsInput = {
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutFlowGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    accountSchemas?: AccountSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    dataRecordSchemas?: DataRecordSchemaUncheckedUpdateManyWithoutWorkspaceNestedInput
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceNestedInput
    channels?: ChannelUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type FlowUpsertWithWhereUniqueWithoutFlowGroupInput = {
    where: FlowWhereUniqueInput
    update: XOR<FlowUpdateWithoutFlowGroupInput, FlowUncheckedUpdateWithoutFlowGroupInput>
    create: XOR<FlowCreateWithoutFlowGroupInput, FlowUncheckedCreateWithoutFlowGroupInput>
  }

  export type FlowUpdateWithWhereUniqueWithoutFlowGroupInput = {
    where: FlowWhereUniqueInput
    data: XOR<FlowUpdateWithoutFlowGroupInput, FlowUncheckedUpdateWithoutFlowGroupInput>
  }

  export type FlowUpdateManyWithWhereWithoutFlowGroupInput = {
    where: FlowScalarWhereInput
    data: XOR<FlowUpdateManyMutationInput, FlowUncheckedUpdateManyWithoutFlowsInput>
  }

  export type FlowScalarWhereInput = {
    AND?: Enumerable<FlowScalarWhereInput>
    OR?: Enumerable<FlowScalarWhereInput>
    NOT?: Enumerable<FlowScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    status?: StringFilter | string
    flowGroupId?: IntFilter | number
    contextSchema?: JsonFilter
  }

  export type FlowGroupCreateWithoutFlowsInput = {
    name: string
    workspace: WorkspaceCreateNestedOneWithoutFlowGroupsInput
  }

  export type FlowGroupUncheckedCreateWithoutFlowsInput = {
    id?: number
    name: string
    workspaceId: number
  }

  export type FlowGroupCreateOrConnectWithoutFlowsInput = {
    where: FlowGroupWhereUniqueInput
    create: XOR<FlowGroupCreateWithoutFlowsInput, FlowGroupUncheckedCreateWithoutFlowsInput>
  }

  export type FlowActionCreateWithoutFlowInput = {
    name: string
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutFromFlowActionInput
    toFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutToFlowActionInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionUncheckedCreateWithoutFlowInput = {
    id?: number
    name: string
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutFromFlowActionInput
    toFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutToFlowActionInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionCreateOrConnectWithoutFlowInput = {
    where: FlowActionWhereUniqueInput
    create: XOR<FlowActionCreateWithoutFlowInput, FlowActionUncheckedCreateWithoutFlowInput>
  }

  export type FlowActionCreateManyFlowInputEnvelope = {
    data: Enumerable<FlowActionCreateManyFlowInput>
    skipDuplicates?: boolean
  }

  export type FlowActionConnectionCreateWithoutFlowInput = {
    socket: string
    fromFlowAction: FlowActionCreateNestedOneWithoutFromFlowActionConnectionsInput
    toFlowAction: FlowActionCreateNestedOneWithoutToFlowActionConnectionsInput
  }

  export type FlowActionConnectionUncheckedCreateWithoutFlowInput = {
    id?: number
    fromId: number
    toId: number
    socket: string
  }

  export type FlowActionConnectionCreateOrConnectWithoutFlowInput = {
    where: FlowActionConnectionWhereUniqueInput
    create: XOR<FlowActionConnectionCreateWithoutFlowInput, FlowActionConnectionUncheckedCreateWithoutFlowInput>
  }

  export type FlowActionConnectionCreateManyFlowInputEnvelope = {
    data: Enumerable<FlowActionConnectionCreateManyFlowInput>
    skipDuplicates?: boolean
  }

  export type FlowStackCreateWithoutFlowInput = {
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    parent?: FlowStackCreateNestedOneWithoutChildrenInput
    accountChannel: AccountChannelCreateNestedOneWithoutFlowStacksInput
    children?: FlowStackCreateNestedManyWithoutParentInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackUncheckedCreateWithoutFlowInput = {
    id?: number
    parentId?: number | null
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    children?: FlowStackUncheckedCreateNestedManyWithoutParentInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackCreateOrConnectWithoutFlowInput = {
    where: FlowStackWhereUniqueInput
    create: XOR<FlowStackCreateWithoutFlowInput, FlowStackUncheckedCreateWithoutFlowInput>
  }

  export type FlowStackCreateManyFlowInputEnvelope = {
    data: Enumerable<FlowStackCreateManyFlowInput>
    skipDuplicates?: boolean
  }

  export type FlowGroupUpsertWithoutFlowsInput = {
    update: XOR<FlowGroupUpdateWithoutFlowsInput, FlowGroupUncheckedUpdateWithoutFlowsInput>
    create: XOR<FlowGroupCreateWithoutFlowsInput, FlowGroupUncheckedCreateWithoutFlowsInput>
  }

  export type FlowGroupUpdateWithoutFlowsInput = {
    name?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutFlowGroupsNestedInput
  }

  export type FlowGroupUncheckedUpdateWithoutFlowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    workspaceId?: IntFieldUpdateOperationsInput | number
  }

  export type FlowActionUpsertWithWhereUniqueWithoutFlowInput = {
    where: FlowActionWhereUniqueInput
    update: XOR<FlowActionUpdateWithoutFlowInput, FlowActionUncheckedUpdateWithoutFlowInput>
    create: XOR<FlowActionCreateWithoutFlowInput, FlowActionUncheckedCreateWithoutFlowInput>
  }

  export type FlowActionUpdateWithWhereUniqueWithoutFlowInput = {
    where: FlowActionWhereUniqueInput
    data: XOR<FlowActionUpdateWithoutFlowInput, FlowActionUncheckedUpdateWithoutFlowInput>
  }

  export type FlowActionUpdateManyWithWhereWithoutFlowInput = {
    where: FlowActionScalarWhereInput
    data: XOR<FlowActionUpdateManyMutationInput, FlowActionUncheckedUpdateManyWithoutFlowActionsInput>
  }

  export type FlowActionScalarWhereInput = {
    AND?: Enumerable<FlowActionScalarWhereInput>
    OR?: Enumerable<FlowActionScalarWhereInput>
    NOT?: Enumerable<FlowActionScalarWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    kind?: StringFilter | string
    flowId?: IntFilter | number
    configuration?: JsonFilter
  }

  export type FlowActionConnectionUpsertWithWhereUniqueWithoutFlowInput = {
    where: FlowActionConnectionWhereUniqueInput
    update: XOR<FlowActionConnectionUpdateWithoutFlowInput, FlowActionConnectionUncheckedUpdateWithoutFlowInput>
    create: XOR<FlowActionConnectionCreateWithoutFlowInput, FlowActionConnectionUncheckedCreateWithoutFlowInput>
  }

  export type FlowActionConnectionUpdateWithWhereUniqueWithoutFlowInput = {
    where: FlowActionConnectionWhereUniqueInput
    data: XOR<FlowActionConnectionUpdateWithoutFlowInput, FlowActionConnectionUncheckedUpdateWithoutFlowInput>
  }

  export type FlowActionConnectionUpdateManyWithWhereWithoutFlowInput = {
    where: FlowActionConnectionScalarWhereInput
    data: XOR<FlowActionConnectionUpdateManyMutationInput, FlowActionConnectionUncheckedUpdateManyWithoutFlowActionConnectionInput>
  }

  export type FlowActionConnectionScalarWhereInput = {
    AND?: Enumerable<FlowActionConnectionScalarWhereInput>
    OR?: Enumerable<FlowActionConnectionScalarWhereInput>
    NOT?: Enumerable<FlowActionConnectionScalarWhereInput>
    id?: IntFilter | number
    flowId?: IntFilter | number
    fromId?: IntFilter | number
    toId?: IntFilter | number
    socket?: StringFilter | string
  }

  export type FlowStackUpsertWithWhereUniqueWithoutFlowInput = {
    where: FlowStackWhereUniqueInput
    update: XOR<FlowStackUpdateWithoutFlowInput, FlowStackUncheckedUpdateWithoutFlowInput>
    create: XOR<FlowStackCreateWithoutFlowInput, FlowStackUncheckedCreateWithoutFlowInput>
  }

  export type FlowStackUpdateWithWhereUniqueWithoutFlowInput = {
    where: FlowStackWhereUniqueInput
    data: XOR<FlowStackUpdateWithoutFlowInput, FlowStackUncheckedUpdateWithoutFlowInput>
  }

  export type FlowStackUpdateManyWithWhereWithoutFlowInput = {
    where: FlowStackScalarWhereInput
    data: XOR<FlowStackUpdateManyMutationInput, FlowStackUncheckedUpdateManyWithoutFlowStackInput>
  }

  export type FlowCreateWithoutFlowActionsInput = {
    name: string
    status: string
    contextSchema: JsonNullValueInput | InputJsonValue
    flowGroup: FlowGroupCreateNestedOneWithoutFlowsInput
    FlowActionConnection?: FlowActionConnectionCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutFlowActionsInput = {
    id?: number
    name: string
    status: string
    flowGroupId: number
    contextSchema: JsonNullValueInput | InputJsonValue
    FlowActionConnection?: FlowActionConnectionUncheckedCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutFlowActionsInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutFlowActionsInput, FlowUncheckedCreateWithoutFlowActionsInput>
  }

  export type FlowActionConnectionCreateWithoutFromFlowActionInput = {
    socket: string
    flow: FlowCreateNestedOneWithoutFlowActionConnectionInput
    toFlowAction: FlowActionCreateNestedOneWithoutToFlowActionConnectionsInput
  }

  export type FlowActionConnectionUncheckedCreateWithoutFromFlowActionInput = {
    id?: number
    flowId: number
    toId: number
    socket: string
  }

  export type FlowActionConnectionCreateOrConnectWithoutFromFlowActionInput = {
    where: FlowActionConnectionWhereUniqueInput
    create: XOR<FlowActionConnectionCreateWithoutFromFlowActionInput, FlowActionConnectionUncheckedCreateWithoutFromFlowActionInput>
  }

  export type FlowActionConnectionCreateManyFromFlowActionInputEnvelope = {
    data: Enumerable<FlowActionConnectionCreateManyFromFlowActionInput>
    skipDuplicates?: boolean
  }

  export type FlowActionConnectionCreateWithoutToFlowActionInput = {
    socket: string
    flow: FlowCreateNestedOneWithoutFlowActionConnectionInput
    fromFlowAction: FlowActionCreateNestedOneWithoutFromFlowActionConnectionsInput
  }

  export type FlowActionConnectionUncheckedCreateWithoutToFlowActionInput = {
    id?: number
    flowId: number
    fromId: number
    socket: string
  }

  export type FlowActionConnectionCreateOrConnectWithoutToFlowActionInput = {
    where: FlowActionConnectionWhereUniqueInput
    create: XOR<FlowActionConnectionCreateWithoutToFlowActionInput, FlowActionConnectionUncheckedCreateWithoutToFlowActionInput>
  }

  export type FlowActionConnectionCreateManyToFlowActionInputEnvelope = {
    data: Enumerable<FlowActionConnectionCreateManyToFlowActionInput>
    skipDuplicates?: boolean
  }

  export type FlowStateCreateWithoutFlowActionInput = {
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flowStack: FlowStackCreateNestedOneWithoutFlowStatesInput
  }

  export type FlowStateUncheckedCreateWithoutFlowActionInput = {
    id?: number
    flowStackId: number
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStateCreateOrConnectWithoutFlowActionInput = {
    where: FlowStateWhereUniqueInput
    create: XOR<FlowStateCreateWithoutFlowActionInput, FlowStateUncheckedCreateWithoutFlowActionInput>
  }

  export type FlowStateCreateManyFlowActionInputEnvelope = {
    data: Enumerable<FlowStateCreateManyFlowActionInput>
    skipDuplicates?: boolean
  }

  export type FlowUpsertWithoutFlowActionsInput = {
    update: XOR<FlowUpdateWithoutFlowActionsInput, FlowUncheckedUpdateWithoutFlowActionsInput>
    create: XOR<FlowCreateWithoutFlowActionsInput, FlowUncheckedCreateWithoutFlowActionsInput>
  }

  export type FlowUpdateWithoutFlowActionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowGroup?: FlowGroupUpdateOneRequiredWithoutFlowsNestedInput
    FlowActionConnection?: FlowActionConnectionUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutFlowActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    flowGroupId?: IntFieldUpdateOperationsInput | number
    contextSchema?: JsonNullValueInput | InputJsonValue
    FlowActionConnection?: FlowActionConnectionUncheckedUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowActionConnectionUpsertWithWhereUniqueWithoutFromFlowActionInput = {
    where: FlowActionConnectionWhereUniqueInput
    update: XOR<FlowActionConnectionUpdateWithoutFromFlowActionInput, FlowActionConnectionUncheckedUpdateWithoutFromFlowActionInput>
    create: XOR<FlowActionConnectionCreateWithoutFromFlowActionInput, FlowActionConnectionUncheckedCreateWithoutFromFlowActionInput>
  }

  export type FlowActionConnectionUpdateWithWhereUniqueWithoutFromFlowActionInput = {
    where: FlowActionConnectionWhereUniqueInput
    data: XOR<FlowActionConnectionUpdateWithoutFromFlowActionInput, FlowActionConnectionUncheckedUpdateWithoutFromFlowActionInput>
  }

  export type FlowActionConnectionUpdateManyWithWhereWithoutFromFlowActionInput = {
    where: FlowActionConnectionScalarWhereInput
    data: XOR<FlowActionConnectionUpdateManyMutationInput, FlowActionConnectionUncheckedUpdateManyWithoutFromFlowActionConnectionsInput>
  }

  export type FlowActionConnectionUpsertWithWhereUniqueWithoutToFlowActionInput = {
    where: FlowActionConnectionWhereUniqueInput
    update: XOR<FlowActionConnectionUpdateWithoutToFlowActionInput, FlowActionConnectionUncheckedUpdateWithoutToFlowActionInput>
    create: XOR<FlowActionConnectionCreateWithoutToFlowActionInput, FlowActionConnectionUncheckedCreateWithoutToFlowActionInput>
  }

  export type FlowActionConnectionUpdateWithWhereUniqueWithoutToFlowActionInput = {
    where: FlowActionConnectionWhereUniqueInput
    data: XOR<FlowActionConnectionUpdateWithoutToFlowActionInput, FlowActionConnectionUncheckedUpdateWithoutToFlowActionInput>
  }

  export type FlowActionConnectionUpdateManyWithWhereWithoutToFlowActionInput = {
    where: FlowActionConnectionScalarWhereInput
    data: XOR<FlowActionConnectionUpdateManyMutationInput, FlowActionConnectionUncheckedUpdateManyWithoutToFlowActionConnectionsInput>
  }

  export type FlowStateUpsertWithWhereUniqueWithoutFlowActionInput = {
    where: FlowStateWhereUniqueInput
    update: XOR<FlowStateUpdateWithoutFlowActionInput, FlowStateUncheckedUpdateWithoutFlowActionInput>
    create: XOR<FlowStateCreateWithoutFlowActionInput, FlowStateUncheckedCreateWithoutFlowActionInput>
  }

  export type FlowStateUpdateWithWhereUniqueWithoutFlowActionInput = {
    where: FlowStateWhereUniqueInput
    data: XOR<FlowStateUpdateWithoutFlowActionInput, FlowStateUncheckedUpdateWithoutFlowActionInput>
  }

  export type FlowStateUpdateManyWithWhereWithoutFlowActionInput = {
    where: FlowStateScalarWhereInput
    data: XOR<FlowStateUpdateManyMutationInput, FlowStateUncheckedUpdateManyWithoutFlowStatesInput>
  }

  export type FlowStateScalarWhereInput = {
    AND?: Enumerable<FlowStateScalarWhereInput>
    OR?: Enumerable<FlowStateScalarWhereInput>
    NOT?: Enumerable<FlowStateScalarWhereInput>
    id?: IntFilter | number
    flowStackId?: IntFilter | number
    flowActionId?: IntFilter | number
    state?: JsonFilter
    channelState?: JsonFilter
    createdAt?: DateTimeFilter | Date | string
  }

  export type FlowCreateWithoutFlowActionConnectionInput = {
    name: string
    status: string
    contextSchema: JsonNullValueInput | InputJsonValue
    flowGroup: FlowGroupCreateNestedOneWithoutFlowsInput
    flowActions?: FlowActionCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutFlowActionConnectionInput = {
    id?: number
    name: string
    status: string
    flowGroupId: number
    contextSchema: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedCreateNestedManyWithoutFlowInput
    FlowStack?: FlowStackUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutFlowActionConnectionInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutFlowActionConnectionInput, FlowUncheckedCreateWithoutFlowActionConnectionInput>
  }

  export type FlowActionCreateWithoutFromFlowActionConnectionsInput = {
    name: string
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    flow: FlowCreateNestedOneWithoutFlowActionsInput
    toFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutToFlowActionInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionUncheckedCreateWithoutFromFlowActionConnectionsInput = {
    id?: number
    name: string
    kind: string
    flowId: number
    configuration: JsonNullValueInput | InputJsonValue
    toFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutToFlowActionInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionCreateOrConnectWithoutFromFlowActionConnectionsInput = {
    where: FlowActionWhereUniqueInput
    create: XOR<FlowActionCreateWithoutFromFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutFromFlowActionConnectionsInput>
  }

  export type FlowActionCreateWithoutToFlowActionConnectionsInput = {
    name: string
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    flow: FlowCreateNestedOneWithoutFlowActionsInput
    fromFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutFromFlowActionInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionUncheckedCreateWithoutToFlowActionConnectionsInput = {
    id?: number
    name: string
    kind: string
    flowId: number
    configuration: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutFromFlowActionInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowActionInput
  }

  export type FlowActionCreateOrConnectWithoutToFlowActionConnectionsInput = {
    where: FlowActionWhereUniqueInput
    create: XOR<FlowActionCreateWithoutToFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutToFlowActionConnectionsInput>
  }

  export type FlowUpsertWithoutFlowActionConnectionInput = {
    update: XOR<FlowUpdateWithoutFlowActionConnectionInput, FlowUncheckedUpdateWithoutFlowActionConnectionInput>
    create: XOR<FlowCreateWithoutFlowActionConnectionInput, FlowUncheckedCreateWithoutFlowActionConnectionInput>
  }

  export type FlowUpdateWithoutFlowActionConnectionInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowGroup?: FlowGroupUpdateOneRequiredWithoutFlowsNestedInput
    flowActions?: FlowActionUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutFlowActionConnectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    flowGroupId?: IntFieldUpdateOperationsInput | number
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowActionUpsertWithoutFromFlowActionConnectionsInput = {
    update: XOR<FlowActionUpdateWithoutFromFlowActionConnectionsInput, FlowActionUncheckedUpdateWithoutFromFlowActionConnectionsInput>
    create: XOR<FlowActionCreateWithoutFromFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutFromFlowActionConnectionsInput>
  }

  export type FlowActionUpdateWithoutFromFlowActionConnectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    flow?: FlowUpdateOneRequiredWithoutFlowActionsNestedInput
    toFlowActionConnections?: FlowActionConnectionUpdateManyWithoutToFlowActionNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowActionUncheckedUpdateWithoutFromFlowActionConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    flowId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
    toFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutToFlowActionNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowActionUpsertWithoutToFlowActionConnectionsInput = {
    update: XOR<FlowActionUpdateWithoutToFlowActionConnectionsInput, FlowActionUncheckedUpdateWithoutToFlowActionConnectionsInput>
    create: XOR<FlowActionCreateWithoutToFlowActionConnectionsInput, FlowActionUncheckedCreateWithoutToFlowActionConnectionsInput>
  }

  export type FlowActionUpdateWithoutToFlowActionConnectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    flow?: FlowUpdateOneRequiredWithoutFlowActionsNestedInput
    fromFlowActionConnections?: FlowActionConnectionUpdateManyWithoutFromFlowActionNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowActionUncheckedUpdateWithoutToFlowActionConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    flowId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutFromFlowActionNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowCreateWithoutFlowStackInput = {
    name: string
    status: string
    contextSchema: JsonNullValueInput | InputJsonValue
    flowGroup: FlowGroupCreateNestedOneWithoutFlowsInput
    flowActions?: FlowActionCreateNestedManyWithoutFlowInput
    FlowActionConnection?: FlowActionConnectionCreateNestedManyWithoutFlowInput
  }

  export type FlowUncheckedCreateWithoutFlowStackInput = {
    id?: number
    name: string
    status: string
    flowGroupId: number
    contextSchema: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedCreateNestedManyWithoutFlowInput
    FlowActionConnection?: FlowActionConnectionUncheckedCreateNestedManyWithoutFlowInput
  }

  export type FlowCreateOrConnectWithoutFlowStackInput = {
    where: FlowWhereUniqueInput
    create: XOR<FlowCreateWithoutFlowStackInput, FlowUncheckedCreateWithoutFlowStackInput>
  }

  export type FlowStackCreateWithoutChildrenInput = {
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flow: FlowCreateNestedOneWithoutFlowStackInput
    parent?: FlowStackCreateNestedOneWithoutChildrenInput
    accountChannel: AccountChannelCreateNestedOneWithoutFlowStacksInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackUncheckedCreateWithoutChildrenInput = {
    id?: number
    flowId: number
    parentId?: number | null
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackCreateOrConnectWithoutChildrenInput = {
    where: FlowStackWhereUniqueInput
    create: XOR<FlowStackCreateWithoutChildrenInput, FlowStackUncheckedCreateWithoutChildrenInput>
  }

  export type AccountChannelCreateWithoutFlowStacksInput = {
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
    account: AccountCreateNestedOneWithoutAccountChannelsInput
    channel: ChannelCreateNestedOneWithoutAccountChannelsInput
  }

  export type AccountChannelUncheckedCreateWithoutFlowStacksInput = {
    id?: number
    accountId: number
    channelId: number
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type AccountChannelCreateOrConnectWithoutFlowStacksInput = {
    where: AccountChannelWhereUniqueInput
    create: XOR<AccountChannelCreateWithoutFlowStacksInput, AccountChannelUncheckedCreateWithoutFlowStacksInput>
  }

  export type FlowStackCreateWithoutParentInput = {
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flow: FlowCreateNestedOneWithoutFlowStackInput
    accountChannel: AccountChannelCreateNestedOneWithoutFlowStacksInput
    children?: FlowStackCreateNestedManyWithoutParentInput
    flowStates?: FlowStateCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackUncheckedCreateWithoutParentInput = {
    id?: number
    flowId: number
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    children?: FlowStackUncheckedCreateNestedManyWithoutParentInput
    flowStates?: FlowStateUncheckedCreateNestedManyWithoutFlowStackInput
  }

  export type FlowStackCreateOrConnectWithoutParentInput = {
    where: FlowStackWhereUniqueInput
    create: XOR<FlowStackCreateWithoutParentInput, FlowStackUncheckedCreateWithoutParentInput>
  }

  export type FlowStackCreateManyParentInputEnvelope = {
    data: Enumerable<FlowStackCreateManyParentInput>
    skipDuplicates?: boolean
  }

  export type FlowStateCreateWithoutFlowStackInput = {
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flowAction: FlowActionCreateNestedOneWithoutFlowStatesInput
  }

  export type FlowStateUncheckedCreateWithoutFlowStackInput = {
    id?: number
    flowActionId: number
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStateCreateOrConnectWithoutFlowStackInput = {
    where: FlowStateWhereUniqueInput
    create: XOR<FlowStateCreateWithoutFlowStackInput, FlowStateUncheckedCreateWithoutFlowStackInput>
  }

  export type FlowStateCreateManyFlowStackInputEnvelope = {
    data: Enumerable<FlowStateCreateManyFlowStackInput>
    skipDuplicates?: boolean
  }

  export type FlowUpsertWithoutFlowStackInput = {
    update: XOR<FlowUpdateWithoutFlowStackInput, FlowUncheckedUpdateWithoutFlowStackInput>
    create: XOR<FlowCreateWithoutFlowStackInput, FlowUncheckedCreateWithoutFlowStackInput>
  }

  export type FlowUpdateWithoutFlowStackInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowGroup?: FlowGroupUpdateOneRequiredWithoutFlowsNestedInput
    flowActions?: FlowActionUpdateManyWithoutFlowNestedInput
    FlowActionConnection?: FlowActionConnectionUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutFlowStackInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    flowGroupId?: IntFieldUpdateOperationsInput | number
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedUpdateManyWithoutFlowNestedInput
    FlowActionConnection?: FlowActionConnectionUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowStackUpsertWithoutChildrenInput = {
    update: XOR<FlowStackUpdateWithoutChildrenInput, FlowStackUncheckedUpdateWithoutChildrenInput>
    create: XOR<FlowStackCreateWithoutChildrenInput, FlowStackUncheckedCreateWithoutChildrenInput>
  }

  export type FlowStackUpdateWithoutChildrenInput = {
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutFlowStackNestedInput
    parent?: FlowStackUpdateOneWithoutChildrenNestedInput
    accountChannel?: AccountChannelUpdateOneRequiredWithoutFlowStacksNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowStackNestedInput
  }

  export type AccountChannelUpsertWithoutFlowStacksInput = {
    update: XOR<AccountChannelUpdateWithoutFlowStacksInput, AccountChannelUncheckedUpdateWithoutFlowStacksInput>
    create: XOR<AccountChannelCreateWithoutFlowStacksInput, AccountChannelUncheckedCreateWithoutFlowStacksInput>
  }

  export type AccountChannelUpdateWithoutFlowStacksInput = {
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    account?: AccountUpdateOneRequiredWithoutAccountChannelsNestedInput
    channel?: ChannelUpdateOneRequiredWithoutAccountChannelsNestedInput
  }

  export type AccountChannelUncheckedUpdateWithoutFlowStacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type FlowStackUpsertWithWhereUniqueWithoutParentInput = {
    where: FlowStackWhereUniqueInput
    update: XOR<FlowStackUpdateWithoutParentInput, FlowStackUncheckedUpdateWithoutParentInput>
    create: XOR<FlowStackCreateWithoutParentInput, FlowStackUncheckedCreateWithoutParentInput>
  }

  export type FlowStackUpdateWithWhereUniqueWithoutParentInput = {
    where: FlowStackWhereUniqueInput
    data: XOR<FlowStackUpdateWithoutParentInput, FlowStackUncheckedUpdateWithoutParentInput>
  }

  export type FlowStackUpdateManyWithWhereWithoutParentInput = {
    where: FlowStackScalarWhereInput
    data: XOR<FlowStackUpdateManyMutationInput, FlowStackUncheckedUpdateManyWithoutChildrenInput>
  }

  export type FlowStateUpsertWithWhereUniqueWithoutFlowStackInput = {
    where: FlowStateWhereUniqueInput
    update: XOR<FlowStateUpdateWithoutFlowStackInput, FlowStateUncheckedUpdateWithoutFlowStackInput>
    create: XOR<FlowStateCreateWithoutFlowStackInput, FlowStateUncheckedCreateWithoutFlowStackInput>
  }

  export type FlowStateUpdateWithWhereUniqueWithoutFlowStackInput = {
    where: FlowStateWhereUniqueInput
    data: XOR<FlowStateUpdateWithoutFlowStackInput, FlowStateUncheckedUpdateWithoutFlowStackInput>
  }

  export type FlowStateUpdateManyWithWhereWithoutFlowStackInput = {
    where: FlowStateScalarWhereInput
    data: XOR<FlowStateUpdateManyMutationInput, FlowStateUncheckedUpdateManyWithoutFlowStatesInput>
  }

  export type FlowStackCreateWithoutFlowStatesInput = {
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    flow: FlowCreateNestedOneWithoutFlowStackInput
    parent?: FlowStackCreateNestedOneWithoutChildrenInput
    accountChannel: AccountChannelCreateNestedOneWithoutFlowStacksInput
    children?: FlowStackCreateNestedManyWithoutParentInput
  }

  export type FlowStackUncheckedCreateWithoutFlowStatesInput = {
    id?: number
    flowId: number
    parentId?: number | null
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    children?: FlowStackUncheckedCreateNestedManyWithoutParentInput
  }

  export type FlowStackCreateOrConnectWithoutFlowStatesInput = {
    where: FlowStackWhereUniqueInput
    create: XOR<FlowStackCreateWithoutFlowStatesInput, FlowStackUncheckedCreateWithoutFlowStatesInput>
  }

  export type FlowActionCreateWithoutFlowStatesInput = {
    name: string
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
    flow: FlowCreateNestedOneWithoutFlowActionsInput
    fromFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutFromFlowActionInput
    toFlowActionConnections?: FlowActionConnectionCreateNestedManyWithoutToFlowActionInput
  }

  export type FlowActionUncheckedCreateWithoutFlowStatesInput = {
    id?: number
    name: string
    kind: string
    flowId: number
    configuration: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutFromFlowActionInput
    toFlowActionConnections?: FlowActionConnectionUncheckedCreateNestedManyWithoutToFlowActionInput
  }

  export type FlowActionCreateOrConnectWithoutFlowStatesInput = {
    where: FlowActionWhereUniqueInput
    create: XOR<FlowActionCreateWithoutFlowStatesInput, FlowActionUncheckedCreateWithoutFlowStatesInput>
  }

  export type FlowStackUpsertWithoutFlowStatesInput = {
    update: XOR<FlowStackUpdateWithoutFlowStatesInput, FlowStackUncheckedUpdateWithoutFlowStatesInput>
    create: XOR<FlowStackCreateWithoutFlowStatesInput, FlowStackUncheckedCreateWithoutFlowStatesInput>
  }

  export type FlowStackUpdateWithoutFlowStatesInput = {
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutFlowStackNestedInput
    parent?: FlowStackUpdateOneWithoutChildrenNestedInput
    accountChannel?: AccountChannelUpdateOneRequiredWithoutFlowStacksNestedInput
    children?: FlowStackUpdateManyWithoutParentNestedInput
  }

  export type FlowStackUncheckedUpdateWithoutFlowStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FlowStackUncheckedUpdateManyWithoutParentNestedInput
  }

  export type FlowActionUpsertWithoutFlowStatesInput = {
    update: XOR<FlowActionUpdateWithoutFlowStatesInput, FlowActionUncheckedUpdateWithoutFlowStatesInput>
    create: XOR<FlowActionCreateWithoutFlowStatesInput, FlowActionUncheckedCreateWithoutFlowStatesInput>
  }

  export type FlowActionUpdateWithoutFlowStatesInput = {
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    flow?: FlowUpdateOneRequiredWithoutFlowActionsNestedInput
    fromFlowActionConnections?: FlowActionConnectionUpdateManyWithoutFromFlowActionNestedInput
    toFlowActionConnections?: FlowActionConnectionUpdateManyWithoutToFlowActionNestedInput
  }

  export type FlowActionUncheckedUpdateWithoutFlowStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    flowId?: IntFieldUpdateOperationsInput | number
    configuration?: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutFromFlowActionNestedInput
    toFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutToFlowActionNestedInput
  }

  export type AccountSchemaCreateManyWorkspaceInput = {
    id?: number
    schema: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordSchemaCreateManyWorkspaceInput = {
    id?: number
    name: string
    schema: JsonNullValueInput | InputJsonValue
  }

  export type WorkspaceAccountCreateManyWorkspaceInput = {
    id?: number
    accountId: number
    role: string
  }

  export type ChannelCreateManyWorkspaceInput = {
    id?: number
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type FlowGroupCreateManyWorkspaceInput = {
    id?: number
    name: string
  }

  export type AccountSchemaUpdateWithoutWorkspaceInput = {
    schema?: JsonNullValueInput | InputJsonValue
    accounts?: AccountUpdateManyWithoutSchemaNestedInput
  }

  export type AccountSchemaUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    schema?: JsonNullValueInput | InputJsonValue
    accounts?: AccountUncheckedUpdateManyWithoutSchemaNestedInput
  }

  export type AccountSchemaUncheckedUpdateManyWithoutAccountSchemasInput = {
    id?: IntFieldUpdateOperationsInput | number
    schema?: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordSchemaUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
    dataRecords?: DataRecordUpdateManyWithoutSchemaNestedInput
  }

  export type DataRecordSchemaUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
    dataRecords?: DataRecordUncheckedUpdateManyWithoutSchemaNestedInput
  }

  export type DataRecordSchemaUncheckedUpdateManyWithoutDataRecordSchemasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    schema?: JsonNullValueInput | InputJsonValue
  }

  export type WorkspaceAccountUpdateWithoutWorkspaceInput = {
    role?: StringFieldUpdateOperationsInput | string
    account?: AccountUpdateOneRequiredWithoutWorkspaceAccountsNestedInput
  }

  export type WorkspaceAccountUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type WorkspaceAccountUncheckedUpdateManyWithoutWorkspaceAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type ChannelUpdateWithoutWorkspaceInput = {
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    accountChannels?: AccountChannelUncheckedUpdateManyWithoutChannelNestedInput
  }

  export type ChannelUncheckedUpdateManyWithoutChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type FlowGroupUpdateWithoutWorkspaceInput = {
    name?: StringFieldUpdateOperationsInput | string
    flows?: FlowUpdateManyWithoutFlowGroupNestedInput
  }

  export type FlowGroupUncheckedUpdateWithoutWorkspaceInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    flows?: FlowUncheckedUpdateManyWithoutFlowGroupNestedInput
  }

  export type FlowGroupUncheckedUpdateManyWithoutFlowGroupsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AccountCreateManySchemaInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type AccountUpdateWithoutSchemaInput = {
    data?: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountUpdateManyWithoutAccountNestedInput
    accountChannels?: AccountChannelUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateWithoutSchemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
    workspaceAccounts?: WorkspaceAccountUncheckedUpdateManyWithoutAccountNestedInput
    accountChannels?: AccountChannelUncheckedUpdateManyWithoutAccountNestedInput
  }

  export type AccountUncheckedUpdateManyWithoutAccountsInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type WorkspaceAccountCreateManyAccountInput = {
    id?: number
    workspaceId: number
    role: string
  }

  export type AccountChannelCreateManyAccountInput = {
    id?: number
    channelId: number
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type WorkspaceAccountUpdateWithoutAccountInput = {
    role?: StringFieldUpdateOperationsInput | string
    workspace?: WorkspaceUpdateOneRequiredWithoutWorkspaceAccountsNestedInput
  }

  export type WorkspaceAccountUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    workspaceId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
  }

  export type AccountChannelUpdateWithoutAccountInput = {
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    channel?: ChannelUpdateOneRequiredWithoutAccountChannelsNestedInput
    flowStacks?: FlowStackUpdateManyWithoutAccountChannelNestedInput
  }

  export type AccountChannelUncheckedUpdateWithoutAccountInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    flowStacks?: FlowStackUncheckedUpdateManyWithoutAccountChannelNestedInput
  }

  export type AccountChannelUncheckedUpdateManyWithoutAccountChannelsInput = {
    id?: IntFieldUpdateOperationsInput | number
    channelId?: IntFieldUpdateOperationsInput | number
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordCreateManySchemaInput = {
    id?: number
    data: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordUpdateWithoutSchemaInput = {
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordUncheckedUpdateWithoutSchemaInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type DataRecordUncheckedUpdateManyWithoutDataRecordsInput = {
    id?: IntFieldUpdateOperationsInput | number
    data?: JsonNullValueInput | InputJsonValue
  }

  export type AccountChannelCreateManyChannelInput = {
    id?: number
    accountId: number
    channelAccountId: number
    status: string
    data: JsonNullValueInput | InputJsonValue
  }

  export type AccountChannelUpdateWithoutChannelInput = {
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    account?: AccountUpdateOneRequiredWithoutAccountChannelsNestedInput
    flowStacks?: FlowStackUpdateManyWithoutAccountChannelNestedInput
  }

  export type AccountChannelUncheckedUpdateWithoutChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    accountId?: IntFieldUpdateOperationsInput | number
    channelAccountId?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    flowStacks?: FlowStackUncheckedUpdateManyWithoutAccountChannelNestedInput
  }

  export type FlowStackCreateManyAccountChannelInput = {
    id?: number
    flowId: number
    parentId?: number | null
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStackUpdateWithoutAccountChannelInput = {
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutFlowStackNestedInput
    parent?: FlowStackUpdateOneWithoutChildrenNestedInput
    children?: FlowStackUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateWithoutAccountChannelInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FlowStackUncheckedUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateManyWithoutFlowStacksInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowCreateManyFlowGroupInput = {
    id?: number
    name: string
    status: string
    contextSchema: JsonNullValueInput | InputJsonValue
  }

  export type FlowUpdateWithoutFlowGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUpdateManyWithoutFlowNestedInput
    FlowActionConnection?: FlowActionConnectionUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateWithoutFlowGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
    flowActions?: FlowActionUncheckedUpdateManyWithoutFlowNestedInput
    FlowActionConnection?: FlowActionConnectionUncheckedUpdateManyWithoutFlowNestedInput
    FlowStack?: FlowStackUncheckedUpdateManyWithoutFlowNestedInput
  }

  export type FlowUncheckedUpdateManyWithoutFlowsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    contextSchema?: JsonNullValueInput | InputJsonValue
  }

  export type FlowActionCreateManyFlowInput = {
    id?: number
    name: string
    kind: string
    configuration: JsonNullValueInput | InputJsonValue
  }

  export type FlowActionConnectionCreateManyFlowInput = {
    id?: number
    fromId: number
    toId: number
    socket: string
  }

  export type FlowStackCreateManyFlowInput = {
    id?: number
    parentId?: number | null
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowActionUpdateWithoutFlowInput = {
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUpdateManyWithoutFromFlowActionNestedInput
    toFlowActionConnections?: FlowActionConnectionUpdateManyWithoutToFlowActionNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowActionUncheckedUpdateWithoutFlowInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
    fromFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutFromFlowActionNestedInput
    toFlowActionConnections?: FlowActionConnectionUncheckedUpdateManyWithoutToFlowActionNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowActionNestedInput
  }

  export type FlowActionUncheckedUpdateManyWithoutFlowActionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    kind?: StringFieldUpdateOperationsInput | string
    configuration?: JsonNullValueInput | InputJsonValue
  }

  export type FlowActionConnectionUpdateWithoutFlowInput = {
    socket?: StringFieldUpdateOperationsInput | string
    fromFlowAction?: FlowActionUpdateOneRequiredWithoutFromFlowActionConnectionsNestedInput
    toFlowAction?: FlowActionUpdateOneRequiredWithoutToFlowActionConnectionsNestedInput
  }

  export type FlowActionConnectionUncheckedUpdateWithoutFlowInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowActionConnectionUncheckedUpdateManyWithoutFlowActionConnectionInput = {
    id?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowStackUpdateWithoutFlowInput = {
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    parent?: FlowStackUpdateOneWithoutChildrenNestedInput
    accountChannel?: AccountChannelUpdateOneRequiredWithoutFlowStacksNestedInput
    children?: FlowStackUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateWithoutFlowInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FlowStackUncheckedUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateManyWithoutFlowStackInput = {
    id?: IntFieldUpdateOperationsInput | number
    parentId?: NullableIntFieldUpdateOperationsInput | number | null
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowActionConnectionCreateManyFromFlowActionInput = {
    id?: number
    flowId: number
    toId: number
    socket: string
  }

  export type FlowActionConnectionCreateManyToFlowActionInput = {
    id?: number
    flowId: number
    fromId: number
    socket: string
  }

  export type FlowStateCreateManyFlowActionInput = {
    id?: number
    flowStackId: number
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowActionConnectionUpdateWithoutFromFlowActionInput = {
    socket?: StringFieldUpdateOperationsInput | string
    flow?: FlowUpdateOneRequiredWithoutFlowActionConnectionNestedInput
    toFlowAction?: FlowActionUpdateOneRequiredWithoutToFlowActionConnectionsNestedInput
  }

  export type FlowActionConnectionUncheckedUpdateWithoutFromFlowActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowActionConnectionUncheckedUpdateManyWithoutFromFlowActionConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    toId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowActionConnectionUpdateWithoutToFlowActionInput = {
    socket?: StringFieldUpdateOperationsInput | string
    flow?: FlowUpdateOneRequiredWithoutFlowActionConnectionNestedInput
    fromFlowAction?: FlowActionUpdateOneRequiredWithoutFromFlowActionConnectionsNestedInput
  }

  export type FlowActionConnectionUncheckedUpdateWithoutToFlowActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowActionConnectionUncheckedUpdateManyWithoutToFlowActionConnectionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    fromId?: IntFieldUpdateOperationsInput | number
    socket?: StringFieldUpdateOperationsInput | string
  }

  export type FlowStateUpdateWithoutFlowActionInput = {
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowStack?: FlowStackUpdateOneRequiredWithoutFlowStatesNestedInput
  }

  export type FlowStateUncheckedUpdateWithoutFlowActionInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowStackId?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowStateUncheckedUpdateManyWithoutFlowStatesInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowStackId?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowStackCreateManyParentInput = {
    id?: number
    flowId: number
    accountChannelId: number
    context: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStateCreateManyFlowStackInput = {
    id?: number
    flowActionId: number
    state: JsonNullValueInput | InputJsonValue
    channelState: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FlowStackUpdateWithoutParentInput = {
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flow?: FlowUpdateOneRequiredWithoutFlowStackNestedInput
    accountChannel?: AccountChannelUpdateOneRequiredWithoutFlowStacksNestedInput
    children?: FlowStackUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateWithoutParentInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    children?: FlowStackUncheckedUpdateManyWithoutParentNestedInput
    flowStates?: FlowStateUncheckedUpdateManyWithoutFlowStackNestedInput
  }

  export type FlowStackUncheckedUpdateManyWithoutChildrenInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowId?: IntFieldUpdateOperationsInput | number
    accountChannelId?: IntFieldUpdateOperationsInput | number
    context?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlowStateUpdateWithoutFlowStackInput = {
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flowAction?: FlowActionUpdateOneRequiredWithoutFlowStatesNestedInput
  }

  export type FlowStateUncheckedUpdateWithoutFlowStackInput = {
    id?: IntFieldUpdateOperationsInput | number
    flowActionId?: IntFieldUpdateOperationsInput | number
    state?: JsonNullValueInput | InputJsonValue
    channelState?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}