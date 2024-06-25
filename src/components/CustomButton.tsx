import React from 'react'
import { TouchableOpacity,Text, StyleSheet } from 'react-native';
import { RPH, RPW } from './ScreenSize';
const CustomButton = (props:any) => {
    return (
        <>
        <TouchableOpacity style={[styles.CustomButtonStyles,props.style]} onPress={props.onPress}>
                <Text style={[styles.Custumbuttontext, props.style]} >{props.text} </Text>
        </TouchableOpacity>
        </>
    );
}
const styles=StyleSheet.create({
    CustomButtonStyles:{
        width:RPW(45),
        height:RPH(7),
        backgroundColor:"orange",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RPW(5),

    },
    Custumbuttontext:{
        fontSize:RPW(3),
        color:"white",
        textAlign:"center",
        justifyContent:"center",
        alignSelf:"center",
        alignItems:"center",

    }

});

export default CustomButton;