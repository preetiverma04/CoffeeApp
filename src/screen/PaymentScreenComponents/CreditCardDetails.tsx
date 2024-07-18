import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import imagesPath from '../../components/ImagePath/imagesPath';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';

const CreditCardDetails = () => {
    return (
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
    );
};

const styles = StyleSheet.create({
    creditCardOuterContainer: {
        width: '100%',
        marginTop: RPH(2),
        borderRadius: RPW(7),
        height: RPH(40),
        marginHorizontal: '1%',
        borderColor: colors.copperRed,
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
        paddingHorizontal:RPW(5),
        // padding: RPW(5),
        justifyContent: 'space-between',
    },
    creditCardText: {
        fontWeight: "600",
        fontFamily: "Poppins-Medium",
        color: colors.textTitleLight,
        fontSize: RPW(4),
        marginLeft: RPW(5),
        marginBottom: RPH(1),
        marginTop: RPH(2),
    },
    creditImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: RPW(2),
    },
    cardImage: {
        width: RPW(10),
        height: RPH(10),
        resizeMode: 'contain',
    },
    creditCardNumberText: {
        fontWeight: '600',
        fontFamily: "Poppins-Medium",
        color: colors.textTitleLight,
        alignSelf: 'auto',
        fontSize: RPW(5.2),
    },
    creditCardNumberContainer: {
        flex: 1,
        alignSelf: 'center',
    },
    infoPersonCredit: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    infoLabelText: {
        fontFamily: 'Poppins-light',
        fontWeight: '400',
        color: colors.textSubtitle,
        fontSize: RPW(2.7),
        lineHeight: RPH(3)
    },
    infoLabelValue: {
        fontWeight: "500",
        fontFamily: 'Poppins-Light',
        color: colors.textTitleLight,
        fontSize: RPW(5),
    },
});

export default CreditCardDetails;
