import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import { RPH, RPW } from '../components/ScreenSize';
import { useNavigation } from '@react-navigation/native';
import PaymentMethods from './PaymentScreenComponents/PaymentMethods';
import PaymentHeader from './PaymentScreenComponents/PaymentHeader';
import CreditCardDetails from './PaymentScreenComponents/CreditCardDetails';
import PaymentModal from './PaymentScreenComponents/PaymentModal';
import PriceDetails from './PaymentScreenComponents/PriceDetails';
import colors from '../utils/Colors';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../components/redux/Action';
const PaymentScreen = () => {
    const navigation = useNavigation();

    const dispatch=useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);

    const handlePaymentButtonPress = () => {
        setModalVisible(true);
        
    };

    const closeModal = () => {
        setModalVisible(false);
       
    };

    return (
        <ScrollView style={styles.ScrollViewStyle}>
            <View style={styles.outerPaymentContainer}>
                <PaymentHeader />
                <CreditCardDetails />
                <PaymentMethods />
                <PaymentModal isVisible={isModalVisible} onClose={closeModal} />
                <PriceDetails onPaymentButtonPress={handlePaymentButtonPress} />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    ScrollViewStyle:{
        flex: 1,
         backgroundColor: colors.background
    },
    outerPaymentContainer: {
        flex: 1,
        backgroundColor: colors.background,
        padding: RPW(5),
    },
    
});

export default PaymentScreen;
