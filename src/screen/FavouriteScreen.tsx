import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { RPW, RPH } from '../components/ScreenSize';
import Header from '../components/Header';
import FavouriteData from '../components/Data/FavouriteData';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// import { useSelector, UseSelector } from 'react-redux';
interface FavouriteItem {
    image: any;
    title: string;
    subtitle: string;
    imageCoffeeIcon: any;
    CoffeeIconText: any;
    milkIconText: any;
    imageMilkIcon: any;
    starIcon: any;
    starRatingText1: any;
    starRatingText2: any;
    DescriptionHeading: any;
    Description: any;
    Size: any;
    sizeData: string[];
    priceText: String;
    dolarSymbol: any;
    price: any;
    buttonText: String;
}
const FavouriteScreen = () => {
    const favouriteItems = useSelector((state) => state.Favourites.favourites);
    
    const navigation = useNavigation();
    const [selectedSize, setSelectedSize] = useState("");
   
    console.log('===================favouriteItems=================');
    console.log(favouriteItems);
    console.log('====================================');
   
    const renderItem = ({ item }: { item: FavouriteItem }) => {
        return (
           
            <View style={styles.outerContainer}>
                <LinearGradient
                    colors={['#262B33', '#262B33', 'black']}
                    start={{ x: 0.5, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    style={{ flex: 1 }} >
                    <View style={styles.outerContainer2}>
                        <ImageBackground source={item.image} style={styles.image}>
                            <TouchableOpacity style={styles.likeIconContainer}>
                                
                                <Image
                                    source={require("../assets/images/pnggimagesFavouriteScreen/likeIcon1.png")}
                                    style={styles.likeIcon}
                                />
                            </TouchableOpacity>
                            <View style={styles.innerContainer1}>
                                <View style={styles.innerConatiner2}>
                                    <View>
                                        <Text style={styles.text}>{item.title}</Text>
                                        <Text style={styles.textSubtitle}>{item.subtitle}</Text>
                                    </View>
                                    <View style={styles.iconContainerouter}>
                                        <View style={styles.iconContainer}>
                                            <Image source={item.imageCoffeeIcon} style={styles.icon} />
                                            <Text style={styles.IconContainerText}>{item.CoffeeIconText}</Text>
                                        </View>
                                        <View style={[styles.iconContainer, { marginLeft: RPW(2) }]}>
                                            <Image source={item.imageMilkIcon} style={styles.icon} />
                                            <Text style={styles.IconContainerText}>{item.milkIconText}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RatingTextConatinerOuter}>
                                    <View style={styles.ratingRow}>
                                        <View style={styles.ratingInfo}>
                                            <Image source={item.starIcon} style={styles.starIcon} />
                                            <Text style={styles.starRatingText1}>{item.starRatingText1}</Text>
                                            <Text style={styles.starRatingText2}>{item.starRatingText2}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity style={styles.mediumRoastedButton} activeOpacity={0.7}>
                                                <Text style={styles.buttonTextRoastedButton}>Medium Roasted</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={styles.descriptionContainer}>
                            <Text style={styles.DescriptionHeader}>{item.DescriptionHeading}</Text>
                            <Text style={styles.Description}>{item.Description}</Text>
                        </View>
                    </View>
                </LinearGradient>
            </View>
           
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={favouriteItems}
                // data={favouriteItems}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.contentContainerstyles}
                ListHeaderComponent={() => (
                    <View>
                        <Header text={"Favourite Screen"} />
                    </View>
                )}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    contentContainerstyles: {
        paddingBottom: RPW(15),
    },
    container: {
        flex: 1,
        backgroundColor: "#0C0F14",
    },
    likeIconContainer: {
        position: 'absolute',
        top: RPW(3),
        right: RPW(3),
        borderRadius: RPW(10),
        padding: RPW(2),
    },
    likeIcon: {
        width: RPW(10),
        height: RPW(10),
    },
    outerContainer: {
        borderRadius: RPW(10),
        marginVertical: RPW(2),
        marginHorizontal: RPW(5),
        overflow: 'hidden',
     
    },
    outerContainer2: {
        // Additional styles if needed
    },
    image: {
        flex: 1,
        width: '100%',
        height: RPH(50),
        justifyContent: 'flex-end',
    },
    innerContainer1: {
        borderTopLeftRadius: RPW(10),
        borderTopRightRadius: RPW(10),
        width: '100%',
        height: RPH(20),
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: RPW(3),
        paddingHorizontal: RPW(3),
    },
    text: {
        lineHeight: RPW(8),
        fontFamily: "Poppins-Bold",
        fontWeight: "600",
        marginTop: RPH(1),
        color: 'white',
        fontSize: RPW(6),
    },
    textSubtitle: {
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        color: '#AEAEAE',
        // fontFamily: "Poppins-light",
        fontSize: RPW(3),
    },
    innerConatiner2: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconContainerouter: {
        flexDirection: "row",
        borderRadius: RPW(5),
    },
    iconContainer: {
        marginHorizontal: RPW(2),
        borderRadius: RPW(3),
        width: RPW(13),
        height: RPH(6),
        backgroundColor: "#0C0F14",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: RPW(5),
        height: RPH(3),
    },
    IconContainerText: {
        color: "white",
        fontSize: RPW(2.0),
    },
    starIcon: {
        tintColor: "orange",
        marginTop: RPH(1),
        width: RPW(6),
        height: RPH(3),
    },
    RatingTextConatinerOuter: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    ratingRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    ratingInfo: {
       
        flexDirection: 'row',
        alignItems: 'center',
    },
    starRatingText1: {
        marginTop: RPH(2),
        fontWeight: "600",
        fontFamily: "Poppins-Bold",
        marginLeft: RPW(2),
        color: "white",
        fontSize: RPW(5.5),
    },
    starRatingText2: {
        marginTop: RPH(2),
        fontFamily: "Poppins-Medium",
        marginLeft: RPW(1),
        color: "white",
        fontSize: RPW(3),
        fontWeight: "400",
    },
    mediumRoastedButton: {
        width: RPW(35),
        height: RPH(6),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RPW(2),
        backgroundColor: "#0C0F14",
    },
    buttonTextRoastedButton: {
        fontFamily: "Poppins-Medium",
        color: "#AEAEAE",
        fontWeight: "500",
        textAlign: "center",
        fontSize: RPW(3),
    },
    descriptionContainer: {
        paddingHorizontal: RPW(2),
        paddingVertical: RPH(2),
        // paddingHorizontal: RPW(5), 
    },
    DescriptionHeader: {
        paddingHorizontal: RPW(2),
        color: "white",
        fontFamily: "Poppins-Bold",
        fontWeight: "600",
        fontSize: RPW(6),
        lineHeight: RPW(9),
    },
    Description: {
        textAlign: 'justify',
        fontFamily: "Poppins-Light",
        lineHeight: RPW(5.2),
        fontWeight: "400",
        color: "white",
        fontSize: RPW(2.7),
        paddingHorizontal: RPW(2),
    },
});
export default FavouriteScreen;
