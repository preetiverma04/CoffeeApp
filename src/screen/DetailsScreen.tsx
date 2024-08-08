import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavourite } from '../components/redux/Action';
import colors from '../utils/Colors';
import Toast from 'react-native-toast-message';
import DetailItem from './DetailsScreenComponent/DetailsItem';
const DetailScreen = () => {
    const dispatch = useDispatch();
    const route = useRoute();
    const item = route.params.item;
    const [selectedSize, setSelectedSize] = useState(item.prices[0].size);
    const [selectedPrice, setSelectedPrice] = useState(item.prices[0].price);
    useEffect(() => {
        const sizePrice = item.prices.find((p: { size: any}) => p.size === selectedSize);
        console.log(sizePrice)
        if (sizePrice) {
            setSelectedPrice(sizePrice.price);    
        }
        
    }, [selectedSize]);
    const handleSizePress = (size: any) => {
        setSelectedSize(size);
        
    };
    const handleLikeIcon = () => {
        dispatch(addToFavourite(item));
    };
    
    const handleCartButton = () => {
        const selectedItem = {
            ...item,
            selectedSize,
            selectedPrice,
           
        };

        dispatch(addToCart(selectedItem)); 
        Toast.show({
            type: 'customToast',
            position: 'bottom',
            text1: 'Added to Cart',
            text2: `${item.title} has been added to your cart.`,
            visibilityTime: 1000,
            autoHide: true,
            bottomOffset: 10,
        });
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
