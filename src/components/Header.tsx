import { FC, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Layout, Row, Col, Space } from 'antd';
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

  const next = document.getElementById('__next');

  const headerColorChange = () => {
    const header = document.querySelector('.header');
    if (next && next.scrollTop > 0) {
      header?.classList.remove('unscrolled');
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
      header?.classList.add('unscrolled');
    }
  };

  useEffect(() => {
    next?.addEventListener('scroll', headerColorChange);
    return function cleanup() {
      next?.removeEventListener('scroll', headerColorChange);
    };
  });

  return (
    <AntHeader className="header unscrolled">
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
            <Space>
              <Button
                type="default"
                onClick={() => {
                  push('/signin');
                }}
              >
                Sign In
              </Button>
              <Button
                type="default"
                onClick={() => {
                  push('/signup');
                }}
              >
                Sign Up
              </Button>
            </Space>
          )}
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
