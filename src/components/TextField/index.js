import React, { forwardRef } from 'react';
import { bool, func, string } from 'prop-types';
import styled from 'styled-components/native';
import { layout, space } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import { Column, Typography } from '..';

const TextField = (
  {
    autoCapitalize,
    autoCorrect,
    blurOnSubmit,
    disabled,
    error,
    label,
    onBlur,
    onChange,
    onSubmitEditing,
    placeholder,
    returnKeyType,
    type,
    value,
    ...props
  },
  ref,
) => (
  <Column width={1} {...props}>
    <Typography color={error ? 'red' : 'black'} fontWeight="bold" mb="4px">
      {label}
    </Typography>
    <Input
      autoCapitalize={autoCapitalize}
      autoCorrect={autoCorrect}
      editable={!disabled}
      placeholder={placeholder}
      blurOnSubmit={blurOnSubmit}
      onBlur={onBlur}
      onChangeText={onChange}
      onSubmitEditing={onSubmitEditing}
      error={error}
      value={value}
      ref={ref}
      {...getTypeProps(type)}
    />
    {error && (
      <Typography color="red" mt="4px">
        {error}
      </Typography>
    )}
  </Column>
);

const getTypeProps = type => {
  if (type === 'email') {
    return { autoCapitalize: 'none', autoCorrect: false, keyboardType: 'email-address' };
  }

  if (type === 'password') {
    return { secureTextEntry: true };
  }

  return {};
};

const Input = styled.TextInput.attrs(({ placeholderTextColor }) => ({
  placeholderTextColor: placeholderTextColor ?? 'gray',
}))`
  border: 1px solid ${({ error }) => (error ? 'red' : 'black')};
  color: black;
  font-size: 16px;
  height: 40px;
  padding: 8px;
  width: 100%;

  ${layout}
  ${space}
`;

const ForwardedRefTextField = forwardRef(TextField);

ForwardedRefTextField.propTypes = {
  autoCapitalize: string,
  autoCorrect: bool,
  blurOnSubmit: bool,
  disabled: bool,
  error: string,
  label: string,
  onBlur: func,
  onChange: func,
  onSubmitEditing: func,
  placeholder: string,
  returnKeyType: string,
  type: string,
  value: string,
  ...propTypes.layout,
  ...propTypes.space,
};

export default ForwardedRefTextField;
