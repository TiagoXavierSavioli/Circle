import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable, Text, Dimensions} from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import {Icon} from 'react-native-elements'

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList} from '../../../types';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";

import ModalComponent from './ModalComponent'

type notificationScreenProp = StackNavigationProp<RootStackParamList,'Notification' >;

export default function HeaderPhoto() {

    const notificationNavigation = useNavigation<notificationScreenProp>();
    const colorScheme = useColorScheme();

    const IconMore= require('../../../assets/icons/addMap.png')
    const refRBSheet = useRef();

    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => refRBSheet.current.open()}>
                <Image source={IconMore} style={{width: 25, height: 25, tintColor: '#FFF'}} resizeMode='contain'/>
            </TouchableOpacity>  
            <View style={{width: '100%', height: '100%', position: 'absolute',}}>               
            </View>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height = {200}
                customStyles={{
                    container:{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: Colors[colorScheme].background,
                        alignSelf: 'center',
                        width: WindowWidth - 10,
                        marginBottom: -30,
                        paddingHorizontal: 20
                    },
                    wrapper: {
                        backgroundColor: '#00000050',
                        alignSelf: 'center',
                        marginTop: 56,
                        marginBottom: 53,
                        width: WindowWidth - 10,
                        borderRadius: 50
                        
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
            >
                <ModalComponent/>
            </RBSheet>
        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginRight: 22,
        padding: 8,
        borderRadius: 30,
        top: 0,
        backgroundColor: '#00000030'
    },
});