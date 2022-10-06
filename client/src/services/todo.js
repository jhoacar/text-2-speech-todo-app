import { getToken } from '../utils/handleToken';

const SERVER_API = import.meta.env.VITE_SERVER_API || '/';

const TODOS_URL = `${SERVER_API}/todos`;

/**
 * This function returns all ToDos
 * @returns
 */
export async function getToDos() {
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

/**
 * This function get a ToDo by Id
 * @returns
 */
export async function getToDo(id) {
  const token = getToken();

  if (!token) { throw new Error('You need authorization with a token'); }

  if (!id) { throw new Error('All the information is required - id'); }

  const response = await fetch(`${TODOS_URL}/${id}`, {
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

  return body.todo;
}

/**
 * This function create a ToDo
 * @returns
 */
export async function createToDo(toDo) {
  const token = getToken();

  if (!token) { throw new Error('You need authorization with a token'); }

  console.log(toDo);
  const { title, text } = toDo;

  if (!title || !text) { throw new Error('All the information is required - text and title'); }

  const response = await fetch(TODOS_URL, {
    method: 'POST',
    headers: {
      Authorization: token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ title, text }),
  });

  const json = await response.json();
  console.log(json);
  const { body } = json;

  if (!body) {
    throw new Error('An error has ocurred in the server');
  }

  return body.todo;
}

/**
 * This function update a ToDo
 * @returns
 */
export async function updateToDo(id, toDo) {
  const token = getToken();

  if (!token) { throw new Error('You need authorization with a token'); }

  if (!id) { throw new Error('All the information is required - id'); }

  const response = await fetch(`${TODOS_URL}/${id}`, {
    method: 'PUT',
    headers: {
      Authorization: token,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(toDo),
  });

  const json = await response.json();
  console.log(json);
  const { body } = json;

  if (!body) {
    throw new Error('An error has ocurred in the server');
  }

  return body.result;
}

/**
 * This function delete a ToDo by _id
 * @returns
 */
export async function removeToDo(id) {
  const token = getToken();

  if (!token) { throw new Error('You need authorization with a token'); }

  if (!id) { throw new Error('All the information is required - id'); }

  const response = await fetch(`${TODOS_URL}/${id}`, {
    method: 'DELETE',
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

  return body.result;
}
