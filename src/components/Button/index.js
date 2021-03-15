import React from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components';
import { flexbox, layout, space } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Typography } from '..';
import { ActivityIndicator } from 'react-native';

const Button = ({ children, isLoading, onPress, variant, ...props }) => {
  const color = variant === 'outlined' ? 'black' : 'white';

  return (
    <TouchableOpacity disabled={isLoading} onPress={onPress} variant={variant} {...props}>
      {isLoading ? (
        <ActivityIndicator color={color} size="small" />
      ) : (
        <Typography color={color} fontWeight="bold">
          {children}
        </Typography>
      )}
    </TouchableOpacity>
  );
};

const TouchableOpacity = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  align-items: center;
  background-color: ${({ variant }) => (variant === 'outlined' ? 'white' : 'black')};
  border: 1px solid black;
  flex: 1;
  height: 40px;
  justify-content: center;

  ${flexbox}
  ${layout}
  ${space}
`;

Button.propTypes = {
  children: string,
  isLoading: bool,
  onPress: func,
  variant: string,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space,
};

export default Button;
