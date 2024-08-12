import { Image, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { RPH, RPW } from "../../components/ScreenSize";
import colors from "../../utils/Colors";
import { useRoute } from "@react-navigation/native";
const OrderDataItem = ({ item}:any) => {
    const quantity = item.quantity || 1;
    const totalPrice = (item.price * quantity).toFixed(2);
    
    console.log(item, "Order Data Item");
    return (
        <View>
            <LinearGradient colors={['#21262E', 'black']} style={styles.gradient}>
                <View style={styles.topContent}>
                    <Image source={item.image} style={styles.imageCoffee} />
                    <View style={styles.itemContent}>
                        <View style={styles.textContainer}>
                            <Text style={styles.coffeeText}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                        <View style={styles.priceContainer}>
                            <Text style={styles.dollarSymbol}>{item.dolarSymbol}</Text>
                            <Text style={styles.price}>{item.price}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bottomView}>
                    <View style={styles.sizeContainer}>
                        <Text style={styles.sizeText}>S</Text>
                    </View>
                    <View style={styles.priceDetails}>
                        <View style={styles.priceDetailItem}>
                            <Text style={styles.dollarSymbol}>{item.dolarSymbol}</Text>
                            <Text style={styles.bottomPrice}>{item.price}</Text>
                        </View>
                        <View style={styles.priceDetailItem}>
                            <Text style={styles.multiplySymbol}> x </Text>
                            <Text style={styles.quantity}>{quantity}</Text>
                        </View>
                        <View style={styles.priceDetailItem}>
                            <Text style={styles.dollarSymbol}>{item.dolarSymbol}</Text>
                            <Text style={styles.bottomPrice}>{totalPrice}</Text>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};
const styles=StyleSheet.create({
    gradient: {
        flex: 1,
        flexDirection: "column",
        padding: RPW(2),
        borderRadius: RPW(5),
        marginVertical: RPW(3),
        marginHorizontal: RPW(5),
    },
    topContent: {
        flexDirection: "row",
        alignItems: 'center',
    },
    imageCoffee: {
        marginHorizontal: RPW(2),
        marginVertical: RPH(1),
        width: RPW(20),
        height: RPH(10),
        borderRadius: RPW(3.5),
    },
    itemContent: {
        marginHorizontal: RPW(3),
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
    },
    coffeeText: {
        fontFamily: "Popppins-Bold",
        fontSize: RPW(5.5),
        color: colors.textTitleLight,
        fontWeight: '800',
    },
    subtitle: {
        fontFamily: "Poppins-Light",
        fontSize: RPW(3),
        color: colors.textSubtitle,
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    dollarSymbol: {
        fontFamily: "Poppins-Bold",
        fontWeight: "400",
        fontSize: RPW(5.5),
        color: colors.copperRed,
        marginRight: RPW(0.5),
    },
    price: {
        fontFamily: "Poppins-Bold",
        fontWeight: '400',
        fontSize: RPW(5),
        color: colors.textTitleLight,
    },
    bottomView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: RPH(2),
        paddingVertical: RPH(2),
    },
    sizeContainer: {
        width: RPW(13),
        height: RPW(10),
        backgroundColor: '#0C0F14',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RPW(3),
        paddingHorizontal: RPW(2),
        marginRight: RPW(4),
    },
    sizeText: {
        fontFamily: "Poppins-Medium",
        fontSize: RPH(2),
        textAlignVertical: "center",
        color: colors.textTitleLight,
    },
    priceDetails: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
        paddingHorizontal: RPW(4),
    },
    priceDetailItem: {
        flexDirection: "row",
        alignItems: "center",
    },
    bottomPrice: {
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        fontSize: RPW(4),
        color: colors.textTitleLight,
    },
    multiplySymbol: {
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        fontSize: RPW(5.5),
        color: colors.copperRed,
    },
    quantity: {
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        fontSize: RPW(4),
        color: colors.textTitleLight,
    },
})
export default OrderDataItem;