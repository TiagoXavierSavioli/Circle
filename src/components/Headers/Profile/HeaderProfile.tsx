import React from 'react';
import { StyleSheet, Pressable, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import {Icon, Image} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList, ConfigParamList} from '../../../types';

type configScreenProp = StackNavigationProp<ConfigParamList,'EditScreen' >;
//"settings","settings-applications","settings-backup-restore","settings-bluetooth",
//"settings-brightness","settings-cell","settings-display","settings-ethernet","settings-input-hdmi",
//"settings-input-antenna","settings-input-component","settings-input-composite","settings-input-svideo",
//"settings-overscan","settings-phone","settings-power","settings-remote","settings-system-daydream","settings-voice"

export default function HeaderProfle() {
    const configNavigation = useNavigation<configScreenProp>();
    const colorScheme = useColorScheme();
    
    const IconConfig = require('../../../assets/icons/settings.png')

    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.iconContainer} onPress={() => configNavigation.navigate('ConfigNavigator')}>
                <Image source={IconConfig} style={{width: 30, height: 30}} resizeMode='contain'/>
            </TouchableOpacity>   
        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    iconContainer: {
        marginRight: 22,
        borderRadius: 30,
        top: 0,
    },
});