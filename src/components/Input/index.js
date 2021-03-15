import propTypes from '@styled-system/prop-types';
import styled, { css } from 'styled-components/native';
import { layout, space } from 'styled-system';

const Input = styled.TextInput.attrs({
  placeholderTextColor: 'gray',
})(
  ({ error }) => css`
    border: 1px solid ${error ? 'red' : 'black'};
    color: black;
    font-size: 16px;
    height: 40px;
    padding: 8px;
    width: 100%;

    ${layout}
    ${space}
  `,
);

Input.propTypes = {
  ...propTypes.layout,
  ...propTypes.space,
};

export default Input;
