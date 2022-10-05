import { LockOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';

function Login() {
  // const isLoggedIn = false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <Layout>
      <form onSubmit={handleSubmit}>
        <Box alignContent="center" justifyContent="center" display="flex" width="100%">
          <Paper
            elevation={10}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              padding: '2rem',
              width: '100%',
              maxWidth: '40rem',
            }}
          >
            <Grid align="center" padding="1rem">
              <Avatar><LockOutlined /></Avatar>
              <h2>Log In</h2>
            </Grid>
            <TextField value={email} onChange={(event) => setEmail(event.target.value)} label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
            <TextField value={password} onChange={(event) => setPassword(event.target.value)} label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required />
            <FormControlLabel
              control={(
                <Checkbox
                  name="checkedB"
                  color="primary"
                />
            )}
              label="Remember me"
            />
            <Button type="submit" color="primary" variant="contained" fullWidth>Log In</Button>
            <Typography>

              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="#">
                <Button type="link">Forgot password ?</Button>
              </Link>
            </Typography>
            <Typography>
              {' '}
              Do you have an account ?
              {' '}
              <Link to="/register">
                <Button type="link">Register</Button>
              </Link>
            </Typography>
          </Paper>
        </Box>
      </form>
    </Layout>
  );
}

export default Login;
