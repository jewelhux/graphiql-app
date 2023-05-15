'use client';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Layout, Row, Col, Space } from 'antd';
import { useAuth } from '@/hooks/useAuth';
import { getAuth } from 'firebase/auth';
import Language from './Language';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: FC = () => {
  const { push } = useRouter();
  const [localAuth, setLocalAuth] = useState(false);
  const { isAuth } = useAuth();
  const auth = getAuth();

  useEffect(
    () =>
      setLocalAuth(
        window.localStorage.isAuth ? JSON.parse(window.localStorage.isAuth).auth : false
      ),
    [isAuth]
  );
  useEffect(
    () =>
      setLocalAuth(
        window.localStorage.isAuth ? JSON.parse(window.localStorage.isAuth).auth : false
      ),
    []
  );

  const [isScrolled, setIsScrolled] = useState(false);

  const userLogOut = async () => {
    await auth.signOut();
    setLocalAuth(false);
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
  }, []);

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
        <Language />
        <Col>
          {localAuth ? (
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
