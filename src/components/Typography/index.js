import styled from 'styled-components/native';
import { color, flexbox, layout, position, space, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Typography = styled.Text`
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}
`;

Typography.propTypes = {
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
};

export default Typography;
