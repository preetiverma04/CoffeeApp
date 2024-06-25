import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Text,TouchableOpacity} from 'react-native';
import Navigationtabs from './navigationtabs';
import CartScreen from '../screen/CartScreen';
import PaymentScreen from '../screen/PaymentScreen';
import FavouriteScreen from '../screen/FavouriteScreen';
import HomeScreen from '../screen/HomeScreen';
import DetailScreen from '../screen/DetailsScreen';

const Stack = createStackNavigator();

const Stacknavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false }}>
                <Stack.Screen
                    name="tabs"
                    component={Navigationtabs}
                    // options={{ headerShown: false }}
                />    
                <Stack.Screen
                    name="DetailsScreen"
                    component={DetailScreen}
                // options={{ headerShown: false }}
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
    );
}

const styles = {
    backButtonText: {
        color: 'white', // Customize as needed
        fontSize: 16,
        marginLeft: 10,
    },
};

export default Stacknavigation;
