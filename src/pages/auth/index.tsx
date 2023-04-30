import { FC } from 'react';

import { Button } from '@mui/material';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Auth: FC = () => {
  const { pathname } = useRouter();
  return (
    <>
      <Head>
        <title>{`RSFINAL${pathname}`}</title>
      </Head>
      <h1>Выберите действие</h1>
      <Button variant="contained">Войти</Button>
      <Button variant="contained">Зарегистрироваться</Button>
    </>
  );
};

export default Auth;
