import React,{useState} from 'react';
import {  ScrollView, StatusBar, View, StyleSheet } from 'react-native';
import Header from '../components/Header';
import { RPW, RPH } from '../components/ScreenSize';
import Headings from '../components/Headings';
import CustumInputfield from '../components/CustumInputfield';
import CoffeeTabBar from '../components/CoffeeTabBar';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
    const [searchTab, setsearchTab] = useState('')
    const handlesearchData=(text:any)=>{
        setsearchTab(text);
        console.log(text)
    }
    return (
        <>
            <StatusBar backgroundColor="#0C0F14" barStyle="light-content" />
                <ScrollView style={{ backgroundColor:"#0C0F14"}}>
                    <View style={styles.innerContainer}>
                        <Header/>
                        <View style={{marginTop:RPW(1)}}>
                        <Headings/>
                       </View>
                    <View style={{ marginTop: RPW(1) }}>
                        <CustumInputfield placeholder="Find your Coffee...." width={RPH(20)}
                            onChangeText={handlesearchData}/>
                    </View>
                    <View style={{ marginTop: RPW(3) }}>
                        <CoffeeTabBar searchTab={searchTab}/>
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
