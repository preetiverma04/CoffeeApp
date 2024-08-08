import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import imagesPath from '../../components/ImagePath/imagesPath';
import colors from '../../utils/Colors';
import { RPW, RPH } from '../../components/ScreenSize';

const DetailItem = ({ item, selectedSize, handleSizePress, handleLikeIcon, handleCartButton }) => {
    const [liked, setLiked] = useState(false);
    const [price, setPrice] = useState(item.prices[0].price);
    const [currency, setCurrency] = useState(item.prices[0].currency);
    const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);
    useEffect(() => {
        const selectedItem = item.prices.find(p => p.size === selectedSize) || item.prices[0];
        setPrice(selectedItem.price);
        setCurrency(selectedItem.currency);
    }, [selectedSize, item.prices]);

    const handleSizePressInternal = (size) => {
        handleSizePress(size);
    };

    const handleLikeToggle = () => {
        setLiked(prevLiked => !prevLiked);
        handleLikeIcon();
    };

    const navigation = useNavigation();

    return (
        <LinearGradient colors={['#262B33', '#262B33', 'black']} style={styles.gradient}>
            <ImageBackground source={item.image} style={styles.image}>
                <View style={styles.topRow}>
                    <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                        <Image source={imagesPath.backIcon} style={styles.backIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.likeIconContainer} onPress={handleLikeToggle}>
                        <Image source={item.likeIcon} style={[styles.likeIcon, { tintColor: liked ? colors.red : colors.textTitleLight }]} />
                    </TouchableOpacity>
                </View>
                <View style={styles.detailContainer}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: RPW(3) }}>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{item.title}</Text>
                            <Text style={styles.subtitle}>{item.subtitle}</Text>
                        </View>
                        <View style={styles.iconRow}>
                            <View style={styles.iconBox}>
                                <Image source={item.imageCoffeeIcon} style={styles.icon} />
                                <Text style={styles.iconText}>{item.CoffeeIconText}</Text>
                            </View>
                            <View style={[styles.iconBox, { marginLeft: RPW(2) }]}>
                                <Image source={item.imageMilkIcon} style={styles.icon} />
                                <Text style={styles.iconText}>{item.milkIconText}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.starRatedContainer}>
                        <TouchableOpacity>
                            <View style={styles.starinnerRated}>
                                <Image source={item.starIcon} style={styles.starIcon} />
                                <Text style={styles.ratedtext1}>{item.starRatingText1}</Text>
                                <Text style={styles.ratedtext2}>{item.starRatingText2}</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.ratedButtonContainer}>
                            <Text style={styles.ratedButtonText}>Roasted Medium</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionContainer}>
                <Text style={styles.descriptionHeader}>{item.DescriptionHeading}</Text>
                <Text
                    style={styles.description}
                    numberOfLines={isDescriptionExpanded ? 0 : 2} 
                    // ellipsizeMode="tail"
                >
                    {item.Description}
                </Text>
                <TouchableOpacity onPress={() => setDescriptionExpanded(!isDescriptionExpanded)}>
                    <Text style={styles.readMoreText}>{isDescriptionExpanded ? 'read less...' : 'read more...'}</Text>
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.sizetextLabel}>{item.Size}</Text>
                <View style={styles.sizeContainer}>
                    {item.prices.map((priceItem) => (
                        <TouchableOpacity
                            key={priceItem.size}
                            onPress={() => handleSizePressInternal(priceItem.size)}
                            style={[styles.sizeButton, selectedSize === priceItem.size && styles.sizeButtonSelected]}
                        >
                            <Text style={[styles.sizeButtonText, selectedSize === priceItem.size && styles.sizetextSelected]}>{priceItem.size}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>
            <View style={styles.priceButtonContainer}>
                <View>
                    <Text style={styles.priceLabel}>{item.priceText}</Text>
                    <View style={styles.priceRow}>
                        <Text style={styles.dollarSymbol}>{currency}</Text>
                        <Text style={styles.price}>{price}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.button} onPress={handleCartButton}>
                    <Text style={styles.buttonText}>{item.buttonText}</Text>
                </TouchableOpacity>
            </View>
        </LinearGradient>
    );
};
const styles=StyleSheet.create({
    gradient: {
        flex: 1,
    },
    image: {
        // flex: 1,
        width: '100%',
        height: RPH(65),
        // height: '60%',
        justifyContent: "flex-end",
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: RPW(5),
        alignItems: 'center',
        width: '100%',
        position: 'absolute',
        top: RPW(3),
    },
    backButtonContainer: {
        backgroundColor: colors.background,
        borderRadius: RPW(3.3),
        padding: RPW(2),
        width: RPW(10),
        height: RPH(5),
    },
    backIcon: {
        tintColor: "#52555A",
        alignSelf: "center",
        width: RPW(4),
        height: RPH(3),
    },
    likeIconContainer: {
        backgroundColor: '#0C0F14',
        borderRadius: RPW(3.3),
        width: RPW(10.5),
        height: RPH(5),
        padding: RPW(2),
    },
    likeIcon: {
        tintColor: "red",
        alignSelf: "center",
        width: RPW(7),
        height: RPH(3),
    },
    detailContainer: {
        borderTopLeftRadius: RPW(12),
        borderTopRightRadius: RPW(12),
        width: '100%',
        height: "30%",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: RPW(5),
        paddingHorizontal: RPW(5),
    },
    textContainer: {
        marginBottom: RPH(2),
    },
    title: {
        fontFamily: "Poppins-Medium",
        color: 'white',
        fontSize: RPW(6),
    },
    subtitle: {
        color: '#AEAEAE',
        fontSize: RPW(3),
    },
    iconRow: {
        flexDirection: "row",
        marginBottom: RPH(2),
    },
    iconBox: {
        flexDirection: "column",
        borderRadius: RPW(3),
        width: RPW(13),
        height: RPH(6.5),
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: RPW(8),
        height: RPH(4),
    },
    iconText: {
        color: colors.textSubtitle,
        fontSize: RPW(2.0),

    },
    starRatedContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    starinnerRated: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    ratedtext1: {
        marginTop: RPH(0.5),
        lineHeight: RPH(3),
        color: "white",
        fontFamily: "Poppins-Medium",
        fontWeight: "300",
        fontSize: RPW(4),
        marginLeft: RPW(1)
    },
    ratedtext2: {
        marginTop: RPH(0.5),
        fontSize: RPW(2.5),
        fontFamily: "Poppins-Light",
        fontWeight: "300",
        lineHeight: RPH(2.5),
        color: colors.textTitleLight,
        marginLeft: RPW(1)
    },
    starIcon: {
        tintColor: colors.copperRed,
        marginLeft: RPW(3),
        width: RPW(5),
        height: RPH(3),
    },
    ratedButtonContainer: {
        backgroundColor: colors.background,
        borderRadius: RPW(3.5),
        width: RPW(35),
        height: RPH(6),
        justifyContent: "center",
        alignItems: "center",
    },
    ratedButtonText: {
        color: colors.textSubtitle,
        fontFamily: 'Poppins-Light',
        fontSize: RPW(3),
        textAlign: 'center',
    },
    descriptionContainer: {
        marginHorizontal: RPW(3),
        marginVertical: RPH(2),
    },
    descriptionHeader: {
        marginHorizontal: RPW(3),
        color: "#AEAEAE",
        fontFamily: "Poppins-Bold",
        fontSize: RPW(5.3),
    },
    description: {
        marginHorizontal: RPW(3),
        color: "#AEAEAE",
        fontFamily: "Poppins-Light",
        fontSize: RPW(3.5),
        lineHeight: RPH(2.8),
        textAlign:"justify"
    },
    readMoreText: {
        color: colors.textSubtitle,
        fontFamily: "Poppins-Medium",
        fontSize: RPW(3.5),
        marginHorizontal: RPW(3),
        // marginTop: RPH(1),
    },
    sizetextLabel:{
        color:colors.textSubtitle,
        marginHorizontal:RPW(5.5),
        fontFamily: "Poppins-Bold",
        fontSize:RPW(5.3),

    },
    sizeContainer: {
        flexDirection: 'row',
        marginHorizontal: RPW(3),
        justifyContent: 'space-between',
        marginVertical: RPW(3),
    },
    sizeButton: {
        width: RPW(25),
        height: RPH(6),
        marginHorizontal: RPW(3),
        justifyContent: "center",
        // padding: RPW(2),
        borderRadius: RPW(3),
        backgroundColor: '#141921',
    },
    sizeButtonSelected: {
        borderColor: "#D17842",
        borderWidth: 1,
    },
    sizeButtonText: {
        alignItems: "center",
        alignSelf: "center",
        color: 'white',
        fontSize: RPW(5),
        textAlignVertical: "center",
        fontFamily: "Poppins-Medium"
    },
    sizetextSelected: {
        color: "#D17842"

    },

    priceButtonContainer: {
        marginTop: RPW(5),
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingHorizontal: RPW(3),
        paddingBottom: RPH(3),
    },
    priceContainer: {

        flexDirection: 'row',
        alignItems: 'center',
    },
    priceLabel: {
        textAlign: "center",
        color: '#AEAEAE',
        fontSize: RPW(3),
        fontFamily: 'Poppins-Medium',
    },
    priceRow: {

        flexDirection: 'row',
        alignItems: 'baseline',
        lineHeight: RPH(5),
        // marginLeft: RPW(1),
    },
    dollarSymbol: {
        color: '#D17842',
        fontSize: RPW(6),
        fontFamily: 'Poppins-Medium',
        fontWeight: "800",
    },
    price: {
        color: 'white',
        fontSize: RPW(6),
        fontFamily: 'Poppins-Medium',
        marginLeft: RPW(1),
    },
    button: {

        backgroundColor: '#D17842',
        paddingVertical: RPW(2.5),

        // paddingHorizontal: RPW(4),
        borderRadius: RPW(4),
        width: RPW(53),
        height: RPH(7),
        alignItems: "center",
        justifyContent: "center",
    },
    buttonText: {
        color: 'white',
        alignSelf: "center",
        fontSize: RPW(4.6),
        fontWeight: "600",
        // fontFamily: 'Poppins-Bold',
        textAlignVertical: "center",
        justifyContent: "center",


    },
})
export default DetailItem;