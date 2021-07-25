import * as React from "react";
import Svg, { Path } from "react-native-svg";

function InstagramIcon(props) {
  return (
    <Svg
      fill="dark"
      stroke="white"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1.4em"
      width="1.4em"
      {...props}
    >
      <Path d="M7 2 H17 A5 5 0 0 1 22 7 V17 A5 5 0 0 1 17 22 H7 A5 5 0 0 1 2 17 V7 A5 5 0 0 1 7 2 z" />
      <Path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
    </Svg>
  );
}

export default InstagramIcon;
