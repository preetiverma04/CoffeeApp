import React, { useState } from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RPW, RPH } from '../components/ScreenSize';
import { useDispatch } from 'react-redux';
import { addToCart, addToFavourite } from '../components/redux/Action';
const DetailScreen = () => {
    const dispatch=useDispatch()
    const navigation = useNavigation();
    const route = useRoute();
    const item= route.params.item;
    console.log('Received item:', item);
    if (!item) {
        return <Text>Loading...</Text>; 
    }
    const [selectedSize, setSelectedSize] = useState(item.sizeData[0]); 
    const handleSizePress = (size:any) => {
        setSelectedSize(size);
    };
    const handlelikeIcon =()=>{
        dispatch(addToFavourite(item));
        
    }
    const handlecartButton=()=>{
        dispatch(addToCart(item))
    }
    return (
        <View style={styles.container}>
            <LinearGradient colors={['#262B33', '#262B33', 'black']} style={styles.gradient}>
                <ImageBackground source={item.image} style={styles.image}>
                    <View style={styles.topRow}>
                        <TouchableOpacity style={styles.backButtonContainer} onPress={() => navigation.goBack()}>
                            <Image source={require("../assets/images/paymentScreenimages/back.png")} style={styles.backIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.likeIconContainer} onPress={() =>  handlelikeIcon()}>
                            <Image source={item.likeIcon} style={styles.likeIcon} />
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
                            <TouchableOpacity onPress={() => { /* Handle star press */ }}>
                                <View style={styles.starinnerRated}>
                                    <Image source={item.starIcon} style={styles.starIcon} />
                                    <Text style={styles.ratedtext1}>{item.starRatingText1}</Text>
                                    <Text style={styles.ratedtext2}>{item.starRatingText2}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.ratedButtonContainer} onPress={() => { /* Handle rated button press */ }}>
                                <Text style={styles.ratedButtonText}>Roasted Medium</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
                <View >
                    <Text style={styles.descriptionHeader}>{item.DescriptionHeading}  </Text>
                   
                    <Text style={styles.description}>{item.Description}</Text>
                </View>
                <View >
                    <Text style={{color:"white",fontSize:RPH(2.5),fontFamily:"Poppins-Medium",marginHorizontal:RPW(4)}} >{item.Size}</Text>
                    <View style={styles.sizeContainer}>
                        {item.sizeData.map((size: string) => (
                            <TouchableOpacity
                                key={size}
                                onPress={() => handleSizePress(size)}
                                style={[styles.sizeButton, selectedSize === size && styles.sizeButtonSelected]}
                            >
                                <Text style={[styles.sizeButtonText, selectedSize === size && styles.sizetextSelected]}>{size}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
                <View style={styles.priceButtonContainer}>
                <View>
                        <Text style={styles.priceLabel}>{item.priceText}</Text>
                   
                    <View style={styles.priceRow}>
                       
                        <Text style={styles.dollarSymbol}>{item.dolarSymbol}</Text>
                        <Text style={styles.price}>{item.price}</Text>
                    </View>
                </View>
                    <TouchableOpacity style={styles.button} onPress={() =>  handlecartButton()}>
                        <Text style={styles.buttonText}>{item.buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </LinearGradient>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0C0F14",
    },
    gradient: {
        flex: 1,
    },
    image: {
        flex: 1,
        width: '100%',
        height:"100%",
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
        backgroundColor: '#0C0F14',
        borderRadius: RPW(1.3),
        padding: RPW(2),
        width: RPW(10),
        height: RPH(5),
    },
    backIcon: {
        tintColor: "white",
        alignSelf: "center",
        width: RPW(4),
        height: RPH(3),
    },
    likeIconContainer: {
        backgroundColor: '#0C0F14',
        borderRadius: RPW(1.3),
        width: RPW(10),
        height: RPH(5),
        padding: RPW(2),
    },
    likeIcon: {
        tintColor:"red",
        alignSelf: "center",
        width: RPW(5),
        height: RPH(3),
    },
    detailContainer: {
        borderTopLeftRadius: RPW(12),
        borderTopRightRadius: RPW(12),
        width: '100%',
        height: "40%",
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        paddingVertical: RPW(3),
        paddingHorizontal: RPW(3),
    },
    textContainer: {
        marginBottom: RPH(2),
    },
    title: {
        fontFamily: "Poppins-Bold",
        color: 'white',
        fontSize: RPW(7),
    },
    subtitle: {
        color: 'white',
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
        backgroundColor: "#0C0F14",
        justifyContent: "center",
        alignItems: "center",
    },
    icon: {
        width: RPW(5),
        height: RPH(4),
    },
    iconText: {
        color: "white",
        fontSize: RPW(2.0),
        marginLeft: RPW(1),
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
        lineHeight: RPH(3),
        color: "white",
        fontFamily: "Poppins-Bold",
        fontWeight: "300",
        fontSize: RPW(4)
    },
    ratedtext2: {
        fontFamily: "Poppins-Medium",
        fontWeight: "300",
        lineHeight: RPH(3),
        color: "white",
    },
    starIcon: {
        tintColor: "orange",
        marginLeft: RPW(3),
        width: RPW(7),
        height: RPH(3),
    },
    ratedButtonContainer: {
        backgroundColor: '#0C0F14',
        borderRadius: RPW(4),
        width: RPW(35),
        height: RPH(6),
        justifyContent: "center",
        alignItems: "center",
    },
    ratedButtonText: {
        color: 'white',
        fontFamily: 'Poppins-Bold',
        fontSize: RPW(3),
        textAlign: 'center',
    },
    descriptionHeader: {
        fontFamily: "Poppins-Medium",
         
        lineHeight: RPH(6),
        marginHorizontal: RPW(4),
        color: "white",
        fontSize: RPW(6),
    },
    description: {
       
        fontFamily: "Poppins-Medium",
        textAlign: "justify",
        fontWeight: "400",
        marginHorizontal: RPW(4),
        color: "white",
        lineHeight: RPH(2.6),
        fontSize: RPW(2.8),
    },
    sizeContainer: {
        flexDirection: 'row',
        marginHorizontal:RPW(3),
        justifyContent: 'space-between',
        marginVertical: RPW(3),
    },
    sizeButton: {
        width:RPW(25),
        height:RPH(6),
        marginHorizontal:RPW(3),
        justifyContent:"center",
        // padding: RPW(2),
        borderRadius: RPW(3),
        backgroundColor: 'black',
    },
    sizeButtonSelected: {
       borderColor:"orange",
       borderWidth:1,
    },
    sizeButtonText: {
        alignItems:"center",
        alignSelf:"center",
        color: 'white',
        fontSize:RPW(5),
        textAlignVertical:"center",
        fontFamily:"Poppins-Bold"
    },
    sizetextSelected:{
        color:"orange"

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
        textAlign:"center",
        color: 'white',
        fontSize: RPW(3),
        fontFamily: 'Poppins-Bold',
    },
    priceRow: {

        flexDirection: 'row',
        alignItems: 'baseline',
        lineHeight:RPH(5),
        // marginLeft: RPW(1),
    },
    dollarSymbol: {
        color: 'orange',
        fontSize: RPW(6),
        fontFamily: 'Poppins-Bold',
    },
    price: {
        color: 'white',
        fontSize: RPW(6),
        fontFamily: 'Poppins-Bold',
        marginLeft: RPW(1),
    },
    button: {

        backgroundColor: '#FF9700',
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
        fontSize: RPW(5),
        fontWeight:"900",
        // fontFamily: 'Poppins-Bold',
        textAlignVertical: "center",
        justifyContent: "center",
        

    },
});

export default DetailScreen;
