import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Footer from './Footer';
import Header from './Header';
import { Layout as AntLayout, Row, Col } from 'antd';

const { Content } = AntLayout;

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>RS FINAL</title>
    </Head>

    <AntLayout style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <AntLayout className="center">
        <Row justify="center" gutter={[16, 24]}>
          <Col>
            <Content>{children}</Content>
          </Col>
        </Row>
      </AntLayout>
      <Footer />
    </AntLayout>
  </>
);

export default Layout;
