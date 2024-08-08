import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CartItem from '../CartScreenComponent/CartItem';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';

const CartItemsList = ({ data, quantities, onAdd, onMinus, calculateTotalPrice, onPayPress }: any) => {
    console.log('CartItemsList Data:', data);
    console.log('Quantities:', quantities);
    console.log('Total Price Calculation:', calculateTotalPrice());

    const renderItemsData = ({ item }: any) => (
        <CartItem
            item={item}
            // quantity={quantities[item.id]} // Ensure item.id is correctly used here
            onAdd={() => onAdd(item.id, item.selectedSize)} // Make sure to pass correct params
            onMinus={() => onMinus(item.id, item.selectedSize)} // Make sure to pass correct params
        />
    );

    return (
        <FlatList
            data={data}
            renderItem={renderItemsData}
            keyExtractor={(item) => item.id.toString()} // Ensure ID is a string
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: RPH(1) }}
            ListFooterComponent={() => (
                <View style={styles.priceOuterContainer}>
                    <View style={{ flexDirection: "column" }}>
                        <View style={styles.TotalPriceContainer}>
                            <Text style={styles.TotalPriceText}>Total Price</Text>
                        </View>
                        <View style={styles.priceInnerContainer}>
                            <Text style={styles.dollarStyle}>$</Text>
                            <Text style={styles.price}>{calculateTotalPrice()}</Text>
                        </View>
                    </View>
                    <CustomButton
                        text={"Pay"}
                        onPress={onPayPress}
                        style={styles.CustomButtonText}
                    />
                </View>
            )}
        />
    );
};

const styles = StyleSheet.create({
    TotalPriceContainer: {},
    TotalPriceText: {
        color: colors.textSubtitle,
        fontWeight: "600",
        fontFamily: "Poppins-Medium",
    },
    dollarStyle: {
        fontSize: RPW(5),
        color: colors.copperRed,
        fontWeight: "600",
        fontFamily: "Poppins-Bold",
        marginLeft: RPW(1),
    },
    price: {
        fontSize: RPW(5),
        color: colors.textTitleLight,
        fontWeight: "600",
        fontFamily: "Poppins-Medium",
        marginLeft: RPW(2),
    },
    priceInnerContainer: {
        flexDirection: "row",
    },
    priceOuterContainer: {
        marginHorizontal: RPW(5),
        marginTop: RPH(2),
        flexDirection: "row",
        marginBottom: RPW(12),
        justifyContent: "space-between",
    },
    CustomButtonText: {
        fontSize: RPW(5),
        fontWeight: "600",
        fontFamily: "Poppins-Medium",
        width: RPW(60),
    },
});

export default CartItemsList;
