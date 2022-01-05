import React, {useState, useCallback, useEffect} from 'react'

//components
import {useNavigation} from '@react-navigation/native';
import { TouchableWithoutFeedback, Dimensions, Animated, FlatList } from 'react-native'
import {Text, Username, View } from '../../Themed'
import  {MomentsPreview}from "../../ProfilePicture";
import { Image } from 'react-native-elements'
import MomentsPreviewFooter from './container/footer'
import MomentsPreviewTop from './container/top';
import MomentsPreviewCenter from './container/Center';

import { UserType, MomentsType, StatsType} from '../../../types'
import styles from './styles';

import { useDispatch, useSelector } from 'react-redux';
import * as usersActions from '../../../store/actions/users';

export type userMomentsPreviewProps = {
    user?: UserType,
    moment?: undefined,
    scale?: undefined,
    translateY?: undefined 
}

const userMomentsPreview = (props: userMomentsPreviewProps) => {

    const { moment, user } = props
    
    const dispatch = useDispatch();

    const navigation = useNavigation()
    const [momentIndex, setMomentIndex] = useState(0)
    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height


    return(
        <View style={[styles.container, {overflow: 'hidden', borderRadius: 30, marginBottom: 5}]}>
            <Animated.FlatList
                data={moment.reverse()}
                disableIntervalMomentum={true}
                disableScrollViewPanResponder={true}
                removeClippedSubviews={true}
                showsHorizontalScrollIndicator={false}
                initialNumToRender={1}
                renderItem={({item, index}) => {
                    const count = moment.length
                    return(
                        <>  
                            
                                <View style={[styles.counterContainer, {paddingHorizontal: count !== 1? 10: 5 }]}>
                                    {count !== 1?
                                    <Text style={styles.counter}>{index + 1} from {moment.length}</Text>
                                    : null
                                    }  
                                    <Image source={require('../../../assets/icons/photo.png')} style={styles.image} resizeMode='contain'/>
                                </View>
                                                          
                              
                            <MomentsPreviewTop user={user} moment={item}/>
                            <MomentsPreviewFooter user={user} moment={item}/>   
                            <MomentsPreviewCenter moment={item}/>                        
                        </>

                    )
                }}
                snapToInterval={WindowWidth}
                keyExtractor={(item) => item.id}
                horizontal={true}
                showsVerticalScrollIndicator={false}       
            />     
        </View>

    )
}

export default userMomentsPreview