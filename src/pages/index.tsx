import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Astronaut from '@/components/Astronaut';
import { Row, Typography } from 'antd';
import Info from '@/components/Info';

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
        <Title className="welcome-desc" level={5}>
          {t('welcome.desc')}
        </Title>
      </Row>
      <Row justify="center">
        <Astronaut />
      </Row>
      <Info />
    </>
  );
};

export default Auth;
