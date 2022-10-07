import { ListAlt, ListOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box, Button, ButtonGroup, Card, CardContent, Grid, Paper, Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import Layout from '../../../layout';
import { getToDo } from '../../../services/todo';
import Error from '../../error';

function ShowToDo() {
  const defaultToDo = { title: '', text: '' };
  const [toDo, setToDo] = useState(defaultToDo);
  const { id } = useParams();

  if (!id) return <Error />;

  useEffect(() => {
    getToDo(id)
      .then((result) => {
        setToDo(result);
      })
      .catch((error) => {
        setToDo(null);
        console.log(error.message);
      });
  }, []);

  if (!toDo) return <Error />;

  return (
    <Layout>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            // width: '100%',
            width: '50rem',
            height: '100%',
          }}
        >
          <Box
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
              <ListOutlined />
              <span>
                To-Do&apos;s
              </span>
            </Box>
            <ButtonGroup>
              <Link color="white" to="/todos">
                <Button size="large" color="success">
                  List All To-Do
                </Button>
              </Link>
            </ButtonGroup>
          </Box>
          <Paper
            elevation={20}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2rem',
              height: '100%',
              margin: '2rem',
            }}
          >
            <Card
              sx={{
                margin: '1rem',
                padding: '1rem',
                height: '100%',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  gap: '2rem',
                  padding: '1rem',
                }}
              >
                <Grid align="center" padding="1rem">
                  <Avatar><ListAlt /></Avatar>
                  <h2>Show ToDo</h2>
                </Grid>
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '2rem',
                  padding: '1rem',
                  height: '100%',
                }}
                >
                  <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Typography variant="h5" component="span" fontWeight="bold">Title:</Typography>
                    <Typography variant="h5" component="span">{toDo.title}</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: '1rem' }}>
                    <Typography variant="h5" component="span" fontWeight="bold">Text:</Typography>
                    <Typography variant="h5" component="span">{toDo.text}</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
}

export default ShowToDo;
