import React from 'react'
import { TouchableOpacity, View,Text, StyleSheet, Image } from 'react-native';
import { RPW,RPH } from '../components/ScreenSize';
const CustomPaymentButton = (props:any) => {
    return (
        <>
            <View style={{ marginTop: RPW(3), alignItems: "center", }} >
            <TouchableOpacity style={styles.CustomPaymentButtonStyles} onPress={()=>{console.log("hiii")}}>

                <View style={styles.CustomPaymentOuter}>
                <Image source={props.img}/>
                <Text style={styles.CustumPaymentText}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        </View>
        </>
    );
}
const styles=StyleSheet.create({
    CustomPaymentButtonStyles: {
        fontFamily:"Poppins-Bold",
        fontWeight:'600',
        backgroundColor: "#262B33",
        width: RPW(90),
        height: RPW(13),
        borderRadius: RPW(9),
        justifyContent: "center" 
    },
    CustumPaymentText: {
        
        fontWeight:'600',
        fontFamily:'Poppins-Bold',
        textAlignVertical:"center",
        color: "white",  
        marginHorizontal:RPW(5),
       
    },
    CustomPaymentOuter:{
        flexDirection: "row",
        justifyContent: "flex-start",
        marginHorizontal: RPW(7)
    }

})
export default CustomPaymentButton;