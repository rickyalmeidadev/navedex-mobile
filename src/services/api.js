import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'https://navedex-api.herokuapp.com/v1/',
});

api.interceptors.request.use(async request => {
  const token = await AsyncStorage.getItem('@navedex/token');

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
});

export default api;
