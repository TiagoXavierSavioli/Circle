import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable, Dimensions, Text, ScrollView} from 'react-native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import RBSheet from "react-native-raw-bottom-sheet";
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList} from '../../types';
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native-elements'
import ModalComponent from './Home/ModalComponent'
import HeaderBack from './HeaderBack'
type messageScreenProp = StackNavigationProp<RootStackParamList,'Messages' >;
type notificationScreenProp = StackNavigationProp<RootStackParamList,'Notification' >;

export type HeaderProps = {
    username: string,
    name: string,
    picture: string,
    online: boolean
}
const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const headerHeight = 60

export default function HeaderTalk({username, name, picture, online} : HeaderProps) {

    const navigation = useNavigation()
    const MessageNavigation = useNavigation<messageScreenProp>()
    const colorScheme = useColorScheme();

    const IconUser = require('../../assets/icons/user.png')
    const IconSearch = require('../../assets/icons/search.png')
    const IconChat = require('../../assets/icons/send.png')

    const refRBSheet = useRef();

    

    return(
        <View style={styles.container}>
            <View style={styles.left}>
                <HeaderBack/>
            </View>
            <View style={styles.center}>
                <View>
                    <FastImage source={ { uri: picture, priority: 'high'}} style={{width: 40, height: 40, borderRadius: 50}}/>
                </View>
                        
                    <LinearGradient 
                        style={{
                            width: 30,
                            height: 30,
                            position: 'absolute',
                            right: 10,
                            transform: [
                                {rotate: '90deg'}
                            ],
                            zIndex: 1
                        }}
                        colors={['#FFF', '#00000000']}
                    />        	        
                <ScrollView horizontal style={{marginHorizontal: 10}} showsHorizontalScrollIndicator={false}>
                    <Text style={styles.name}>@{username}</Text>
                  
                </ScrollView>
                
            </View>
            <View style={styles.right}>
            <View style={{marginRight: 15}}>
                {online == true ?
                        <Text style={[styles.online, {color: Colors[colorScheme].tint}]}>online</Text>
                        :
                        <Text style={[styles.online, {color: Colors[colorScheme].username}]}>offline</Text>
                        }
                    </View>

            </View>
        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: WindowWidth, 
        height: headerHeight,
        backgroundColor: '#FFF'
    },
    left: {
        width: WindowWidth/7,
        height: headerHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    center: {
        width: WindowWidth - WindowWidth/7 - WindowWidth/6,
        height: headerHeight,
        flexDirection: 'row',
        alignItems: 'center',
        overflow: 'hidden'
    },
    right: {
        width: WindowWidth/6,
        height: headerHeight,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    name: {
        fontSize: 16,
        fontFamily: 'RedHatDisplay-Bold'
    },
    online: {
        fontSize: 12,
        fontFamily: 'RedHatDisplay-Medium'
      },
});