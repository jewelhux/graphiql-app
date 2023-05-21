import Head from 'next/head';
import { useRouter } from 'next/router';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';
import Astronaut from '@/components/Astronaut';
import { Row } from 'antd';

const Auth = () => {
  const { Title } = Typography;
  const { pathname } = useRouter();
  const { t } = useTranslation();

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
    </>
  );
};

export default Auth;
