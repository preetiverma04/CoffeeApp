import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from '../components/Header';
import { useSelector } from 'react-redux';
import LotteeFavourite from './FavouriteScreenComponent/LotteeFavourite';
import FavouriteList from './FavouriteScreenComponent/FavouriteList';
import colors from '../utils/Colors';
const FavouriteScreen = () => {
    const favouriteItems = useSelector((state) => state.Favourites.favourites);
    return (
        <View style={styles.container}>
            <View>
                <Header text={"Favourite Screen"} />
            </View>
            {
                favouriteItems.length == 0 ? <LotteeFavourite /> : <FavouriteList favouriteItems={favouriteItems} />
            }
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
});
export default FavouriteScreen;
