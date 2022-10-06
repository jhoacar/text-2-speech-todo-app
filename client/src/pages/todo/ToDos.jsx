import { ListOutlined } from '@mui/icons-material';
import {
  Box, List, ListItem, Paper, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
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
            sx={{
              textAlign: 'center',
              padding: '2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <ListOutlined fontSize="2rem" />
            <span>
              To-Do&apos;s
            </span>
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
                  }}
                >
                  You don&apos;t have any To-Do&apos;s
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
