import React, { ReactNode } from 'react';
import { Text, View, StyleSheet, Image, FlatList, Pressable, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import { CartData } from '../components/Data/CoffeeTabData';
import { RPH, RPW } from '../components/ScreenSize';
import CustomButton from '../components/CustomButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import PaymentScreen from './PaymentScreen';
interface CartItem {
    dolarSymbol?: string;
    price?: any,
    image: any;
    title: string;
    subtitle: string;
    medieumRoasted: string;
    symbolminus?: any;
    symbolplus?: any;
}
const renderItemsdata = ({ item }: { item: CartItem }) => {
    return (
        <View style={styles.itemWrapper}>
            <LinearGradient colors={['#262B33', '#262B33', 'black']}
                style={{ borderRadius: RPW(5) }}>
                <View style={styles.itemContent}>
                    <Image source={item.image} style={styles.itemImage} />
                    <View style={styles.itemTextContainer}>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemSubtitle}>{item.subtitle}</Text>
                        <Pressable onPress={() => { console.log("Medieum Roasted buttton ") }}>
                            <View style={styles.itemMedieumRoastedContainer}>
                                <Text style={styles.itemMediewRoasted}>{item.medieumRoasted}</Text>
                            </View>
                        </Pressable>
                        <View style={styles.priceConatinerCart}>
                            <Text style={styles.dolarSymobolCart}>
                                {item.dolarSymbol}
                            </Text>
                            <Text style={styles.priceCartText}>
                                {item.price}
                            </Text>
                        </View>
                        <View style={styles.controlsContainer}>
                            <View style={styles.symbolContainer}>
                                <Text style={styles.symbolText}>{item.symbolminus}</Text>
                            </View>
                            <View style={styles.middleView}>
                                <Text style={styles.middleviewtext}>1</Text>
                            </View>

                            <View style={styles.symbolContainer}>
                                <Text style={styles.symbolText}>{item.symbolplus}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    );
};

const CartScreen = ({ }) => {
    const navigation = useNavigation()
    return (
        <View style={styles.cartScreenOuter}>
            <FlatList
                data={CartData}
                renderItem={renderItemsdata}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: RPH(1) }}
                ListHeaderComponent={() => (
                    <View>
                        <Header text={"Cart Screen"} />
                    </View>
                )}
                ListFooterComponent={() => (
                    <>

                        <View style={styles.TotalPriceConatiner}>

                            <Text style={styles.TotalPriceText}>
                                Total Price
                            </Text>
                        </View><View style={styles.priceOuterContainer}>
                            <View style={styles.priceInnerContainer}>
                                <Text style={styles.dolarStyle}>
                                    $
                                </Text>
                                <Text style={styles.price}> 13.5
                                </Text>

                            </View>
                            <View>
                                <CustomButton text={"Pay"}
                                    onPress={() => {
                                        console.log('====================================');
                                        navigation.navigate("PaymentScreen");
                                    }} style={styles.CustumButtonText}>
                                </CustomButton >
                            </View>
                        </View>
                    </>
                )}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    priceConatinerCart: {
        flexDirection: "row",
        justifyContent: "center"
    },
    itemMedieumRoastedContainer: {
        alignSelf: "center",
        width: RPW(35),
        height: RPH(5),
        justifyContent: "center",
        backgroundColor: "#141921",
        marginTop: RPH(1),
        borderRadius: RPW(2),
    },
    itemMediewRoasted: {
        fontSize: RPW(2.5),
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        color: "#AEAEAE",
        textAlign: "center",
        justifyContent: "center"
    },
    linearGradient: {
        flex: 1,
    },
    cartScreenOuter: {
        backgroundColor: "#0C0F14",
        flex: 1,
        padding: 16,
    },
    itemWrapper: {
        borderRadius: RPW(15),
        marginTop: RPW(3),
        // backgroundColor:'hsba(218, 40%, 8%, 1)'
    },
    itemContainer: {
        padding: RPW(5),
        borderRadius: RPW(10),
        overflow: 'hidden',
    },
    itemContent: {
        // borderWidth:1,
        // borderColor:"lightgrey",
        // marginBottom: RPH(2),
        borderRadius: RPW(5),
        height: RPH(28),
        flexDirection: 'row',
        alignSelf: "center"
    },
    itemImage: {
        marginLeft: RPW(5),
        marginTop: RPW(5),
        width: RPW(40),
        height: RPH(20),
        borderRadius: 10,
    },
    itemTextContainer: {
        marginTop: RPH(1),
        alignSelf: "center",
        flex: 1,
    },
    itemTitle: {
        fontFamily: "Poppins-Bold",
        alignSelf: "center",
        fontSize: RPW(5),
        color: "#FFFFFF",
        fontWeight: "400",
        // marginBottom: RPW(2),
    },
    itemSubtitle: {
        fontFamily: "Poppins-Medium",
        alignSelf: "center",
        fontWeight: '400',
        fontSize: RPW(2.5),
        color: "grey",
    },
    controlsContainer: {
        marginLeft: RPW(3),
        marginRight: RPW(3),
        flexDirection: 'row',
        // alignSelf:"center",
        justifyContent: "space-around",
        marginTop: RPH(2),
    },
    symbolContainer: {
        backgroundColor: "orange",
        width: RPW(8),
        height: RPH(3.5),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RPW(2),
    },
    symbolText: {
        textAlign: "center",
        textAlignVertical: "center",
        justifyContent: "center",
        alignSelf: "center",
        color: 'white',
        fontSize: RPW(5),
    },
    middleView: {
        borderColor: "orange",
        borderWidth: 1,
        backgroundColor: 'black',
        borderRadius: RPW(2),
        width: RPW(15),
        height: RPH(3.5),
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    middleviewtext: {
        color: "white",
        textAlign: "center",
        fontSize:RPW(4),
        fontFamily:"Poppins-Bold",
        justifyContent: "center",
        alignItems: "center",
        textAlignVertical: "center",
        fontWeight:"700",
    },
    dolarSymobolCart: {
        fontWeight: "600",
        fontFamily: "Poppins-Bold",
        marginTop: RPW(1.5),
        color: "orange",
        alignSelf: "center",
        fontSize: RPW(5)
    },
    priceCartText: {
        fontWeight: "600",
        fontFamily: "Poppins-Bold",
        marginTop: RPW(1.5),
        color: "white",
        alignSelf: "center",
        fontSize: RPW(5),
        marginLeft: RPW(2)
    },
    Custumstyles: {
        width: RPW(45),
        height: RPH(7),
    },
    TotalPriceConatiner: {
        marginTop: RPW(4)
    },
    TotalPriceText: {
        color: "white",
        fontWeight: "600",
        fontFamily: "Poppins-Bold"

    },
    dolarStyle: {
        fontSize: RPW(5),
        color: "#D17842",
        fontWeight: "600",
        fontFamily: "Poppins-Bold"
    },
    price: {
        fontSize: RPW(5),
        color: "white",
        fontWeight: "600",
        fontFamily: "Poppins-Bold",

    },
    priceInnerContainer: {
        flexDirection: "row",

    },
    priceOuterContainer: {
        flexDirection: "row",
        marginBottom: RPW(12),
        justifyContent: "space-between"
    },
    CustumButtonText: {
        fontSize: RPW(5),
        fontWeight: "600",
        fontFamily: "Poppins-Bold",
        width: RPW(60)

    }
});
export default CartScreen;