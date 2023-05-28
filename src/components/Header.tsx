'use client';
import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Typography, Button, Layout, Row, Col, Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Language from './Language';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '@/store/store';
import { logOut } from '@/firebase';

const { Header: AntHeader } = Layout;
const { Title } = Typography;

const Header: FC = () => {
  const { push } = useRouter();
  const { isAuth } = useAppSelector((state) => state.auth);
  const { t } = useTranslation();
  const { pathname } = useRouter();
  const isOnEditor = pathname === '/graphi';
  const { userEmail } = useAppSelector((state) => state.auth);
  const [isScrolled, setIsScrolled] = useState(false);

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
      <Row className="header-row" align="middle">
        <Col style={{ marginRight: '10px' }}>
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
        <Col style={{ marginRight: '10px' }}>
          <Language />
        </Col>
        <Col style={{ marginRight: '10px' }}>
          {isAuth ? (
            <Space>
              {isOnEditor ? (
                <>
                  <Avatar className="header-avatar" size="large">
                    {userEmail?.slice(0, 1).toUpperCase() || <UserOutlined />}
                  </Avatar>
                  <Title className="user-email" level={5}>
                    {userEmail}
                  </Title>
                </>
              ) : (
                <Button
                  type="primary"
                  onClick={() => {
                    push('/graphi');
                  }}
                >
                  {t('auth.redirect')}
                </Button>
              )}

              <Button type="default" onClick={async () => await logOut()}>
                {t('auth.logout')}
              </Button>
            </Space>
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
