import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable, Text, Dimensions} from 'react-native';
import Colors from '../../../../../constants/Colors';
import useColorScheme from '../../../../../hooks/useColorScheme';

import {useNavigation} from '@react-navigation/native';

import {Image} from 'react-native-elements'
import RBSheet from "react-native-raw-bottom-sheet";
import { UserType } from '../../../../../types';

import ReportComponent from '../../../Report';

const bookmark = require('../../../../../assets/icons/bookmark.png')
const image = require('../../../../../assets/icons/photo.png')
const report = require('../../../../../assets/icons/alert-circle.png')
const share = require('../../../../../assets/icons/share.png')
const paper = require('../../../../../assets/icons/copy.png')
const download = require('../../../../../assets/icons/download.png')

export type MomentsModalProps = {
    user: UserType
  }

export const ModalComponentMoment = ({ user }: MomentsModalProps) => {

    const navigation = useNavigation()
    const colorScheme = useColorScheme()
    const refRBSheet = useRef();

    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height

    return(
        <View style={styles.container}>
            <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => refRBSheet.current.open()}>
                <View style={styles.iconContainer} >
                    <Image source={report} style={{width: 25, height: 25, tintColor: Colors[colorScheme].icons}} resizeMode='contain'/>
                </View>
                <Text style={styles.text}>Report...</Text>
            </TouchableOpacity>
            {/*
                <TouchableOpacity style={styles.textContainer}>
                    <View style={styles.iconContainer}>
                    <Image source={paper} style={{width: 25, height: 25, tintColor: Colors[colorScheme].icons}} resizeMode='contain'/>                    
                    </View>
                    <Text style={styles.text}>Copy link</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.textContainer}>
                    <View style={styles.iconContainer}>
                    <Image source={download} style={{width: 25, height: 25, tintColor: Colors[colorScheme].icons}} resizeMode='contain'/>                    
                    </View>
                    <Text style={styles.text}>Download</Text>
                </TouchableOpacity>                
            */}

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height = {665}
                customStyles={{
                    container:{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: Colors[colorScheme].background,
                        alignSelf: 'center',
                        width: WindowWidth,
                        marginBottom: 0,
                        paddingHorizontal: 20,
                    },
                    wrapper: {
                        backgroundColor: 'transparent',
                        alignSelf: 'center',
                        width: WindowWidth,
                        height: WindowHeight
                        
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
        fontFamily: 'RedHatDisplay-Medium',
    }
});