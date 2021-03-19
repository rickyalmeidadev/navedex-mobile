import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Navigation from './navigators';
import { AlertProvider, AuthenticationProvider } from './hooks';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 1 } } });

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthenticationProvider>
      <ThemeProvider theme={{}}>
        <AlertProvider>
          <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Navigation />
          </NavigationContainer>
        </AlertProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  </QueryClientProvider>
);

export default App;
