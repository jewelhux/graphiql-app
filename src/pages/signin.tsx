import { FC } from 'react';
import { Auth } from '@/types/enum';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '@/components/Form';
import { IFormData } from '@/types/interface';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../store/store';
import { setUser } from '../store/features/userSlice';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const handleLogin = (data: IFormData) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        dispatch(setUser());
        push('/graphi');
      })
      .catch(() => Error('Вход не завершен, ошибка'));
  };

  return (
    <>
      <Form variantAuth={Auth.signin} handleClick={handleLogin} />
    </>
  );
};

export default SignIn;
