import { ID } from '../interfaces/utils.js';
import { ProfileEntity } from './profile.js';

export type AccountEntity = {
  id: ID;
  profileId: ProfileEntity['id'];
};
