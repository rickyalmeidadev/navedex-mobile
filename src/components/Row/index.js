import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Row = styled.View`
  flex-direction: row;

  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

Row.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
};

export default Row;
