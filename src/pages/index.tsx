import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import Astronaut from '@/components/Astronaut';
import { useEffect } from 'react';
import { getAuth } from 'firebase/auth';
import { checkAuth } from '@/firebase';

const { Title } = Typography;

const Auth = () => {
  const { pathname } = useRouter();
  const auth = getAuth();

  useEffect(() => {
    checkAuth();
  }, [auth]);

  return (
    <>
      <Head>
        <title>{`RS FINAL${pathname}`}</title>
      </Head>
      <>
        <Title id="welcome" level={2}>
          Welcome to GraphiQL
        </Title>
        <Astronaut />
      </>
    </>
  );
};

export default Auth;
