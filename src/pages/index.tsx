import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import Astronaut from '@/components/Astronaut';
import { Row, Typography, Button } from 'antd';
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
        <Title className="welcome-desc" level={5} style={{ marginBottom: 0 }}>
          {t('welcome.desc1')}
          <Button
            type="link"
            href="https://spacex-production.up.railway.app/"
            style={{ padding: 0, lineHeight: '24px' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            SpaceX.
          </Button>
        </Title>
        <Title className="welcome-desc" level={5} style={{ marginTop: 0 }}>
          {t('welcome.desc2')}
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
