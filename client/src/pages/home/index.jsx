import {
  CreateOutlined, DeleteOutlineOutlined, LockOutlined, ReadMoreOutlined, UpdateOutlined,
} from '@mui/icons-material';
import {
  Box, List, ListItem, Paper, Typography,
} from '@mui/material';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';
import Layout from '../../layout';

function Home() {
  const [isLoggedIn] = useContext(AuthContext);
  return (
    <Layout>
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '90%',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2rem',
            margin: '1rem',
            maxWidth: '40rem',
            width: '100%',
          }}
        >

          {isLoggedIn && <Box><Navigate to="/todos" /></Box>}
          {!isLoggedIn && (
            <Box>
              <Typography variant="h4" textAlign="center">
                You need login for
                {' '}
                <LockOutlined />
              </Typography>
              <List>
                <ListItem>
                  <Typography variant="h5" textAlign="center" width="100%">
                    <ReadMoreOutlined />
                    {' '}
                    Read a ToDo
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h5" textAlign="center" width="100%">
                    <CreateOutlined />
                    {' '}
                    Create a ToDo
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h5" textAlign="center" width="100%">
                    <UpdateOutlined />
                    {' '}
                    Update a ToDo
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="h5" textAlign="center" width="100%">
                    <DeleteOutlineOutlined />
                    {' '}
                    Delete a ToDo
                  </Typography>
                </ListItem>
              </List>
            </Box>
          )}
        </Paper>
      </Box>
    </Layout>
  );
}

export default Home;
