import * as mongoose from "mongoose";

export interface IItemModel extends mongoose.Document {
  name: string;
  rent: number;
  rented: {
    to: string;
  };
  price: number;
  manufactureDate: Date;
  actualCost: number;
}
