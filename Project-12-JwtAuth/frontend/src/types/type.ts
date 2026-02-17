export interface AuthResponse {
  message: string;
  token: string;
  user: { id: string; name: string; email: string };
}

export interface UserProfile {
  user: { _id: string; name: string; email: string; createdAt: string };
}

export interface User {
  id: string;
  name: string;
  email: string;
}