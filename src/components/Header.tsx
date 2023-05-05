import { FC } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Layout, Row, Col } from 'antd';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: FC = () => {
  const { push } = useRouter();

  return (
    <AntHeader>
      <Row justify="space-between" align="middle">
        <Col>
          <Title
            level={1}
            className="title"
            onClick={() => {
              push('/');
            }}
          >
            GrafiQL
          </Title>
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
    </AntHeader>
  );
};

export default Header;
