import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Cartsvg = (props: SvgProps) => (
    <Svg
       
        // width={props.width}
        // height={props.height}
        
        fill={props.color}
        viewBox="0 0 960 960"
        {...props}
    >
        <Path transform="translate(0, 960)" d="M212-46q-53 0-89.5-36.5T86-172v-447q0-53 36.5-89.5T212-745h53q0-89 62.5-152T480-960q90 0 152.5 63T695-745h53q53 0 89.5 36.5T874-619v447q0 53-36.5 89.5T748-46H212Zm268-318q90 0 152.5-62.5T695-579H569q0 38-25.5 63.5T480-490q-38 0-63.5-25.5T391-579H265q0 90 62.5 152.5T480-364Zm-89-381h178q0-38-25.5-63.5T480-834q-38 0-63.5 25.5T391-745Z" />
    </Svg>
)
export default Cartsvg;
