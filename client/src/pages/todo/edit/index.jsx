import styled from '@emotion/styled';
import { ListAlt, ListOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box, Button, ButtonGroup, Card, CardContent, Grid, Paper, TextField,
} from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useParams } from 'react-router-dom';
import Layout from '../../../layout';
import { getToDo, updateToDo } from '../../../services/todo';
import Error from '../../error';

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

function EditToDo() {
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

  const handleSubmit = (event) => {
    event.preventDefault();
    updateToDo(id, toDo)
      .then((result) => {
        console.log(result);
        toast.success('ToDo updated succesfully');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

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
                  <h2>Edit ToDo</h2>
                </Grid>
                <Form onSubmit={handleSubmit}>
                  <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
                    gap: '2rem',
                  }}
                  >
                    <TextField value={toDo.title} onChange={(event) => setToDo({ ...toDo, title: event.target.value })} label="Title" placeholder="Enter title" variant="outlined" fullWidth required />
                    <TextField value={toDo.text} onChange={(event) => setToDo({ ...toDo, text: event.target.value })} label="Text" placeholder="Enter text" variant="outlined" fullWidth required />
                    <Button type="submit" color="primary" variant="contained" fullWidth>Update</Button>
                  </Box>
                </Form>
              </CardContent>
            </Card>
          </Paper>
        </Box>
      </Box>
    </Layout>
  );
}

export default EditToDo;
