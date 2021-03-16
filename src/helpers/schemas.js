import { addMethod, mixed, object, setLocale, string } from 'yup';
import { displayDateStringToDate } from './formatters';

setLocale({
  mixed: {
    required: 'Campo obrigatório',
  },
  string: {
    email: 'Insira um e-mail válido',
    min: 'Insira no mínimo ${min} caracteres',
    max: 'Insira no máximo ${max} caracteres',
  },
});

addMethod(mixed, 'dateString', function (message) {
  return this.test('date-string', message, function (value) {
    if (!value) {
      return false;
    }

    const date = displayDateStringToDate(value);

    if (date.toString() === 'Invalid Date') {
      throw this.createError({ message: 'Insira uma data válida' });
    }

    return true;
  });
});

export const loginSchema = object({
  email: string().email().required(),
  password: string().required().min(6),
});

export const naverSchema = object({
  name: string().required(),
  job_role: string().required(),
  birthdate: string().required().dateString(),
  admission_date: string().required().dateString(),
  project: string().required(),
  url: string().required().url('Insira uma URL válida'),
});
