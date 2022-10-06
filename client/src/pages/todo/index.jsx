import { ListOutlined } from '@mui/icons-material';
import {
  Box, Button, ButtonGroup, List, ListItem, Paper, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout';

function ToDos() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]);

  useEffect(() => {

  }, []);

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          height: '90%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Paper
          elevation={10}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            margin: '1rem',
            padding: '1rem',
            maxWidth: '40rem',
            width: '100%',
            height: '100%',
          }}
        >
          <Typography
            variant="h4"
            component="div"
            sx={{
              textAlign: 'center',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <Box sx={{ display: 'flex', gap: '1rem' }}>
              <ListOutlined fontSize="100rem" />
              <span>
                To-Do&apos;s
              </span>
            </Box>
            <ButtonGroup>
              <Link color="white" to="/todos/create">
                <Button color="inherit">
                  Create To-Do
                </Button>
              </Link>
            </ButtonGroup>
          </Typography>
          { todos.length > 0
          && (
          <List>
            {todos?.map((todo) => (
              <ListItem>
                {JSON.stringify(todo)}
              </ListItem>
            ))}
          </List>
          )}
          {
            todos.length <= 0 && (
              <Paper
                elevation={20}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  margin: '1rem',
                  padding: '1rem',
                  maxWidth: '40rem',
                  height: '100%',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    textAlign: 'center',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  You don&apos;t have any To-Do
                </Typography>
              </Paper>
            )
          }
        </Paper>
      </Box>
    </Layout>
  );
}

export default ToDos;
