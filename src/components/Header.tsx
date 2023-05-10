import { FC, useEffect, useState } from 'react';
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

  const [isScrolled, setIsScrolled] = useState(false);

  const userLogOut = () => {
    dispatch(removeUser());
    push('/');
  };

  useEffect(() => {
    const next = document.getElementById('__next');

    const headerColorChange = () => {
      if (next && next.scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    next?.addEventListener('scroll', headerColorChange);
    return function cleanup() {
      next?.removeEventListener('scroll', headerColorChange);
    };
  });

  return (
    <AntHeader className={`header ${isScrolled ? 'scrolled' : 'unscrolled'}`}>
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
