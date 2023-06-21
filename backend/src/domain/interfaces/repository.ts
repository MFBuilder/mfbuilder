import { DbContext } from './context.js';
import { DbClient } from './dbClient.js';
import { ID } from './utils.js';

export interface BaseRepository<
  Ctx extends DbContext<DbClient<unknown>>,
  Type,
  TypeBase,
  TypeDelta
> {
  get(ctx: Ctx, id: ID): Promise<Type>;
  find(ctx: Ctx, filters: unknown): Promise<Type[]>;
  create(ctx: Ctx, data: TypeBase): Promise<ID>;
  update(ctx: Ctx, id: ID, delta: TypeDelta): Promise<boolean>;
  delete(ctx: Ctx, id: ID): Promise<boolean>;
}
