export interface FormValues {
  email: string;
  password: string;
}

export interface FormErrors {
  email?: string;
  password?: string;
}

// Props for Input component
export interface InputProps {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}