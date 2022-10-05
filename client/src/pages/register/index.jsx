import {
  SupervisedUserCircleRounded,
} from '@mui/icons-material';
import {
  Avatar, Box, Button, Grid, Paper, TextField, Typography,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';

function Register() {
  // const isLoggedIn = false;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
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
              <Avatar><SupervisedUserCircleRounded /></Avatar>
              <h2>Register</h2>
            </Grid>
            <TextField value={name} onChange={(event) => setName(event.target.value)} label="Name" placeholder="Enter name" variant="outlined" fullWidth required />
            <TextField value={email} onChange={(event) => setEmail(event.target.value)} label="Email" placeholder="Enter email" variant="outlined" fullWidth required />
            <TextField value={password} onChange={(event) => setPassword(event.target.value)} label="Password" placeholder="Enter password" type="password" variant="outlined" fullWidth required />
            <Button type="submit" color="primary" variant="contained" fullWidth>Register</Button>
            <Typography>
              {' '}
              Already registered ?
              {' '}
              <Link to="/login">
                <Button type="link">Log In</Button>
              </Link>
            </Typography>
          </Paper>
        </Box>
      </form>
    </Layout>
  );
}

export default Register;
