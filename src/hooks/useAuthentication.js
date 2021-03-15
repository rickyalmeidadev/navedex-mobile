import React, { createContext, useContext } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getMe, authenticate } from '../services/users';

const AuthenticationContext = createContext({});

const AuthenticationProvider = ({ children }) => {
  const queryClient = useQueryClient();

  const { data: user, isLoading } = useQuery('user', getMe);

  const login = async credentials => {
    const data = await authenticate(credentials);

    await AsyncStorage.setItem('@navedex/token', data.token);

    queryClient.setQueryData('user', data);
  };

  const logout = async () => {
    await AsyncStorage.removeItem('@navedex/token');

    queryClient.setQueryData('user', null);
  };

  return (
    <AuthenticationContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthenticationContext.Provider>
  );
};

const useAuthentication = () => useContext(AuthenticationContext);

export { AuthenticationProvider, useAuthentication };
