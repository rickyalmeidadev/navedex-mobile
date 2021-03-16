import { differenceInYears, formatDistanceToNow } from 'date-fns';
import locale from 'date-fns/locale/pt-BR';
import api from './api';

export const getNavers = async () => {
  const { data } = await api.get('/navers');

  return data;
};

export const getNaverById = id => async () => {
  const { data } = await api.get(`/navers/${id}`);

  return {
    ...data,
    age: differenceInYears(new Date(), new Date(data.birthdate)),
    company_time: formatDistanceToNow(new Date(data.admission_date), { locale }),
  };
};

export const createNaver = async payload => {
  const response = await api.post('/navers', payload);

  return response;
};

export const updateNaverById = async (id, payload) => {
  const response = await api.put(`/navers/${id}`, payload);

  return response;
};
