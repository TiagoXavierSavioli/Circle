import React, {useRef, useState} from 'react';
import { StyleSheet, TouchableOpacity, View} from 'react-native';
import { Text } from '../../Themed';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';

import {Image} from 'react-native-elements'

const arrowBottom = require('../../../assets/icons/info-circle.png')
const arrowTop = require('../../../assets/icons/arrow-up.png')

export type ItemContainerProps = {
    text: string,
    description?: string
}



const ComponentView = ({text, description}: ItemContainerProps) => {
    const [ViewDescription, setViewDescription] = useState(false)
    const colorScheme = useColorScheme()

    return(
        <View style={styles.textContainer}>
            <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={() => setViewDescription(true)}>
                <Text style={styles.text}>{text}</Text>
                {description?
                    <>
                        {ViewDescription == false?
                            <View style={{alignItems: 'center',marginLeft: 10}}>
                                <Image 
                                    source={arrowBottom}
                                    style={{
                                        width: 13,
                                        height: 13,
                                        tintColor: Colors[colorScheme].username,
                                        }}
                                    resizeMode='contain'
                                />
                            </View>
                            : 
                            <TouchableOpacity onPress={() => setViewDescription(false)} style={{alignItems: 'center',marginLeft: 10}}>
                                <Image 
                                    source={arrowTop} 
                                    style={{
                                        width: 15,
                                        height: 15,
                                        tintColor: Colors[colorScheme].username,
                                    }}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                                            
                        }
                    </>
                    :
                    null
                }

            </TouchableOpacity>
            {ViewDescription == true?
                <View>
                    <Text style={{fontSize: 12, color: Colors[colorScheme].username, marginTop: 5, fontFamily: 'RedHatDisplay-Regular',}}>{description}</Text>
                    <View style={{flexDirection: 'row', flex: 1, alignSelf: 'center', marginTop: 20}}>
                        <TouchableOpacity onPress={() => setViewDescription(false)}>
                            <Text style={{marginRight: 100, fontFamily: 'RedHatDisplay-Bold'}}>Cancel</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Text style={{color: Colors[colorScheme].warwing, fontFamily: 'RedHatDisplay-Bold'}}>Report</Text>
                        </TouchableOpacity>
                        
                        
                    </View>
                </View>
                
                :
                null
            }
            
        </View>
    )
}

export default ComponentView

const styles = StyleSheet.create({
    textContainer: {
        marginTop: 20,
    },
    iconContainer: {
        marginRight: 10
    },
    text: {
        fontSize: 16,
        fontFamily: 'RedHatDisplay-Medium',
    },
    button: {

    }
});