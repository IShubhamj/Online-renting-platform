import * as mongoose from "mongoose";
import { IUserModel } from "./IModel";
import { UserSchema } from "./Schema";

const userSchema = new UserSchema({
  collection: "Users",
  timestamps: true
});

userSchema.index({ email: 1 }, { unique: true });

export const userModel = mongoose.model<IUserModel>("Users", userSchema);
