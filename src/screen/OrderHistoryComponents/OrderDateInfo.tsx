import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RPW, RPH } from '../../components/ScreenSize';
import colors from '../../utils/Colors';

const OrderDateInfo = () => (
    <View style={styles.orderInfoContainer}>
        <View>
            <Text style={styles.orderText}>Order Date</Text>
            <Text style={styles.orderDate}>20 March 16:23</Text>
        </View>
        <View>
            <Text style={styles.totalAmountText}>Total Amount</Text>
            <Text style={styles.totalAmountPrice}>$70.67</Text>
        </View>
    </View>
);

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
        fontFamily: "Poppins-Medium",
        fontSize: RPW(5),
        color: colors.copperRed,
    },
});

export default OrderDateInfo;
