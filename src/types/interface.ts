interface IUserSlice {
  isAuth: boolean | undefined;
  userEmail: string | undefined | null;
}

interface IQuerySlice {
  query: string;
}

interface IVariablesSlice {
  variables: string;
}

interface IFormData {
  email: string;
  password: string;
}

export type { IUserSlice, IFormData, IQuerySlice, IVariablesSlice };
