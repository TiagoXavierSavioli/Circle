import React, {useState, useRef} from 'react'
import {View, TouchableOpacity, Text, Dimensions, Pressable} from 'react-native'
import styles from './styles';
import Colors from '../../../../../constants/Colors';
import useColorScheme from '../../../../../hooks/useColorScheme';
import { ProfilePictureDefault, ProfilePicture } from '../../../../ProfilePicture';
import {useNavigation} from '@react-navigation/native';
import { Image } from 'react-native-elements';
import usersWithMoments from '../../../../data/usersWithMoments'
import { UserType, StatsType, MomentsType } from '../../../../../types';
import { timeDifference } from '../../../../../helpers/timeDiference';
import ImageDecoding from '../../../../../helpers/imageDecoding'

export type MomentsPreviewTopProps = {
    user: UserType,
    photo?: number,
    descriptionNum?: number,
    moment?: undefined
  }
const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const IconSend= require('../../../../../assets/icons/send.png')
const IconMore= require('../../../../../assets/icons/addMap.png')

const MomentsPreviewTop= ({ user, photo, descriptionNum, moment}: MomentsPreviewTopProps) => {

    const navigation = useNavigation()
    const colorScheme = useColorScheme();
    const ImageBase64 = 'data:image/png;base64,'+ String(ImageDecoding(user.picture.data))

    return(
        <View style={styles.container} >
                <Pressable style={styles.left} onPress={() => navigation.navigate('ProfileScreen', {userId: user.id})}>
                    <View style={styles.pictureContainer}>
                        {user.picture?
                            <ProfilePicture image={ImageBase64} size={40} borderRadious={50}/>
                            :
                            <ProfilePictureDefault size={50} borderRadious={50}/>
                        }
                    </View>
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style={styles.username}>@{user.username}</Text>
                            <Text style={styles.details}>{timeDifference(new Date(), new Date(moment.createdAt))}</Text>
                        </View>


                    </View>
                </Pressable>                        
                {moment.description?
                    <View style={{marginTop: 10, maxWidth: 250}}>
                        <Text style={styles.description}>{moment.description}</Text>
                    </View>
                :null                          
                }   
        </View>

    )
}

export default MomentsPreviewTop