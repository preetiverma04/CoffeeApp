import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import imagesPath from '../../components/ImagePath/imagesPath';
const LotteeCart = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={imagesPath.lotteeCoffeecup}
                loop={true}
                autoPlay
                style={styles.lottie}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    lottie: {
        width: "100%",
        height: "85%",
    },
});
export default LotteeCart;
