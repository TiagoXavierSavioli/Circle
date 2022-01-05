import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable, Text, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList} from '../../types';
import FastImage from 'react-native-fast-image';
import {Image, Icon} from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";
import ModalComponent from './Moment/ModalComponent'

type notificationScreenProp = StackNavigationProp<RootStackParamList,'Notification' >;

export type HeaderProps = {
    transparent?: boolean
}

export default function HeaderBack({transparent = false} : HeaderProps) {

    const navigation = useNavigation()
    const notificationNavigation = useNavigation<notificationScreenProp>();
    const colorScheme = useColorScheme();

    const IconBack= require('../../assets/icons/arrow-left.png')
    const refRBSheet = useRef();

    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height

    return(
        <View style={styles.container}>
            {transparent == false?
                <TouchableOpacity style={styles.iconContainer2} onPress={() => navigation.goBack() }>
                    <Image source={IconBack} style={{width: 25, height: 25, tintColor: '#000'}} resizeMode='contain'/>
                </TouchableOpacity>
            :
                <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.goBack() }>
                    <Image source={IconBack} style={{width: 25, height: 25, tintColor: '#FFF'}} resizeMode='contain'/>
                </TouchableOpacity>                   

            }

        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        marginLeft: 22,
        padding: 8,
        borderRadius: 30,
        top: 0,
        backgroundColor: '#00000030'
    },
    iconContainer2: {
        marginLeft: 22,
        top: 0,
        borderRadius: 30,
    },
});