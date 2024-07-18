import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import LotteeCart from './CartScreenComponent/LotteeCart';
import colors from '../utils/Colors';
import CartItemsList from '../screen/CartScreenComponent/CartItemList'; 
import { removeFromCart } from '../components/redux/Action';
const CartScreen = () => {
    const dispatch=useDispatch();
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const CartItems = useSelector((state) => state.Cart.Cart);
    const navigation = useNavigation();
    useEffect(() => {
        const initialQuantities = {};
        for (const index in CartItems) {
            const item = CartItems[index];
            initialQuantities[item.id] = 1;
        }
        setQuantities(initialQuantities);
    }, [CartItems]);

    const handleAddItems = (id: string) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] + 1,
        }));
    };
    const handleMinusItems = (id: string) => {
        setQuantities((prevQuantities) => ({
            ...prevQuantities,
            [id]: prevQuantities[id] > 1 ? prevQuantities[id] - 1 : 1,
        }));
    };
    const calculateTotalPrice = () => {
        let total = 0;
        for (const index in CartItems) {
            const item = CartItems[index];
            total += item.price * quantities[item.id];
        }
        return total.toFixed(2);
    };
    const handlePayPress = () => {
        // for (const item of CartItems) {
        //     dispatch(removeFromCart(item));
        //     console.log("===========data remove======");
        //     console.log(item);
        // }
        navigation.navigate("PaymentScreen");
    };
    return (
        <View style={styles.cartScreenOuter}>
            <View>
                <Header text={"Cart Screen"} />
            </View>
            {
                CartItems.length == 0 ? <LotteeCart /> : <CartItemsList
                    data={CartItems}
                    quantities={quantities}
                    onAdd={handleAddItems}
                    onMinus={handleMinusItems}
                    calculateTotalPrice={calculateTotalPrice}
                    onPayPress={handlePayPress}  
                />
            }
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





