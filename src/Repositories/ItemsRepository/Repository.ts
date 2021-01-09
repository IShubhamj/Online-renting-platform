import { BaseRepository } from "../BaseRepository";
import { IItemModel } from "./IModel";
import { itemModel } from "./Model";

export class ItemRepository extends BaseRepository<IItemModel> {
  constructor() {
    super(itemModel);
  }

  public async create(options: any[], session?: any): Promise<IItemModel> {
    return await super.insertMany(options, session);
  }
  public async update(
    conditions: any,
    options: any,
    session?: any
  ): Promise<IItemModel> {
    return await super.update(conditions, options);
  }
  public async delete({ _id }: any): Promise<IItemModel> {
    return await super.delete(_id);
  }

  public async findOne(_id: string): Promise<IItemModel> {
    return await super.getById(_id);
  }

  public async count(): Promise<IItemModel> {
    return await super.count({});
  }
}
