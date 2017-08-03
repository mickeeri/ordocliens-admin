import { authenticateUser, signInUser } from './api';
import {
  getAuthToken,
  setAuthToken,
  removeAuthToken,
} from '../utils/localStorage';

const auth = {
  isAuthenticated: false,
  async authenticateWithToken() {
    const authToken = await getAuthToken();

    if (authToken) {
      try {
        const response = await authenticateUser(authToken);
        this.isAuthenticated = true;
        return response;
      } catch (err) {
        this.isAuthenticated = false;
      }
    } else {
      this.isAuthenticated = false;
      throw new Error('Missing auth token');
    }
  },
  async authenticateWithCredentials(credentials) {
    try {
      const response = await signInUser(credentials);
      setAuthToken(response.auth.authToken);
      this.isAuthenticated = true;
      return response;
    } catch (err) {
      this.isAuthenticated = false;
      throw err;
    }
  },
  signout(cb) {
    this.isAuthenticated = false;
    removeAuthToken();
    cb();
  },
};

export default auth;
