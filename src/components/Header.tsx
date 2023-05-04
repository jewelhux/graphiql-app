import { FC } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { useAuth } from '@/pages/hooks/useAuth';
import { removeUser } from '@/pages/store/features/userSlice';
import { useAppDispatch } from '@/pages/store/store';

const Header: FC = () => {
  const { push } = useRouter();
  const { isAuth } = useAuth();
  const dispatch = useAppDispatch();

  const userLogOut = () => {
    dispatch(removeUser());
    push('/');
  };

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
          {isAuth ? (
            <Button color="inherit" onClick={() => userLogOut()}>
              Logout
            </Button>
          ) : (
            <Button
              color="inherit"
              onClick={() => {
                push('/auth');
              }}
            >
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
