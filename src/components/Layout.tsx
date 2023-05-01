import { Box } from '@mui/material';
import Head from 'next/head';
import { FC, ReactNode } from 'react';

import Footer from './Footer';
import Header from './Header';

interface ILayoutProps {
  children?: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => (
  <div className="test">
    <Head>
      <title>RSFINAL</title>
    </Head>
    <Header />
    <Box style={{ flex: 1 }}>{children}</Box>
    <Footer />
  </div>
);

export default Layout;
