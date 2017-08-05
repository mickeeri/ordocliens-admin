import { camelizeKeys, decamelizeKeys } from 'humps';
import { getAuthToken } from '../utils/localStorage';
import { normalize } from 'normalizr';
import * as schemas from './schemas';

const BASE_URL = 'http://localhost:3090';

async function makeFetchRequest({
  path,
  method = 'GET',
  adminApi = true,
  body,
  authToken = getAuthToken(),
  schema,
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

  // Normalize response
  if (schema) {
    const normalizedResponse = await normalize(camelizedResponse[path], schema);

    return {
      all: normalizedResponse.entities[path],
      ids: normalizedResponse.result,
    };
  }

  return camelizedResponse;
}

export async function fetchUsers() {
  return await makeFetchRequest({
    path: 'users',
    schema: schemas.arrayOfUsers,
  });
}

export async function fetchFirms() {
  return await makeFetchRequest({
    path: 'firms',
    schema: schemas.arrayOfFirms,
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
