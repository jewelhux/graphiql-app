import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';

const Header: FC = () => {
  const { push } = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => {
              push('/');
            }}
          >
            Graf
          </Typography>
          <Button
            color="inherit"
            onClick={() => {
              push('/auth');
            }}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
