import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import LotteeCart from './CartScreenComponent/LotteeCart';
import colors from '../utils/Colors';
import CartItemsList from '../screen/CartScreenComponent/CartItemList';
import { decrementItemQuantity, incrementItemQuantity, removeFromCart } from '../components/redux/Action';
const CartScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const CartItems = useSelector(state => state.Cart.Cart);
    console.log("cart Items in CartScreen ",CartItems)
    const [quantities, setQuantities] = useState({});
    console.log(JSON.stringify(CartItems), "23567cartitem s-=-=-=-=-=-=-=-=-=")
    const handleAddItems = ( id,size) => {
        dispatch(incrementItemQuantity(id, size));
    };
    const handleMinusItems = (id,size) => {
        dispatch(decrementItemQuantity(id, size));
    };
    const calculateTotalPrice = () => {
        return CartItems.reduce((total, item) => {
            const quantity = item.prices?.find(price => price.size === item.selectedSize)?.quantity || item.prices?.[0]?.quantity || 0;
            const selectedPrice = item.prices.find(priceItem => priceItem.size === item.selectedSize)?.price || item.prices?.[0]?.price || 0;
            return total + (selectedPrice * quantity);
        }, 0).toFixed(2);
    };
    const handlePayPress = () => {
        navigation.navigate("PaymentScreen");
    };
    return (
        <View style={styles.cartScreenOuter}>
            <Header text={"Cart Screen"} />
            {CartItems.length === 0 ? (
                <LotteeCart />
            ) : (
                <CartItemsList
                    data={CartItems}
                    quantities={quantities}
                    onAdd={handleAddItems}
                    onMinus={handleMinusItems}
                    calculateTotalPrice={calculateTotalPrice}
                    onPayPress={handlePayPress}
                />
            )}
        </View>
    );
};
const styles = StyleSheet.create({
    cartScreenOuter: {
        backgroundColor: colors.background,
        flex: 1,
    },
});
export default CartScreen;
