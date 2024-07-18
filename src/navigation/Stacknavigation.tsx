import React, { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text,TouchableOpacity} from 'react-native';
import Navigationtabs from './navigationtabs';
import CartScreen from '../screen/CartScreen';
import PaymentScreen from '../screen/PaymentScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailsScreen';
import store from '../components/redux/store'
import { Provider } from 'react-redux';
import SplashScreen from '../screen/SplashScreen';
const Stack = createStackNavigator();

const Stacknavigation = () => {
    
    return (
        <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false }}>
                    <Stack.Screen name="SplashScreen" component={SplashScreen} />
                <Stack.Screen
                    name="tabs"
                    component={Navigationtabs}    
                />    
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailScreen}
                />
                    <Stack.Screen
                        name="CartScreen"
                        component={CartScreen}
                    />
                <Stack.Screen
                    name='PaymentScreen'
                    component={PaymentScreen}
                    //  options={() => ({
                    //     headerTitle: 'hiii', 
                    //     headerStyle: {
                    //         backgroundColor: '#0C0F14', 
                    //        elevation: 0, 
                    //          shadowOpacity: 0,
                    //         borderBottomWidth: 0, 
                    //   },
                    // })}
                />
                
            </Stack.Navigator>
        </NavigationContainer>
        </Provider>
    );
}

const styles = {
    backButtonText: {
        color: 'white', 
        fontSize: 16,
        marginLeft: 10,
    },
};

export default Stacknavigation;
