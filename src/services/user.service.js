import axios from 'axios';
import authHeader from './auth-header';
import api from './api.ts';

class UserService {
  getPublicContent() {
    return axios.get(api.API_URL + 'users', { headers: authHeader() });
  }

 /* getUserBoard() {
    return axios.get(API_URL + 'user', { headers: authHeader() });
  }

  getModeratorBoard() {
    return axios.get(API_URL + 'mod', { headers: authHeader() });
  }

  getAdminBoard() {
    return axios.get(API_URL + 'admin', { headers: authHeader() });
  }*/
} 

export default new UserService();