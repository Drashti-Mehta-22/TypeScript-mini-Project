import mongoose, { Schema } from "mongoose";
import { IUser } from "../types";

const UserSchema: Schema = new Schema(
  {
    name:  { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);