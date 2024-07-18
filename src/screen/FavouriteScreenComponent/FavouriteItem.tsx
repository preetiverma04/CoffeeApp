// FavouriteItem.tsx
import React, { useState } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { RPW, RPH } from '../../components/ScreenSize';
import colors from '../../utils/Colors';
import LinearGradientColors from '../../utils/linearGradientColors';
import imagesPath from '../../components/ImagePath/imagesPath';
const FavouriteItem = ({item}:any) => {
    const [liked, setLiked] = useState(false);
    const handleLikeToggle = () => {
        setLiked(!liked);
    };
    return (
        <View style={styles.outerContainer}>
            <LinearGradientColors>
                <View style={styles.outerContainer2}>
                    <ImageBackground source={item.image} style={styles.image}>
                        <TouchableOpacity style={styles.likeIconContainer} onPress={handleLikeToggle}>
                            <Image
                                source={imagesPath.likeIcon}
                                style={[styles.likeIcon, { tintColor: liked ? colors.red : colors.textTitleLight }]}
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
            </LinearGradientColors>
        </View>
    );
};
const styles = StyleSheet.create({
    likeIconContainer: {
        position: 'absolute',
        top: RPW(5),
        right: RPW(5),
        borderRadius: RPW(3),
        backgroundColor: colors.background,
        width: RPW(10),
        height: RPH(5),
        padding: RPW(2),
    },
    likeIcon: {
        alignSelf: "center",
        width: RPW(6),
        height: RPW(6),
        textAlignVertical: "center",
        alignItems: "center"
    },
    outerContainer: {
        borderRadius: RPW(8),
        marginVertical: RPW(2),
        marginHorizontal: RPW(5),
        overflow: 'hidden',
    },
    outerContainer2: {
       
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
        paddingVertical: RPW(5),
        paddingHorizontal: RPW(5),
    },
    text: {
        lineHeight: RPW(8),
        fontFamily: "Poppins-Medium",
        fontWeight: "600",
        marginTop: RPH(1),
        color: colors.textSubtitle,
        fontSize: RPW(5),
        paddingHorizontal: RPW(3),
    },
    textSubtitle: {
        fontFamily: "Poppins-Medium",
        fontWeight: "400",
        color: colors.textSubtitle,
        fontSize: RPW(3),
        paddingHorizontal: RPW(3),
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
        backgroundColor: colors.background,
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: RPW(6.5),
        height: RPH(3),
    },
    IconContainerText: {
        color: colors.textSubtitle,
        fontSize: RPW(2.0),
    },
    starIcon: {
        paddingHorizontal: RPW(3),
        tintColor: colors.copperRed,
        marginTop: RPH(1),
        width: RPW(6),
        height: RPH(3),
        marginLeft: RPW(2)
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
        fontFamily: "Poppins-Medium",
        marginLeft: RPW(1),
        color: colors.textTitleLight,
        fontSize: RPW(5),
    },
    starRatingText2: {
        marginTop: RPH(2),
        fontFamily: "Poppins-Light",
        marginLeft: RPW(1),
        color: colors.textSubtitle,
        fontSize: RPW(3),
        fontWeight: "400",
    },
    mediumRoastedButton: {
        width: RPW(35),
        height: RPH(6),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RPW(2),
        backgroundColor: colors.background,
    },
    buttonTextRoastedButton: {
        fontFamily: "Poppins-Light",
        color: colors.textSubtitle,
        fontWeight: "500",
        textAlign: "center",
        fontSize: RPW(3),
    },
    descriptionContainer: {
        textAlign:"justify",
        paddingVertical: RPH(2),
    },
    DescriptionHeader: {
        color: colors.textSubtitle,
        fontFamily: "Poppins-Medium",
        fontWeight: "500",
        fontSize: RPW(5),
        lineHeight: RPW(9),
        paddingHorizontal: RPW(5),
        textAlign:"justify",
    },
    Description: {
        fontFamily: "Poppins-Light",
        lineHeight: RPW(5.2),
        fontWeight: "400",
        color: colors.textSubtitle,
        fontSize: RPW(2.7),
        paddingHorizontal: RPW(5),
        textAlign: "justify",
    },
});
export default FavouriteItem;
