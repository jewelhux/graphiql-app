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
import { useForm } from 'react-hook-form';
import { Auth } from '@/types/enum';
import { EMAIL_REGEXP, PASSWORD_REGEXP } from '@/utils/const';

interface IFormProps {
  variantAuth: string;
}

interface IFormData {
  email: string;
  password: string;
}

const Form: FC<IFormProps> = ({ variantAuth }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormData>({ mode: 'onChange', reValidateMode: 'onChange' });

  const { push } = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const onSubmit = (data: IFormData) => {
    alert(data.password);
    alert(data.email);
    reset();
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
            <Box component="form" noValidate sx={{ mt: 3 }} onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    {...register('email', {
                      required: 'Please enter your email address',
                      pattern: {
                        value: EMAIL_REGEXP,
                        message: 'Please enter a valid email address',
                      },
                    })}
                    error={errors.email ? true : false}
                    helperText={errors.email ? errors.email.message : ' '}
                    fullWidth
                    id="email"
                    label={'email'}
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
                      {...register('password', {
                        required: 'Please enter your password',
                        pattern: {
                          value: PASSWORD_REGEXP,
                          message:
                            'Password must have min 8 chars (uppercase, lowercase, digit and special char)',
                        },
                      })}
                      error={errors.password ? true : false}
                      fullWidth
                      label={'password'}
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      autoComplete="new-password"
                    />
                  </FormControl>
                </Grid>
              </Grid>
              <FormHelperText error id="accountId-error">
                {errors.password ? errors.password.message : ' '}
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
