import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, Image, Modal,} from 'react-native';
import { RPH, RPW } from '../components/ScreenSize';
import Header from '../components/Header';
import OrderHistoryData from '../components/Data/OrderHistoryData';
import CustomButton from '../components/CustomButton';
import OrderDateInfo from './OrderHistoryComponents/OrderDateInfo';
import DownloadModal from './OrderHistoryComponents/DownloadModal';
import OrderDataItem from './OrderHistoryComponents/OrderData';
import colors from '../utils/Colors';

const OrderHistoryScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const ListFooterComponent = () => (
        <View style={styles.footerContainer}>
            <CustomButton text="Download" style={styles.customButtonStyle} onPress={toggleModal} />
        </View>
    );
    return (
        <View style={styles.outerContainer}>
            <FlatList
                data={OrderHistoryData}
                renderItem={({ item }) => <OrderDataItem item={item} />}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContentContainer}
                ListFooterComponent={ListFooterComponent}
                ListHeaderComponent={() => (
                    <>
                        <Header text="Order History" />
                        <OrderDateInfo />
                    </>
                )}
            />
            <DownloadModal visible={modalVisible} onClose={toggleModal} />
        </View>
    );
};
const styles = StyleSheet.create({
    outerContainer: {
        flex: 1,
        backgroundColor: colors.background,
    },
    listContentContainer: {
        paddingBottom: RPH(15),
    },
    customButtonStyle: {
        textAlignVertical:"center",
        fontFamily:"Poppins-Bold",
        marginHorizontal:RPW(5),
        width: RPW(90),
        height: RPH(7.5),
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        fontSize: RPW(4.5),
    },
    
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    footerContainer: {
        alignItems: 'center',
    },
   
});

export default OrderHistoryScreen;
