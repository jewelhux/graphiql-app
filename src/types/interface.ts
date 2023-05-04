interface IUserSlice {
  id: string | null;
  email: string | null;
  token: string | null;
}

interface IFormData {
  email: string;
  password: string;
}

export type { IUserSlice, IFormData };
