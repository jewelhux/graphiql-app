import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Layout, Typography, Row, Col, Button } from 'antd';

const Auth: FC = () => {
  const { pathname, push } = useRouter();
  return (
    <>
      <Head>
        <title>{`RSFINAL${pathname}`}</title>
      </Head>

      <Layout.Content
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8F8F8',
        }}
      >
        <Typography.Title level={4}>Welcome to Graf</Typography.Title>
        <Row justify="space-between">
          <Col>
            <Button
              type="link"
              onClick={() => {
                push('auth/signin');
              }}
            >
              Sign In
            </Button>
          </Col>
          <Col>
            <Button
              type="link"
              onClick={() => {
                push('auth/signup');
              }}
            >
              Sign Up
            </Button>
          </Col>
        </Row>
      </Layout.Content>
    </>
  );
};

export default Auth;
