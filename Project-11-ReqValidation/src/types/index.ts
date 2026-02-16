
export interface UserBody {
  name: string;
  email: string;
}

export interface ValidationError {
  field: string;
  message: string;
}

// Defines the API response shape so all responses look consistent
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  errors?: ValidationError[];
  message?: string;
}

export interface UserParams {
  id: string;
}