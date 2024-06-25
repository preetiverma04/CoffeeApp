import React, { useState } from 'react';
import { FlatList, StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { RPW, RPH } from '../components/ScreenSize';
import FavouriteData from '../components/Data/FavouriteData';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { ImageSourcePropType } from 'react-native';

interface DetailItem {
    [x: string]: ImageSourcePropType | undefined;
    image: any;
    title: any;
    subtitle: any;
    imageCoffeeicon: any;
    CoffeeIconText: any;
    milkIconText: any;
    imageMilkIcon: any;
    starIcon: any;
    starRatingText1: any;
    starRatingText2: any;
    DescriptionHeading: any;
    Description: any;
    Size: any;
    sizeData: any;
    priceText: any;
    dolarSymbol: any;
    price: any;
    buttonText: any;
}

const DetailScreen = () => {
    const [selectedSize, setSelectedSize] = useState("");
    const navigation = useNavigation();

    const handleSizePress = (size: string) => {
        setSelectedSize(size);
    };

    const renderItem = ({ item }: { item: DetailItem }) => {
        return (
            <View style={styles.outerContainer}>
                <LinearGradient colors={['#262B33', '#262B33', 'black']}>
                    <View style={styles.outerContainer2}>
                        <ImageBackground source={item.image} style={styles.image}>
                            <View style={styles.topRow}>
                                <TouchableOpacity
                                    style={styles.backButtonContainer}
                                    onPress={() => navigation.goBack()}
                                >
                                    <Image
                                        source={require("../assets/images/paymentScreenimages/back.png")}
                                        style={styles.backIcon}
                                    />
                                </TouchableOpacity>
                                <View style={styles.likeIconContainer}>
                                    <Image
                                        source={require("../assets/images/pnggimagesFavouriteScreen/likeIcon1.png")}
                                        style={styles.likeIcon}
                                    />
                                </View>
                            </View>

                            <View style={styles.innerContainer1}>
                                <View style={styles.innerConatiner2}>
                                    <View>
                                        <Text style={styles.text}>{item.title}</Text>
                                        <Text style={styles.textSubtitle}>{item.subtitle}</Text>
                                    </View>
                                    <View style={styles.iconContainerouter}>
                                        <View style={styles.iconContainer}>
                                            <Image source={item.imageCoffeeicon} style={styles.icon} />
                                            <Text style={styles.IconContainerText}>{item.CoffeeIconText}</Text>
                                        </View>
                                        <View style={[styles.iconContainer, { marginLeft: RPW(2) }]}>
                                            <Image source={item.imageMilkIcon} style={styles.icon} />
                                            <Text style={styles.IconContainerText}>{item.milkIconText}</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.RatingTextConatinerOuter}>
                                    <View style={styles.ratingContent}>
                                        <Image source={item.starIcon} style={styles.starIcon}></Image>
                                        <Text style={styles.starRatingText1}>{item.starRatingText1}</Text>
                                        <Text style={styles.starRatingText2}>{item.starRatingText2}</Text>
                                    </View>
                                    <TouchableOpacity style={styles.medieumRoastedButton} activeOpacity={0.7}>
                                        <Text style={styles.buttonTextRoatedButton}>Medium Roasted</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ImageBackground>
                        <View>
                            <Text style={styles.DescriptionHeader}>{item.DescriptionHeading}</Text>
                            <Text style={styles.Description}>{item.Description}</Text>
                        </View>

                        <View>
                            <Text style={styles.SizeText}>{item.Size}</Text>
                        </View>
                        <View style={styles.SizeDataOuter}>
                            {item.sizeData.map((size: any, index: any) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => handleSizePress(size)}
                                    style={[
                                        styles.sizeDataContainer,
                                        selectedSize === size && styles.selectedSizeDataContainer
                                    ]}
                                >
                                    <Text style={[
                                        styles.sizeDataText,
                                        selectedSize === size && styles.selectedSizeDataText
                                    ]}>
                                        {size}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View>
                            {/* <Text style={styles.priceText}>{item.priceText}</Text> */}
                            <View style={styles.priceButtonContainer}>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.priceText}>{item.priceText}</Text>
                                    <View style={styles.priceRow}>
                                        <Text style={styles.dolarSymbol}>{item.dolarSymbol}</Text>
                                        <Text style={styles.price}>{item.price}</Text>
                                    </View>
                                </View>
                                <TouchableOpacity style={styles.button}>
                                    <Text style={styles.buttonText}>{item.buttonText}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </LinearGradient>
            </View>
        );
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={FavouriteData.slice(0, 1)}
                renderItem={renderItem}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C0F14",
    },
    outerContainer: {
        flex: 1,
        overflow: 'hidden',
    },
    outerContainer2: {},
    image: {
        borderRadius: RPW(20),
        flex: 1,
        width: '100%',
        height: RPH(50),
        justifyContent: 'flex-end',
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: RPW(3),
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: RPW(3),
    },
    backButtonContainer: {
        backgroundColor: '#21262E',
        borderRadius: RPW(1.3),
        padding: RPW(2),
        width: RPW(10),
        height: RPH(5),
    },
    backIcon: {
        alignSelf: "center",
        width: RPW(4),
        height: RPH(3),
    },
    likeIconContainer: {
        backgroundColor: '#21262E',
        borderRadius: RPW(1.3),
        width: RPW(10),
        height: RPH(5),
        padding: RPW(2),
    },
    likeIcon: {
        alignSelf: "center",
        width: RPW(5),
        height: RPH(3),
    },
    innerContainer1: {
        borderTopLeftRadius: RPW(12),
        borderTopRightRadius: RPW(12),
        width: '100%',
        height: RPH(20),
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: RPW(2),
        paddingHorizontal: RPW(3),
    },
    text: {
        fontFamily: "Poppins-Bold",
        marginTop: RPH(1),
        color: 'white',
        fontSize: RPW(7),
    },
    textSubtitle: {
        color: 'white',
        fontSize: RPW(3),
    },
    innerConatiner2: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    iconContainerouter: {
        marginHorizontal: RPW(2.5),
        flexDirection: "row",
        borderRadius: RPW(5)
    },
    iconContainer: {
        borderRadius: RPW(3),
        width: RPW(10),
        height: RPH(6),
        backgroundColor: "#0C0F14",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: RPW(5),
        height: RPH(4),
    },
    IconContainerText: {
        color: "white",
        fontSize: RPW(2.0),
    },
    starIcon: {
        marginTop: RPW(1),
        width: RPW(8),
        height: RPH(4),
    },
    RatingTextConatinerOuter: {
        marginTop: RPW(3),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    ratingContent: {
        flexDirection: "row",
        alignItems: "center",
    },
    starRatingText1: {
        fontFamily: "Poppins-Bold",
        marginTop: RPH(1),
        color: "white",
        fontSize: RPW(5),
    },
    starRatingText2: {
        marginTop:RPW(2.5),
        margin:RPW(1.4),
        fontFamily: "Poppins-Bold",
        color: "white",
        fontSize: RPW(3),
    },
    medieumRoastedButton: {
        height: RPH(6.5),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RPW(2),
        backgroundColor: "#0C0F14",
        paddingHorizontal: RPW(4),
    },
    buttonTextRoatedButton: {
        color: "white",
        textAlign: "center",
        fontSize: RPW(3.5),
        fontFamily: "Poppins-Bold",
    },
    DescriptionHeader: {
        fontFamily: "Poppins-Bold",
        lineHeight: RPW(12),
        marginHorizontal: RPW(4),
        color: "white",
        fontSize: RPW(6),
    },
    Description: {
        fontFamily: "Poppins-Medium",
        textAlign: "justify",
        fontWeight: "600",
        marginHorizontal: RPW(4),
        color: "white",
        fontSize: RPW(3),
    },
    SizeText: {
        marginHorizontal: RPW(3.8),
        color: "white",
        fontSize: RPW(5),
        marginVertical: RPH(3),
    },
    sizeDataText: {
        color: "white",
        fontSize: RPW(4),
    },
    sizeDataContainer: {
        backgroundColor: "black",
        width: RPW(29),
        height: RPH(6.5),
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        borderRadius: RPW(4),
        borderColor: "grey",
        borderWidth: 1,
    },
    selectedSizeDataContainer: {
        borderColor: "orange",
    },
    selectedSizeDataText: {
        color: "orange",
    },
    SizeDataOuter: {
        marginHorizontal: RPW(3),
        flexDirection: "row",
        justifyContent: "space-between",
    },
    priceButtonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: RPW(3),
        marginTop: RPW(4),
        marginBottom: RPW(15),
    },
    priceContainer: {
        flex: 1, 
    },
    priceRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    priceText: {
        marginLeft:RPW(5),
        color: 'white',
        fontSize: RPW(5),
    },
    dolarSymbol: {
        fontFamily: "Poppins-Bold",
        color: "orange",
        fontSize: RPW(5),
        marginLeft: RPW(2),
    },
    price: {
        fontFamily: "Poppins-Bold",
        color: "white",
        fontSize: RPW(5),
        marginLeft: RPW(2),
    },
    button: {
        flex: 1, 
        backgroundColor: "orange",
        height: RPH(7),
        borderRadius: RPW(5),
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: RPW(4),
    },
    buttonText: {
        textAlign:"center",
        fontSize: RPW(4.5),
        fontFamily: "Poppins-Bold",
        color: "white",
    },
});

export default DetailScreen;
