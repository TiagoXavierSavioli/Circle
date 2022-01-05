import React from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable } from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import {Icon} from 'react-native-elements'

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList} from '../../../types';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native-elements'


type messageScreenProp = StackNavigationProp<RootStackParamList,'Messages' >;
type notificationScreenProp = StackNavigationProp<RootStackParamList,'Notification' >;

export default function HeaderMoments() {

    const navigation = useNavigation()
    const IconUser = require('../../../assets/icons/user.png')
    const IconSearch = require('../../../assets/icons/search.png')

    return(
        <View style={styles.container}>  
            <TouchableOpacity style={styles.iconContainer} onPress={() => {navigation.navigate('SearchScreen')}}>
                <Image source={IconSearch} style={{width: 25, height: 25, tintColor: '#FFF'}} resizeMode='contain'/>
            </TouchableOpacity>  
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