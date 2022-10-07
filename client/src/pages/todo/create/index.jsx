import styled from '@emotion/styled';
import { ListAlt, ListOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box, Button, ButtonGroup, Card, CardContent, Grid, Paper, TextField,
} from '@mui/material';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Layout from '../../../layout';
import { createToDo } from '../../../services/todo';

const Form = styled.form`
  width: 100%;
  height: 100%;
`;

function CreateToDo() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    createToDo({ title, text })
      .then((result) => {
        console.log(result);
        setTitle('');
        setText('');
        toast.success('ToDo created succesfully');
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };
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
                  <h2>Create ToDo</h2>
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
                    <TextField value={title} onChange={(event) => setTitle(event.target.value)} label="Title" placeholder="Enter title" variant="outlined" fullWidth required />
                    <TextField value={text} onChange={(event) => setText(event.target.value)} label="Text" placeholder="Enter text" variant="outlined" fullWidth required />
                    <Button type="submit" color="primary" variant="contained" fullWidth>Create</Button>
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

export default CreateToDo;
