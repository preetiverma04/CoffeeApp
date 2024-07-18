import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {  useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavourite } from '../components/redux/Action';
import DetailItem from './DetailsScreenComponent/DetailsItem';
import colors from '../utils/Colors';
const DetailScreen = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const item = route.params.item;
    const [selectedSize, setSelectedSize] = useState(item.sizeData[0]);
    const handleSizePress = (size: any) => {
        setSelectedSize(size);
    };
    const handleLikeIcon = () => {
        dispatch(addToFavourite(item));
    };
     const handleCartButton = () => {
     
            dispatch(addToCart(item));
      
    };
    if (!item) {
        return <Text>Loading...</Text>;
    }
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <DetailItem
                    item={item}
                    selectedSize={selectedSize}
                    handleSizePress={handleSizePress}
                    handleLikeIcon={handleLikeIcon}
                    handleCartButton={handleCartButton}
                />
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: colors.background,
    },
    container: {
        backgroundColor: colors.background,
    },
});
export default DetailScreen;
