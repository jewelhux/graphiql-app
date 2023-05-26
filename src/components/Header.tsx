'use client';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Layout, Row, Col, Space } from 'antd';
import { useAuth } from '@/hooks/useAuth';
import { getAuth } from 'firebase/auth';
import Language from './Language';
import { useTranslation } from 'react-i18next';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: FC = () => {
  const { push } = useRouter();
  const { isAuth } = useAuth();
  const auth = getAuth();
  const { t } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);

  const userLogOut = async () => {
    await auth.signOut();
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
        <Col>
          <Language />
        </Col>
        <Col>
          {isAuth ? (
            <Button type="default" onClick={() => userLogOut()}>
              {t('auth.logout')}
            </Button>
          ) : (
            <Space>
              <Button
                type="default"
                onClick={() => {
                  push('/signin');
                }}
              >
                {t('auth.signIn')}
              </Button>
              <Button
                type="default"
                onClick={() => {
                  push('/signup');
                }}
              >
                {t('auth.signUp')}
              </Button>
            </Space>
          )}
        </Col>
      </Row>
    </AntHeader>
  );
};

export default Header;
