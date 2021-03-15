import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { ScreenLoader } from '../components';
import { useAuthentication } from '../hooks';

const Navigation = () => {
  const { isLoading, user } = useAuthentication();

  if (isLoading) {
    return <ScreenLoader />;
  }

  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Navigation;
