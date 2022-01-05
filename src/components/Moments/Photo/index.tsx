import React, {useState} from 'react'
import { Text, MomentsUser, MomentsBackground, Username} from '../../Themed'
import FastImage from 'react-native-fast-image'
import styles from './styles'
import {TouchableOpacity, View, FlatList, StatusBar } from 'react-native'
import { VerifyTransparent } from '../../Verify'

import { UserType, MomentsType, StatsType} from '../../../types'

import  {ProfilePicture,ProfilePictureDefault} from '../../ProfilePicture'

import { timeDifference } from '../../../helpers/timeDiference';

export type MomentsViewProps ={
    user: UserType,
    moment: MomentsType,
    photo: string,
    goToNextMoment: Function,
    goToPrevMoment: Function
}
const MomentsView = (props: MomentsViewProps) => {
    const {user: {image, name, username, stats}, moment, goToNextMoment, goToPrevMoment, photo} = props

    return(
        <MomentsBackground style={styles.container}>

            <View style={styles.userHeaderContainer}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.username}>@{username}</Text>
                </View>
            </View>

           {moment.image &&<FastImage source={{uri: photo}} style={styles.image}/>}
        </MomentsBackground>
    )
}
export default MomentsView