import {
  AddCircle,
  DeleteOutlineOutlined,
  Edit,
  LockOutlined,
  MenuBookOutlined,
} from '@mui/icons-material';
import {
  Box, List, ListItem, Typography,
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
            maxWidth: '40rem',
            width: '100%',
            height: '100%',
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
              <List sx={{ padding: '1rem' }}>
                <ListItem>
                  <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <MenuBookOutlined />
                    <Typography variant="h5">Read a To-Do</Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <AddCircle />
                    <Typography variant="h5">
                      Create a To-Do
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <Edit />
                    <Typography variant="h5">
                      Update a To-Do
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box sx={{
                    display: 'flex',
                    gap: '1rem',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  >
                    <DeleteOutlineOutlined />
                    <Typography variant="h5">
                      Delete a To-Do
                    </Typography>
                  </Box>
                </ListItem>
              </List>
            </Box>
          )}
        </Box>
      </Box>
    </Layout>
  );
}

export default Home;
