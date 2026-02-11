
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}


export interface UserParams {
  id?: string;  // URL params are always strings
}