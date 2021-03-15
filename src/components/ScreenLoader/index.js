import React from 'react';
import { ActivityIndicator } from 'react-native';
import { Column } from '..';

const ScreenLoader = () => (
  <Column bg="white" flex={1} justifyContent="center" alignItems="center">
    <ActivityIndicator color="black" size="large" />
  </Column>
);

export default ScreenLoader;
