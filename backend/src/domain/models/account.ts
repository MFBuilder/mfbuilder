import { ID } from '../interfaces/utils';
import { Profile } from './profile';

export type Account = {
  id: ID;
  profileId: Profile['id'];
};
