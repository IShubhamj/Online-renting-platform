import * as mongoose from "mongoose";

export interface IItemModel extends mongoose.Document {
  name: string;
  rent: number;
  price: number;
  manufactureDate: Date;
  actualCost: number;
}
