import axios from "axios";
import type { User, UserFormData, ApiResponse } from "../types";

const BASE_URL = "http://localhost:5000/api/users";

export const fetchUsers = async (): Promise<User[]> => {
  const res = await axios.get<ApiResponse<User[]>>(BASE_URL);
  return res.data.data!;
};

export const createUser = async (data: UserFormData): Promise<User> => {
  const res = await axios.post<ApiResponse<User>>(BASE_URL, data);
  return res.data.data!;
};

export const updateUser = async (id: string, data: UserFormData): Promise<User> => {
  const res = await axios.put<ApiResponse<User>>(`${BASE_URL}/${id}`, data);
  return res.data.data!;
};

export const deleteUser = async (id: string): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};