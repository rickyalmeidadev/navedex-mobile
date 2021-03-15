import styled from 'styled-components/native';
import { flexbox, layout, space } from 'styled-system';
import propTypes from '@styled-system/prop-types';

const Image = styled.Image`
  ${flexbox}
  ${layout}
  ${space}
`;

Image.propTypes = {
  ...propTypes.flexbox,
  ...propTypes.layout,
  ...propTypes.space,
};

export default Image;
