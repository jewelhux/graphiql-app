import { FC } from 'react';
import { Auth } from '@/types/enum';
import { useAppDispatch } from '@/pages/store/store';
import { setUser } from '@/pages/store/features/userSlice';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from '@/components/Form';
import { IFormData } from '@/types/interface';
import { useRouter } from 'next/router';

const SignUp: FC = () => {
  const dispatch = useAppDispatch();
  const { push } = useRouter();

  const handleRegister = (data: IFormData) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        dispatch(setUser());
        push('/graphi');
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
