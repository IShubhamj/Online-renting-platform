import { BaseRepository } from "../BaseRepository";
import { IUserModel } from "./IModel";
import { userModel } from "./Model";

export class UserRepository extends BaseRepository<IUserModel> {
  constructor() {
    super(userModel);
  }

  public async create(options: any, session?: any): Promise<IUserModel> {
    return await super.insertMany(options, session);
  }
  public async update(
    conditions: any,
    options: any,
    session?: any
  ): Promise<IUserModel> {
    return await super.update(conditions, options);
  }
  public async delete({ _id, tenantId }: any): Promise<IUserModel> {
    return await super.delete(_id, tenantId);
  }
}
