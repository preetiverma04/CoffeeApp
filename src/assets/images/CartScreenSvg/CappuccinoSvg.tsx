import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const CartCappuccinoSvg = (props: SvgProps) => (
    <Svg  width={props.width} height={props.height} {...props}>
        <Path fill="#063855" fillRule="evenodd" d="M0 0h48v1H0z" />
    </Svg>
)
export default CartCappuccinoSvg;
