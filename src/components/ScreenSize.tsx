import React from 'react';
import { Dimensions } from 'react-native';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const RPW = (percentage:number) => {
    return (percentage / 100) * screenWidth;
};
const RPH = (percentage: number) => {
    return (percentage / 100) * screenHeight;
};
export { RPW, RPH };
 