import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import imagesPath from '../../components/ImagePath/imagesPath';
const LotteeFavourite = () => {
    return (
        <View style={styles.container}>
            <LottieView source={imagesPath.lotteeCoffeecup}
                loop={true} autoPlay style={styles.animation} />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    animation: {
        width: "100%",
        height: "90%",
    },
});
export default LotteeFavourite;
