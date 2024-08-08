import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RPH, RPW } from './ScreenSize';
import colors from '../utils/Colors';

const CustomToast = ({ text1, text2 }) => (
    <View style={styles.toastContainer}>
        <Text style={styles.toastText1}>{text1}</Text>
        <Text style={styles.toastText2}>{text2}</Text>
    </View>
);

const styles = StyleSheet.create({
    toastContainer: {
        backgroundColor: colors.pureBlack, 
        borderRadius: RPH(2), 
        padding: RPW(5), 
        margin: RPW(2), 
    },
    toastText1: {
        color: colors.copperRed, 
        fontSize: RPW(4), 
        fontWeight: '800', 
    },
    toastText2: {
        color: colors.darkGray, 
        fontSize: RPW(3), 
        fontWeight: '800', 
    },
});
export default CustomToast;
