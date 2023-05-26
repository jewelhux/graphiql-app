import { FC, useEffect, useState, useCallback } from 'react';
import { Auth } from '@/types/enum';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Form from '@/components/Form';
import { IFormData } from '@/types/interface';
import { useRouter } from 'next/router';
import { useAuth } from '@/hooks/useAuth';
import { notification } from 'antd';
import { useTranslation } from 'react-i18next';

const SignIn: FC = () => {
  const [toast, setToast] = useState('');
  const router = useRouter();
  const { isAuth } = useAuth();
  const [api, contextHolder] = notification.useNotification();
  const { t } = useTranslation();

  const openErrorNotification = useCallback(() => {
    api['error']({
      message: t('errorNotification.messageIn'),
      description: t('errorNotification.descriptionIn'),
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

  const handleLogin = (data: IFormData) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then(async () => {
        router.push('/graphi');
      })
      .catch(() => setToast('error'));
  };

  return (
    <>
      {contextHolder}
      <Form variantAuth={Auth.signin} handleClick={handleLogin} />
    </>
  );
};

export default SignIn;
