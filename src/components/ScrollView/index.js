import styled from 'styled-components/native';
import { border, color, flexbox, layout, position, space, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const ScrollView = styled.ScrollView`
  ${border}
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

ScrollView.propTypes = {
  ...propTypes.border,
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
};

export default ScrollView;
