import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import AuthMiddleware from '../middlewares/auth';

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));

const AllToDos = lazy(() => import('../pages/todo'));
const CreateToDo = lazy(() => import('../pages/todo/create'));
const ShowToDo = lazy(() => import('../pages/todo/show'));
const EditToDo = lazy(() => import('../pages/todo/edit'));

const Error = lazy(() => import('../pages/error'));

export function Router() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/todos',
      element: <AuthMiddleware><AllToDos /></AuthMiddleware>,
    },
    {
      path: '/todos/create',
      element: <AuthMiddleware><CreateToDo /></AuthMiddleware>,
    },
    {
      path: '/todos/show/:id',
      element: <AuthMiddleware><ShowToDo /></AuthMiddleware>,
    },
    {
      path: '/todos/update/:id',
      element: <AuthMiddleware><EditToDo /></AuthMiddleware>,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return element;
}
