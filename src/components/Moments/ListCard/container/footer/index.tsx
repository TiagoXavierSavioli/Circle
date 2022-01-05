import React, {useState, useRef, useCallback, useEffect} from 'react'
import {View, TouchableOpacity, Pressable, Dimensions} from 'react-native'
import {Text, Username } from '../../../../Themed'
import styles from './styles'
import LinearGradient  from 'react-native-linear-gradient'
import Colors from '../../../../../constants/Colors'
import useColorScheme from '../../../../../hooks/useColorScheme'
import usersWithMoments from '../../../../data/usersWithMoments'
import {UserType, MomentsType, StatsType, TagsType} from '../../../../../types'
import RBSheet from "react-native-raw-bottom-sheet"
import {ModalComponentMoment} from '../Center/ModalComponentMoment'
import LottieView from 'lottie-react-native'
const love_icon_animation = require('../../../../../assets/animations/love.json')
import { Image } from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../../../../services/api'
import * as momentsActions from '../../../../../store/actions/moments'

const IconHeart2= require('../../../../../assets/icons/heart.png')
const IconHeartFill= require('../../../../../assets/icons/heart-fill.png')
const IconHeartOutline= require('../../../../../assets/icons/heart.png')
const IconChatOutline= require('../../../../../assets/icons/eye.png')
const dotsOutline= require('../../../../../assets/icons/dots.png')

export type MomentsPreviewBottomProps = {
    user: UserType,
    moment?: undefined
  }

const MomentsPreviewFooter= ({ user, moment }: MomentsPreviewBottomProps) => {
    const refRBSheet = useRef()
    const dispatch = useDispatch()

    const WindowWidth = Dimensions.get('window').width
    const WindowHeight = Dimensions.get('window').height

    const colorScheme = useColorScheme();

    
    const [bookmark, setBookmark] = useState(1)
    const [momentIndex, setMomentIndex] = useState(0)

   const [heart, setHeart] = useState(0)
   const [likesNumber, setLikesNumber] = useState(0)
   const [initialLiked, setIInitialLiked] = useState(false)



    async function heartPress() {
        
        const userData = await AsyncStorage.getItem('userData')
        const transformedData = JSON.parse(userData)
        const { user } = transformedData
        
        if(heart == 1 ){

            if(initialLiked == true){
                setLikesNumber(-1)
            }else{
                setLikesNumber(0)
            }
            setHeart(0)
            dislike(user.id, moment.id)           
        }
        if(heart == 0){
            setHeart(1)
            if(initialLiked == true){
                setLikesNumber(0)
            }else{
                setLikesNumber(1)
            }
            
            like(user.id, moment.id)      
 
        }  
    }

    const like = useCallback( async (user_id, moment_id) => {
        dispatch(momentsActions.likeMoment(user_id, moment_id))
    }, [dispatch])

    const dislike = useCallback( async (user_id, moment_id) => {
        dispatch(momentsActions.dislikeMoment(user_id, moment_id))
    }, [dispatch])

    useEffect(() => {
        
        const compareId = async () => {
            const userData = await AsyncStorage.getItem('userData');
            const transformedData = JSON.parse(userData);
            const { user } = transformedData
            await moment.likes.map(element =>{
    
                if(element.user_id == [user.id]){
                    setIInitialLiked(true)
                    setHeart(1)
                }else{
                    setIInitialLiked(false)
                    setHeart(0)
                }
                    
            })
        }
        compareId()
    }, [setHeart])


    return(
        <View style={styles.container}>
                <View style={styles.bottom} >
                    <View style={styles.leftContainer}>
                        <Pressable
                            style={[styles.likeContainer, {
                                backgroundColor: heart == 1? '#FF004D': '#FFFFFF'
                                }
                            ]}
                            onPress={() => heartPress()}
                        >
                            {heart == 1?

                                <>
                                    <View style={[styles.left, {marginRight: 10}]}>
                                        <Image source={IconHeartFill} style={[styles.iconLike, {tintColor: '#FFFFFF'}]} resizeMode='contain'/>
                                    </View>
                                    <Text style={[styles.likesCount, {color: '#FFFFFF'}]}>{moment.likes.length + likesNumber}</Text>
                                </>     
                            :                       
                                <>
                                    <View style={[styles.left, {marginRight: 10}]}>
                                        <Image source={IconHeartOutline} style={styles.icon} resizeMode='contain'/>
                                    </View>
                                    <Text style={[styles.likesCount]}> {moment.likes.length + likesNumber}</Text>
                                </>

                            }
                        </Pressable>
                        {/*
                            <View style={styles.commentContainer}>
                                <View style={[styles.right, {marginRight: 10}]}>
                                    <Image source={IconChatOutline} style={[styles.icon, {tintColor: '#FFFFFF'}]} resizeMode='contain'/>
                                </View> 
                                <Text style={[styles.likesCount, {color: '#FFFFFF'}]}>{moment.vieweds.length}</Text>
                            </View>                            
                        */}
                        


                    </View>
                    {/*
                    <View style={styles.rightContainer}>
                            <View style={[styles.menuContainer, {alignSelf: 'flex-end'}]}>
                                <TouchableOpacity style={[styles.right]} onPress={() => refRBSheet.current.open()}>
                                    <Image source={dotsOutline} style={[styles.icon, {tintColor: '#FFFFFF'}]} resizeMode='contain'/>
                                </TouchableOpacity> 
                            </View> 
                    </View>
                    */}

                </View>
                <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height = {100}
                customStyles={{
                    container:{
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30,
                        backgroundColor: Colors[colorScheme].background,
                        alignSelf: 'center',
                        width: WindowWidth,
                        marginBottom: 0,
                        paddingHorizontal: 20
                    },
                    wrapper: {
                        backgroundColor: '#00000050',
                        width: WindowWidth,
                        height: WindowHeight
                        
                    },
                    draggableIcon: {
                        backgroundColor: "#000"
                    }
                }}
                
            >
                <ModalComponentMoment user={user}/>
            </RBSheet>
        </View>

    )
}

export default MomentsPreviewFooter