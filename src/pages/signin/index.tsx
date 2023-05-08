import { FC } from 'react';
import { Auth } from '@/types/enum';
import { getAuth, getIdToken, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '@/components/Form';
import { IFormData } from '@/types/interface';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../store/store';
import { removeUser, setUser } from '../store/features/userSlice';
import { useEffect } from 'react';
import { useAuth } from '../hooks/useAuth';

const SignIn: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();
  const router = useRouter();
  const { isAuth } = useAuth();

  //Временная полумера
  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  const userLogOut = () => {
    dispatch(removeUser());
    push('/');
  };

  const handleLogin = (data: IFormData) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async ({ user }) => {
        dispatch(
          setUser({
            id: user.uid,
            email: user.email,
            token: await getIdToken(user),
          })
        );
        push('/graphi');
        setTimeout(() => {
          userLogOut();
        }, 30000);
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
