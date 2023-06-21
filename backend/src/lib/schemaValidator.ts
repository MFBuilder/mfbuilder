import Ajv, { JSONSchemaType } from 'ajv';
import { PropertiesSchema } from 'ajv/dist/types/json-schema.js';
import {
  SchemaValidator as ISchemaValidator,
  ValidateFunction,
} from '../domain/interfaces/schema.js';
import {
  ArrayItemsType,
  ArraySchema,
  ArrayType,
  EntitySchema,
  EntityType,
  PrimitiveType,
  PrimitiveTypeSchema,
  Schema,
  SchemaType,
  SchemaValue,
  SchemaValueType,
} from '../domain/models/schema.js';

const ajv = new Ajv();

const GENERAL_SCHEMA_ID = '#schema/general';
const PRIMITIVE_TYPE_SCHEMA_ID = '#schema/primitive';
const ENTITY_SCHEMA_ID = '#schema/entity';
const ARRAY_SCHEMA_ID = '#schema/array';

const primitiveTypeSchema: JSONSchemaType<PrimitiveTypeSchema> = {
  $id: PRIMITIVE_TYPE_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', enum: ['number', 'string', 'boolean', 'integer'] },
  },
  additionalProperties: false,
  required: ['type'],
};

const entitySchema: JSONSchemaType<EntitySchema> = {
  $id: ENTITY_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: 'entity' },
    entity: {
      type: 'object',
      properties: {
        id: { type: 'integer' },
        kind: {
          type: 'string',
          enum: ['profile', 'dataRecord'],
        },
      },
      required: ['id', 'kind'],
    },
  },
  required: ['type', 'entity'],
};

const arraySchema: JSONSchemaType<ArraySchema> = {
  $id: ARRAY_SCHEMA_ID,
  type: 'object',
  properties: {
    type: { type: 'string', const: 'array' },
    items: {
      type: 'object',
      oneOf: [{ $ref: PRIMITIVE_TYPE_SCHEMA_ID }, { $ref: ENTITY_SCHEMA_ID }],
      required: ['type'],
    },
  },
  required: ['type', 'items'],
};

const generalSchema: JSONSchemaType<Schema> = {
  $id: GENERAL_SCHEMA_ID,
  type: 'object',
  patternProperties: {
    '^[\\p{L}\\d. ]+$': {
      type: 'object',
      oneOf: [
        { $ref: PRIMITIVE_TYPE_SCHEMA_ID },
        { $ref: ENTITY_SCHEMA_ID },
        { $ref: ARRAY_SCHEMA_ID },
      ],
      required: ['type'],
    },
  },
  additionalProperties: false,
  minProperties: 1,
  required: [],
};

ajv.addSchema(primitiveTypeSchema, PRIMITIVE_TYPE_SCHEMA_ID);
ajv.addSchema(entitySchema, ENTITY_SCHEMA_ID);
ajv.addSchema(arraySchema, ARRAY_SCHEMA_ID);
ajv.addSchema(generalSchema, GENERAL_SCHEMA_ID);

export class SchemaValidator implements ISchemaValidator {
  private ajv: Ajv;
  constructor() {
    this.ajv = ajv;
  }

  private buildSchemaValueJsonSchema(
    schemaValue: SchemaValue
  ): JSONSchemaType<SchemaValueType> {
    const buildPrimitiveTypeSchema = ({
      type,
    }: PrimitiveTypeSchema): JSONSchemaType<PrimitiveType> => ({
      type,
      nullable: true,
    });

    const buildEntitySchema = (
      entitySchema: EntitySchema
    ): JSONSchemaType<EntityType> => ({
      type: 'integer',
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

    if (schemaValue.type === 'entity') {
      return buildEntitySchema(schemaValue);
    }
    if (schemaValue.type === 'array') {
      return buildArraySchemaValue(schemaValue);
    }
    return buildPrimitiveTypeSchema(schemaValue);
  }

  private buildJsonSchema(
    schema: Schema,
    key: string
  ): JSONSchemaType<SchemaType> {
    const properties = Object.fromEntries(
      Object.entries(schema).map(([key, value]) => [
        key,
        this.buildSchemaValueJsonSchema(value),
      ])
    ) as PropertiesSchema<SchemaType>;

    return {
      $id: key,
      type: 'object',
      properties,
      required: [],
      minProperties: 1,
    };
  }

  validate(schema: unknown): schema is Schema {
    const validate = this.ajv.getSchema<Schema>(
      GENERAL_SCHEMA_ID
    ) as ValidateFunction<Schema>;
    return validate(schema);
  }

  add(schema: Schema, key: string): void {
    this.ajv.addSchema(this.buildJsonSchema(schema, key), key);
  }

  get<T>(key: string): ValidateFunction<T> | undefined {
    return this.ajv.getSchema<T>(key);
  }

  remove(key: string): void {
    this.ajv.removeSchema(key);
  }

  update(schema: Schema, key: string): void {
    this.remove(key);
    this.add(schema, key);
  }
}
