import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const SearchSvg = (props: SvgProps) => (
    <Svg width={props.width} height={props.height} fill="#e8eaed" viewBox="0 -960 960 960"
        {...props} >
        <Path d="M785-72 525.79-332Q497-313 457-301q-40 12-86 12-121.71 0-206.86-85.2Q79-459.41 79-581.2 79-703 164.2-788q85.21-85 207-85Q493-873 578-787.86q85 85.15 85 206.86 0 47-11.5 85T620-429l261 262-96 95ZM370.59-425q66.59 0 111.5-44.5T527-580.59q0-66.59-44.91-111.5T370.59-737Q304-737 259.5-692.09T215-580.59q0 66.59 44.5 111.09T370.59-425Z" />
    </Svg>
)
export default SearchSvg;
