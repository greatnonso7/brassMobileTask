import * as React from "react"
import Svg, { Rect, Path } from 'react-native-svg';

const SvgComponent = () => (
  <Svg
    width={33}
    height={33}
    fill="none">
    <Rect width={33} height={33} rx={16.5} fill="#E6F5F6" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m15.243 16.657-4.95-4.95a1 1 0 1 1 1.414-1.414l4.95 4.95 4.95-4.95a1 1 0 1 1 1.414 1.414l-4.95 4.95 4.95 4.95a1 1 0 0 1-1.414 1.414l-4.95-4.95-4.95 4.95a1 1 0 0 1-1.414-1.415l4.95-4.95Z"
      fill="#0898A0"
    />
  </Svg>
)

export default SvgComponent
