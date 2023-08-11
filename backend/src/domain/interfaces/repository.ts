import { SystemContext } from './context.js';
import { Filters, FindOneOptions, FindOptions } from './query.js';
import { AnyRecord, ID, Nullable } from './utils.js';

export interface BaseRepository<
  Ctx extends SystemContext,
  Type extends AnyRecord,
  TypeDelta extends Partial<Type>
> {
  //throws NotFoundError
  get(ctx: Ctx, id: ID): Promise<Type>;
  find(
    ctx: Ctx,
    filters: Filters<Type>,
    options?: FindOptions<Type>
  ): Promise<Type[]>;
  findOne(
    ctx: Ctx,
    filters: Filters<Type>,
    options?: FindOneOptions<Type>
  ): Promise<Nullable<Type>>;
  create(ctx: Ctx, data: Type): Promise<ID>;
  createMultiple(ctx: Ctx, data: Type[]): Promise<ID[]>;
  update(ctx: Ctx, id: ID, delta: TypeDelta): Promise<boolean>;
  updateWhere(
    ctx: Ctx,
    delta: TypeDelta,
    filters: Filters<Type>
  ): Promise<boolean>;
  delete(ctx: Ctx, id: ID): Promise<boolean>;
  deleteWhere(ctx: Ctx, filters: Filters<Type>): Promise<boolean>;
}
