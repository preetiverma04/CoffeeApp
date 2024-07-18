import React from "react";
import { StyleSheet, Text } from 'react-native';
import { RPW,RPH } from "./ScreenSize";
const Headings = () => {
    return (
        <>
            <Text style={headingsTextStyle.HeadingsText}>Find The Best {"\n"}Coffee For You</Text>
        </>
    );
}
const headingsTextStyle=StyleSheet.create({
    HeadingsText:{
       fontFamily:"Poppins-Medium",
       fontWeight:"700",
       marginLeft:RPW(5),
       color:"white",
       fontSize:RPW(9),
       lineHeight:RPW(12),
    }
})
export default Headings;