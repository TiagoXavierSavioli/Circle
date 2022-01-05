import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable, Dimensions, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import RBSheet from "react-native-raw-bottom-sheet";
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList} from '../../../types';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native-elements'
import ModalComponent from './ModalComponent'

type messageScreenProp = StackNavigationProp<RootStackParamList,'Messages' >;
type notificationScreenProp = StackNavigationProp<RootStackParamList,'Notification' >;

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

export default function HeaderHome() {

    const navigation = useNavigation()
    const MessageNavigation = useNavigation<messageScreenProp>()
    const colorScheme = useColorScheme();

    const IconUser = require('../../../assets/icons/user.png')
    const IconSearch = require('../../../assets/icons/search.png')
    const IconChat = require('../../../assets/icons/addMap.png')

    const refRBSheet = useRef();

    return(
        <View style={styles.container}>

            <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.navigate('AccountScreen')}}>
                <Image source={IconUser} style={{width: 25, height: 25, tintColor: '#FFF'}} resizeMode='contain'/>
            </TouchableOpacity>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height = {320}
                customStyles={{
                    container:{
                        backgroundColor: Colors[colorScheme].background,
                        alignSelf: 'center',
                        width: WindowWidth,
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                        
                    },
                    wrapper: {
                        backgroundColor: '#00000030',
                        alignSelf: 'center',
                        width: WindowWidth,
                        height: WindowHeight
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
        borderRadius: 30,
        top: 0,
        backgroundColor: '#00000040',
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    iconContainer2: {
        marginRight: 22,
        borderRadius: 30,
        top: 0,
        backgroundColor: '#00000040',
        width: 40,
        height: 40,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
});