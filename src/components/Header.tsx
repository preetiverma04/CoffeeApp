import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import TopimgHome1Svg from '../assets/images/homeScreensvg/TopimgHome1Svg';
import PersonHomeScreenSvg from '../assets/images/homeScreensvg/PersonHomeScreenSvg';
import { RPW, RPH } from './ScreenSize';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import colors from '../utils/Colors';



const Header = (props:any) => {
    const navigation=useNavigation();
    console.log(navigation); 
    return (
        <View style={styles.outerTopHeader}>
            <TouchableOpacity style={styles.innerTopHomeView} onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                <TopimgHome1Svg />
            </TouchableOpacity>
            <Text style={styles.headerText}>{props.text}</Text>
            <View style={styles.personHomeView}>
                <PersonHomeScreenSvg />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    outerTopHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: RPW(5),
        marginLeft: RPW(5),
        alignItems: 'center',
    },
    innerTopHomeView: {
        justifyContent: 'center',
        backgroundColor:colors.blue_gray,
        width: RPW(11.5),
        height: RPH(5.6),
        borderRadius: RPW(3.5),
        alignItems: 'center',
    },
    headerText: {
        justifyContent: "center",
        fontSize: RPW(5),
        color: colors.textTitleLight,
    },
    personHomeView: {
        width: RPW(10),
        height: RPH(6),
    },
});

export default Header;
