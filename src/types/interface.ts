interface IUserSlice {
  isAuth: boolean;
  userEmail: string | undefined | null;
}

interface IFormData {
  email: string;
  password: string;
}

export type { IUserSlice, IFormData };
