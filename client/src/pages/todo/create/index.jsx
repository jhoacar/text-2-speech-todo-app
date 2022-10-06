import styled from '@emotion/styled';
import { ListAlt, ListOutlined } from '@mui/icons-material';
import {
  Avatar,
  Box, Button, ButtonGroup, Grid, Paper, TextField, Typography,
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
            variant="h6"
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
          </Typography>
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
              sx={{
                textAlign: 'center',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Form onSubmit={handleSubmit}>
                <Box sx={{
                  display: 'flex',
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
                      padding: '2rem',
                      maxWidth: '40rem',
                      width: '100%',
                      height: '90%',
                    }}
                  >
                    <Grid align="center" padding="1rem">
                      <Avatar><ListAlt /></Avatar>
                      <h2>Create ToDo</h2>
                    </Grid>
                    <TextField value={title} onChange={(event) => setTitle(event.target.value)} label="Title" placeholder="Enter title" variant="outlined" fullWidth required />
                    <TextField value={text} onChange={(event) => setText(event.target.value)} label="Text" placeholder="Enter text" variant="outlined" fullWidth required />
                    <Button type="submit" color="primary" variant="contained" fullWidth>Create</Button>
                  </Paper>
                </Box>
              </Form>
            </Typography>
          </Paper>
        </Paper>
      </Box>
    </Layout>
  );
}

export default CreateToDo;
