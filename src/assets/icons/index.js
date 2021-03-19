import { string } from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { space } from 'styled-system';
import ArrowLeft from './ArrowLeft';
import Close from './Close';
import Delete from './Delete';
import Edit from './Edit';
import Menu from './Menu';

const dictionary = {
  'arrow-left': ArrowLeft,
  'close': Close,
  'delete': Delete,
  'edit': Edit,
  'menu': Menu,
};

const Icon = ({ color, name, ...props }) => {
  const StyledIcon = styled(dictionary[name])`
    ${space}
  `;

  return <StyledIcon color={color} {...props} />;
};

Icon.defaultProps = {
  color: 'black',
};

Icon.propTypes = {
  color: string,
  name: string,
};

export default Icon;
