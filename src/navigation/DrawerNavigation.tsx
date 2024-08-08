import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Navigationtabs from './navigationtabs';
import CustomDrawer from './CustomDrawer';
import { NavigationContainer } from '@react-navigation/native';
const Drawer = createDrawerNavigator();
const DrawerNavigation = () => {
    return (
            <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
                <Drawer.Screen
                    name="Navigationtabs"
                    component={Navigationtabs}
                    options={{ headerShown: false, drawerLabel: 'Home' }}
                />
            </Drawer.Navigator> 
    );
};

export default DrawerNavigation;
