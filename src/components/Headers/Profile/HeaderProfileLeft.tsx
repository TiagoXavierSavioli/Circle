import React from 'react';
import { StyleSheet, Pressable, View, TouchableWithoutFeedback, TouchableOpacity} from 'react-native';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';

import {Icon} from 'react-native-elements'

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {MessageParamList, RootStackParamList} from '../../../types';

type notificationScreenProp = StackNavigationProp<RootStackParamList,'Notification' >;

export default function HeaderProfleLeft() {
    const notificationNavigation = useNavigation<notificationScreenProp>();

    const colorScheme = useColorScheme();

    function HeaderIcon(props: { name: React.ComponentProps<typeof Icon>['name']; color: string }) {
        return <Icon size={30} style={{ marginBottom: -3 }} {...props}/>;
    }
    return(
        <View style={styles.container}>
                <TouchableOpacity style={styles.iconContainer} onPress={() => notificationNavigation.navigate('Notification')}>
                    <HeaderIcon name="notifications" color={Colors[colorScheme].icons}/>
                </TouchableOpacity>
            
            
            
        </View>        
    )

}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    iconContainer: {
        marginLeft: 22
    }
});