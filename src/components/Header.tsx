import { FC } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Layout, Row, Col } from 'antd';

const Header: FC = () => {
  const { push } = useRouter();

  return (
    <Layout.Header style={{ flexGrow: 1 }}>
      <Row justify="space-between">
        <Col>
          <Typography.Title
            level={1}
            style={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => {
              push('/');
            }}
          >
            GrafiQL
          </Typography.Title>
        </Col>
        <Col>
          <Button
            type="default"
            onClick={() => {
              push('/auth');
            }}
          >
            Login
          </Button>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
