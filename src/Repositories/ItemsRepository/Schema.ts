import * as mongoose from "mongoose";

export class ItemSchema extends mongoose.Schema {
  constructor(options: any) {
    const schema = {
      name: { type: String, required: true }, // name
      rent: { type: Number, required: true }, // rent price
      rented: {
        to: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
      }, // is given on rent or not
      price: { type: Number, required: true }, // it's current price
      manufactureDate: { type: Date, required: true }, // manufacturing Date
      actualCost: { type: Number, required: true }, // items market price
    };
    super(schema, options);
  }
}
