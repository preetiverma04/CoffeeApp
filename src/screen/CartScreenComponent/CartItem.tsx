import React from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import imagesPath from '../../components/ImagePath/imagesPath';

const CartItem = ({ item, quantity, onAdd, onMinus }) => {
    const selectedPrice = item.prices?.find(price => price.size === item.selectedSize)?.price || item.prices?.[0]?.price || 0;

    return (
        <View style={styles.itemWrapper}>
            <LinearGradient colors={['#21262E', 'black']} style={styles.gradient}>
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
                                    {item.dolarSymbol}
                                </Text>
                                <Text style={styles.priceCartText}>
                                    {(selectedPrice * quantity).toFixed(2)}
                                </Text>
                            </View>
                        </View>

                        <View style={styles.controlsContainer}>
                            <Pressable onPress={() => onMinus(item.id)}>
                                <Image source={imagesPath.minusicon} style={styles.icon} />
                            </Pressable>
                            <View style={styles.middleView}>
                                <Text style={styles.middleViewText}>{quantity}</Text>
                            </View>
                            <Pressable onPress={() => onAdd(item.id)}>
                                <Image source={imagesPath.plusicon} style={styles.icon} />
                            </Pressable>
                        </View>
                    </View>
                </View>
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
        height: RPH(18),
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
    },
    itemSubtitle: {
        fontFamily: 'Poppins-Medium',
        alignSelf: 'center',
        fontWeight: '400',
        fontSize: RPW(2.5),
        color: colors.textSubtitle,
    },
    sizePriceContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: RPW(2),
    },
    sizeContainer: {
        width: RPH(7),
        height: RPH(4),
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: RPW(2),
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
    },
    priceCartText: {
        fontWeight: '800',
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
        fontSize: RPW(5),
        marginLeft: RPW(1),
    },
    controlsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: RPH(1),
    },
    middleView: {
        borderColor: colors.copperRed,
        borderWidth: 1,
        backgroundColor: colors.pureBlack,
        borderRadius: RPW(2),
        width: RPW(15),
        height: RPH(3.5),
        justifyContent: 'center',
        alignItems: 'center',
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
