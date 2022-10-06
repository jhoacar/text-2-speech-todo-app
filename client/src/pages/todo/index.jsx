/* eslint-disable no-underscore-dangle */
import {
  CancelOutlined,
  DeleteOutline,
  Edit,
  ListOutlined,
  Visibility,
} from '@mui/icons-material';
import {
  Box,
  Button,
  ButtonGroup,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  List,
  ListItem,
  Paper,
  Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import Layout from '../../layout';
import { getToDos, removeToDo } from '../../services/todo';

function ToDos() {
  // eslint-disable-next-line no-unused-vars
  const [todos, setTodos] = useState([]);
  const [reload, setReload] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    getToDos()
      .then((result) => setTodos(result))
      .catch((error) => console.log(error.message));
  }, [reload]);

  const handleRemove = (id) => {
    removeToDo(id)
      .then((result) => {
        console.log(result);
        setReload(reload + 1);
        toast.success('Your to-Do has been deleted!');
      }).catch((error) => {
        toast.error(error.message);
      }).finally(() => {
        setOpenDialog(false);
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
              <Link color="white" to="/todos/create">
                <Button size="large" color="success">
                  Create To-Do
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
            {todos.length > 0
              && (
                <List>
                  {todos?.map((todo) => (
                    <ListItem
                      key={todo?.title}
                      sx={{ display: 'flex', justifyContent: 'space-between' }}
                    >
                      <Typography variant="h6" textTransform="capitalize">
                        {todo.title}
                      </Typography>
                      <ButtonGroup sx={{ gap: '.5rem' }}>
                        <Link to={`/todos/show/${todo._id}`}>
                          <Button size="small"><Visibility /></Button>
                        </Link>
                        <Link to={`/todos/edit/${todo._id}`}>
                          <Button size="small"><Edit /></Button>
                        </Link>
                        <Button
                          size="small"
                          color="error"
                          onClick={() => setOpenDialog(true)}

                        >
                          <DeleteOutline />
                        </Button>
                        <Dialog
                          open={openDialog}
                          onClose={() => setOpenDialog(false)}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle>Are you sure?</DialogTitle>
                          <DialogContent>
                            <DialogContentText>
                              Once removed, you will not be able to recover this to-Do!
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button
                              color="primary"
                              onClick={() => { setOpenDialog(false); }}
                              startIcon={<CancelOutlined />}
                            >
                              Cancel
                            </Button>
                            <Button
                              color="error"
                              onClick={() => { handleRemove(todo._id); }}
                              startIcon={<DeleteOutline />}
                            >
                              Remove
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </ButtonGroup>
                    </ListItem>
                  ))}
                </List>
              )}
            {
              todos.length <= 0 && (

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

              )
            }
          </Paper>
        </Paper>
      </Box>
    </Layout>
  );
}

export default ToDos;
