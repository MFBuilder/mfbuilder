import Ajv, { JSONSchemaType } from 'ajv';
import { PropertiesSchema } from 'ajv/dist/types/json-schema.js';
import {
  ArrayItemsType,
  ArraySchema,
  ArrayType,
  BooleanTypeArraySchema,
  BooleanTypeSchema,
  EntityKind,
  EntityType,
  EntityTypeArraySchema,
  EntityTypeSchema,
  IntegerTypeArraySchema,
  IntegerTypeSchema,
  NumberTypeArraySchema,
  NumberTypeSchema,
  ObjectType,
  ObjectValueType,
  PrimitiveType,
  PrimitiveTypeSchema,
  Schema,
  SchemaValue,
  StringTypeArraySchema,
  StringTypeSchema,
  ValueSchemaType,
} from '../domain/entities/schema.js';
import {
  SchemaManager as ISchemaManager,
  ValidateFunction,
} from '../domain/interfaces/schemaManager.js';

const GENERAL_SCHEMA_ID = '#schema/general';
const STRING_TYPE_SCHEMA_ID = '#schema/string';
const NUMBER_TYPE_SCHEMA_ID = '#schema/number';
const INTEGER_TYPE_SCHEMA_ID = '#schema/integer';
const BOOLEAN_TYPE_SCHEMA_ID = '#schema/boolean';

const ENTITY_TYPE_SCHEMA_ID = '#schema/entity';
const ARRAY_TYPE_SCHEMA_ID = '#schema/array';

const stringTypeSchema: JSONSchemaType<StringTypeSchema> = {
  $id: STRING_TYPE_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.STRING },
    default: { type: 'string', nullable: true },
  },
  additionalProperties: false,
  required: ['type'],
};

const numberTypeSchema: JSONSchemaType<NumberTypeSchema> = {
  $id: NUMBER_TYPE_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.NUMBER },
    default: { type: 'number', nullable: true },
  },
  additionalProperties: false,
  required: ['type'],
};

const integerTypeSchema: JSONSchemaType<IntegerTypeSchema> = {
  $id: INTEGER_TYPE_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.INTEGER },
    default: { type: 'integer', nullable: true },
  },
  additionalProperties: false,
  required: ['type'],
};

const booleanTypeSchema: JSONSchemaType<BooleanTypeSchema> = {
  $id: BOOLEAN_TYPE_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.BOOLEAN },
    default: { type: 'boolean', nullable: true },
  },
  additionalProperties: false,
  required: ['type'],
};

const entityTypeSchema: JSONSchemaType<EntityTypeSchema> = {
  $id: ENTITY_TYPE_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.ENTITY },
    entity: {
      type: 'object',
      properties: {
        id: { type: 'string' },
        kind: {
          type: 'string',
          enum: [EntityKind.PROFILE, EntityKind.RECORD],
        },
      },
      required: ['id', 'kind'],
    },
    default: { type: 'string', nullable: true },
  },
  required: ['type', 'entity'],
};

const STRING_TYPE_ARRAY_SCHEMA_ID = '#schema/stringArray';
const INTEGER_TYPE_ARRAY_SCHEMA_ID = '#schema/integerArray';
const NUMBER_TYPE_ARRAY_SCHEMA_ID = '#schema/numberArray';
const BOOLEAN_TYPE_ARRAY_SCHEMA_ID = '#schema/booleanArray';
const ENTITY_TYPE_ARRAY_SCHEMA_ID = '#schema/entityArray';

const stringTypeArraySchema = {
  $id: STRING_TYPE_ARRAY_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.ARRAY },
    items: { $ref: 'STRING_TYPE_SCHEMA_ID' },
    default: {
      type: 'array',
      items: { $ref: `${STRING_TYPE_SCHEMA_ID}/default` },
    },
  },
  required: ['items', 'type'],
} as unknown as JSONSchemaType<StringTypeArraySchema>; // cast because of array items $ref problem ;

const integerTypeArraySchema = {
  $id: INTEGER_TYPE_ARRAY_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.ARRAY },
    items: { $ref: 'INTEGER_TYPE_SCHEMA_ID' },
    default: {
      type: 'array',
      items: { $ref: `${INTEGER_TYPE_SCHEMA_ID}/default` },
    },
  },
  required: ['items', 'type'],
} as unknown as JSONSchemaType<IntegerTypeArraySchema>; // cast because of array items $ref problem ;

const numberTypeArraySchema = {
  $id: NUMBER_TYPE_ARRAY_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.ARRAY },
    items: { $ref: 'NUMBER_TYPE_SCHEMA_ID' },
    default: {
      type: 'array',
      items: { $ref: `${NUMBER_TYPE_SCHEMA_ID}/default` },
    },
  },
  required: ['items', 'type'],
} as unknown as JSONSchemaType<NumberTypeArraySchema>; // cast because of array items $ref problem ;

const booleanTypeArraySchema = {
  $id: BOOLEAN_TYPE_ARRAY_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.ARRAY },
    items: { $ref: 'BOOLEAN_TYPE_SCHEMA_ID' },
    default: {
      type: 'array',
      items: { $ref: `${BOOLEAN_TYPE_SCHEMA_ID}/default` },
    },
  },
  required: ['items', 'type'],
} as unknown as JSONSchemaType<BooleanTypeArraySchema>; // cast because of array items $ref problem ;

const entityTypeArraySchema = {
  $id: ENTITY_TYPE_ARRAY_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: ValueSchemaType.ARRAY },
    items: { $ref: 'ENTITY_TYPE_SCHEMA_ID' },
    default: {
      type: 'array',
      items: { $ref: `${ENTITY_TYPE_SCHEMA_ID}/default` },
    },
  },
  required: ['items', 'type'],
} as unknown as JSONSchemaType<EntityTypeArraySchema>; // cast because of array items $ref problem ;

const arrayTypeSchema: JSONSchemaType<ArraySchema> = {
  $id: ARRAY_TYPE_SCHEMA_ID,
  type: 'object',
  oneOf: [
    { $ref: STRING_TYPE_SCHEMA_ID },
    { $ref: INTEGER_TYPE_SCHEMA_ID },
    { $ref: NUMBER_TYPE_SCHEMA_ID },
    { $ref: BOOLEAN_TYPE_SCHEMA_ID },
    { $ref: ENTITY_TYPE_SCHEMA_ID },
  ],
  required: ['type', 'items'],
};

const generalSchema: JSONSchemaType<Schema> = {
  $id: GENERAL_SCHEMA_ID,
  type: 'object',
  patternProperties: {
    '^[\\p{L}\\d. ]+$': {
      type: 'object',
      oneOf: [
        { $ref: STRING_TYPE_SCHEMA_ID },
        { $ref: INTEGER_TYPE_SCHEMA_ID },
        { $ref: NUMBER_TYPE_SCHEMA_ID },
        { $ref: BOOLEAN_TYPE_SCHEMA_ID },
        { $ref: ENTITY_TYPE_SCHEMA_ID },
        { $ref: ARRAY_TYPE_SCHEMA_ID },
      ],
      required: ['type'],
    },
  },
  additionalProperties: false,
  required: [],
};

const ajv = new Ajv({
  schemas: [
    stringTypeSchema,
    numberTypeSchema,
    integerTypeSchema,
    booleanTypeSchema,
    entityTypeSchema,
    stringTypeArraySchema,
    numberTypeArraySchema,
    integerTypeArraySchema,
    booleanTypeArraySchema,
    entityTypeArraySchema,
    arrayTypeSchema,
    generalSchema,
  ],
});

/*
ajv.addSchema(stringTypeSchema, STRING_TYPE_SCHEMA_ID);
ajv.addSchema(numberTypeSchema, NUMBER_TYPE_SCHEMA_ID);
ajv.addSchema(integerTypeSchema, INTEGER_TYPE_SCHEMA_ID);
ajv.addSchema(booleanTypeSchema, BOOLEAN_TYPE_SCHEMA_ID);
ajv.addSchema(entityTypeSchema, ENTITY_TYPE_SCHEMA_ID);
ajv.addSchema(stringTypeArraySchema, STRING_TYPE_ARRAY_SCHEMA_ID);
ajv.addSchema(numberTypeArraySchema, NUMBER_TYPE_ARRAY_SCHEMA_ID);
ajv.addSchema(integerTypeArraySchema, INTEGER_TYPE_ARRAY_SCHEMA_ID);
ajv.addSchema(booleanTypeArraySchema, BOOLEAN_TYPE_ARRAY_SCHEMA_ID);
ajv.addSchema(entityTypeArraySchema, ENTITY_TYPE_ARRAY_SCHEMA_ID);
ajv.addSchema(arrayTypeSchema, ARRAY_TYPE_SCHEMA_ID);
ajv.addSchema(generalSchema, GENERAL_SCHEMA_ID);
*/

export class SchemaManager implements ISchemaManager {
  private ajv: Ajv;
  constructor() {
    this.ajv = ajv;
  }

  validate(schema: unknown): schema is Schema {
    const validate = this.ajv.getSchema<Schema>(
      GENERAL_SCHEMA_ID
    ) as ValidateFunction<Schema>;
    return validate(schema);
  }

  add(key: string, schema: Schema): void {
    this.ajv.addSchema(
      this.buildJsonSchema(key, schema),
      this.buildSchemaKey(key)
    );
    this.ajv.addSchema(
      this.buildJsonSchema(key, schema, true),
      this.buildPartialSchemaKey(key)
    );
  }

  getValidator<T>(key: string): ValidateFunction<T> | null {
    return this.ajv.getSchema<T>(this.buildSchemaKey(key)) ?? null;
  }

  getPartialValidator<T>(key: string): ValidateFunction<T> | null {
    return this.ajv.getSchema<T>(this.buildPartialSchemaKey(key)) ?? null;
  }

  remove(key: string): void {
    this.ajv.removeSchema(this.buildSchemaKey(key));
    this.ajv.removeSchema(this.buildPartialSchemaKey(key));
  }

  private buildSchemaKey(key: string) {
    return `#public/${key}`;
  }

  private buildPartialSchemaKey(key: string) {
    return `#public/${key}/partial`;
  }

  private buildSchemaValueJsonSchema(
    schemaValue: SchemaValue
  ): JSONSchemaType<ObjectValueType> {
    const buildPrimitiveTypeSchema = ({
      type,
    }: PrimitiveTypeSchema): JSONSchemaType<PrimitiveType> => ({
      type,
      nullable: true,
    });

    const buildEntitySchema = (
      entitySchema: EntityTypeSchema
    ): JSONSchemaType<EntityType> => ({
      type: 'string',
      nullable: true,
    });

    const buildArraySchemaValue = (
      arraySchema: ArraySchema
    ): JSONSchemaType<ArrayType> => ({
      type: 'array',
      items: this.buildSchemaValueJsonSchema(
        arraySchema.items
      ) as JSONSchemaType<ArrayItemsType>,
      nullable: true,
    });

    if (schemaValue.type === ValueSchemaType.ENTITY) {
      return buildEntitySchema(schemaValue);
    }
    if (schemaValue.type === 'array') {
      return buildArraySchemaValue(schemaValue);
    }
    return buildPrimitiveTypeSchema(schemaValue);
  }

  private buildJsonSchema(
    key: string,
    schema: Schema,
    partial = false
  ): JSONSchemaType<ObjectType> {
    const properties = Object.fromEntries(
      Object.entries(schema).map(([key, value]) => [
        key,
        this.buildSchemaValueJsonSchema(value),
      ])
    ) as PropertiesSchema<ObjectType>;

    const required = partial ? Object.keys(schema) : [];

    return {
      $id: key,
      type: 'object',
      properties,
      required,
      minProperties: 1,
    };
  }
}
