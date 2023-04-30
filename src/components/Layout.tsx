import Head from 'next/head';
import { FC, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <>
    <Head>
      <title>RSFINAL</title>
    </Head>
    <Header />
    {children}
    <Footer />
  </>
);

export default Layout;
