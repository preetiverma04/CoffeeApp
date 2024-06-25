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
                <SearchSvg width={RPW(9)} height={RPH(2.5)}/>
            </View>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor="#ffffff"
                style={CustumInputfieldStyle.innertext}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(true)}
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
        height: RPH(7),
        margin: RPW(5),
         backgroundColor: "#141921",
        flexDirection: 'row',
        alignItems: 'center', 
       
    },
    innertext: {
        flex: 1, 
        color: "white",
        height: '100%', 
    }
});

export default CustumInputfield;
