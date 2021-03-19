import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Menu = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M2.667 19h18.666a1.17 1.17 0 001.167-1.167 1.17 1.17 0 00-1.167-1.166H2.667A1.17 1.17 0 001.5 17.833 1.17 1.17 0 002.667 19zm0-5.833h18.666A1.17 1.17 0 0022.5 12a1.17 1.17 0 00-1.167-1.167H2.667A1.17 1.17 0 001.5 12a1.17 1.17 0 001.167 1.167zm-1.167-7a1.17 1.17 0 001.167 1.166h18.666A1.17 1.17 0 0022.5 6.167 1.17 1.17 0 0021.333 5H2.667A1.17 1.17 0 001.5 6.167z"
      fill={color}
    />
  </Svg>
);

export default Menu;
