import * as mongoose from "mongoose";
import { IItem } from "./Entities/Entities";

export interface IUserModel extends mongoose.Document {
  name: string;
  email: string;
  password: string;
  items: IItem[];
}
