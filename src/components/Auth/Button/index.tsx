import React from 'react';
import { StyleSheet, Pressable, View, TouchableOpacity, Dimensions, TextInput} from 'react-native';
import { Image, Icon} from 'react-native-elements';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { Text } from '../../Themed';
import {useNavigation} from '@react-navigation/native';
import { useState } from 'react';
import { Value } from 'react-native-reanimated';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

export type AuthButtonProps = {
    title: string,
    navigateTo: string,
    showLeftIcon?: true | false,
    leftIcon?: undefined,
    styleText?: {
        color?: undefined,
        fontSize?: number,
        fontFamily?: string
    },
    style?: {
        fontWeight?: 'bold'|'normal',
        borderRadius?: number,
        backgroundColor?: undefined,
        marginTop?: number,
        marginBottom?: number,
        marginHorizontal?: number,
        marginVertical?: number,
        paddingHorizontal?: number,
        paddingVertical?: number,
        borderWidth?: number,
        width?: number,
        height?: number 
    }

}

export const Button = ({
    navigateTo,
    title,
    leftIcon = require('../../../assets/icons/user.png'),
    styleText = {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'RedHatDisplay-Medium',
    },
    showLeftIcon = false,
    style = {
        width: WindowWidth - 70,
        height: 60,
        borderWidth: 1.5,
        borderRadius: 20,
        backgroundColor: '#FFFFFF'
    }

} :AuthButtonProps) =>  {
    const colorScheme = useColorScheme()
    const navigation = useNavigation()


    return(
        <TouchableOpacity 
        onPress={() => navigation.navigate(navigateTo)}
        style={{
            backgroundColor: style.backgroundColor,
            marginBottom: style?.marginBottom,
            marginHorizontal: style?.marginHorizontal,
            marginTop: style?.marginTop,
            marginVertical: style?.marginVertical,
            paddingHorizontal: style?.paddingHorizontal,
            paddingVertical: style?.paddingVertical,
            borderRadius: style?.borderRadius,
            borderWidth: style?.borderWidth,
            borderColor: '#E1E5EB',
            width: style?.width,
            height: style?.height,
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'row',
            
        }}>
            {showLeftIcon == true?
                <View style={{position: 'absolute', left: 15}}>
                    <Image source={leftIcon} style={{
                        width: 22,
                        height: 22,
                        left: 0,
                        resizeMode: 'contain'
                    }}/>
                </View> : null
            }
                <Text style={{
                    color: styleText.color,
                    fontSize: styleText.fontSize,
                    fontFamily: styleText.fontFamily,
                }}>{title}</Text>                 
            
               
            


        </TouchableOpacity>        
    )

}

export type AuthInputProps = {
    title: string,
    navigateTo: string,
    showLeftIcon?: true | false,
    leftIcon?: undefined,
    styleText?: {
        color?: undefined,
        fontSize?: number,
        fontFamily?: string
    },
    style?: {
        fontWeight?: 'bold'|'normal',
        borderRadius?: number,
        backgroundColor?: undefined,
        marginTop?: number,
        marginBottom?: number,
        marginHorizontal?: number,
        marginVertical?: number,
        paddingHorizontal?: number,
        paddingVertical?: number,
        borderWidth?: number,
        width?: number,
        height?: number 
    }

}

export const Input = ({
    navigateTo,
    title,
    leftIcon = require('../../../assets/icons/phone.png'),
    styleText = {
        color: '#000000',
        fontSize: 14,
        fontFamily: 'RedHatDisplay-Medium',
    },
    showLeftIcon = false,
    style = {
        width: WindowWidth - 70,
        height: 60,
        borderWidth: 1.5,
        borderRadius: 20,
        backgroundColor: '#FFFFFF'
    }

} :AuthInputProps) =>  {
    const colorScheme = useColorScheme()
    const [input, setInput] = useState('')
    return(
        <View
        style={{
            backgroundColor: style.backgroundColor,
            marginBottom: style?.marginBottom,
            marginHorizontal: style?.marginHorizontal,
            marginTop: style?.marginTop,
            marginVertical: style?.marginVertical,
            paddingVertical: style?.paddingVertical,
            borderRadius: style?.borderRadius,
            borderWidth: style?.borderWidth,
            borderColor: '#E1E5EB',
            width: style?.width,
            height: style?.height,
            alignItems: 'center',
            paddingHorizontal: 50,
            flexDirection: 'row',
            
        }}>
            {showLeftIcon == true?
                <>
                    <View style={{position: 'absolute', left: 15}}>
                        <Image source={leftIcon} style={{
                            width: 22,
                            height: 22,
                            left: 0,
                            resizeMode: 'contain'
                        }}/>
                    </View>
                    <View style={{position: 'absolute', right: 15}}>
                        <Text style={{color: input.length == 30? '#EF1E1E': '#8C9BAA', fontSize: 12}}>{input.length}/30</Text>
                    </View>
                </> : null
            }
            <TextInput
                style={{
                    color: styleText.color,
                    fontSize: styleText.fontSize,
                    fontFamily: styleText.fontFamily,
                }}
                placeholder={title}
                placeholderTextColor={'#8C9BAA'}
                onChangeText={(text) => setInput(text)}
                maxLength={30}
                value={input}
            />            
        </View>        
    )

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    iconContainer: {
        marginRight: 22
    }
});