import { FC, useEffect } from 'react';
import { Auth } from '@/types/enum';
import { useAppDispatch } from '@/store/store';
import { setUser } from '@/store/features/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from '@/components/Form';
import { IFormData } from '@/types/interface';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';

const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  const handleRegister = (data: IFormData) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        dispatch(setUser());
        router.push('/graphi');
      })
      .catch(() => Error('Регистрация не завершена, ошибка'));
  };

  return (
    <>
      <Form variantAuth={Auth.signup} handleClick={handleRegister} />
    </>
  );
};

export default SignUp;
