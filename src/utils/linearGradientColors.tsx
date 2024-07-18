// linearGradientColors.tsx
import React from 'react';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import colors from './Colors';

const LinearGradientColors = ({ children}) => {
    return (
        <LinearGradient
            colors={[colors.lineargradient_FavouriteScreen_darkSlateBlue,colors.lineargradient_FavouriteScreen_darkSlateBlue,colors.pureBlack]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={styles.gradient}
        >
            {children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
});

export default LinearGradientColors;
