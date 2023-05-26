import { useAppSelector } from '../store/store';

export function useAuth() {
  const { isAuth } = useAppSelector((state) => state.auth);

  return {
    isAuth: !!isAuth,
  };
}
