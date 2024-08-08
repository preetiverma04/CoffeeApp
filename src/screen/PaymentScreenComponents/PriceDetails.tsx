import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../../components/CustomButton';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';

const PriceDetails = ({ onPaymentButtonPress, calculateTotalPrice }:any) => {
    const totalPrice = calculateTotalPrice();
    return (
        <View style={styles.priceContainer}>
            <Text style={styles.priceTitle}>Total Price</Text>
            <View style={styles.priceRow}>
                <View style={styles.priceDetail}>
                    <Text style={styles.dollarSign}>$</Text>
                    <Text style={styles.priceText}>{totalPrice}</Text>
                </View>
                <CustomButton
                    text="Pay from credit card"
                    onPress={onPaymentButtonPress}
                    style={styles.customButton}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    priceContainer: {
        marginTop: RPH(2.5),
        marginLeft: RPW(2),
        
    },
    priceTitle: {
        color: colors.textTitleLight,
        fontSize: RPW(4),
        marginLeft: RPW(0),
        marginTop: RPH(1)
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    priceDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dollarSign: {
        fontFamily: "Poppins-Medium",
        fontWeight: '600',
        color: colors.copperRed,
        fontSize: RPW(5),
        marginRight: RPW(1),
    },
    priceText: {
        fontFamily: "Poppins-Medium",
        fontWeight: '600',
        color: colors.textTitleLight,
        fontSize: RPW(5),
    },
    customButton: {
        backgroundColor: colors.copperRed,
        fontSize: RPW(4),
        width: RPW(53),
        borderRadius: RPW(5),
        height: RPH(7),
        marginHorizontal: RPW(5),
        textAlignVertical: 'center',
    },
});

export default PriceDetails;
