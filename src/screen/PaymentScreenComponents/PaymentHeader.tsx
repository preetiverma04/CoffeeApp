import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import imagesPath from '../../components/ImagePath/imagesPath';
const PaymentHeader = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.outerUpperHeader}>
            <Pressable onPress={() => navigation.goBack()}>
                <View style={styles.backButton}>
                    <Image source={imagesPath.backIcon} style={styles.backImage} />
                </View>
            </Pressable>
            <Text style={styles.paymentText}>Payment</Text>
        </View>
    );
   };

const styles = StyleSheet.create({
    outerUpperHeader:{
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    backButton: {
        width: RPW(10),
        backgroundColor: colors.blue_gray,
        alignItems: "center",
        borderRadius: RPW(3),
        marginLeft: RPW(3)
    },
    backImage: {
        width: RPW(5),
        height: RPH(5),
        tintColor:colors.darkGray
    },
    paymentText: {
        fontFamily: "Poppins-Medium",
        marginLeft: RPW(20),
        fontSize: RPW(5.5),
        textAlign: 'center',
        color: colors.textTitleLight,
        fontWeight: '600',
    },
});

export default PaymentHeader;
