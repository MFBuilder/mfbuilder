import { AnyRecord } from 'dns';
import { test } from 'tap';
import { Schema } from '../../domain/models/schema.js';
import { SchemaValidator } from '../../lib/schemaValidator.js';

const simpleSchema: Schema = {
  a: {
    type: 'array',
    items: { type: 'entity', entity: { id: 1, kind: 'account' } },
  },
  b: {
    type: 'string',
  },
};

const simpleSchemaValidData = {
  a: [1],
  b: 'b',
};

const simpleSchemaInvalidData = {
  a: ['a', 1.2323],
  b: 'b',
};

const invalidSchema = {
  a: {
    type: 'array',
    items: { type: 'entity', entity: { id: 'd', kind: 'account' } },
  },
  b: {
    type: 'string',
  },
};

test('Check validation method', async (t) => {
  const schemaValidator = new SchemaValidator();

  t.ok(
    schemaValidator.validate(simpleSchema),
    'check validation of correct schema'
  );

  t.notOk(
    schemaValidator.validate(invalidSchema),
    'check validation of invalid schema'
  );
});

test('Check add/remove/get methods', async (t) => {
  const schemaValidator = new SchemaValidator();
  const key = 'methods/simpleSchema';
  schemaValidator.add(simpleSchema, key);

  t.type(
    schemaValidator.get(key),
    'function',
    'check is "get" return compiled function'
  );

  schemaValidator.remove(key);

  t.equal(
    schemaValidator.get(key),
    undefined,
    'check is "remove" remove compiled function'
  );

  schemaValidator.add(simpleSchema, key);
  const validate = schemaValidator.get(key);

  schemaValidator.update(simpleSchema, key);

  t.not(
    schemaValidator.get(key),
    validate,
    'check is "update" recompile function'
  );
});

test('Check data validation', async (t) => {
  const schemaValidator = new SchemaValidator();
  const key = 'data/simpleSchema';
  schemaValidator.add(simpleSchema, key);
  const validate = schemaValidator.get<AnyRecord>(key);
  if (!validate) {
    throw new Error('Validate function should exists');
  }

  t.ok(
    validate(simpleSchemaValidData),
    'check is validation works with valid data'
  );

  t.notOk(
    validate(simpleSchemaInvalidData),
    'check is validation works with invalid data'
  );
});
