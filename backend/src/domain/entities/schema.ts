import { ID, Nullable } from '../interfaces/utils.js';

export enum ValueSchemaType {
  STRING = 'string',
  NUMBER = 'number',
  INTEGER = 'integer',
  BOOLEAN = 'boolean',
  ENTITY = 'entity',
  ARRAY = 'array',
}

export type StringType = string;
export type StringTypeSchema = {
  type: ValueSchemaType.STRING;
  default?: StringType;
};

export type NumberType = number;
export type NumberTypeSchema = {
  type: ValueSchemaType.NUMBER;
  default?: NumberType;
};

export type IntegerType = number;
export type IntegerTypeSchema = {
  type: ValueSchemaType.INTEGER;
  default?: IntegerType;
};

export type BooleanType = boolean;
export type BooleanTypeSchema = {
  type: ValueSchemaType.BOOLEAN;
  default?: BooleanType;
};

export type PrimitiveType = StringType | NumberType | IntegerType | BooleanType;

export type PrimitiveTypeSchema =
  | StringTypeSchema
  | NumberTypeSchema
  | IntegerTypeSchema
  | BooleanTypeSchema;

export type EntityType = ID;
export enum EntityKind {
  PROFILE = 'profile',
  RECORD = 'record',
}
export type EntityTypeSchema = {
  type: ValueSchemaType.ENTITY;
  entity: { id: ID; kind: EntityKind };
  default?: ID;
};

export type GeneralArraySchema<I extends { default?: unknown }> = {
  type: ValueSchemaType.ARRAY;
  items: I;
  default?: NonNullable<I['default']>[];
};

export type StringTypeArraySchema = GeneralArraySchema<StringTypeSchema>;
export type NumberTypeArraySchema = GeneralArraySchema<NumberTypeSchema>;
export type IntegerTypeArraySchema = GeneralArraySchema<IntegerTypeSchema>;
export type BooleanTypeArraySchema = GeneralArraySchema<BooleanTypeSchema>;
export type EntityTypeArraySchema = GeneralArraySchema<EntityTypeSchema>;

export type ArraySchema =
  | StringTypeArraySchema
  | NumberTypeArraySchema
  | IntegerTypeArraySchema
  | BooleanTypeArraySchema
  | EntityTypeArraySchema;

export type ArrayType = NonNullable<ArraySchema['default']>;
export type ArrayItemsType = ArrayType[];

export type SchemaKey = string;

export type ObjectValueType = Nullable<PrimitiveType | EntityType> | ArrayType;
export type SchemaValue = PrimitiveTypeSchema | EntityTypeSchema | ArraySchema;

export type SS = Exclude<SchemaValue, { type: ValueSchemaType.ARRAY }>;

export type ObjectType = Record<SchemaKey, ObjectValueType>;
export type Schema = Record<SchemaKey, SchemaValue>;
