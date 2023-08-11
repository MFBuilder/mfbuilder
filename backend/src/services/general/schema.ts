import { ProfileSchemaEntity } from '../../domain/entities/profileSchema';
import { RecordSchemaEntity } from '../../domain/entities/recordSchema';
import {
  ObjectValueType,
  Schema,
  SchemaValue,
  ValueSchemaType,
} from '../../domain/entities/schema';
import { WorkspaceEntity } from '../../domain/entities/workspace';
import { SystemContext } from '../../domain/interfaces/context';
import { ProfileSchemaRepository } from '../../domain/interfaces/repositories/profileSchema';
import { RecordSchemaRepository } from '../../domain/interfaces/repositories/recordSchema';
import { SchemaManager } from '../../domain/interfaces/schemaManager';
import { AnyRecord } from '../../domain/interfaces/utils';

export class SchemaService {
  private schemaManager: SchemaManager;
  private profileSchemaRepository: ProfileSchemaRepository;
  private recordSchemaRepository: RecordSchemaRepository;

  constructor({
    schemaManager,
    profileSchemaRepository,
    recordSchemaRepository,
  }: {
    schemaManager: SchemaManager;
    profileSchemaRepository: ProfileSchemaRepository;
    recordSchemaRepository: RecordSchemaRepository;
  }) {
    this.schemaManager = schemaManager;
    this.profileSchemaRepository = profileSchemaRepository;
    this.recordSchemaRepository = recordSchemaRepository;
  }

  add(key: string, schema: Schema) {
    return this.schemaManager.add(key, schema);
  }
  remove(key: string) {
    return this.schemaManager.remove(key);
  }
  update(key: string, schema: Schema) {
    this.schemaManager.remove(key);
    return this.schemaManager.add(key, schema);
  }

  getValidator<T>(key: string) {
    return this.schemaManager.getValidator(key);
  }

  getPartialValidator<T>(key: string) {
    return this.schemaManager.getPartialValidator(key);
  }

  // TODO: Add errors
  async validate(
    ctx: SystemContext,
    workspaceId: WorkspaceEntity['id'],
    schema: AnyRecord
  ) {
    const isSchemaStructureValid = this.schemaManager.validate(schema);

    if (!isSchemaStructureValid) return false;

    const entityIds = this.aggregateEntityIds(schema);

    const [isProfileEntityValid, isRecordProfileEntityValid] =
      await Promise.all([
        this.validateProfileSchema(ctx, entityIds.profile, workspaceId),
        this.validateRecordSchemas(ctx, entityIds.record, workspaceId),
      ]);

    return isProfileEntityValid && isRecordProfileEntityValid;
  }

  buildDefaultObject(schema: Schema) {
    return Object.fromEntries(
      Object.entries(schema).map(([key, value]) => [
        key,
        this.getDefaultValue(value),
      ])
    );
  }

  private getDefaultValueByType(type: SchemaValue['type']): ObjectValueType {
    switch (type) {
      case 'array':
        return [];
      default:
        return null;
    }
  }

  private getDefaultValue(schemaValue: SchemaValue): ObjectValueType {
    return schemaValue.default ?? this.getDefaultValueByType(schemaValue.type);
  }

  private async validateProfileSchema(
    ctx: SystemContext,
    profileSchemaIds: ProfileSchemaEntity['id'][],
    workspaceId: WorkspaceEntity['id']
  ) {
    if (profileSchemaIds.length === 0) return true;

    if (new Set(profileSchemaIds).size !== 0) {
      return false;
    }

    const profileSchemaId = await this.profileSchemaRepository
      .getByWorkspaceId(ctx, workspaceId)
      .then((s) => s.id)
      .catch(() => null);

    return profileSchemaId === profileSchemaIds[0];
  }

  private async validateRecordSchemas(
    ctx: SystemContext,
    recordSchemaIds: RecordSchemaEntity['id'][],
    workspaceId: WorkspaceEntity['id']
  ) {
    if (recordSchemaIds.length === 0) return true;

    const foundRecordSchemaIdsSet = await this.recordSchemaRepository
      .find(ctx, {
        id: { $in: recordSchemaIds },
        workspaceId: { $equals: workspaceId },
      })
      .then((schemes) => new Set(schemes.map((s) => s.id)));

    const recordSchemaIdsSet = new Set(recordSchemaIds);

    return recordSchemaIdsSet.size === foundRecordSchemaIdsSet.size;
  }

  private aggregateEntityIds(schema: Schema) {
    const entityIds = {
      profile: new Array<ProfileSchemaEntity['id']>(),
      record: new Array<ProfileSchemaEntity['id']>(),
    };

    for (const schemaValue of Object.values(schema)) {
      if (schemaValue.type === ValueSchemaType.ENTITY) {
        const entitySchema = schemaValue.entity;
        entityIds[entitySchema.kind].push(entitySchema.id);
      }
      if (
        schemaValue.type === ValueSchemaType.ARRAY &&
        schemaValue.items.type === ValueSchemaType.ENTITY
      ) {
        const entitySchema = schemaValue.items.entity;
        entityIds[entitySchema.kind].push(entitySchema.id);
      }
    }

    return entityIds;
  }
}
