import React, { useEffect } from 'react';
import { Modal, View, StyleSheet } from 'react-native';
import { BlurView } from '@react-native-community/blur';
import LottieView from 'lottie-react-native';
import { RPH, RPW } from '../../components/ScreenSize';
import imagesPath from '../../components/ImagePath/imagesPath';

const DownloadModal = ({ visible, onClose }: { visible: boolean; onClose: () => void }) => {
    useEffect(() => {
        if (visible) {
            const timer = setTimeout(() => {
                onClose();
            }, 1000);

            return () => clearTimeout(timer);
        }
    }, [visible, onClose]);

    return (
        <Modal transparent={true} visible={visible} animationType="slide" onRequestClose={onClose}>
            <BlurView style={styles.absolute} blurType="light" blurAmount={10} />
            <View style={styles.modalContainer}>
                <LottieView
                    source={imagesPath.downloadLotie}
                    autoPlay
                    loop={false}
                    style={styles.animation}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    absolute: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    animation: {
        width: RPW(30),
        height: RPH(30),
    },
});

export default DownloadModal;
