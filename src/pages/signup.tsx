import { FC, useEffect, useState, useCallback } from 'react';
import { Auth } from '@/types/enum';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import Form from '@/components/Form';
import { IFormData } from '@/types/interface';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const SignUp: FC = () => {
  const [toast, setToast] = useState('');
  const router = useRouter();
  const { isAuth } = useAuth();
  const [api, contextHolder] = notification.useNotification();
  const { t } = useTranslation();

  const openErrorNotification = useCallback(() => {
    api['error']({
      message: t('errorNotification.messageUp'),
      description: t('errorNotification.descriptionUp'),
    });
  }, [api, t]);

  useEffect(() => {
    if (isAuth) {
      router.push('/');
    }
  }, [isAuth, router]);

  useEffect(() => {
    if (toast === 'error') {
      openErrorNotification();
      setToast('');
    }
  }, [router, toast, openErrorNotification]);

  const handleRegister = (data: IFormData) => {
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        router.push('/graphi');
      })
      .catch(() => setToast('error'));
  };

  return (
    <>
      {contextHolder}
      <Form variantAuth={Auth.signup} handleClick={handleRegister} />
    </>
  );
};

export default SignUp;
