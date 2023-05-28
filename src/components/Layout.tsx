import Head from 'next/head';
import { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Footer from './Footer';
import Header from './Header';
import { Layout as AntLayout, Row, Col } from 'antd';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useAppDispatch, useAppSelector } from '@/store/store';
import { setUser } from '@/store/features/userSliceAuth';
import Loader from './Loader';

const { Content } = AntLayout;

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  const { isAuth } = useAppSelector((state) => state.auth);
  const auth = getAuth();
  const dispatch = useAppDispatch();
  const [authTouched, setAuthTouched] = useState(false);
  const { pathname } = useRouter();
  const privateRoute = router.asPath === '/graphi';

  useEffect(() => {
    const AUTH_PATH = ['/signin', '/signup'];
    if (!authTouched) return;
    if (isAuth) {
      if (AUTH_PATH.includes(router.asPath)) {
        router.replace('/graphi');
      }
    } else {
      if (privateRoute) {
        router.replace('/');
      }
    }
  }, [authTouched, isAuth, privateRoute, router]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setAuthTouched(true);
      dispatch(setUser({ isAuth: !!user, userEmail: user?.email }));
    });
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
              <Col span={24}>{isAuth !== undefined ? children : <Loader />}</Col>
            </Row>
          </Content>
        </AntLayout>

        <Footer />
      </AntLayout>
    </>
  );
};

export default Layout;
