import React, { useEffect } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import imagesPath from '../../components/ImagePath/imagesPath';
import { useDispatch } from 'react-redux';
import { DECREMENT_ITEM_QUANTITY } from '../../components/redux/Constants';
import { decrementItemQuantity, incrementItemQuantity, removeFromCart } from '../../components/redux/Action';

const CartItem = ({ item, quantities, }) => {
    useEffect(()=>{
        console.log("selected item --------->" , item)
    },[])
    const dispatch = useDispatch()
    const selectedPrices = item.prices.filter(price => price.quantity > 0);
    const hasMultipleSizes = selectedPrices.length > 1;
    return (
        <View style={styles.itemWrapper}>
            <LinearGradient colors={['#21262E', 'black']} style={styles.gradient}>
                {hasMultipleSizes ? (
                    <View>
                        <View style={styles.itemContent}>
                            <Image source={item.image} style={styles.itemImage} />
                            <View style={styles.itemTextContainer}>
                                <Text style={styles.itemTitle}>{item.title}</Text>
                                <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                                <View style={styles.MediumRoastedContainer}>
                                    <Text style={styles.MediumRoastedText}>Medium Roasted</Text>
                                </View>
                            </View>

                        </View>
                        {selectedPrices.map((itemPrice) => {
                            const price = Number(itemPrice.price) || 0;
                            const quantityKey = `${item.id}-${itemPrice.size}`;
                            const quantityValue = quantities[quantityKey] || itemPrice.quantity || 1;
    
                            return (
                                <View key={itemPrice.size} style={styles.sizePriceContainer}>
                                    <View style={styles.sizeContainer}>
                                        <Text style={styles.sizeText}>{itemPrice.size}</Text>
                                    </View>
                                    <View style={styles.priceContainerCart}>
                                        <Text style={styles.dollarSymbolCart}>
                                            {itemPrice.currency}
                                        </Text>
                                        <Text style={styles.priceCartText}>
                                            {price.toFixed(2)}
                                        </Text>
                                        <View style={styles.controlsContainer}>
                                            <Pressable onPress={() => dispatch(decrementItemQuantity(item.id, itemPrice.size))}>
                                                <Image source={imagesPath.minusicon} style={styles.icon} />
                                            </Pressable>
                                            <View style={styles.middleView}>
                                                <Text style={styles.middleViewText}>{quantityValue}</Text>
                                            </View>
                                            <Pressable onPress={() => dispatch(incrementItemQuantity(item.id, itemPrice.size )) }>
                                                <Image source={imagesPath.plusicon} style={styles.icon} />
                                            </Pressable>
                                        </View>
                                    </View>
                                </View>
                            );
                        })}
                    </View>
                ) : (
                    <View style={styles.itemContent}>
                        <Image source={item.image} style={styles.itemImage} />
                        <View style={styles.itemTextContainer}>
                            <Text style={styles.itemTitle}>{item.title}</Text>
                            <Text style={styles.itemSubtitle}>{item.subtitle}</Text>

                            <View style={styles.sizePriceContainer}>
                                <View style={styles.sizeContainer}>
                                    <Text style={styles.sizeText}>{item.selectedSize}</Text>
                                </View>
                                <View style={styles.priceContainerCart}>
                                    <Text style={styles.dollarSymbolCart}>
                                        {item.prices[0].currency}
                                    </Text>
                                    <Text style={styles.priceCartText}>
                                        {Number(item.prices[0].price).toFixed(2)}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.controlsContainer}>
                                <Pressable onPress={() => dispatch(decrementItemQuantity(item.id, item.selectedSize))}>
                                    <Image source={imagesPath.minusicon} style={styles.icon} />
                                </Pressable>
                                <View style={styles.middleView}>
                                    <Text style={styles.middleViewText}>{item.prices[0].quantity}</Text>
                                </View>
                                <Pressable onPress={() => dispatch(incrementItemQuantity(item.id, item.selectedSize))}>
                                    <Image source={imagesPath.plusicon} style={styles.icon} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                )}
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    gradient: {
        borderRadius: RPW(5),
    },
    itemWrapper: {
        marginHorizontal: RPW(5),
        borderRadius: RPW(15),
        marginTop: RPW(3),
    },
    itemContent: {
        borderRadius: RPW(5),
        height: RPH(23.5),
        flexDirection: 'row',
        alignSelf: 'center',
    },
    itemImage: {
        marginLeft: RPW(5),
        marginTop: RPW(5),
        width: RPW(40),
        height: RPH(19),
        borderRadius: 10,
    },
    itemTextContainer: {
        marginTop: RPH(3),
        flex: 1,
    },
    itemTitle: {
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        fontSize: RPW(5),
        color: colors.textTitleLight,
        fontWeight: '400',
        marginTop: RPW(2),
    },
    itemSubtitle: {
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: RPW(2.5),
        color: colors.textSubtitle,
    },
    MediumRoastedText: {
        color: colors.textSubtitle,
        fontSize: RPW(3),
        fontFamily: 'Poppins-Medium',
        fontWeight: '400',

    },
    MediumRoastedContainer: {
        width: RPW(35),
        height: RPH(5),
        backgroundColor: colors.background,
        margin: RPW(5),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RPW(3),

    },
    sizePriceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: RPW(2),
    },
    sizeContainer: {
        width: RPH(8),
        height: RPH(4),
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: RPW(2),
    },
    sizeText: {
        fontWeight: '800',
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
        fontSize: RPW(4),
    },
    priceContainerCart: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    dollarSymbolCart: {
        fontWeight: '800',
        fontFamily: 'Poppins-Medium',
        color: colors.copperRed,
        fontSize: RPW(4),
        marginHorizontal: RPW(1)
    },
    priceCartText: {
        fontWeight: '800',
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
        fontSize: RPW(5),
        marginLeft: RPW(2),
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: RPH(1),
        marginHorizontal: RPW(3),
    },
    middleView: {
        borderColor: colors.copperRed,
        borderWidth: 1,
        backgroundColor: colors.pureBlack,
        borderRadius: RPW(2),
        width: RPW(15),
        height: RPH(3.5),
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginHorizontal: RPW(5)
    },
    middleViewText: {
        color: colors.textTitleLight,
        fontWeight: '600',
        textAlign: 'center',
        fontSize: RPW(4),
        fontFamily: 'Poppins-Medium',
    },
    icon: {
        width: RPW(9),
        height: RPH(4.5),
    },
});

export default CartItem;