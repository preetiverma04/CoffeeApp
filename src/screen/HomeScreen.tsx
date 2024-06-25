import React from 'react';
import {  ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { RPW, RPH } from '../components/ScreenSize';
import Headings from '../components/Headings';
import CustumInputfield from '../components/CustumInputfield';
import CoffeeTabBar from '../components/CoffeeTabBar';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    return (
        <>
            <StatusBar backgroundColor="#0C0F14" barStyle="light-content" />
                <ScrollView style={{ backgroundColor:"#0C0F14"}}>
                    <View style={styles.innerContainer}>
                        <Header/>
                        <View style={{marginTop:RPW(3)}}>
                        <Headings/>
                       </View>
                    <View style={{ marginTop: RPW(3) }}>
                        <CustumInputfield placeholder="Find your Coffee...." />
                    </View>
                    <View style={{ marginTop: RPW(3) }}>
                        <CoffeeTabBar/>
                    </View>
                </View>
                </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C0F14",
    },
    innerContainer: {
       
        marginBottom:RPW(10),
        paddingHorizontal: RPW(2), 
    },
});

export default HomeScreen;
