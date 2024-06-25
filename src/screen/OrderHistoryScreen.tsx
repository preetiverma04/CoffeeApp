import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Modal, TouchableOpacity } from 'react-native';
import { RPH, RPW } from '../components/ScreenSize'; // Responsive functions
import Header from '../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import OrderHistoryData from '../components/Data/OrderHistoryData';
import CustomButton from '../components/CustomButton';
import LottieView from 'lottie-react-native';
import { BlurView } from '@react-native-community/blur';

interface OrderData {
    image: any;
    coffeeText: string;
    coffeeSubtitle: string;
    dolarSymbol: string;
    price: number;
}

const CoffeeDate = () => (
    <View style={styles.orderInfoContainer}>
        <View>
            <Text style={styles.orderText}>Order Date</Text>
            <Text style={styles.orderDate}>20 March 16:23</Text>
        </View>
        <View>
            <Text style={styles.totalAmountText}>Total Amount</Text>
            <Text style={styles.totalAmountPrice}>$70.67</Text>
        </View>
    </View>
);

const renderData = ({ item }: { item: OrderData }) => (
    <View >
        <LinearGradient colors={['#21262E', 'black']} style={styles.gradient}>
            <View style={styles.topContent}>
                <Image source={item.image} style={styles.imageCoffee} />
                <View style={styles.itemContent}>
                    <View style={styles.textContainer}>
                        <Text style={styles.coffeeText}>{item.coffeeText}</Text>
                        <Text style={styles.subtitle}>{item.coffeeSubtitle}</Text>
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
                        <Text style={styles.dollarSymbol}>$</Text>
                        <Text style={styles.bottomPrice}>1.38</Text>
                    </View>
                    <View style={styles.priceDetailItem}>
                        <Text style={styles.multiplySymbol}> x </Text>
                        <Text style={styles.quantity}>1</Text>
                    </View>
                    <View style={styles.priceDetailItem}>
                        <Text style={styles.dollarSymbol}>$</Text>
                        <Text style={styles.bottomPrice}>1.38</Text>
                    </View>
                </View>
            </View>
        </LinearGradient>
    </View>
);
const OrderHistoryScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [isAnimationVisible, setIsAnimationVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
        setIsAnimationVisible(true);

        setTimeout(() => {
            setIsAnimationVisible(false);
            setModalVisible(false);
        }, 1000);
    };

    const ListFooterComponent = () => (
        <View style={styles.footerContainer}>
            <CustomButton text="Download" style={styles.customButtonStyle} onPress={toggleModal} />
        </View>
    );

    return (
        <View style={styles.outerContainer}>
            <FlatList
                data={OrderHistoryData}
                renderItem={renderData}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContentContainer}
                ListFooterComponent={ListFooterComponent}
                ListHeaderComponent={() => (
                    <>
                        <Header text="Order History" />
                        <CoffeeDate />
                    </>
                )}
            />
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={toggleModal}
            >
                <BlurView
                    style={styles.absolute}
                    blurType="light"
                    blurAmount={10}
                />
                <View style={styles.modalContainer}>
                    {isAnimationVisible && (
                        <LottieView
                            source={require('../lottie/download.json')}
                            autoPlay
                            loop={false}
                            style={styles.animation}
                        />
                    )}
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: "#0C0F14",
    },
    listContentContainer: {
        paddingBottom: RPH(15),
    },
    gradient: {
        flex: 1,
        flexDirection: "column", // Changed to column to stack top and bottom views
        padding: RPW(2),
        borderRadius: RPW(5),
        marginVertical: RPW(3),
        marginHorizontal:RPW(5),
    },
    topContent: {
        flexDirection: "row",
        alignItems: 'center',
    },
    imageCoffee: {
        marginHorizontal: RPW(2),
        marginVertical: RPH(1),
        width: RPW(30),
        height: RPH(15),
        borderRadius: RPW(3),
        // marginRight: RPW(3),
    },
    coffeeText: {
        fontFamily:"Popppins-Bold",
        fontSize: RPW(5),
        color: "white",
        fontWeight: '800',
    },
    subtitle: {
        fontFamily:"Poppins-Medium",
        fontSize: RPW(3),
        color: "lightgrey",
    },
    priceContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between',
    },
    dollarSymbol: {
        fontFamily:"Poppins-Bold",
        fontWeight: "bold",
        fontSize: RPW(5),
        color: "#D17842",
        marginRight: RPW(0.5),
    },
    price: {
        fontFamily:"Poppins-Bold",
        fontSize: RPW(4),
        color: "white",
    },
    itemContent: {
        
        marginHorizontal:RPW(3),
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-between',
        // alignItems: 'center',
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        // justifyContent: 'center',
    },
    orderInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: RPW(3),
        marginVertical: RPW(3),
    },
    orderText: {
        color: "white",
        marginLeft: RPW(3),
    },
    orderDate: {
        color: "white",
        marginLeft: RPW(2.5),
    },
    totalAmountText: {
        color: "white",
    },
    totalAmountPrice: {
        color: "#D17842",
    },
    customButtonStyle: {
        textAlignVertical:"center",
        fontFamily:"Poppins-Bold",
        width: RPW(80),
        height: RPH(7),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        fontSize: RPW(4),
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
        fontSize: RPW(6),
        color: 'white',
        marginBottom: RPH(2),
    },
    closeButton: {
        backgroundColor: '#D17842',
        padding: RPW(4),
        borderRadius: RPW(2),
    },
    closeButtonText: {
        color: 'white',
        fontSize: RPW(4),
    },
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    footerContainer: {
        // marginTop: RPW(5),
        alignItems: 'center',
    },
    bottomView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: RPH(2),
        paddingVertical: RPH(2),
    },
    sizeContainer: {
        width:RPW(15),
        height:RPW(12),
        backgroundColor: '#0C0F14',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: RPW(3),
        paddingHorizontal: RPW(2),
        marginRight: RPW(4),
    },
    sizeText: {
        textAlignVertical: "center",
        color: "white",
    },
    priceDetails: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'space-between', // Distributes extra space evenly
        paddingHorizontal: RPW(4), // Adds padding to left and right
    },
    priceDetailItem: {
        // backgroundColor: '#0C0F14',
        flexDirection: "row",
        alignItems: "center",
       
    },
    bottomPrice: {
        
        fontSize: RPW(4),
        color: "white",
    },
    multiplySymbol: {
        fontSize: RPW(4),
        color: "white",
    },
    quantity: {
        fontSize: RPW(4),
        color: "white",
    },
    // dollarSymbol: {
    //     fontWeight: "bold",
    //     fontSize: RPW(4),
    // },
    animation: {
        width: RPW(100),
        height: RPH(100),
    },
});

export default OrderHistoryScreen;
