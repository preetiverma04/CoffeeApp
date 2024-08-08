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
    const [quantities, setQuantities] = useState({});

    console.log(JSON.stringify(CartItems), "23567cartitem s-=-=-=-=-=-=-=-=-=")
    // useEffect(() => {
    //     const updatedQuantities = {};
    //     CartItems.forEach(item => {
    //         item.prices.forEach(price => {
    //             updatedQuantities[`${item.id}-${price.size}`] = price.quantity || 1;
    //         });
    //     });
    //     setQuantities(updatedQuantities);
    // }, [CartItems]);


    const handleAddItems = (id, size) => {
        dispatch(incrementItemQuantity(id, size));
    };

    const handleMinusItems = (id, size) => {
        dispatch(decrementItemQuantity(id, size));

    };


    const calculateTotalPrice = () => {
        return CartItems.reduce((total, item) => {
            const prices = Array.isArray(item.prices) ? item.prices : [];
            const quantity = item.prices?.find(price => price.size === item.selectedSize)?.quantity || item.prices?.[0]?.quantity || 0;
            console.log('Item prices:', prices);
            console.log('Selected size:', item.selectedSize);
            const selectedPrice = prices.find(priceItem => priceItem.size === item.selectedSize)?.price || prices[0]?.price || 0;
            console.log('Selected price:', selectedPrice);
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
