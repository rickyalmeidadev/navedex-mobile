import { object, setLocale, string } from 'yup';

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

export const loginSchema = object({
  email: string().email().required(),
  password: string().required().min(6),
});
