export interface FormData {
  type: "trivia" | "math" | "date" | "year";
  number: number | "random";
  useRandomNumber: boolean;
}

export interface NumbersContextType {
  formData: FormData | null;
  results: string | null;
  isLoading: boolean;
  error: string | null;
  setFormData: (data: FormData) => void;
  setResults: (results: string) => void;
  setIsLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearResults: () => void;
  reset: () => void;
}

export interface RadioOption {
  value: string;
  label: string;
}

export interface ButtonVariant {
  variant?: "primary" | "secondary" | "error";
}

export interface SpinnerProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary";
}
