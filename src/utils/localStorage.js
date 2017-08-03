const AUTH_TOKEN_LS_KEY = 'authToken';

export const getAuthToken = () => {
  const authToken = sessionStorage.getItem(AUTH_TOKEN_LS_KEY);
  return authToken;
};

export const setAuthToken = token => {
  try {
    sessionStorage.setItem(AUTH_TOKEN_LS_KEY, token);
  } catch (e) {
    console.error('Problem with setting auth token', e);
  }
};

export const removeAuthToken = () => {
  try {
    sessionStorage.removeItem(AUTH_TOKEN_LS_KEY);
  } catch (error) {
    console.error(error);
  }
};
