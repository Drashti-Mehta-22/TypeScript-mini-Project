export interface User {
  _id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface UserFormData {
  name: string;
  email: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
}