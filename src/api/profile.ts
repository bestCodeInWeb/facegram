import axios from "axios";
import { AuthServiceData, ServerProfile } from "../types/interfaces";

const BASE_URL = 'https://social-network.samuraijs.com/api/1.0';

export const getProfile = (userId: number) => {
  return axios.get<ServerProfile>(`${BASE_URL}/profile/${userId}`);
}

export const getStatus = (userId: number) => {
  return axios.get<string>(`${BASE_URL}/profile/status/${userId}`);
}

export const setNewStatus = (status: string = '') => {
  return axios.put<AuthServiceData>(`${BASE_URL}/profile/status`, {status}, {
    withCredentials: true,
    headers: {
      "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
    }
  });
}

export const savePhoto = (file: any) => {
  let formData = new FormData();
  formData.append('image', file);

  return axios.put(`${BASE_URL}/profile/photo`, formData, {
    withCredentials: true,
    headers: {
      "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661",
      "Content-Type": "multipart/form-data"
    }
  });
}

export const saveProfile = (profile: any) => {
  return axios.put(`${BASE_URL}/profile`, profile, {
    withCredentials: true,
    headers: {
      "API-KEY": "cd941000-7c4d-4ad0-8431-3c49a2bf1661"
    }
  }); 
}
