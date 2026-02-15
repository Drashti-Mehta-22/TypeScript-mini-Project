import { IUser } from "../types";
import User from "../models/user-model";

export const getAllUsers = async (): Promise<IUser[]> => {
  return await User.find().sort({ createdAt: -1 });
};

export const getUserById = async (id: string): Promise<IUser | null> => {
  return await User.findById(id);
};

export const createUser = async (data: { name: string; email: string }): Promise<IUser> => {
  const user = new User(data);
  return await user.save();
};

export const updateUser = async (
  id: string,
  data: Partial<{ name: string; email: string }>
): Promise<IUser | null> => {
  return await User.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

export const deleteUser = async (id: string): Promise<IUser | null> => {
  return await User.findByIdAndDelete(id);
};