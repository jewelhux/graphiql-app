interface IUserSlice {
  id: string | null;
  email: string | null;
  token: string | null;
}

interface IFormProps {
  variantAuth: string;
  handleClick: (data: IFormData) => void;
}

interface IFormData {
  email: string;
  password: string;
}

export type { IUserSlice, IFormProps, IFormData };
