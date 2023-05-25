import { FC, useEffect, useState } from 'react';
import { Auth } from '@/types/enum';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '@/components/Form';
import { IFormData } from '@/types/interface';
import { useRouter } from 'next/router';
import { useAppDispatch } from '../store/store';
import { setUser } from '../store/features/userSlice';
import { useAuth } from '@/hooks/useAuth';
import Popup from '@/components/Popup';

const SignIn: FC = () => {
  const [showPopup, setShowPopup] = useState(false);
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { isAuth } = useAuth();

  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  const handleLogin = (data: IFormData) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        dispatch(setUser());
        router.push('/graphi');
      })
      .catch(() => setShowPopup(true));
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    router.push('/');
  };

  return (
    <>
      {showPopup && (
        <Popup
          message="Учетные данные неверны или пользователь не существует"
          onClose={handleClosePopup}
        />
      )}
      <Form variantAuth={Auth.signin} handleClick={handleLogin} />
    </>
  );
};

export default SignIn;
