export type PrimitiveType = string | number | boolean | null;
export type PrimitiveTypeValue = 'string' | 'number' | 'integer' | 'boolean';
export type PrimitiveTypeSchema = { type: PrimitiveTypeValue };

export type EntityType = number;
export type EntityKind = 'profile' | 'dataRecord';
export type EntitySchema = {
  type: 'entity';
  entity: { id: number; kind: EntityKind };
};

export type ArrayItemsType = PrimitiveType | EntityType;
export type ArrayItemsSchema = PrimitiveTypeSchema | EntitySchema;

export type ArrayType = ArrayItemsType[];
export type ArraySchema = {
  type: 'array';
  items: ArrayItemsSchema;
};

export type SchemaKey = string;

export type SchemaValueType = PrimitiveType | EntityType | ArrayType;
export type SchemaValue = PrimitiveTypeSchema | EntitySchema | ArraySchema;

export type SchemaType = Record<SchemaKey, SchemaValueType>;
export type Schema = Record<SchemaKey, SchemaValue>;
