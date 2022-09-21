import axios from 'axios';
import api from './api.ts';

class AuthService {
  login(user) {
    return axios
      .post(api.API_URL + 'auth/login', {
        username: user.email,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

}

export default new AuthService();
