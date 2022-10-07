import styled from '@emotion/styled';
import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  // Checkbox,
  // FormControlLabel,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import Layout from '../../layout';
import { handleLogin } from '../../services/auth';
import { setToken } from '../../utils/handleToken';

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

function Login() {
  // const isLoggedIn = false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleLogin({ email, password })
      .then((result) => {
        setIsLoggedIn(true);
        setToken(result);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (isLoggedIn) return <Navigate to="/" />;

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          height: '90%',
        }}
        >
          <Box
            elevation={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '2rem',
              margin: '1rem',
              padding: '2rem',
              maxWidth: '40rem',
              width: '100%',
              height: '90%',
            }}
          >
            <Grid align="center" padding="1rem">
              <Avatar><LockOutlined /></Avatar>
              <h2>Log In</h2>
            </Grid>
            <TextField value={email} onChange={(event) => setEmail(event.target.value)} label="Email" placeholder="Enter email" type="email" variant="outlined" fullWidth required />
            <TextField value={password} onChange={(event) => setPassword(event.target.value)} label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required />
            {/* <FormControlLabel
              control={(
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
            )}
              label="Remember me"
            /> */}
            <Button type="submit" color="primary" variant="contained" fullWidth>Log In</Button>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1rem',
              }}
            >
              <span>You don&apos;t have an account?</span>
              <Link to="/register">
                <Button variant="outlined" size="large" type="link">Go to register</Button>
              </Link>
            </Typography>
          </Box>
        </Box>
      </Form>
    </Layout>
  );
}

export default Login;
