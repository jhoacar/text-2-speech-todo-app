const SERVER_API = import.meta.env.VITE_SERVER_API || '/';

const REGISTER_USER = `${SERVER_API}/users`;

/**
 * This function make the register and returns the message
 * @param {object} user
 * @returns
 */
export async function handleRegister(user) {
  const { name, email, password } = user;

  if (!name || !email || !password) { throw new Error('All the information is required - name, email and password'); }

  const response = await fetch(REGISTER_USER, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, email, password }),
  });

  const json = await response.json();
  console.log(json);
  const { body } = json;

  if (!body) {
    throw new Error('An error has ocurred in the register');
  }

  if (!body.user) {
    throw new Error('User is not registered');
  }

  return body.message;
}
