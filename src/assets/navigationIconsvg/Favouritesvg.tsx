import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Favouritesvg = (props: SvgProps) => (
    <Svg
        
        width={props.width}
        height={props.height}
        fill={props.color}
        viewBox="0 -960 960 960"
        {...props}
    >
        <Path d="m479-74-81-73q-105-94-173.5-163t-108-124Q77-489 61-536t-16-98q0-109 72.5-182T299-889q51 0 97 18t83 53q37-35 83-53t97-18q109 0 182.5 73T915-634q0 50-15.5 97T844-435.5q-40 54.5-109 124T560-147l-81 73Z" />
    </Svg>
)
export default Favouritesvg
