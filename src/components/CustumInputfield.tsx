// import React, { useState } from 'react';
// import { StyleSheet, TextInput, View, Text ,Image} from 'react-native';
// import { RPW, RPH } from './ScreenSize';
// import SearchSvg from '../assets/images/homeScreensvg/SearchSvg';
// // import { Image } from 'react-native-svg';

// const CustumInputfield = (props: any) => {
//     const [isFocused, setIsFocused] = useState(false);
    

//     return (
//         <View
//             style={[
//                 CustumInputfieldStyle.outer_text,
//                 isFocused && { borderColor: '#D17842' }
//             ]} >
//          <View >
//                
//                 {/* <SearchSvg width={RPW(10)} height={RPH(3.5)} stroke="white" /> */}
//             </View>
//             <TextInput
//                 placeholder={props.placeholder}
//                 placeholderTextColor="#52555A"
//                 style={CustumInputfieldStyle.innertext}
//                 onFocus={() => setIsFocused(true)}
//                 onBlur={() => setIsFocused(true)}
//                 onChangeText={(text) => props.onChangeText(text)}
//             />
//         </View>
//     );
// };

// const CustumInputfieldStyle = StyleSheet.create({
//     outer_text: {
//         borderRadius: RPW(5),
//         width:RPW(85),
//         height:RPH(6)
//     },
//     innertext:{
//         flexDirection:"row",
//         borderColor:"white"
//     }
// });

// export default CustumInputfield;
import React, { useState } from 'react';
import { StyleSheet, TextInput, View, Text, Image } from 'react-native';
import { RPW, RPH } from './ScreenSize';
import SearchSvg from '../assets/images/homeScreensvg/SearchSvg';

const CustumInputfield = (props: any) => {
    const [isFocused, setIsFocused] = useState(false);


    return (
        <View
            style={[
                CustumInputfieldStyle.outer_text,
                isFocused && { borderColor: '#D17842',borderWidth:1}
            ]} >
            <View >
                <Image source={require("../assets/images/homeScreensvg/Group.png")} style={{ width: RPW(5), height: RPH(2.5), marginHorizontal: RPW(3), tintColor: "#52555A" }} />
            </View>
            <TextInput
                placeholder={props.placeholder}
                placeholderTextColor="#52555A"
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
        // borderWidth: 1,
        // borderColor: '#000',
        width: RPW(85),
        height: RPH(8),
        margin: RPW(6),
        backgroundColor: "#141921",
        flexDirection: 'row',
        alignItems: 'center',

    },
    innertext: {
        flex: 1,
        color: "#52555A",
        fontSize: RPW(3.5),
        height: '100%',
    }
});

export default CustumInputfield;
