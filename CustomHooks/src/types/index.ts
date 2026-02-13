
export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
  };
}

// what hook returns - we can reuse this for ANY data type, not just User!
export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface UserParams {
  id?: string;
}