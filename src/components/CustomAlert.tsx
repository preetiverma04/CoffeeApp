import React from 'react';
import { View, Text, StyleSheet, Pressable, Modal } from 'react-native';
import { RPH, RPW } from './ScreenSize';
import colors from '../utils/Colors'

const CustomAlert = ({ visible, onClose }:any) => {
    return (
        <Modal
            transparent={true}
            visible={visible}
            animationType="fade"
            onRequestClose={onClose}>
            <View style={styles.overlay}>
                <View style={styles.alertContainer}>
                    <Text style={styles.alertTitle}>Success</Text>
                    <Text style={styles.alertMessage}>Item added to cart!</Text>
                    <Pressable style={styles.okButton} onPress={onClose}>
                        <Text style={styles.okButtonText}>OK</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
  
        justifyContent: 'center',
        alignItems: 'center',
    },
    alertContainer: {
        width: '50%',
        height:'20%',
        padding: RPW(3),
        backgroundColor: colors.textTitleLight,
        borderRadius: RPW(3),
        alignItems: 'center',
    },
    alertTitle: {
        fontSize: RPW(6),
        fontFamily: 'Poppins-Bold',
        color: colors.pureBlack,
        marginBottom: RPH(1),
    },
    alertMessage: {
        fontSize: RPW(4.5),
        fontFamily: 'Poppins-Medium',
        color: colors.blue_gray,
        marginBottom: RPH(1),
        textAlign: 'center',
    },
    okButton: {
        width: '40%',
        padding: RPH(0.5),
        backgroundColor: colors.copperRed,
        borderRadius: RPW(2),
        alignItems: 'center',
    },
    okButtonText: {
        fontSize: RPW(5),
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
    },
});

export default CustomAlert;
