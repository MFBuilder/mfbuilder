import { ProfileSchemaEntity } from '../../entities/profileSchema.js';
import { WorkspaceEntity } from '../../entities/workspace.js';
import { SystemContext } from '../context.js';
import { BaseRepository } from '../repository.js';

export type ProfileSchemaEntityDelta = Partial<Omit<ProfileSchemaEntity, 'id'>>;

export type ProfileSchemaRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, ProfileSchemaEntity, ProfileSchemaEntityDelta> & {
    // throws NotFoundError
    getByWorkspaceId: (
      ctx: SystemContext,
      workspaceId: WorkspaceEntity['id']
    ) => Promise<ProfileSchemaEntity>;
  };
