import { camelizeKeys, decamelizeKeys } from 'humps';
import { getAuthToken } from '../utils/localStorage';

const baseUrl = 'http://localhost:3090/v1';

export async function fetchUsers() {
  const url = `${baseUrl}/users`;

  const response = await fetch(url);
  const parsedResponse = await response.json();

  console.log(parsedResponse);
}

export async function authenticateUser(authToken) {
  const url = `${baseUrl}/current_user`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: authToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message);
  }

  return camelizeKeys(body);
}

export async function signInUser(credentials) {
  const url = `${baseUrl}/authenticate`;

  const requestBody = { auth: credentials };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: '',
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(decamelizeKeys(requestBody)),
  });

  const body = await response.json();

  if (!response.ok) {
    throw new Error(body.message);
  }

  return camelizeKeys(body);
}
