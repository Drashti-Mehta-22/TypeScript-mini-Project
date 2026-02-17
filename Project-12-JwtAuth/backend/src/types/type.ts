import { Document } from 'mongoose';
import { Request } from 'express';

export interface User extends Document {
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}

//embedded inside the JWT token
export interface UserPayload {
  id: string;
  email: string;
  name: string;
}

//This is how TypeScript knows that req.user exists after our JWT middleware attaches it — without this, TypeScript would throw an error.
export interface AuthRequest extends Request {
  user?: UserPayload;
}