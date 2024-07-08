import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Pressable } from 'react-native';
import LottieView from 'lottie-react-native';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import CustomPaymentButton from '../components/CustomPaymentButton';
import FavouriteData from '../components/Data/FavouriteData';
import imagesPath from '../components/PaymentScreenImagePath/imagesPath';
import CustomButton from '../components/CustomButton';
import { RPH, RPW } from '../components/ScreenSize';
import { useNavigation } from '@react-navigation/native';
const PaymentScreen = () => {
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const priceItem = FavouriteData[0];
    const handlePaymentButtonPress = () => {
        setModalVisible(true);
    };
    const closeModal = () => {
        setModalVisible(false);
    };
    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#0C0F14" }}>
            <View style={styles.outerPaymentContainer}>
                {/* Payment Info */}
                <View style={styles.paymentWrapper}>
                   
                    <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
                        <Pressable onPress={() =>{ navigation.goBack()
                            console.log("goback cart screen");
                        }}>
                        <View style={{ width: RPW(10), backgroundColor: "orange", alignItems: "center", borderRadius: RPW(3), marginLeft: RPW(3) }}>
                            <Image source={require("../assets/images/paymentScreenimages/back.png")} style={{ width: RPW(6), height: RPH(6) }}></Image>
                        </View>
                       </Pressable>
                        <Text style={styles.paymentText}>Payment</Text>
                    </View>
                    <View style={styles.creditCardOuterContainer}>
                        <Text style={styles.creditCardText}>Credit Card</Text>
                        <LinearGradient colors={['#262B33', '#262B33', 'black']} style={styles.gradientStyle}>
                            <View style={styles.creditInnerContainer}>
                                <View style={styles.creditImageContainer}>
                                    <Image source={imagesPath.img1} style={styles.cardImage} />
                                    <Image source={imagesPath.VisaImage} style={styles.cardImage} />
                                </View>
                                <View style={styles.creditCardNumberContainer}>
                                    <Text style={styles.creditCardNumberText}>3897  8923  6745  4638</Text>
                                </View>
                                <View style={styles.infoPersonCredit}>
                                    <View>
                                        <Text style={styles.infoLabelText}>Card Holder Name</Text>
                                        <Text style={styles.infoLabelValue}>Robert Evans</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.infoLabelText}>Expiry Date</Text>
                                        <Text style={styles.infoLabelValue}>02/30</Text>
                                    </View>
                                </View>
                            </View>
                        </LinearGradient>
                    </View>
                </View>
                <View style={styles.paymentButtonContainer}>
                    <CustomPaymentButton img={imagesPath.wallet} text="Wallet" />
                    <CustomPaymentButton img={imagesPath.googlepay} text="Google Pay" />
                    <CustomPaymentButton img={imagesPath.applepay} text="Apple Pay" />
                    <CustomPaymentButton img={imagesPath.amazon} text="Amazon" />
                </View>
                <View style={styles.priceContainer}>
                    <Text style={{ color: 'white', fontSize: RPW(4), marginLeft:RPW(2),marginTop:RPH(2)}}>{priceItem.priceText}</Text>
                    <View style={styles.priceRow}>
                        <View style={styles.priceDetail}>
                            <Text style={styles.dollarSign}>
                                {priceItem.dolarSymbol}
                            </Text>
                            <Text style={styles.priceText}>
                                {priceItem.price}
                            </Text>
                        </View>
                        <CustomButton
                            text="Pay from credit card"
                            onPress={handlePaymentButtonPress}
                            style={styles.customButton}
                        />
                    </View>
                </View>
                <Modal
                    isVisible={isModalVisible}
                    onBackdropPress={closeModal}
                    style={styles.modalContainer} >
                    <View style={styles.animationContainer}>
                        <LottieView
                            source={require('../lottie/successful.json')}
                            autoPlay
                            loop={false}
                            onAnimationFinish={closeModal}
                            style={styles.lottieAnimation}
                        />
                    </View>
                </Modal>
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    outerPaymentContainer: {
        flex: 1,
        backgroundColor: '#0C0F14',
        padding: RPW(5),
    },
    paymentWrapper: {
        // marginTop: RPH(4),
    },
    paymentText: {
        fontFamily:"Poppins-Bold",
        marginLeft: RPW(20),
        fontSize: RPW(7),
        textAlign: 'center',
        color: 'white',
        fontWeight: '600',
    },
    creditCardOuterContainer: {
        width: '100%',
        marginTop: RPH(2),
        borderRadius: RPW(5),
        height: RPH(40),
        marginHorizontal: '1%',
        borderColor: 'orange',
        borderWidth: 1,
        overflow: 'hidden',
    },
    gradientStyle: {
        flex: 1,
        borderRadius: RPW(5),
        marginHorizontal: RPW(3),
        marginVertical: RPH(1.5),
    },
    creditInnerContainer: {
        marginHorizontal: RPW(1),
        flex: 1,
        borderRadius: RPW(5),
        padding: RPW(5),
        justifyContent: 'space-between',
    },
    creditCardText: {
        fontWeight:"600",
        fontFamily:"Poppins-Medium",
        color: 'white',
        fontSize: RPW(5),
        marginLeft: RPW(5),
        marginBottom: RPH(1),
    },
    creditImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: RPW(2),
    },
    cardImage: {
        width: RPW(14),
        height: RPH(10),
        resizeMode: 'contain',
    },
    creditCardNumberText: {
        fontWeight:'600',
        fontFamily:"Poppins-Medium",
        color: 'white',
        alignSelf: 'auto',
        fontSize: RPW(5.2),
    },
    creditCardNumberContainer: {
      flex:1,
        alignSelf: 'center',
    },
    infoPersonCredit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLabelText: {
        fontFamily:'Poppins-light',
        fontWeight:'400',
        color: '#FFFFFF',
        fontSize: RPW(3),
    },
    infoLabelValue: {
        fontWeight:"500",
        fontFamily: 'Poppins-Medium',
        color: 'white',
        fontSize: RPW(5),
    },
    paymentButtonContainer: {
        fontFamily: "Poppins-Bold",
        fontWeight: "600",
        // marginTop: RPH(5),
        alignItems: 'center',
    },
    priceContainer: {
        marginTop: RPH(2.5),
        marginLeft: RPW(3),
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    priceDetail: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dollarSign: {
        fontFamily: "Poppins-Bold",
        fontWeight: '600',
        color: 'orange',
        fontSize: RPW(5),
        marginRight: RPW(1),
    },
    priceText: {
        
        fontFamily: "Poppins-Bold",
        fontWeight:'600',
        color: 'white',
        fontSize: RPW(5),
    },
    customButton: {

        backgroundColor: 'orange',
        width: RPW(53),
        borderRadius: RPW(5),
        height: RPH(7),
        marginHorizontal: RPW(5),
        textAlignVertical: 'center',
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    animationContainer: {
        width: RPW(100),
        height: RPH(100),
        backgroundColor: 'white',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottieAnimation: {
        width: '100%',
        height: '100%',
    },
});

export default PaymentScreen;
