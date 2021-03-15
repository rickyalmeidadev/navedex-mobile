import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../../screens';

const { Navigator, Screen } = createStackNavigator();

const AuthenticationStack = () => (
  <Navigator screenOptions={{ headerShown: false }}>
    <Screen name="Login" component={Login} />
  </Navigator>
);

export default AuthenticationStack;
