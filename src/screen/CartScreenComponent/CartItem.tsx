import React from 'react'
import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import imagesPath from '../../components/ImagePath/imagesPath';
const CartItem = ({ item, quantity, onAdd, onMinus }:any) => {
    return (
        <View style={styles.itemWrapper}>
            <LinearGradient colors={['#21262E', 'black']} style={{ borderRadius: RPW(5) }}>
                <View style={styles.itemContent}>
                    <Image source={item.image} style={styles.itemImage} />
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                        <View style={styles.priceContainerCart}>
                            <Text style={styles.dolarSymobolCart}>
                                {item.dolarSymbol}
                            </Text>
                            <Text style={styles.priceCartText}>
                                {(item.price * quantity).toFixed(2)}
                            </Text>
                        </View>
                        <View style={styles.controlsContainer}>
                            <Pressable onPress={() => onMinus(item.id)}>
                                <Image source={imagesPath.minusicon}
                                    style={styles.Plusicon} />
                            </Pressable>
                            <View style={styles.middleView}>
                                <Text style={styles.middleviewtext}>{quantity}</Text>
                            </View>
                            <Pressable onPress={() => onAdd(item.id)}>
                                <Image source={imagesPath.plusicon}
                                    style={styles.Plusicon} />
                            </Pressable>
                            
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};
const styles=StyleSheet.create({
    Plusicon: {
        width: RPW(9),
        height: RPH(4.5),
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
        alignSelf: "center"
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
        fontFamily: "Poppins-Medium",
        alignSelf: "center",
        fontSize: RPW(5),
        color: colors.textTitleLight,
        fontWeight: "400",
    },
    itemSubtitle: {
        fontFamily: "Poppins-Medium",
        alignSelf: "center",
        fontWeight: '400',
        fontSize: RPW(2.5),
        color: colors.textSubtitle,
    },
    priceContainerCart: {
        flexDirection: "row",
        justifyContent: "center"
    },
    dolarSymobolCart: {
        fontWeight: "800",
        fontFamily: "Poppins-Medium",
        marginTop: RPW(1.5),
        color: colors.copperRed,
        alignSelf: "center",
        fontSize: RPW(5)
    },
    priceCartText: {
        fontWeight: "800",
        fontFamily: "Poppins-Medium",
        marginTop: RPW(1.5),
        color: colors.textTitleLight,
        alignSelf: "center",
        fontSize: RPW(5),
        marginLeft: RPW(2),
    },
    controlsContainer: {
        marginLeft: RPW(3),
        marginRight: RPW(3),
        flexDirection: 'row',
        justifyContent: "space-around",
        marginTop: RPH(1),
    },
    middleView: {
        alignSelf: "center",
        borderColor: colors.copperRed,
        borderWidth: 1,
        backgroundColor: colors.pureBlack,
        borderRadius: RPW(2),
        width: RPW(15),
        height: RPH(3.5),
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlignVertical: "center",
    },
    middleviewtext: {
        color: colors.textTitleLight,
        fontWeight: "600",
        textAlign: "center",
        alignSelf: "center",
        fontSize: RPW(4),
        fontFamily: "Poppins-Medium",
        textAlignVertical: "center",
        justifyContent: "center",
        alignItems: "center",
    },
})

export default CartItem;