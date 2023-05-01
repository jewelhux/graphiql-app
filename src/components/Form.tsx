import { useState } from 'react';
import {
  TextField,
  Box,
  Container,
  Avatar,
  Typography,
  Button,
  Grid,
  Paper,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

const PASSWORD_REGEXP = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&;'":])[A-Za-z\d@$!%*#?&:;'"]{8,}$/;

const Form = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isValidForm, setisValidForm] = useState({
    email: false,
    password: false,
  });

  const handleValidvalidEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setEmail(target.value);
    if (EMAIL_REGEXP.test(target.value)) {
      setisValidForm((prev) => ({
        ...prev,
        [e.target.name]: true,
      }));
    } else {
      setisValidForm((prev) => ({
        ...prev,
        [e.target.name]: false,
      }));
    }
  };

  const handleValidvalidPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    setPassword(target.value);
    if (PASSWORD_REGEXP.test(target.value)) {
      setisValidForm((prev) => ({
        ...prev,
        [e.target.name]: true,
      }));
    } else {
      setisValidForm((prev) => ({
        ...prev,
        [e.target.name]: false,
      }));
    }
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <Container
        component="main"
        maxWidth="md"
        sx={{
          display: 'flex',
          flexGrow: '1',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Paper elevation={8} sx={{ padding: 5, marginBottom: 2, marginTop: 2, width: '100%' }}>
          <Box
            display="flex"
            flexDirection={'column'}
            sx={{
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    disabled={false}
                    error={email === '' ? false : isValidForm.email ? false : true}
                    helperText={email === '' ? ' ' : !isValidForm.email ? 'not correct Email' : ' '}
                    required
                    fullWidth
                    id="email"
                    value={email}
                    onChange={handleValidvalidEmail}
                    label={'email'}
                    name="email"
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-password">password*</InputLabel>
                    <OutlinedInput
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            edge="end"
                            onClick={handleClickShowPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      }
                      error={password === '' ? false : isValidForm.password ? false : true}
                      required
                      fullWidth
                      name="password"
                      value={password}
                      onChange={handleValidvalidPassword}
                      label={'password'}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      autoComplete="new-password"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <FormHelperText error id="accountId-error">
                {password === '' ? ' ' : !isValidForm.password ? 'not correct Passord' : ' '}
              </FormHelperText>

              <Button
                disabled={false}
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                {'LOGIN'}
              </Button>
              <Button disabled={false} fullWidth sx={{ mt: 1, mb: 1 }}>
                {'GO TO REGISTER'}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Form;
