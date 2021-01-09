import * as mongoose from "mongoose";

export class ItemSchema extends mongoose.Schema {
  constructor(options: any) {
    const schema = {
      name: { type: String, required: true },
      rent: { type: Number, required: true },
      price: { type: Number, required: true },
      manufactureDate: { type: Date, required: true },
      actualCost: { type: Number, required: true }
    };
    super(schema, options);
  }
}
