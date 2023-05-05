import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout, Typography, Row, Button, Space } from 'antd';

const { Content } = Layout;
const { Title } = Typography;

const Auth: FC = () => {
  const { pathname, push } = useRouter();
  return (
    <>
      <Head>
        <title>{`RSFINAL${pathname}`}</title>
      </Head>

      <Content>
        <Title level={4} style={{ textAlign: 'center' }}>
          Welcome to Graf
        </Title>
        <Row justify="space-between">
          <Space size={'middle'}>
            <Button
              type="default"
              onClick={() => {
                push('auth/signin');
              }}
            >
              Sign In
            </Button>
            <Button
              type="default"
              onClick={() => {
                push('auth/signup');
              }}
            >
              Sign Up
            </Button>
          </Space>
        </Row>
      </Content>
    </>
  );
};

export default Auth;
