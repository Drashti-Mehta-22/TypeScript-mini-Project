import axios from 'axios';
import type { AuthResponse,UserProfile } from '../types/type';

const API_BASE = 'http://localhost:5000/api/auth';


export const registerUser = async (
  name: string,
  email: string,
  password: string
): Promise<AuthResponse> => {
  const { data } = await axios.post<AuthResponse>(`${API_BASE}/register`, {
    name,
    email,
    password,
  })
  return data;
};

export const loginUser = async (
  email: string,
  password: string
): Promise<AuthResponse> => {
  const { data } = await axios.post<AuthResponse>(`${API_BASE}/login`, {
    email,
    password,
  });
  return data;
};

export const fetchProfile = async (): Promise<UserProfile> => {
  const token = localStorage.getItem('token');
  const { data } = await axios.get<UserProfile>(`${API_BASE}/profile`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};