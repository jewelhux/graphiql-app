import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Astronaut from '@/components/Astronaut';
import { Row } from 'antd';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

const Auth = () => {
  const { Title } = Typography;
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const { isAuth } = useAuth();

  return (
    <>
      <Head>
        <title>{`RS FINAL${pathname}`}</title>
      </Head>
      <Title id="welcome" level={2}>
        {t('welcome.title')}
      </Title>
      {isAuth && (
        <Link
          style={{ display: 'block', textAlign: 'center', fontWeight: 'bold' }}
          href={'/graphi'}
        >
          GraphQl
        </Link>
      )}
      <Row justify="center">
        <Astronaut />
      </Row>
    </>
  );
};

export default Auth;
