import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Homesvg = (props: SvgProps) => (
    <Svg
        
        // width={props.width}
        // height={props.height}
        fill={props.color}
        viewBox="0 0 960 960"
        {...props}
    >
        <Path transform="translate(0, 960)"  d="M126-86v-531l354-266 354 265.67V-86H568v-322H392v322H126Z" />
    </Svg>
)
export default Homesvg
