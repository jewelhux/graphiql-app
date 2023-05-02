import { FC, useState } from 'react';
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
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useRouter } from 'next/router';
import { Auth } from '@/types/enum';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@/constant/constant';

interface IFormProps {
  variantAuth: string;
}

const Form: FC<IFormProps> = ({ variantAuth }) => {
  const { push } = useRouter();
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

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValidArray = Object.values(isValidForm);
    const validForm = isValidArray.every((el) => el);
    if (validForm) {
      alert(password);
      alert(email);
      setEmail('');
      setPassword('');
    }
  };

  const handleLinkToOtherAuth = () => {
    push(`/auth/${variantAuth === Auth.signin ? 'signup' : 'signin'}`);
  };

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
              {variantAuth === Auth.signin ? <LockIcon /> : <HowToRegIcon />}
            </Avatar>
            <Typography component="h1" variant="h5">
              {variantAuth}
            </Typography>
            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleFormSubmit}>
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
                {variantAuth}
              </Button>
              <Button
                disabled={false}
                fullWidth
                sx={{ mt: 1, mb: 1 }}
                onClick={handleLinkToOtherAuth}
              >
                {`GO TO ${variantAuth === Auth.signin ? Auth.signup : Auth.signin}`}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Container>
    </>
  );
};

export default Form;
