import { camelizeKeys, decamelizeKeys } from 'humps';
import { getAuthToken } from '../utils/localStorage';

export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://ordocliens-api.herokuapp.com'
    : 'http://localhost:3090';

async function makeFetchRequest({
  path,
  method = 'GET',
  adminApi = true,
  body,
  authToken = getAuthToken(),
  entityName,
}) {
  const url = adminApi ? `${BASE_URL}/admin/${path}` : `${BASE_URL}/v1/${path}`;

  const response = await fetch(url, {
    method,
    headers: {
      Authorization: authToken,
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: method === 'POST' ? JSON.stringify(decamelizeKeys(body)) : {},
  });

  const responseBody = await response.json();

  if (!response.ok) {
    throw new Error(responseBody.message);
  }

  const camelizedResponse = await camelizeKeys(responseBody);

  if (entityName) {
    return camelizedResponse[entityName];
  }

  return camelizedResponse;
}

export async function fetchUsers() {
  return await makeFetchRequest({
    path: 'users',
    entityName: 'users',
  });
}

export async function fetchUser(userId) {
  return await makeFetchRequest({
    path: `users/${userId}`,
    entityName: 'user',
  });
}

export async function createUser(body) {
  return await makeFetchRequest({
    path: 'users',
    method: 'POST',
    body,
    entityName: 'user',
  });
}

export async function fetchFirms() {
  return await makeFetchRequest({
    path: 'firms',
    entityName: 'firms',
  });
}

export async function authenticateUser(authToken) {
  return await makeFetchRequest({
    path: 'current_user',
    adminApi: false,
    authToken,
  });
}

export async function signInUser(credentials) {
  return await makeFetchRequest({
    path: 'authenticate',
    adminApi: false,
    method: 'POST',
    body: { auth: credentials },
    authToken: null,
  });
}
