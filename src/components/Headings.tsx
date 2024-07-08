import React from "react";
import { StyleSheet, Text } from 'react-native';
import { RPW,RPH } from "./ScreenSize";
const Headings = () => {
    return (
        <>
            <Text style={headingsTextStyle.HeadingsText}>Find the best {"\n"}Coffee for you</Text>
        </>
    );
}
const headingsTextStyle=StyleSheet.create({
    HeadingsText:{
        // marginTop:RPH(2),
       fontFamily:"Poppins-Medium",
       fontWeight:"bold",
       marginLeft:RPW(5),
        color:"white",
        fontSize:RPW(8),
        lineHeight:RPW(10),
    }

})
export default Headings;