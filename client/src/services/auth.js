import { getToDos } from './todo';

const SERVER_API = import.meta.env.VITE_SERVER_API || '/api';

const AUTH_LOGIN = `${SERVER_API}/auth/login`;

/**
 * This function validate the login and returns  the token
 * @param {object} credentials
 * @returns
 */
export async function handleLogin(credentials) {
  const { email, password } = credentials;

  if (!email || !password) { throw new Error('Credentials are required - email and password'); }

  const response = await fetch(AUTH_LOGIN, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const json = await response.json();
  console.log(json);
  const { body } = json;

  if (!body) {
    throw new Error('Credentials incorrects');
  }

  if (!body.token) {
    throw new Error('Token missed in the response');
  }

  return body.token;
}

/**
 * This function validate the token saved in localStorage
 */
export async function validateToken() {
  const result = await getToDos();
  if (result.errors) {
    return false;
  }

  return true;
}
