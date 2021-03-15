import AsyncStorage from '@react-native-async-storage/async-storage';
import api from './api';

export const getMe = async () => {
  const token = await AsyncStorage.getItem('@navedex/token');

  if (!token) {
    throw new Error('No token');
  }

  const { data } = await api.get('/me');

  return data;
};

export const authenticate = async credentials => {
  const { data } = await api.post('/users/login', credentials);

  return data;
};
