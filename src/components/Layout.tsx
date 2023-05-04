import Head from 'next/head';
import { FC, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';
import { Layout as AntLayout } from 'antd';

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <div className="test">
    <Head>
      <title>RS FINAL</title>
    </Head>

    <AntLayout>
      <Header />
      <AntLayout>
        <AntLayout.Content style={{ flex: 1 }}>{children}</AntLayout.Content>
      </AntLayout>
      <Footer />
    </AntLayout>
  </div>
);

export default Layout;
