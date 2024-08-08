import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Image } from 'react-native';
import colors from '../utils/Colors';
import imagesPath from '../components/ImagePath/imagesPath';
import { RPW } from '../components/ScreenSize';
import { useNavigation } from '@react-navigation/native';
const CustomDrawer = ({props}:any) => {
    const navigation=useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={imagesPath.splashscreen} style={styles.headerimage} />
                <Text style={styles.headerText}>Coffee App</Text>
            </View>
            <TouchableOpacity style={styles.drawerItem} onPress={() => navigation.navigate('Navigationtabs')}>
                <Text style={styles.drawerItemLabel}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => Alert.alert("Phone")}>
                <Text style={styles.drawerItemLabel}>Phone</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => Alert.alert("Settings")}>
                <Text style={styles.drawerItemLabel}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => Alert.alert("Login")}>
                <Text style={styles.drawerItemLabel}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerItem} onPress={() => Alert.alert("Share")}>
                <Text style={styles.drawerItemLabel}>Share</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    headerimage: {
        borderRadius: RPW(20),
        width: RPW(30),
        height: RPW(30),
    },
    container: {
        flex: 1,
        backgroundColor: colors.background,
    },
    header: {
        padding: RPW(5),
        borderBottomWidth: 1,
        borderBottomColor: colors.copperRed,
        
    },
    headerText: {
        padding: RPW(5),
        color: colors.copperRed,
        fontSize: RPW(3),
       
    },
    drawerItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: RPW(5),
        borderBottomWidth: 1,
        borderBottomColor: colors.blue_gray,
    },
    drawerItemLabel: {
        color: colors.copperRed,
        marginLeft: 16,
    },
});

export default CustomDrawer;
