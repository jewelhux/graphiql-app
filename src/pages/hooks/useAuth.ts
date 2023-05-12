import { useAppSelector } from '../store/store';

export function useAuth() {
  const { auth } = useAppSelector((state) => state.user);

  return {
    isAuth: !!auth,
  };
}
