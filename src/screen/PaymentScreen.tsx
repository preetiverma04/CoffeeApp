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
import { useDispatch, useSelector } from 'react-redux';
import { addToOrderHistory, removeFromCart } from '../components/redux/Action';
const PaymentScreen = () => {
    
    const calculateTotalPrice = (items: any[]) => {
        return items.reduce((total, item) => {
            const selectedPrice = item.prices.find(priceItem => priceItem.size === item.selectedSize)?.price || item.prices[0].price;
            return total + (selectedPrice * (item.quantity || 1));
        }, 0).toFixed(2);
    };
    const navigation = useNavigation();
    const CartItems = useSelector((state) => state.Cart.Cart);
    const dispatch=useDispatch();
    const [isModalVisible, setModalVisible] = useState(false);
    const handlePaymentButtonPress = () => {
        setModalVisible(true);
        dispatch(removeFromCart(CartItems)); 
        console.log("Removing cart data");
        setTimeout(() => {
            console.log("ordered history navigate")
            navigation.navigate("OrderHistoryScreen", { CartItems: CartItems });
        }, 2000);
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
                <PriceDetails onPaymentButtonPress={handlePaymentButtonPress} calculateTotalPrice={() => calculateTotalPrice(CartItems)}/>
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
