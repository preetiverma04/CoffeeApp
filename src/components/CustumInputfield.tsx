import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';
import { RPW, RPH } from './ScreenSize';
import SearchSvg from '../assets/images/homeScreensvg/SearchSvg';

const CustumInputfield = (props: any) => {
    const [isFocused, setIsFocused] = useState(false);
    

    return (
        <View
            style={[
                CustumInputfieldStyle.outer_text,
                isFocused && { borderColor: 'orange' }
            ]} >
         <View >
                <SearchSvg width={RPW(10)} height={RPH(3.5)} stroke="white" />
            </View>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor="#ffffff"
                style={CustumInputfieldStyle.innertext}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(true)}
                onChangeText={(text) => props.onChangeText(text)}
            />
        </View>
    );
};

const CustumInputfieldStyle = StyleSheet.create({
    outer_text: {
        borderRadius: RPW(5),
        borderWidth: 1,
        borderColor: '#000', 
        width: RPW(90),
        height: RPH(8),
        margin: RPW(5),
         backgroundColor: "#141921",
        flexDirection: 'row',
        alignItems: 'center', 
       
    },
    innertext: {
        flex: 1, 
        color: "white",
        fontSize:RPW(3.5),
        height: '100%', 
    }
});

export default CustumInputfield;
