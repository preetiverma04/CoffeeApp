import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Ordernotification = (props: SvgProps) => (
    <Svg
        // width={props.width}
        // height={props.height}
        fill={props.color}
        viewBox="0 0 960 960"
        {...props} >
        <Path transform="translate(0, 960)" d="M126-166v-126h68v-246q0-96 55.5-173T397-811v-20q0-34.58 24.21-58.79T480-914q34.58 0 58.79 24.21T563-831v20q93 23 148 99.5T766-538v246h68v126H126ZM481-35q-37.95 0-64.98-26.73Q389-88.46 389-126h183q0 38-26.73 64.5T481-35Z" />
    </Svg>
)
export default Ordernotification;
