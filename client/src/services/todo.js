import { getToken } from '../utils/handleToken';

const SERVER_API = import.meta.env.VITE_SERVER_API;

const TODOS_URL = `${SERVER_API}/todos`;

/**
 * This function returns all ToDos
 * @returns
 */
export async function getTodos() {
  const token = getToken();

  if (!token) { throw new Error('You need authorization with a token'); }

  const response = await fetch(TODOS_URL, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  const json = await response.json();
  console.log(json);
  const { body } = json;

  if (!body) {
    throw new Error('An error has ocurred in the server');
  }

  return body.todos;
}
