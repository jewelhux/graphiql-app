import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Astronaut from '@/components/Astronaut';
import { Row, Button } from 'antd';
import { useAuth } from '@/hooks/useAuth';

const Auth = () => {
  const { Title } = Typography;
  const { pathname } = useRouter();
  const { t } = useTranslation();
  const { isAuth } = useAuth();
  const { push } = useRouter();

  return (
    <>
      <Head>
        <title>{`RS FINAL${pathname}`}</title>
      </Head>
      <Title id="welcome" level={2}>
        {t('welcome.title')}
      </Title>
      <Row justify="center">
        <Astronaut />
      </Row>
      {isAuth && (
        <Row justify="center">
          <Button
            type="default"
            onClick={() => {
              push('/signin');
            }}
          >
            {t('welcome.redirect')}
          </Button>
        </Row>
      )}
    </>
  );
};

export default Auth;
