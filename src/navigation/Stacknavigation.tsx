import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text, TouchableOpacity } from 'react-native';
import Navigationtabs from './navigationtabs';
import CartScreen from '../screen/CartScreen';
import PaymentScreen from '../screen/PaymentScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailsScreen';
import store from '../components/redux/store'
import { Provider } from 'react-redux';
import SplashScreen from '../screen/SplashScreen';
import OrderHistoryScreen from '../screen/OrderHistoryScreen';
import  DrawerNavigation  from './DrawerNavigation';
const Stack = createStackNavigator();
const Stacknavigation = () => {
    return (
        // <Provider store={store}>
        //     <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
               
                    <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
                    <Stack.Screen
                        name="DetailsScreen"
                        component={DetailScreen}
                    />
                    {/* <Stack.Screen
                        name="CartScreen"
                        component={CartScreen}
                    /> */}
                    <Stack.Screen
                        name='PaymentScreen'
                        component={PaymentScreen}
                    />
                    {/* <Stack.Screen
                        name="Navigationtabs"
                        component={Navigationtabs}
                    />      */}
                </Stack.Navigator>
        //     </NavigationContainer>
        // </Provider>
    );
}
// const Stacknavigation = () => {
//     return (

//         <Stack.Navigator screenOptions={{ headerShown: false }}>
//             <Stack.Screen name="SplashScreen" component={SplashScreen} />

//             <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
//             <Stack.Screen
//                 name="DetailsScreen"
//                 component={DetailScreen}
//             />
//             <Stack.Screen
//                 name="CartScreen"
//                 component={CartScreen}
//             />
//             <Stack.Screen
//                 name='PaymentScreen'
//                 component={PaymentScreen}
//             />
//             <Stack.Screen
//                 name="Navigationtabs"
//                 component={Navigationtabs}
//             />
//         </Stack.Navigator>

//     );
// }

const styles = {
    backButtonText: {
        color: 'white',
        fontSize: 16,
        marginLeft: 10,
    },
};

export default Stacknavigation;
