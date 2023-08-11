import { ProfileEntity } from '../../entities/profile.js';
import { SystemContext } from '../context.js';
import { Filters } from '../query.js';
import { BaseRepository } from '../repository.js';

export { ProfileEntity } from '../../entities/profile.js';
export type ProfileEntityDelta = Partial<Omit<ProfileEntity, 'id'>>;

export type ProfileRepository<C extends SystemContext = SystemContext> =
  BaseRepository<C, ProfileEntity, ProfileEntityDelta> & {
    updateData(
      ctx: C,
      id: ProfileEntity['id'],
      delta: Partial<ProfileEntity['data']>
    ): Promise<boolean>;
    updateDataWhere(
      ctx: C,
      filters: Filters<ProfileEntity>,
      delta: Partial<ProfileEntity['data']>
    ): Promise<boolean>;
    deleteDataFields(
      ctx: C,
      filters: Filters<ProfileEntity>,
      fields: (keyof ProfileEntity['data'])[]
    ): Promise<boolean>;
  };
