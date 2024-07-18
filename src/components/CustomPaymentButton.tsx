import React from 'react'
import { TouchableOpacity, View,Text, StyleSheet, Image } from 'react-native';
import { RPW,RPH } from '../components/ScreenSize';
import LinearGradient from 'react-native-linear-gradient';
const CustomPaymentButton = (props:any) => {
    return (
        <>
            <View style={{ marginTop: RPW(3), alignItems: "center", }} >
            <TouchableOpacity  onPress={()=>{console.log("hiii")}}>
                    <LinearGradient colors={['#262B33', '#262B33', 'black']} style={styles.CustomPaymentButtonStyles} >
                <View style={styles.CustomPaymentOuter}>
                <Image source={props.img}/>
                <Text style={styles.CustumPaymentText}>{props.text}</Text>
                </View>
                    </LinearGradient>
            </TouchableOpacity>
        </View>
        </>
    );
}
const styles=StyleSheet.create({
    CustomPaymentButtonStyles: {
        fontFamily:"Poppins-Bold",
        fontWeight:'600',
        
        width: RPW(90),
        height: RPW(13),
        borderRadius: RPW(9),
        justifyContent: "center" 
    },
    CustumPaymentText: {
        
        fontWeight:'600',
        fontFamily:'Poppins-Medium',
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