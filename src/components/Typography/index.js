import styled from 'styled-components/native';
import { color, flexbox, layout, position, space, typography, variant } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Typography = styled.Text`
  ${color}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
  ${typography}

  font-weight: normal;

  ${variant({
    prop: 'fontWeight',
    variants: {
      bold: { fontFamily: 'Montserrat-SemiBold' },
      normal: { fontFamily: 'Montserrat-Regular' },
    },
  })}
`;

Typography.defaultProps = {
  fontWeight: 'normal',
};

Typography.propTypes = {
  ...propTypes.color,
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.position,
  ...propTypes.space,
  ...propTypes.typography,
};

export default Typography;
