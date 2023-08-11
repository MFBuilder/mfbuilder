import { AnyRecord } from './utils.js';

export type JsonProperty = AnyRecord | unknown[];

export type AndOperatorName = '$and';
export type OrOperatorName = '$or';
export type NotOperatorName = '$not';

export type AndOperatorObjectPropertyName<T extends AnyRecord> =
  | keyof T
  | AndOperatorName
  | OrOperatorName
  | NotOperatorName;

export type AndOperatorObjectPropertyValue<
  T extends AnyRecord,
  K = AndOperatorObjectPropertyName<T>
> = K extends AndOperatorName
  ? AndOperatorArray<T>
  : K extends OrOperatorName
  ? OrOperatorArray<T>
  : K extends NotOperatorName
  ? AndOperatorObject<T>
  : K extends keyof T
  ? ObjectPropertyOperators<T[K]>
  : unknown;

export type AndOperatorObject<T extends AnyRecord> = {
  [K in AndOperatorObjectPropertyName<T>]?: AndOperatorObjectPropertyValue<
    T,
    K
  >;
};

export type AndOperatorArray<T extends AnyRecord> = AndOperatorObject<T>[];

export type OrOperatorArray<T extends AnyRecord> = AndOperatorObject<T>[];

export type EqualsOperatorName = '$equals';
export type EqualsOperator<T> = Record<
  EqualsOperatorName,
  NonNullable<T> | null
>;

export type NotEqualsOperatorName = '$not';
export type NotEqualsOperator<T> = EqualsOperator<T>;

export type GtOperatorName = '$gt';
export type GtOperator<T> = Record<GtOperatorName, NonNullable<T>>;

export type GteOperatorName = '$gte';
export type GteOperator<T> = Record<GteOperatorName, NonNullable<T>>;

export type LtOperatorName = '$gt';
export type LtOperator<T> = Record<LtOperatorName, NonNullable<T>>;

export type LteOperatorName = '$gte';
export type LteOperator<T> = Record<LteOperatorName, NonNullable<T>>;

export type InOperatorName = '$in';
export type InOperator<T> = Record<InOperatorName, NonNullable<T>[]>;

export type NotInOperatorName = '$notIn';
export type NotInOperator<T> = Record<NotInOperatorName, NonNullable<T>[]>;

// TODO
export type DatePartOperatorName = '$datePart';
export type DatePartOperator = Record<DatePartOperatorName, {}>;

export type ContainsOperatorName = '$contains';
export type ModeOperatorName = '$mode';
export enum ContainsMode {
  SENSITIVE = 'sensitive',
  INSENSITIVE = 'insensitive',
}
export type ContainsOperator =
  | Record<ContainsOperatorName, string>
  | (Record<ContainsOperatorName, string> &
      Record<ModeOperatorName, ContainsMode>);

export type StringPropertyOperators =
  | EqualsOperator<string>
  | NotEqualsOperator<string>
  | InOperator<string>
  | NotInOperator<string>
  | ContainsOperator;

export type NumberPropertyOperators =
  | EqualsOperator<string>
  | NotEqualsOperator<number>
  | InOperator<number>
  | NotInOperator<number>
  | GtOperator<number>
  | GteOperator<number>
  | LtOperator<number>
  | LteOperator<number>;

export type BooleanPropertyOperators =
  | EqualsOperator<number>
  | NotEqualsOperator<boolean>
  | InOperator<boolean>
  | NotInOperator<boolean>;

export type DatePropertyOperators =
  | EqualsOperator<string>
  | NotEqualsOperator<string>
  | GtOperator<string>
  | GteOperator<string>
  | LtOperator<string>
  | LteOperator<string>
  | DatePartOperator;

export type JsonPath = string[];
export type PathOperatorName = '$path';
export type PathOperator = Record<PathOperatorName, JsonPath>;

export type CastOperatorName = '$cast';
export type CastOperatorValue = 'number' | 'float' | 'string' | 'date';
export type CastOperator = Record<CastOperatorName, CastOperatorValue>;

export type JsonPropertyOperators = PathOperator &
  (
    | EqualsOperator<unknown>
    | NotEqualsOperator<unknown>
    | InOperator<unknown>
    | NotInOperator<unknown>
    | ContainsOperator
    | GtOperator<unknown>
    | GteOperator<unknown>
    | LtOperator<unknown>
    | LteOperator<unknown>
    | CastOperator
  );

export type ObjectPropertyOperators<T> = T extends string
  ? StringPropertyOperators
  : T extends number
  ? NumberPropertyOperators
  : T extends boolean
  ? BooleanPropertyOperators
  : T extends Date
  ? DatePropertyOperators
  : T extends JsonProperty
  ? JsonPropertyOperators
  : never;

export type Filters<T extends AnyRecord> = AndOperatorObject<T>;

export type SortOrder = 'ASC' | 'DESC';
export type OrderByValueBody = { $order: SortOrder };
export type OrderByValueJsonBody = OrderByValueBody &
  Record<PathOperatorName, JsonPath>;

export type OrderByValue<T> = T extends string | number | boolean | Date
  ? OrderByValueBody
  : T extends JsonProperty
  ? OrderByValueJsonBody
  : never;

export type OrderBy<T extends AnyRecord> = {
  [K in keyof T]?: OrderByValue<T[K]>;
};

export type FindOneOptions<T extends AnyRecord> = {
  $orderBy?: OrderBy<T>;
};

export type FindOptions<T extends AnyRecord> = FindOneOptions<T> & {
  $limit?: number;
  $offset?: number;
};
