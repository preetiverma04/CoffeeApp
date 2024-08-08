import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RPW } from '../components/ScreenSize';
import imagesPath from '../components/ImagePath/imagesPath';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { initializeCart, initializeFavourite, initializeOrderHistory } from '../components/redux/Action';

const SplashScreen = () => {
    const navigation = useNavigation();
    const dispatch = useDispatch();

    useEffect(() => {
        const loadCartData = async () => {
            try {
                const cartData = await AsyncStorage.getItem('cart');
                const orderData = await AsyncStorage.getItem('orderHistory');
                const favourites = await AsyncStorage.getItem('favourites');
                if (cartData) {
                    dispatch(initializeCart(JSON.parse(cartData)));
                }
                if (orderData) {
                    dispatch(initializeOrderHistory(JSON.parse(orderData)));
                }
                if (favourites){
                    dispatch(initializeFavourite(JSON.parse(favourites)));
                }
            } catch (error) {
                console.error('Error loading data from AsyncStorage', error);
            }
        };

        loadCartData();
        const timer = setTimeout(() => {
            navigation.replace('DrawerNavigation');
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigation, dispatch]);

    return (
        <ImageBackground
            source={imagesPath.splashscreen}
            style={styles.background}
            resizeMode="cover"
        >
            <View style={styles.overlay}>
                <Text style={styles.text}>Welcome To My Coffee App</Text>
                <Text style={styles.subText}>Loading...</Text>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: 'white',
        fontSize: RPW(7),
        fontWeight: '900',
        textAlign: 'center',
    },
    subText: {
        color: 'white',
        fontSize: RPW(5),
        textAlign: 'center',
        marginTop: RPW(2),
    },
    indicator: {
        marginTop: RPW(3),
    },
});

export default SplashScreen;
