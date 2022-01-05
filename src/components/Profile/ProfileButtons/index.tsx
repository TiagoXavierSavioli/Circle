import React, {useState, useRef, useCallback, useEffect} from 'react'
import { Text, Username, ViewButton1 } from "../../Themed";
import { TouchableOpacity, Linking, Pressable, View, Dimensions} from "react-native";
import { ProfileButtons } from "../../../types";
import styles from "./styles";
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import Colors from "../../../constants/Colors";
import useColorScheme from '../../../hooks/useColorScheme';
import {Image} from 'react-native-elements'
import FastImage from "react-native-fast-image";
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {MessageParamList, RootStackParamList, MomentParamList} from '../../../types';
import * as usersActions from '../../../store/actions/users'

type messageScreenProp = StackNavigationProp<RootStackParamList, 'Messages' >;

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const IconInstagram = require('../../../assets/icons/brand-instagram.png')
const IconTikTok = require('../../../assets/icons/brand-tiktok.png')
const IconSnapchat = require('../../../assets/icons/message.png')
const IconWhatsApp = require('../../../assets/icons/brand-whatsapp.png')

const image_size = 30

const ProfileButtonsComponent = (props: ProfileButtons) => {
    
    const navigation = useNavigation()
    const colorScheme = useColorScheme()
    const IconMessage = require('../../../assets/icons/message.png')

    return (
        <View style={styles.container}>
            <ViewButton1 style={ styles.Button1Container}>
                <Text style={{
                    fontSize: 17,
                    fontFamily: 'RedHatDisplay-Bold',
                    color: '#FFF'
                }}>FOLLOW</Text>
            </ViewButton1>
            <TouchableOpacity style={{
                marginLeft: 10,
                height: 44,
                width: 44,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1.7,
                borderColor: Colors[colorScheme].icons,
                borderRadius: 50
            }}>
                <Image source={IconMessage} style={{width: 25, height: 25, tintColor: Colors[colorScheme].icons}} resizeMode='contain'/>
            </TouchableOpacity>    
        </View>
    )
}

export const ProfileButtonsComponent_dev = (props: ProfileButtons) => {
    const {user, id, } = props
    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    const dispatch = useDispatch()
    
   const [heart, setHeart] = useState(0)
   const [followsNumber, setFollowsNumber] = useState(0)
   const [initialLiked, setIInitialLiked] = useState(false)

    async function followPress() {
        
        const userData = await AsyncStorage.getItem('userData')
        const transformedData = JSON.parse(userData)
        const { user } = transformedData
        
        if(heart == 1 ){

            if(initialLiked == true){
                setFollowsNumber(-1)
            }else{
                setFollowsNumber(0)
            }
            setHeart(0)
            unfollow(user.id, id)           
        }
        if(heart == 0){
            setHeart(1)
            if(initialLiked == true){
                setFollowsNumber(0)
            }else{
                setFollowsNumber(1)
            }
            follow(user.id, id)      
 
        }  
    }

    const follow = useCallback( async (follow_id, fan_id) => {
        dispatch(usersActions.follow(follow_id, fan_id))
    }, [dispatch])

    const unfollow = useCallback( async (follow_id, fan_id) => {
        dispatch(usersActions.unfollow(follow_id, fan_id))
    }, [dispatch])

    useEffect(() => {
        
        const compareId = async () => {
            const userData = await AsyncStorage.getItem('userData');
            const transformedData = JSON.parse(userData);
            const { token } = transformedData
            await user.fans.map(element =>{
    
                if(element.follow_id == [token]){
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


    return (
        <View style={styles.container}>

            <View style={{flexDirection: "row", alignItems: "center"}}>
                {heart == 1?
                    <TouchableOpacity
                        style={{marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() =>{followPress()}}
                    >
                        <View style={styles.message_button_pressed}>
                            <Text style={styles.message_text_pressed}>UNFOLLOW</Text>
                        </View>
                        
                    </TouchableOpacity>
                    :
                    <TouchableOpacity
                    style={{marginHorizontal: 10, alignItems: 'center', justifyContent: 'center'}}
                    onPress={() =>{followPress()}}
                    >
                        <View style={styles.message_button}>
                            <Text style={styles.message_text}>FOLLOW</Text>
                        </View>
                        
                    </TouchableOpacity>
                }
            </View>

        </View>
    )
}
export default ProfileButtonsComponent