import * as React from "react"
import Svg, { Rect, Path } from 'react-native-svg';


const Back = (props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <Svg
    width={33}
    height={33}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect width={33} height={33} rx={16.5} fill="#E6F5F6" />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.668 11.252s-4.502 4.376-4.545 4.412a.974.974 0 0 0 .008 1.502c.048.039 4.4 4.507 4.4 4.507a.998.998 0 0 0 1.407.018.984.984 0 0 0 .018-1.397l-2.804-2.862 9.607.126a.994.994 0 0 0 1.012-.975.994.994 0 0 0-.987-1.002l-9.606-.125 2.878-2.788a.984.984 0 0 0 .018-1.397.999.999 0 0 0-1.406-.019Z"
      fill="#0898A0"
    />
  </Svg>
)

export default Back
