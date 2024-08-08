import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { format } from 'date-fns';
import { RPW, RPH } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import AsyncStorage from '@react-native-async-storage/async-storage';


const OrderDateInfo = ({ calculateTotalPrice }:any) => {
   
    const today = new Date();
//    const datestore = async () => {
//         try {

//             await AsyncStorage.setItem("OrderDateInfo", JSON.stringify(today))

//         }
//         catch (error) {
            

//         }
//     }
    const formattedDate = format(today, 'dd MMMM'); 
    const formattedTime = format(today, 'HH:mm');      
    return (
        <View style={styles.orderInfoContainer}>
            <View>
                <Text style={styles.orderText}>Order Date</Text>
                <Text style={styles.orderDate}>{`${formattedDate} ${formattedTime}`}</Text>
            </View>
            <View>
                <Text style={styles.totalAmountText}>Total Amount</Text>
                <Text style={styles.totalAmountPrice}>{calculateTotalPrice() }</Text>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    orderInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: RPW(5),
        marginVertical: RPW(3),
    },
    orderText: {
        fontFamily: "Poppins-Medium",
        fontSize: RPW(4),
        color: colors.textTitleLight,
    },
    orderDate: {
        fontFamily: "Poppins-Medium",
        fontSize: RPH(2),
        color: colors.textTitleLight,
    },
    totalAmountText: {
        fontFamily: "Poppins-Medium",
        fontSize: RPW(4),
        color: colors.textTitleLight,
    },
    totalAmountPrice: {
        fontFamily: "Poppins-Bold",
        fontSize: RPW(5),
        color: colors.copperRed,
    },
});
export default OrderDateInfo;
