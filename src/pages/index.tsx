import Head from 'next/head';
import { useRouter } from 'next/router';

const Auth = () => {
  const { pathname } = useRouter();

  return (
    <>
      <Head>
        <title>{`RSFINAL${pathname}`}</title>
      </Head>
      <>
        <h1>ТУТ СОЗДАТЬ КРАСИВУЮ ЗАСТАВКУ ЛУЧШЕ ВСЕГО ГИФКУ НО ЧТОТО ПРЯТНОЕ</h1>
      </>
    </>
  );
};

export default Auth;
