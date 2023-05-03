interface IUserSlice {
  id: number | null;
  email: string | null;
  token: string | null;
}

interface IFormProps {
  variantAuth: string;
}

export type { IUserSlice, IFormProps };
