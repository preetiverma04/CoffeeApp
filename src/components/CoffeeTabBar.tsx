import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, FlatList, ImageBackground, Alert } from 'react-native';
import { CoffeeTabData, Coffeedata, CoffeBeansData } from './Data/CoffeeTabData';
import { RPH, RPW } from './ScreenSize';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { addToCart } from '../components/redux/Action';
import imagesPath from './ImagePath/imagesPath';
import colors from '../utils/Colors';
import Toast from 'react-native-toast-message';
const CoffeeTabBar = ({ searchTab = '' }) => {
    const dispatch=useDispatch();
    const [filteredCoffeeData, setFilteredCoffeeData] = useState(Coffeedata);
    const [selectedTab, setSelectedTab] = useState<string>("All");
    const navigation = useNavigation();
    const handlePress = (item: string) => {
        setSelectedTab(item);
    };
    useEffect(() => {
        const filterData = () => {
            let filteredItems = [...Coffeedata];
            if (searchTab) {
                const searchLower = searchTab.toLowerCase();
                filteredItems = filteredItems.filter(coffee =>
                    coffee.title.toLowerCase().includes(searchLower)
                );
            }
            if (selectedTab !== 'All') {
                filteredItems = filteredItems.filter(item => item.title === selectedTab);
            }
            return filteredItems;
        };
        setFilteredCoffeeData(filterData());
    }, [searchTab, selectedTab]);
    const handleAddToCart = (item: any) => {
        const selectedSize = item.prices[0].size; 
        const selectedPrice = item.prices.find(price => price.size === selectedSize)?.price || item.prices[0]?.price;
        const itemWithSelectedSize = {
            ...item,
            selectedSize,
            selectedPrice
        };
        dispatch(addToCart(itemWithSelectedSize));
        Toast.show({
            type: 'customToast',
            position: 'bottom',
            text1: 'Added to Cart',
            text2: `${item.title} (${selectedSize}) has been added to your cart.`,
            visibilityTime: 1000,
            autoHide: true,
            bottomOffset: 10,
        });
    };
    const renderTabItem = ({ item }: { item: string }) => (
        <View style={styles.tabItemContainer}>
            <Pressable
                onPress={() => handlePress(item)}
                disabled={selectedTab === item}>
                <Text style={[styles.tabItem, { color: selectedTab === item ? colors.copperRed : colors.textTitleLight }]}>
                    {item}
                </Text>
                {selectedTab === item && (
                    <View style={styles.indicator} />
                )}
            </Pressable>
        </View>
    );
    const renderCoffeeItem = ({ item }) => {
        const selectedSize = ''; 
        if (!item.prices || item.prices.length === 0) {
            return null; 
        }
        const selectedPrice = item.prices.find(price => price.size === selectedSize)?.price || item.prices[0]?.price;
        return (
            <Pressable
                onPress={() => {
                    navigation.navigate('DetailsScreen', { item });
                }}>
                <LinearGradient
                    style={styles.coffeeItemContainer}
                    colors={['#21262E', 'black']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}>
                    <View style={styles.coffeeOuter}>
                        <ImageBackground
                            source={item.image}
                            style={styles.coffeeImage}
                            imageStyle={styles.coffeeImageStyle}>
                            <View style={styles.ratingContainer}>
                                <View style={styles.ratingInnerContainer}>
                                    <Image source={imagesPath.star} style={styles.starIcon} />
                                    <Text style={styles.ratingText}> 2.34</Text>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={styles.coffeeInfoContainer}>
                            <Text style={styles.coffeeTitle}>{item.title}</Text>
                            <Text style={styles.coffeeSubtitle}>{item.subtitle}</Text>
                            <View style={styles.priceSymbolContainer}>
                                <Text style={styles.coffeePrice}>
                                    {item.dolarSymbol} <Text style={styles.currency}> {selectedPrice}</Text>
                                </Text>
                                <Pressable onPress={() => handleAddToCart(item)}>
                                    <Image source={imagesPath.plusicon} style={styles.Plusicon} />
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </LinearGradient>
            </Pressable>
        );
    };

    const renderCoffeeBeansItem = ({ item }: { item: any }) => {
        const selectedSize='';
        
        const selectedPrice = item.prices.find(price => price.size === selectedSize)?.price !== undefined
            ? item.prices.find(price => price.size === selectedSize).price
            : item.prices[0].price;
         return(
        <Pressable
            onPress={() => {
                navigation.navigate('DetailsScreen', {  item });
            }}>
            <LinearGradient
                style={styles.coffeeItemContainer}
                colors={['#21262E', 'black']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <View style={styles.coffeeOuter}>
                    <ImageBackground
                        source={item.image}
                        style={styles.coffeeImage}
                        imageStyle={styles.coffeeImageStyle}>
                        <View style={styles.ratingContainer}>
                            <View style={styles.ratingInnerContainer}>
                                <Image source={imagesPath.star} style={styles.starIcon} />
                                <Text style={styles.ratingText}> 2.40</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.coffeeInfoContainer}>
                        <Text style={styles.coffeeTitle}>{item.title}</Text>
                        <Text style={styles.coffeeSubtitle}>{item.subtitle}</Text>
                        <View style={styles.priceSymbolContainer}>
                            <Text style={styles.coffeePrice}>{item.dolarSymbol}
                                     <Text style={styles.currency}>{item.selectedSize} {selectedPrice}</Text>
                            </Text>
                            <Pressable onPress={() => handleAddToCart(item) 
                            }>
                                <Image source={imagesPath.plusicon} style={styles.Plusicon} />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    )};
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={CoffeeTabData}
                renderItem={({ item }) => renderTabItem({ item })}
                keyExtractor={(item, index) => `tab-${index}`}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.tabContainer}
            />
            <FlatList
                horizontal
                data={filteredCoffeeData}
                renderItem={({ item }) => renderCoffeeItem({ item })}
                keyExtractor={(item, index) => `coffee-${index}`}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.coffeeContainer}
            />
            <Text style={styles.coffeeBeansText}>Coffee Beans</Text>
            <FlatList
                horizontal
                data={CoffeBeansData}
                renderItem={({ item }) => renderCoffeeBeansItem({ item })}
                keyExtractor={(item, index) => `bean-${index}`}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.coffeeBeansContainer}
            />
            {/* {alertVisible && (
                <CustomAlert visible={alertVisible} onClose={handleAlertClose} />
            )} */}
        </View>
    );
};
const styles = StyleSheet.create({
    Plusicon: {
        marginHorizontal:RPW(2),
        width: RPW(9), 
        height: RPH(4.5)
    },
    container:{},
    tabItemContainer: {
        justifyContent: "space-between",
    },
    tabItem: {
        marginHorizontal: RPW(5),
        fontSize: RPW(4.5),
        fontWeight: "400",
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
    },
    indicator: {
        alignSelf: "center",
        marginTop: RPW(2),
        width: RPW(3),
        height: RPW(3),
        borderRadius: RPW(1.5),
        backgroundColor: colors.copperRed,
    },
    tabContainer: {
        paddingBottom: RPH(2),
    },
    coffeeItemContainer: {
        marginTop: RPH(2),
        flex: 1,
        marginHorizontal: RPW(5),
        width: RPW(45),
        height: RPH(37),
        borderRadius: RPW(5),
        marginRight: RPW(3),
        overflow: 'hidden',
    },
    coffeeOuter: {
        flex: 1,
    },
    coffeeImage: {
        flex: 1,
        marginHorizontal: RPW(4),
        marginVertical: RPH(2.5),
        width: RPW(37),
        height: RPW(37),
    },
    coffeeImageStyle: {
        borderRadius: RPW(5),
    },
    ratingContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignSelf: "flex-end",
        width: RPW(21),
        height: RPH(2.5),
        borderTopRightRadius: RPW(5),
        borderBottomLeftRadius: RPW(6.2),
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: RPW(2.3),
        marginVertical: RPH(0.3),
    },
    starIcon: {
        tintColor:"#D17842",
        width: RPW(4.9),
        height: RPW(4.9),
    },
    ratingText: {
        textAlignVertical: "center",
        textAlign: "center",
        fontSize: RPW(3.5),
        color: colors.textTitleLight,
        fontFamily: 'Poppins-Medium',
    },
    coffeeInfoContainer: {
        flexShrink: 1,
        position: 'absolute',
        bottom: RPW(4),
        left: RPW(3),
        right: RPW(2),
    },
    coffeeTitle: {
        flex: 1, 
        fontFamily: 'Poppins-Medium',
        fontWeight: "500",
        fontSize: RPW(4.8),
        color: colors.textTitleLight,
    },
    coffeeSubtitle: {
        flex: 1,
        marginBottom: RPW(2.2),
        fontWeight: "600",
        fontSize: RPW(2.6),
        fontFamily: 'Poppins-Medium',
        color: colors.textSubtitle,
    },
    priceSymbolContainer: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // marginHorizontal:RPW(2),
    },
    coffeePrice: {
        fontSize: RPW(5.5),
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        color: colors.copperRed,
    },
    currency: {
        fontWeight: '600',
        fontSize: RPW(5.5),
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
    },
    symbolContainer: {
        width: RPW(9),
        height: RPW(9),
        borderRadius: RPW(2),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.copperRed,
    },
    symbol: {
        fontSize: RPW(7),
        // fontWeight:"600",
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
    },
    coffeeBeansText: {
        marginVertical: RPH(2),
        fontSize: RPW(5),
        fontFamily: 'Poppins-Medium',
        color: colors.textTitleLight,
        marginLeft: RPW(6),
    },
    coffeeContainer: {
        paddingBottom: RPW(3),
    },
    coffeeBeansContainer: {
        marginBottom: RPW(8),
    },
});

export default CoffeeTabBar;
