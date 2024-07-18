import * as React from "react"
import Svg, {
    SvgProps,
    Rect,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
const TopimgHome1Svg = (props: SvgProps) => (
    <Svg
      
        width={props.width}
        height={props.height}
        // fill={props.color}
        viewBox="0 0 29 29" 
        {...props}
    >
        <Rect
            
            x={0.5}
            y={0.5}
            fill={props.color}
            stroke="#FFFFFF"
            rx={9.5}
        />
        <Path
            fill="#FFFFFF"
            fillOpacity={5}
            d="M20.833 12.97v-2.648c0-.823-.373-1.155-1.3-1.155h-2.357c-.928 0-1.301.332-1.301 1.155v2.642c0 .829.373 1.155 1.3 1.155h2.357c.928.006 1.301-.326 1.301-1.149ZM20.833 19.532v-2.356c0-.928-.373-1.301-1.3-1.301h-2.357c-.928 0-1.301.373-1.301 1.3v2.357c0 .928.373 1.301 1.3 1.301h2.357c.928 0 1.301-.373 1.301-1.3ZM14.125 12.97v-2.648c0-.823-.373-1.155-1.301-1.155h-2.357c-.927 0-1.3.332-1.3 1.155v2.642c0 .829.373 1.155 1.3 1.155h2.357c.928.006 1.3-.326 1.3-1.149ZM14.125 19.532v-2.356c0-.928-.373-1.301-1.301-1.301h-2.357c-.927 0-1.3.373-1.3 1.3v2.357c0 .928.373 1.301 1.3 1.301h2.357c.928 0 1.3-.373 1.3-1.3Z"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={0}
                x2={26}
                y1={2.5}
                y2={30}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#21262E" />
                <Stop offset={1} stopColor="#21262E" stopOpacity={0} />
            </LinearGradient>
        </Defs>
    </Svg>
)
export default TopimgHome1Svg;
