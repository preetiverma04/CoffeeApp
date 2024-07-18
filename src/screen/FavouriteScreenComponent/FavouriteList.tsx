import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import FavouriteItem from './FavouriteItem';
import { RPW } from '../../components/ScreenSize';
const FavouriteList = ({ favouriteItems }:any) => {
    return (
        <FlatList
            data={favouriteItems}
            renderItem={({ item }) => <FavouriteItem item={item} />}
            keyExtractor={(item, index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.contentContainerstyles}
        />
    );
};
const styles = StyleSheet.create({
    contentContainerstyles: {
        paddingBottom: RPW(15),
    },
});

export default FavouriteList;
