import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import LottieView from 'lottie-react-native';
import { RPH, RPW } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import imagesPath from '../../components/ImagePath/imagesPath';

const PaymentModal = ({ isVisible, onClose }:any) => {
    return (
        <Modal
            isVisible={isVisible}
            onBackdropPress={onClose}
            style={styles.modalContainer} >
            <View style={styles.animationContainer}>
                <LottieView
                    source={imagesPath.lotieSuccessful}
                    autoPlay
                    loop={false}
                    onAnimationFinish={onClose}
                    style={styles.lottieAnimation}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    animationContainer: {
        width: RPW(100),
        height: RPH(100),
        backgroundColor: colors.textTitleLight,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottieAnimation: {
        width: '100%',
        height: '100%',
    },
});

export default PaymentModal;
