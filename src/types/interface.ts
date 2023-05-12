interface IUserSlice {
  auth: boolean | null;
}

interface IFormData {
  email: string;
  password: string;
}

export type { IUserSlice, IFormData };
