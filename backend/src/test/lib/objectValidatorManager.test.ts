import { AnyRecord } from 'dns';
import { test } from 'tap';
import { Schema } from '../../domain/entities/schema.js';
import { SchemaManager } from '../../lib/schemaManager.js';

const simpleSchema: Schema = {
  a: {
    type: 'array',
    items: { type: 'entity', entity: { id: '1', kind: 'profile' } },
  },
  b: {
    type: 'string',
  },
};

const simpleSchemaValidData = {
  a: ['1'],
  b: 'b',
};

const simpleSchemaPartialData = {
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
  const objectValidatorManager = new SchemaManager();

  t.ok(
    objectValidatorManager.validate(simpleSchema),
    'check validation of correct schema'
  );

  t.notOk(
    objectValidatorManager.validate(invalidSchema),
    'check validation of invalid schema'
  );
});

test('Check add/remove/get methods', async (t) => {
  const objectValidatorManager = new SchemaManager();
  const key = 'methods/simpleSchema';
  objectValidatorManager.add(key, simpleSchema);

  t.type(
    objectValidatorManager.getValidator(key),
    'function',
    'check is "getValidator" return compiled function'
  );

  t.type(
    objectValidatorManager.getPartialValidator(key),
    'function',
    'check is "getValidator" return compiled function'
  );

  objectValidatorManager.remove(key);

  t.equal(
    objectValidatorManager.getValidator(key),
    undefined,
    'check is "remove" remove compiled function'
  );

  objectValidatorManager.add(key, simpleSchema);
  const validate = objectValidatorManager.getValidator(key);

  objectValidatorManager.update(key, simpleSchema);

  t.not(
    objectValidatorManager.getValidator(key),
    validate,
    'check is "update" recompile function'
  );
});

test('Check data validation', async (t) => {
  const objectValidatorManager = new SchemaManager();
  const key = 'data/simpleSchema';
  objectValidatorManager.add(key, simpleSchema);
  const validate = objectValidatorManager.getValidator<AnyRecord>(key);
  const partialValidate =
    objectValidatorManager.getPartialValidator<AnyRecord>(key);

  if (!validate) {
    throw new Error('Validate function should exists');
  }

  t.ok(
    validate(simpleSchemaValidData),
    'check is validation works with valid data'
  );

  if (!partialValidate) {
    throw new Error('Partial validate function should exists');
  }

  t.ok(
    partialValidate(simpleSchemaPartialData),
    'check is partial validation works with valid partial data'
  );

  t.notOk(
    validate(simpleSchemaInvalidData),
    'check is validation works with invalid data'
  );
});
