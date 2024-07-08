import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import TopimgHome1Svg from '../assets/images/homeScreensvg/TopimgHome1Svg';
import PersonHomeScreenSvg from '../assets/images/homeScreensvg/PersonHomeScreenSvg';
import { RPW, RPH } from './ScreenSize';
import { useDispatch } from 'react-redux';
import { addToFavourite } from './redux/Action';
const Header = (props:any) => {
    
    const dispatch = useDispatch()
    // const newRedux =()=>{
    //     dispatch(addToFavourite('sdfkjakjfsda'))

    // }
    return (
        <View style={styles.outerTopHeader}>
            <View style={styles.innerTopHomeView}>
                <TopimgHome1Svg />
            </View>
            <Text style={styles.headerText}>{props.text}</Text>
            {/* <Text style={styles.headerText}>{props.text2}</Text> */}
            <View style={styles.personHomeView}>
                <PersonHomeScreenSvg style={{borderRadius:RPW(2)}}/>
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
        backgroundColor: '#21262E',
        width: RPW(12),
        height: RPH(6),
        // borderColor: 'grey',
        borderWidth: 2,
        borderRadius: RPW(3),
      
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
       
      
       
       
        alignItems: 'center',
    },
});

export default Header;
