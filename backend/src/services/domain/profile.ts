import { ProfileEntity } from '../../domain/entities/profile.js';
import { ProfileSchemaEntity } from '../../domain/entities/profileSchema.js';
import { Schema } from '../../domain/entities/schema.js';
import { WorkspaceEntity } from '../../domain/entities/workspace.js';
import { SystemContext } from '../../domain/interfaces/context.js';
import { IdGenerator } from '../../domain/interfaces/idGenerator.js';
import { ProfileRepository } from '../../domain/interfaces/repositories/profile.js';
import { ProfileSchemaRepository } from '../../domain/interfaces/repositories/profileSchema.js';
import { SchemaService } from '../general/schema.js';

export class ProfileService {
  private profileRepository: ProfileRepository;
  private profileSchemaRepository: ProfileSchemaRepository;
  private schemaService: SchemaService;
  private idGenerator: IdGenerator;

  constructor({
    profileRepository,
    profileSchemaRepository,
    idGenerator,
    schemaService,
  }: {
    profileRepository: ProfileRepository;
    profileSchemaRepository: ProfileSchemaRepository;
    idGenerator: IdGenerator;
    schemaService: SchemaService;
  }) {
    this.profileRepository = profileRepository;
    this.profileSchemaRepository = profileSchemaRepository;
    this.idGenerator = idGenerator;
    this.schemaService = schemaService;
  }

  async create(
    ctx: SystemContext,
    schemaId: ProfileSchemaEntity['id'],
    data: ProfileEntity['data'],
    partial = false
  ) {
    if (partial) {
      const defaultObject = this.buildDefaultObject(ctx, schemaId);
      data = { ...defaultObject, ...data };
    }

    const isValid = await this.validate(ctx, schemaId, data);

    if (!isValid) {
      // TODO: Add custom validation error
      throw new Error();
    }

    const profileId = this.idGenerator.generate();

    await this.profileRepository.create(ctx, {
      id: profileId,
      schemaId,
      data,
    });

    return profileId;
  }

  async createByWorkspace(
    ctx: SystemContext,
    workspaceId: WorkspaceEntity['id'],
    data: ProfileEntity['data'],
    partial = false
  ) {
    const schema = await this.profileSchemaRepository.getByWorkspaceId(
      ctx,
      workspaceId
    );

    return await this.create(ctx, schema.id, data, partial);
  }

  async get(ctx: SystemContext, id: ProfileEntity['id']) {
    const profile = this.profileRepository.get(ctx, id);
    return profile;
  }

  async update(
    ctx: SystemContext,
    id: ProfileEntity['id'],
    delta: Partial<ProfileEntity['data']>
  ) {
    return await this.profileRepository.updateData(ctx, id, delta);
  }

  async delete(ctx: SystemContext, id: ProfileEntity['id']) {
    return this.profileRepository.delete(ctx, id);
  }

  async createSchema(
    ctx: SystemContext,
    workspaceId: WorkspaceEntity['id'],
    schema: Schema
  ) {
    const isValid = await this.schemaService.validate(ctx, workspaceId, schema);
    if (!isValid) {
      // TODO: Add custom validation error
      throw new Error();
    }

    const schemaId = this.idGenerator.generate();
    await this.profileSchemaRepository.create(ctx, {
      id: schemaId,
      workspaceId,
      schema,
    });

    return schemaId;
  }

  async addSchemaFields(
    ctx: SystemContext,
    schemaId: ProfileSchemaEntity['id'],
    delta: ProfileSchemaEntity['schema']
  ) {
    await ctx.withTransaction(async (ctx) => {
      const schema = await this.profileSchemaRepository.get(ctx, schemaId);
      const schemaFields = new Set(Object.keys(schema.schema));
      const deltaFields = new Set(Object.keys(schema.schema));

      for (const deltaField of deltaFields) {
        if (!schemaFields.has(deltaField)) continue;
        // TODO: Add custom validation error
        throw new Error();
      }

      const isValid = await this.schemaService.validate(
        ctx,
        schema.workspaceId,
        delta
      );

      if (!isValid) {
        // TODO: Add custom validation error
        throw new Error();
      }

      const updatedSchema = { ...delta, ...schema.schema };
      await this.profileSchemaRepository.update(ctx, schemaId, {
        schema: updatedSchema,
      });

      this.schemaService.update(this.buildSchemaKey(schemaId), updatedSchema);

      const profileDataDelta = this.schemaService.buildDefaultObject(delta);

      await this.profileRepository.updateDataWhere(
        ctx,
        { schemaId: { $equals: schemaId } },
        profileDataDelta
      );
    });
  }

  async deleteSchemaFields(
    ctx: SystemContext,
    schemaId: ProfileSchemaEntity['id'],
    fields: (keyof ProfileSchemaEntity['schema'])[]
  ) {
    if (fields.length === 0) return;

    await ctx.withTransaction(async (ctx) => {
      const schema = await this.profileSchemaRepository.get(ctx, schemaId);
      const updatedSchema = Object.fromEntries(
        Object.entries(schema.schema).filter(([field]) =>
          fields.includes(field)
        )
      );

      await this.profileSchemaRepository.update(ctx, schemaId, {
        schema: updatedSchema,
      });

      await this.profileRepository.deleteDataFields(
        ctx,
        { schemaId: { $equals: schemaId } },
        fields
      );

      this.schemaService.update(this.buildSchemaKey(schemaId), updatedSchema);
    });
  }

  async deleteSchema(ctx: SystemContext, schemaId: ProfileSchemaEntity['id']) {
    await ctx.withTransaction(async (ctx) => {
      await this.profileRepository.deleteWhere(ctx, {
        schemaId: { $equals: schemaId },
      });
      await this.profileSchemaRepository.delete(ctx, schemaId);
    });
    this.schemaService.remove(this.buildSchemaKey(schemaId));
  }

  async validate(
    ctx: SystemContext,
    schemaId: ProfileSchemaEntity['id'],
    data: ProfileEntity['data']
  ) {
    const schemaKey = this.buildSchemaKey(schemaId);
    let validate = this.schemaService.getValidator(schemaKey);

    if (!validate) {
      const schema = await this.profileSchemaRepository.get(ctx, schemaId);

      this.schemaService.add(schemaKey, schema.schema);

      validate = this.schemaService.getValidator(schemaKey)!;
    }

    return validate(data);
  }

  async partialValidate(
    ctx: SystemContext,
    schemaId: ProfileSchemaEntity['id'],
    data: ProfileEntity['data']
  ) {
    const schemaKey = this.buildSchemaKey(schemaId);
    let validate = this.schemaService.getPartialValidator(schemaKey);

    if (!validate) {
      const schema = await this.profileSchemaRepository.get(ctx, schemaId);

      this.schemaService.add(schemaKey, schema.schema);

      validate = this.schemaService.getPartialValidator(schemaKey)!;
    }

    return validate(data);
  }

  async buildDefaultObject(
    ctx: SystemContext,
    schemaId: ProfileSchemaEntity['id']
  ) {
    const schema = await this.profileSchemaRepository.get(ctx, schemaId);
    return this.schemaService.buildDefaultObject(schema.schema);
  }

  private buildSchemaKey(schemaId: ProfileSchemaEntity['id']) {
    return `profile/${schemaId}`;
  }
}
