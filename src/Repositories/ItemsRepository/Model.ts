import * as mongoose from "mongoose";
import { IItemModel } from "./IModel";
import { ItemSchema } from "./Schema";

const itemSchema = new ItemSchema({
  collection: "Items",
  timestamps: true
});

itemSchema.index({ name: 1 }, { unique: true });

export const itemModel = mongoose.model<IItemModel>("Items", itemSchema);
