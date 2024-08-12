import React, { useState } from 'react';
import { ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { RPW, RPH } from '../components/ScreenSize';
import Headings from '../components/Headings';
import CustumInputfield from '../components/CustumInputfield';
import CoffeeTabBar from '../components/CoffeeTabBar';
import colors from '../utils/Colors';
const HomeScreen = () => {
    const [searchTab, setsearchTab] = useState('');
    const handlesearchData = (text:any) => {
        setsearchTab(text);
        // console.log(text);
    };
    return (
        <>
            <StatusBar backgroundColor={colors.background} barStyle="light-content" />
            <ScrollView style={styles.ScrollViewstyle} showsVerticalScrollIndicator={false}>
                <View style={styles.innerContainer}>
                    <Header />
                    <View style={{ marginTop: RPW(4) }}>
                        <Headings />
                    </View>
                    <View style={{ marginTop: RPW(4) }}>
                        <CustumInputfield placeholder="Find your Coffee...." width={RPH(10)} onChangeText={handlesearchData} />
                    </View>
                    <View style={{ marginTop: RPW(5) }}>
                        <CoffeeTabBar searchTab={searchTab} />
                    </View>
                </View>
            </ScrollView>
        </>
    );
};
const styles = StyleSheet.create({
    ScrollViewstyle: {
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    innerContainer: {
        flex: 1,
        marginBottom: RPW(10),
        paddingHorizontal: RPW(2),
    },
});
export default HomeScreen;
