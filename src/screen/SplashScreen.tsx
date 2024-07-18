import React, { useEffect } from 'react';
import { ImageBackground, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RPW } from '../components/ScreenSize';
import imagesPath from '../components/ImagePath/imagesPath';
const SplashScreen = () => {
    const navigation = useNavigation();
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('tabs'); 
        }, 3000); 
        return () => clearTimeout(timer);
    }, [navigation]);
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
        justifyContent: 'center', 
        alignItems: 'center', 
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
        color: 'orange',
        fontSize: RPW(6),
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subText: {
        color: 'orange',
        fontSize: RPW(5),
        textAlign: 'center',
        marginTop: RPW(2),
    },
    indicator: {
        marginTop: RPW(3),
    },
});

export default SplashScreen;
