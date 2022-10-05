import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';

const Home = lazy(() => import('../pages/home'));
const Login = lazy(() => import('../pages/login'));
const Register = lazy(() => import('../pages/register'));
const ToDos = lazy(() => import('../pages/todo/ToDos'));
const ToDo = lazy(() => import('../pages/todo/ToDo'));
const Error = lazy(() => import('../pages/error'));

export function Router() {
  const element = useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'login',
      element: <Register />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'todos',
      element: <ToDos />,
    },
    {
      path: 'todos/:id',
      element: <ToDo />,
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);

  return element;
}
