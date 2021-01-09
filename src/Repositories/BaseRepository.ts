import * as mongoose from "mongoose";

export class BaseRepository<T extends mongoose.Document> {
  private model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this.model = schemaModel;
  }

  protected async create(item: any, session?: any): Promise<any> {
    return session
      ? await this.model.create(item, { session })
      : await this.model.create(item);
  }

  protected async insertMany(items: any[], session?: any): Promise<any> {
    return session
      ? await this.model.insertMany(items, { session })
      : await this.model.insertMany(items);
  }

  protected async get(
    { skip, limit, ...rest }: any,
    projections?: object
  ): Promise<any> {
    return await this.model.find(rest, projections).skip(skip).limit(limit);
  }

  protected async getOne(conditions: object): Promise<any> {
    return await this.model.findOne(conditions);
  }

  protected async getById(_id: string): Promise<any> {
    return await this.model.findById(_id);
  }

  protected async update(
    conditions: any,
    options: object,
    session?: any
  ): Promise<any> {
    return session
      ? await this.model.updateOne(conditions, options, { session })
      : await this.model.updateOne(conditions, options);
  }

  protected async delete(_id: string, tenantId: string): Promise<any> {
    return await this.model.remove({ _id: this.toObjectId(_id), tenantId });
  }

  protected async count(conditions: any): Promise<any> {
    return await this.model.countDocuments(conditions).lean();
  }
  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }
}
