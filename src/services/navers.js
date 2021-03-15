import api from './api';

export const getNavers = async () => {
  const { data } = await api.get('/navers');

  return data;
};

export const getNaverById = id => async () => {
  const { data } = await api.get(`/navers/${id}`);

  return data;
};
