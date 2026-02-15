import { Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
}

export interface UserParams {
    id: string;
}