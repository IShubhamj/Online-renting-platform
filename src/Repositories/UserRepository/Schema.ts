import * as mongoose from "mongoose";

export class UserSchema extends mongoose.Schema {
  constructor(options: any) {
    const schema = {
      name: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      items: { type: mongoose.Schema.Types.ObjectId, ref: "Items" }
    };
    super(schema, options);
  }
}
