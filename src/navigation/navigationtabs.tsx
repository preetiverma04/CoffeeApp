import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
import CartScreen from '../screen/CartScreen';
import { BlurView } from '@react-native-community/blur';
import FavouriteScreen from '../screen/FavouriteScreen';
import OrderHistoryScreen from '../screen/OrderHistoryScreen';
import Homesvg from '../assets/navigationIconsvg/Homesvg';
import Cartsvg from '../assets/navigationIconsvg/Cartsvg';
import Favouritesvg from '../assets/navigationIconsvg/Favouritesvg';
import Ordernotification from '../assets/navigationIconsvg/Ordernotificationsvg';
import { RPW } from '../components/ScreenSize';
import colors from '../utils/Colors';
const Tabsbottom = createBottomTabNavigator();
const Navigationtabs = () => {
    return (
        <Tabsbottom.Navigator
            screenOptions={{
                tabBarHideOnKeyboard:true,
                tabBarStyle: {
                    borderTopWidth:0,
                    borderTopColor:"transparent",
                    height:RPW(15),
                    backgroundColor: 'rgba(0, 0, 0, 0.3)', 
                    position: 'absolute',
                    elevation:0,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'colors.textSubtitle',
                tabBarShowLabel: false,
                tabBarBackground: () => (
                    <BlurView
                        overlayColor=''
                        blurAmount={15}
                        style={TabsbottomStyle.tabsBlur}
                    />
                ),
            }}>
            <Tabsbottom.Screen name='home' component={HomeScreen}
                options={{
                    tabBarLabel: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        const color = focused ? colors.copperRed : colors.textSubtitle
                        return (
                            <Homesvg color={color} style={{ transform: [{ scale: 0.4}] }} />
                        )
                    }}} />
            <Tabsbottom.Screen name='Cart' component={CartScreen}
                options={{
                    tabBarLabel: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        const color = focused ? colors.copperRed : colors.textSubtitle
                        return (
                            <Cartsvg color={color} style={{ transform: [{ scale: 0.4 }] }} />
                        )
                    }
                }}
            />
            <Tabsbottom.Screen name='Favourite' component={FavouriteScreen}
                options={{
                
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        const color = focused ? colors.copperRed : colors.textSubtitle
                        return (
                            <Favouritesvg color={color} style={{ transform: [{ scale: 0.4 }] }} />
                        )
                    }
                }
                } />
            <Tabsbottom.Screen name='OrderHistoryScreen' component={OrderHistoryScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {

                        const color = focused ? colors.copperRed : colors.textSubtitle
                        return (
                            <Ordernotification color={color} style={{ transform: [{ scale: 0.4 }] }} />
                        )
                    }
                }}
            />
        </Tabsbottom.Navigator>
    );
}
const TabsbottomStyle = StyleSheet.create(
    {
        tabsBlur: {
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
        }
    }
)
export default Navigationtabs;