import axios from 'axios';
import { AuthServiceData, UserLogin } from '../types/interfaces';

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';

export const initCurrentUser = () => {
  return axios.get<AuthServiceData>(`${BASE_URL}/auth/me`, {withCredentials: true});
}

export const login = (user: UserLogin) => {
  return axios.post<AuthServiceData>(`${BASE_URL}/auth/login`, user, {
    withCredentials: true,
    headers: {
      "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
    }
  }); 
}

export const logout = () => {
  return axios.delete<AuthServiceData>(`${BASE_URL}/auth/login`, {
    withCredentials: true,
    headers: {
      "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
    }
  });
}

export const getCaptchaUrl = () => {
  return axios.get(`${BASE_URL}/security/get-captcha-url`, {withCredentials: true});
}
