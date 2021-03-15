import React from 'react';
import { func, shape, string } from 'prop-types';
import { Column, Typography } from '../../components';

const NaverForm = ({ navigation, route }) => {
  const { id } = route.params ?? {};

  return (
    <Column>
      <Typography>NaverForm - {id ?? 'Novo'}</Typography>
    </Column>
  );
};

NaverForm.propTypes = {
  navigation: shape({
    navigate: func,
  }),
  route: {
    params: {
      id: string,
    },
  },
};

export default NaverForm;
