import React from 'react'
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screen/HomeScreen';
// import PaymentScreen from '../screen/PaymentScreen';
import { NavigationContainer } from '@react-navigation/native';
import CartScreen from '../screen/CartScreen';
// import Icon from 'react-native-vector-icons/Ionicons';
// import Navigationpath from '../screen/Navigationpath';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import { SafeAreaView } from 'react-native-safe-area-context';
import { BlurView } from '@react-native-community/blur';
import FavouriteScreen from '../screen/FavouriteScreen';
import OrderHistoryScreen from '../screen/OrderHistoryScreen';
import Homesvg from '../assets/navigationIconsvg/Homesvg';
import Cartsvg from '../assets/navigationIconsvg/Cartsvg';
import Favouritesvg from '../assets/navigationIconsvg/Favouritesvg';
import Ordernotification from '../assets/navigationIconsvg/Ordernotificationsvg';
import { RPW } from '../components/ScreenSize';
const Tabsbottom = createBottomTabNavigator();
const Navigationtabs = () => {
    return (
        <Tabsbottom.Navigator
            screenOptions={{
                tabBarStyle: {
                    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                    position: 'absolute',
                  
                    elevation: 0,
                },
                tabBarActiveTintColor: 'white',
                tabBarInactiveTintColor: 'grey',
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
                        const color = focused ? '#D17842' : 'grey'

                        return (
                            <Homesvg color={color} width={RPW(5)} height={RPW(5)} />
                        )
                    }}} />
            <Tabsbottom.Screen name='Cart' component={CartScreen}
                options={{
                    // tabBarLabel: 'Cart',
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {

                        const color = focused ? '#D17842' : 'grey'
                        return (
                            <Cartsvg color={color} width={RPW(5)} height={RPW(5)} />
                        )
                    }
                }}
            />
            <Tabsbottom.Screen name='Favourite' component={FavouriteScreen}
                options={{
                    // tabBarLabel:'Favourite',
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {
                        const color = focused ? '#D17842' : 'grey'
                        return (
                            <Favouritesvg color={color} width={RPW(5)} height={RPW(5)} />
                        )
                    }
                }
                } />
            <Tabsbottom.Screen name='Order' component={OrderHistoryScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused, size }) => {

                        const color = focused ? '#D17842' : 'grey'
                        return (
                            <Ordernotification color={color} width={RPW(5)} height={RPW(5)} />
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