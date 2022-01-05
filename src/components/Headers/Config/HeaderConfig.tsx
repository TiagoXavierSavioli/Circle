import React, {useRef} from 'react';
import { StyleSheet, TouchableOpacity, View, Pressable, Dimensions, Text } from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import RBSheet from "react-native-raw-bottom-sheet";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList} from '../../../types';
import FastImage from 'react-native-fast-image';
import {Image, Icon} from 'react-native-elements'
import ModalComponent from '../Home/ModalComponent'


type messageScreenProp = StackNavigationProp<RootStackParamList,'Messages' >;
type notificationScreenProp = StackNavigationProp<RootStackParamList,'Notification' >;

export default function HeaderConfig() {

    const messagesNavigation = useNavigation<messageScreenProp>();
    const notificationNavigation = useNavigation<notificationScreenProp>();
    const colorScheme = useColorScheme();

    const IconMessage = require('../../../assets/icons/settings.png')
    const IconNotification = require('../../../assets/icons/align-right.png')

    const refRBSheet = useRef();
    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height
    

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => {refRBSheet.current.open()}}>
                <Text style={{fontFamily: 'RedHatDisplay-Bold', color: Colors[colorScheme].tint, fontSize: 14}}>Done</Text>
            </TouchableOpacity>

            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height = {400}
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
        padding: 8,
        borderRadius: 30,
        top: 0,
    },
});