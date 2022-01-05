import React from "react";

import { View, Image, TouchableOpacity} from "react-native";
import Colors from "../../../constants/Colors";
import { Text, Username, View2} from "../../Themed";
import {useNavigation, useRoute} from '@react-navigation/native';
import { NotificationIndicator } from "../../NotificationIndicator";
import { ProfilePicture, ProfilePictureDefault } from "../../ProfilePicture";

import { messageTime } from "../../../helpers/messageTime";
import { ChatRoom } from "../../../types";
import styles from "./styles";
import { useState } from "react";
import useColorScheme from "../../../hooks/useColorScheme";

export type ChatListItemProps = {
    chatRoom: ChatRoom
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom: {users, id, lastMessage} } = props

    const colorScheme = useColorScheme()
    const navigation = useNavigation()
    const user = users

    return(
        <View style={[styles.container, { height: 100}]}>
            <View style={styles.leftContainer}>
                <View style={styles.left}>

                    <View style={{position: 'absolute', zIndex: 5, left: 45}}>
                        {user.online == true ?
                            <View style={{width: 13, height: 13, borderRadius: 50, backgroundColor: Colors[colorScheme].tint}}/>
                        :
                            null
                        }
                    </View>                      
                    <ProfilePicture image={user.image} size={60} borderRadious={50}/>
                </View>
            </View>

            <TouchableOpacity style={styles.rightContainer} onPress={() => 
                navigation.navigate('TalkScreen', {
                    user: user,
                }
            )}>
                <View style={styles.center}>
                    <View style={{height: lastMessage.content == ''? 60 : 30, justifyContent: 'center'}}>
                        <Text style={styles.name}>{`${user.name} (@${user.username})`}</Text>
                    </View>
                    {lastMessage.content.length > 30?
                    
                        <View style={{height: 30, justifyContent: 'flex-end'}}>
                            <Username style={styles.message}>{String(lastMessage.content).substring(30, 0)}...</Username>
                        </View>
                    :
                        <View style={{height: 30, justifyContent: 'flex-end'}}>
                            <Username style={styles.message}>{String(lastMessage.content)}</Username>    
                        </View>                    
                    }

                </View>
                <View style={[styles.right, {height:60}]}>

                    {lastMessage.content == ''?
                         <View style={{backgroundColor: Colors[colorScheme].background, paddingHorizontal: 5, borderRadius: 30}}>
                            <Username style={styles.time}>{messageTime(new Date(), new Date(lastMessage.createdAt))}</Username>    
                        </View>     
                    :
                        <View style={{backgroundColor: Colors[colorScheme].tint, paddingHorizontal: 5, paddingVertical: 1, borderRadius: 30}}>
                            <Username style={[styles.time, {color: '#FFF'}]}>{messageTime(new Date(), new Date(lastMessage.createdAt))}</Username>    
                        </View>                
                    }
                </View>

            </TouchableOpacity>

            
        </View>
    )
}


export default ChatListItem