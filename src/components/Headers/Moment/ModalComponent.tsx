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

import ReportComponent from '../../Moments/Report';


export default function ModalComponent() {
    const colorScheme = useColorScheme()
    const refRBSheet = useRef();

    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height

    const report = require('../../../assets/icons/info-circle.png')
    const share = require('../../../assets/icons/share.png')
    const paper = require('../../../assets/icons/link.png')     
    return(
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => refRBSheet.current.open()}>
                <View style={styles.iconContainer} >
                    <Image source={report} style={{width: 25, height: 25, tintColor: Colors[colorScheme].icons}} resizeMode='contain'/>
                </View>
                <Text style={styles.text}>Report...</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer}>
                <View style={styles.iconContainer}>
                    <Image source={share} style={{width: 25, height: 25, tintColor: Colors[colorScheme].icons}} resizeMode='contain'/>
                </View>
                <Text style={styles.text}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.textContainer}>
                <View style={styles.iconContainer}>
                   <Image source={paper} style={{width: 25, height: 25, tintColor: Colors[colorScheme].icons}} resizeMode='contain'/>                    
                </View>
                <Text style={styles.text}>Copy link</Text>
            </TouchableOpacity>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height = {700}
                customStyles={{
                    container:{
                        borderTopLeftRadius: 50,
                        borderTopRightRadius: 50,
                        backgroundColor: Colors[colorScheme].background,
                        alignSelf: 'center',
                        width: WindowWidth - 10,
                        paddingHorizontal: 20,
                    },
                    wrapper: {
                        backgroundColor: 'transparent',
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
                <ReportComponent/>
            </RBSheet>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
        flex: 1,
        justifyContent: 'center'
    },
    textContainer: {
        marginTop: 25,
        flexDirection: 'row'
    },
    iconContainer: {
        marginRight: 10
    },
    text: {
        fontSize: 16,
    }
});