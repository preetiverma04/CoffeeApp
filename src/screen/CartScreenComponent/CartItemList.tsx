import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import CartItem from '../CartScreenComponent/CartItem';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import CustomButton from '../../components/CustomButton';
const CartItemsList = ({ data, quantities, onAdd, onMinus, calculateTotalPrice, onPayPress }: any) => {
    const renderItemsdata = ({ item }: any) => (
        <CartItem
            item={item}
            quantity={quantities[item.id]}
            onAdd={onAdd}
            onMinus={onMinus}
        />
    );
    return (
        <FlatList
            data={data}
            renderItem={renderItemsdata}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: RPH(1) }}
            ListFooterComponent={() => (
                <>
                    <View style={styles.priceOuterContainer}>
                        <View style={{ flexDirection: "column" }}>
                            <View style={styles.TotalPriceConatiner}>
                                <Text style={styles.TotalPriceText}>
                                    Total Price
                                </Text>
                            </View>
                            <View style={styles.priceInnerContainer}>
                                <Text style={styles.dolarStyle}>
                                    $
                                </Text>
                                <Text style={styles.price}>{calculateTotalPrice()}</Text>
                            </View>
                        </View>

                        <CustomButton
                            text={"Pay"}
                            onPress={onPayPress}
                            style={styles.CustumButtonText}
                        />

                    </View>
                </>
            )}
        />
    );
};
const styles = StyleSheet.create({
    TotalPriceConatiner: {},
    TotalPriceText: {
        color: colors.textSubtitle,
        fontWeight: "600",
        fontFamily: "Poppins-Medium"
    },
    dolarStyle: {
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
        justifyContent: "space-between"
    },
    CustumButtonText: {
        fontSize: RPW(5),
        fontWeight: "600",
        fontFamily: "Poppins-Medium",
        width: RPW(60),
    }
});
export default CartItemsList;