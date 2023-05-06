import { FC } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Layout, Row, Col } from 'antd';
import { useAuth } from '@/pages/hooks/useAuth';
import { removeUser } from '@/pages/store/features/userSlice';
import { useAppDispatch } from '@/pages/store/store';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: FC = () => {
  const { push } = useRouter();
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const userLogOut = () => {
    dispatch(removeUser());
    push('/');
  };

  return (
    <AntHeader className="header">
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
          {isAuth ? (
            <Button type="default" onClick={() => userLogOut()}>
              Logout
            </Button>
          ) : (
            <Button
              type="default"
              onClick={() => {
                push('/auth');
              }}
            >
              Login
            </Button>
          )}
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
