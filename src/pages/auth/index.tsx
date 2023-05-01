import { FC } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Auth: FC = () => {
  const { pathname, push } = useRouter();
  return (
    <>
      <Head>
        <title>{`RSFINAL${pathname}`}</title>
      </Head>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#F8F8F8',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Welcome to Graf
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: '1rem' }}>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              push('auth/signin');
            }}
          >
            Sign In
          </Link>
          <Link
            component="button"
            variant="body2"
            onClick={() => {
              push('auth/signup');
            }}
          >
            Sign Up
          </Link>
        </Box>
      </Box>
    </>
  );
};

export default Auth;
