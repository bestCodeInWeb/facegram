import axios from 'axios';
import { AuthServiceData, UsersResponse } from '../types/interfaces';

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';

export const getPeople = (currentPage: number, term: string) => {
  return axios.get<UsersResponse>(`${BASE_URL}/users?page=${currentPage}&count=20&term=${term}`, {
    withCredentials: true
  });
}

export const follow = (id: number) => {
  return axios.post<AuthServiceData>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {}, {
    withCredentials: true,
    headers: {
      "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
    }
  })
}

export const unfollow = (id: number) => {
  return axios.delete<AuthServiceData>(`https://social-network.samuraijs.com/api/1.0/follow/${id}`, {
    withCredentials: true,
    headers: {
      "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
    }
  })
}
