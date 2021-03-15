import React from 'react';
import { Alert, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Column, Image, TextField } from '../../components';
import { useAuthentication } from '../../hooks';
import { loginSchema } from '../../helpers';
import logo from '../../assets/logo.png';

const { height } = Dimensions.get('screen');

const Login = () => {
  const { login } = useAuthentication();

  const { control, errors, formState, handleSubmit } = useForm({
    defaultValues: { email: '', password: '' },
    resolver: yupResolver(loginSchema),
  });

  const handleChangeFocus = name => () => {
    control.fieldsRef.current[name]?.ref.focus();
  };

  const handleLogin = async data => {
    Keyboard.dismiss();

    try {
      await login(data);
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Column bg="white" flex={1} alignItems="center" pt={height / 6} px="16px">
        <Image source={logo} mb="56px" />
        <Controller
          name="email"
          control={control}
          render={props => (
            <TextField
              type="email"
              label="E-mail"
              placeholder="E-mail"
              returnKeyType="next"
              onChangeFocus={handleChangeFocus('password')}
              error={errors.email?.message}
              mb="32px"
              {...props}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={props => (
            <TextField
              type="password"
              label="Senha"
              placeholder="Senha"
              returnKeyType="go"
              onSubmitEditing={handleSubmit(handleLogin)}
              error={errors.password?.message}
              mb="40px"
              {...props}
            />
          )}
        />
        <Button onPress={handleSubmit(handleLogin)} isLoading={formState.isSubmitting}>
          Entrar
        </Button>
      </Column>
    </TouchableWithoutFeedback>
  );
};

export default Login;
