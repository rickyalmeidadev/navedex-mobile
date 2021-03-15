import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Column = styled.View`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

Column.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
};

export default Column;
