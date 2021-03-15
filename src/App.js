import 'react-native-gesture-handler';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { NavigationContainer } from '@react-navigation/native';
import { ThemeProvider } from 'styled-components';
import Navigation from './navigators';
import { AuthenticationProvider } from './hooks';

const queryClient = new QueryClient({ defaultOptions: { queries: { retry: 1 } } });

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthenticationProvider>
      <ThemeProvider theme={{}}>
        <NavigationContainer>
          <Navigation />
        </NavigationContainer>
      </ThemeProvider>
    </AuthenticationProvider>
  </QueryClientProvider>
);

export default App;
