import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TopimgHome1Svg from '../assets/images/homeScreensvg/TopimgHome1Svg';
import PersonHomeScreenSvg from '../assets/images/homeScreensvg/PersonHomeScreenSvg';
import { RPW, RPH } from './ScreenSize';
const Header = (props:any) => {
    return (
        <View style={styles.outerTopHeader}>
            <View style={styles.innerTopHomeView}>
                <TopimgHome1Svg />
            </View>
            <Text style={styles.headerText}>{props.text}</Text>
            {/* <Text style={styles.headerText}>{props.text2}</Text> */}
            <View style={styles.personHomeView}>
                <PersonHomeScreenSvg />
            </View>
        </View>
    );
}

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
        backgroundColor: 'grey',
        width: RPW(9),
        height: RPH(5),
        // borderColor: 'grey',
        borderWidth: 2,
        borderRadius: RPW(2),
        alignItems: 'center',
    },
    headerText: {
        justifyContent:"center",
        fontSize: RPW(5),
        color: 'white', 
    },
    personHomeView: {
        justifyContent: 'center',
        width: RPW(9),
        height: RPH(5),
        // borderColor: 'grey',
        borderWidth: 2,
        // backgroundColor: 'grey',
        borderRadius: RPW(2),
        alignItems: 'center',
    },
});

export default Header;
