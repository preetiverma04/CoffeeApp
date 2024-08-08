import React from 'react';
import { View, StyleSheet } from 'react-native';
import CustomPaymentButton from '../../components/CustomPaymentButton';
import imagesPath from '../../components/ImagePath/imagesPath';
const PaymentMethods = () => {
    return (
        <View style={styles.paymentButtonContainer}>
            <CustomPaymentButton img={imagesPath.wallet} text="Wallet" />
            <CustomPaymentButton img={imagesPath.googlepay} text="Google Pay" />
            <CustomPaymentButton img={imagesPath.applepay} text="Apple Pay" />
            <CustomPaymentButton img={imagesPath.amazon} text="Amazon" />
        </View>
    );
};

const styles = StyleSheet.create({
    paymentButtonContainer: {
        fontFamily: "Poppins-Bold",
        fontWeight: "600",
        alignItems: 'center',
    },
});

export default PaymentMethods;
