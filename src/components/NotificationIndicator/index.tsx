import React, {ReactChild} from 'react';
import { Image} from 'react-native';
import { VerifyContainer, VerifyIcon, View, Text} from '../Themed';
import Colors from '../../constants/Colors';

export type NotificationIndicatorProps = {
    number: number,
    viewText?: true | false,
    viewFirstNumber?: true| false,
    style?: {
        width?: number,
        height?: number,
        backgroundColor?: string,
        size?: number,
        borderRadius?: number,
        margin?: number, 
        marginLeft?: number,
        marginRight?: number, 
        marginTop?: number, 
        marginBottom?: number, 
        marginHorizontal?: number,
        marginVertical?: number,
        padding?: number,
        paddingHorizontal?: number,
        paddingVertical?: number, 
    },
    textStyle?: {
        fontSize?: number,
        color?: string,
        fontFamily?: string
    }


}

export const NotificationIndicator = ({
    number,
    viewText = true,
    style = {borderRadius: 50, width: 50, height: 50},
    textStyle,
    viewFirstNumber = false,
}: NotificationIndicatorProps) => (

    <>
    {viewFirstNumber == false?
        <>
            {number > 1?
                <View style={{
                        backgroundColor: style?.backgroundColor,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: style?.size,
                        height: style?.size,
                        borderRadius: style?.borderRadius,
                        margin: style?.margin,
                        marginHorizontal: style?.marginHorizontal,
                        marginVertical: style?.marginVertical,
                        marginLeft: style?.marginLeft,
                        marginRight: style?.marginRight,
                        marginTop: style?.marginTop,
                        marginBottom: style?.marginBottom,
                        padding: style?.padding,
                        paddingHorizontal: style?.paddingHorizontal,
                        paddingVertical: style?.paddingVertical
                    }}>
                        {viewText == true?
                            <Text style={{
                                fontSize: textStyle?.fontSize,
                                color: textStyle?.color,
                                fontFamily: textStyle?.fontFamily
                            }}>{number}</Text>: null
                        }
                            
                </View>
                : null
            }
        </>
        :  
        <View style={{
            backgroundColor: style?.backgroundColor,
            alignItems: 'center',
            justifyContent: 'center',
            width: style?.size,
            height: style?.size,
            borderRadius: style?.borderRadius,
            margin: style?.margin,
            marginHorizontal: style?.marginHorizontal,
            marginVertical: style?.marginVertical,
            marginLeft: style?.marginLeft,
            marginRight: style?.marginRight,
            marginTop: style?.marginTop,
            marginBottom: style?.marginBottom,
            padding: style?.padding,
            paddingHorizontal: style?.paddingHorizontal,
            paddingVertical: style?.paddingVertical
        }}>
            {viewText == true?
                <Text style={{
                    fontSize: textStyle?.fontSize,
                    color: textStyle?.color,
                    fontFamily: textStyle?.fontFamily
                }}>{number}</Text>: null
            }
                
        </View>
    }
    
    </>     
)