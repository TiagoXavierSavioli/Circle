import React from 'react';
import { Image} from 'react-native';
import { VerifyContainer, VerifyIcon, View } from '../Themed';
import {Icon} from 'react-native-elements'
import Colors from '../../constants/Colors';

export type VerifyProps = {
    verify: number,
    size?: number,
    padding?: number,
    color?: string
}

export const Verify = ({verify = 0, size = 50, padding = 1, color = Colors.light.verifyed}: VerifyProps) => (
    <>{verify == undefined?
        null:
        <>
            {verify == 1?
                <View style={{padding: padding, borderRadius: 100}}>
                    <Icon type={'ionicons'} name={'check-circle'} size={size} color={color} style={{}}/>
                </View>:
                <></>
            }   
        </>     
    }

    </>    
)

export const VerifyTransparent = ({verify = 0, size = 50, color = Colors.light.verifyed}: VerifyProps) => (
    <>
    {verify == 1?
            <Icon type={'ionicons'} name={'check-circle'} size={size} color={color} style={{paddingLeft: 2}}/>:
        <></>
        }
    </>    
)