import Head from 'next/head';
import { FC, ReactNode } from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import { Layout as AntLayout, Row, Col } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch } from '@/store/store';
import { removeUser, setUser } from '@/store/features/userSlice';

const { Content } = AntLayout;

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const { pathname } = useRouter();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      if (typeof window !== 'undefined') {
        localStorage.isAuth = JSON.stringify({ auth: true });
        dispatch(setUser());
      }
    } else {
      if (typeof window !== 'undefined') {
        localStorage.isAuth = JSON.stringify({ auth: false });
        dispatch(removeUser());
      }
    }
  });

  const fullWidthStyle = pathname === '/graphi' ? { width: '90%' } : {};

  return (
    <>
      <Head>
        <title>RS FINAL</title>
      </Head>

      <AntLayout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Header />

        <AntLayout className="center top">
          <Content style={fullWidthStyle}>
            <Row justify="center" gutter={[16, 24]}>
              <Col span={24}>{children}</Col>
            </Row>
          </Content>
        </AntLayout>

        <Footer />
      </AntLayout>
    </>
  );
};

export default Layout;
