import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, FlatList, ImageBackground } from 'react-native';
import { CoffeeTabData, Coffeedata, CoffeBeansData } from './Data/CoffeeTabData';
import { RPH, RPW } from './ScreenSize';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
// const filteredData=(item:String)=>{  
// }
const CoffeeTabBar = () => {
    const [filteredCoffeeData, setFilteredCoffeeData] = useState(Coffeedata);
    const [selectedTab, setSelectedTab] = useState<string>("All");
    const navigation = useNavigation();
    const handlePress = (item: string) => {
        setSelectedTab(item);
    };
    useEffect(() => {
        const filterData = () => {
            if (selectedTab === 'All') {
                return Coffeedata;
            } else {

                const filteredItems = Coffeedata.filter(coffee => coffee.title === selectedTab);
                const remainingItems = Coffeedata.filter(coffee => coffee.title !== selectedTab);

                return [...filteredItems, ...remainingItems,];
            }
        };
        setFilteredCoffeeData(filterData());
    }, [selectedTab]);
    const star = require("../assets/images/pnggimagesFavouriteScreen/starIcon.png");
    const renderTabItem = ({ item }: { item: string }) => (
        <View style={styles.tabItemContainer}>
            <Pressable
                onPress={() => handlePress(item)}
                disabled={selectedTab === item}>
                <Text style={[styles.tabItem, { color: selectedTab === item ? '#D17842' : 'white' }]}>
                    {item}
                </Text>
                {selectedTab === item && (
                    <View style={styles.indicator} />
                )}
            </Pressable>
        </View>
    );
    const renderCoffeeItem = ({ item }: { item: any }) => (
        <Pressable
            onPress={() => {
                navigation.navigate('DetailsScreen', { coffee: item });
            }}>
            <LinearGradient
                style={styles.coffeeItemContainer}
                colors={['#262B33', '#262B33', 'black']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <View style={styles.coffeeOuter}>
                    <ImageBackground source={item.image} style={styles.coffeeImage} imageStyle={styles.coffeeImageStyle}>
                        <View style={styles.ratingContainer}>
                            <View style={styles.ratingInnerContainer}>
                                <Image source={star} style={styles.starIcon} />
                                <Text style={styles.ratingText}>2.57</Text>
                            </View>
                        </View>
                    </ImageBackground>
                    <View style={styles.coffeeInfoContainer}>
                        <Text style={styles.coffeeTitle}>{item.title}</Text>
                        <Text style={styles.coffeeSubtitle}>{item.subtitle}</Text>
                        <View style={styles.priceSymbolContainer}>
                            <Text style={styles.coffeePrice}>
                                {item.price[0]}

                                <Text style={styles.currency}> {item.price[1]}</Text>
                            </Text>
                            <View style={styles.symbolContainer}>
                                <Text style={styles.symbol}>{item.symbol}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
    const renderCoffeeBeansItem = ({ item }: { item: any }) => (
        <Pressable
            onPress={() => {
                navigation.navigate('DetailsScreen', { coffee: item });
            }}>
            <LinearGradient
                style={styles.coffeeItemContainer}
                colors={['#262B33', '#262B33', 'black']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}>
                <View style={styles.coffeeOuter}>
                    <ImageBackground
                        source={item.image}
                        style={styles.coffeeImage}
                        imageStyle={styles.coffeeImageStyle}>
                    </ImageBackground>
                    <View style={styles.coffeeInfoContainer}>
                        <Text style={styles.coffeeTitle}>{item.title}</Text>

                        <Text style={styles.coffeeSubtitle}>{item.subtitle}</Text>

                        <View style={styles.priceSymbolContainer}>
                            <Text style={styles.coffeePrice}>
                                {item.price[0]}

                                <Text style={[styles.currency]}> {item.price[1]}</Text>
                            </Text>
                            <View style={styles.symbolContainer}>
                                <Text style={styles.symbol}>{item.symbol}</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </Pressable>
    );
    return (
        <View style={styles.container}>
            <FlatList
                horizontal
                data={CoffeeTabData}
                renderItem={({ item }) => renderTabItem({ item })}
                keyExtractor={(item, index) => `tab-${index}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.tabContainer}
            />
            <FlatList
                horizontal
                data={filteredCoffeeData}
                renderItem={({ item }) => renderCoffeeItem({ item })}
                keyExtractor={(item, index) => `coffee-${index}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.coffeeContainer}
            />
            <Text style={styles.coffeeBeansText}>Coffee Beans</Text>
            <FlatList
                horizontal
                data={CoffeBeansData}
                renderItem={({ item }) => renderCoffeeBeansItem({ item })}
                keyExtractor={(item, index) => `bean-${index}`}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.coffeeBeansContainer}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    tabItemContainer: {
        justifyContent: "space-between",
    },
    tabItem: {
        marginHorizontal: RPW(5),
        fontSize: RPW(5),
        fontFamily: 'Poppins-Medium',
        color: 'white',
    },
    indicator: {
        alignSelf: "center",
        marginTop: RPW(1),
        width: RPW(3),
        height: RPW(3),
        borderRadius: RPW(1.5),
        backgroundColor: '#D17842',
    },
    tabContainer: {
        paddingBottom: RPH(2),
    },
    coffeeItemContainer: {
        marginTop: RPH(2),
        flex: 1,
        marginHorizontal: RPW(5),
        width: RPW(42),
        height: RPH(35),
        borderRadius: RPW(5),
        marginRight: RPW(3),
        overflow: 'hidden',
    },
    coffeeOuter: {
        flex: 1,
    },
    coffeeImage: {
        flex: 1,
        marginHorizontal: RPW(3),
        marginVertical: RPH(2),
        width: RPW(35),
        height: RPW(35),

    },
    coffeeImageStyle: {
        borderRadius: RPW(5),
    },
    ratingContainer: {
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignSelf: "flex-end",
        width: RPW(20),
        borderTopRightRadius: RPW(5),
        borderBottomLeftRadius: RPW(5),
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingInnerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    starIcon: {
        marginLeft: RPW(2),
        width: RPW(5),
        height: RPW(5),
        // marginRight: RPW(1),
    },
    ratingText: {
        fontSize: RPW(4),
        color: 'white',
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

        marginBottom: RPW(0),
        fontSize: RPW(5.3),
        fontWeight: "400",
        fontFamily: 'Poppins-Bold',
        color: 'white',

    },
    coffeeSubtitle: {
        flex: 1,

        marginBottom: RPW(2.2),
        fontWeight: "400",
        fontSize: RPW(2.6),
        fontFamily: 'Poppins-Bold',
        color: 'grey',
    },
    priceSymbolContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    coffeePrice: {
        fontSize: RPW(5.5),
        fontFamily: 'Poppins-Bold',
        fontWeight: '600',
        color: '#D17842',

    },
    currency: {
        fontWeight: '600',
        fontSize: RPW(5.5),
        fontFamily: 'Poppins-Bold',
        color: 'white',
    },
    symbolContainer: {
        marginBottom: RPW(1),
        width: RPW(8),
        height: RPW(8),
        borderRadius: RPW(2),
        backgroundColor: '#D17842',
        justifyContent: 'center',
        alignItems: 'center',

    },
    symbol: {
        fontSize: RPW(6.3),
        textAlign: 'center',
        fontFamily: 'Poppins-Medium',
        fontWeight: '600',
        color: 'white',

    },
    coffeeBeansText: {
        marginVertical: RPH(2),
        fontSize: RPW(5),
        fontFamily: 'Poppins-Bold',
        color: 'white',

        marginLeft: RPW(5),
    },
    coffeeContainer: {
        paddingBottom: RPW(3),
    },
    coffeeBeansContainer: {
        marginBottom: RPW(5),
    },
});
export default CoffeeTabBar;
