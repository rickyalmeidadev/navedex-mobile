import React from 'react';
import Svg, { Path } from 'react-native-svg';

const Close = ({ color, ...props }) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M18.69 5.321a1.057 1.057 0 00-1.498 0L12 10.503 6.808 5.31A1.057 1.057 0 105.31 6.808L10.503 12 5.31 17.192a1.057 1.057 0 101.497 1.497L12 13.497l5.192 5.192a1.057 1.057 0 101.497-1.497L13.497 12l5.192-5.192a1.064 1.064 0 000-1.487z"
      fill={color}
    />
  </Svg>
);

export default Close;
