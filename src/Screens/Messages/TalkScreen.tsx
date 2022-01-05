import React, {useEffect, useState} from 'react';
import { StyleSheet, FlatList, StatusBar, Dimensions, TextInput, TouchableOpacity} from 'react-native';
import ChatListItem from '../../components/Booblles/ChatsRoom';
import { Text, View } from '../../components/Themed';
import { Image } from 'react-native-elements'
import HeaderTalk from '../../components/Headers/HeaderTalk';
import Chat from '../../components/data/Booblles/Chat';
import { useRoute } from '@react-navigation/native';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import {BubbleChat} from './bubble';
import { SwipeListView } from 'react-native-swipe-list-view';
import api from '../../services/api';
import AsyncStorage from "@react-native-async-storage/async-storage";

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const ChatTalk = Chat

export default function TalkScreen() {
  const  route = useRoute()
  const {user} = route.params
  const colorScheme = useColorScheme()

  const [text, setText] = useState('')
  const [room, setRoom] = useState([])
  const [chat, setChat] = useState([])
  const [myId, setMyId] = useState([])
  const [messages, setMessages] = useState([])

  async function create_room() {
    try{
      const userId = await AsyncStorage.getItem('userId')
      const response = await api.post('/chat/new',
      {
        user_id1: userId,
        user_id2: user.id
      })
      const data = response.data
      setRoom(data)
      console.log(room)
    }catch(err){
      console.log(err)
    }
  }
  async function send_message() {
     try{
       console.log(room.id)
      const userId = await AsyncStorage.getItem('userId')
      const response = await api.post(`/chat/messages/1/${userId}`,
      {
        text: String(text),
        file_type: "TEXT",
        file: [],
        seen: false,
        reaction: false
      })

      const data = response.data
      setChat(data)

      const message_json = {
        "id": 1,
        "text": String(text),
        "file_type": "TEXT",
        "file": {
          "type": "Buffer",
          "data": []
        },
        "seen": false,
        "reaction": false,
        "createdAt": String(Date.now),
        "updatedAt": String(Date.now),
        "user_id": Number(userId),
        "room_id": Number(1)
      }
        
    }catch(err){
      console.log(err)
    }   
  }
  async function get_messages() {
    try{
      const userId = await AsyncStorage.getItem('userId')
      setMyId(userId)
      const response = await api.get(`/chat/messages/1`)
      const data = response.data
      setMessages(data)

    }catch(err){
      console.log(err)
      setMessages([])
    }    
  }
  async function send(){
    if(text == '' || null){

    }else{
      create_room()
      send_message()
      get_messages()
    }
  }
  useEffect(() => {
    get_messages()
  })
  
  return (
    <View style={[styles.container, {}]}>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'}/>
      <HeaderTalk username={String(user.username)} name={String(user.name)} picture={String(user.picture)} online={user.online}/>
      <View style={{flex: 1, backgroundColor: '#FFF '}}>
        <FlatList
          bounces
          data={messages}
          showsVerticalScrollIndicator={false}
          inverted
          alwaysBounceVertical={true}
          renderItem={({item}) =>
            <BubbleChat key={item.id} id={item.id} userId={item.user_id} text={item.text} seen={item.seen} createdAt={item.createdAt} myId={myId}/>
          }
        />

      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputView}>
          <View style={styles.left}>
            <TextInput
              keyboardAppearance='dark'
              placeholder={'Message...'}
              style={styles.inputText}
              placeholderTextColor={'#8C9BAA'}
              onChangeText={(text) => setText(text)}
              value={text}
              />

          </View>
          <TouchableOpacity style={styles.right} onPress={() => {send()}}>
            <Text style={[styles.sendText, {color: Colors[colorScheme].tint}]}>Send</Text>
          </TouchableOpacity>          
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 28,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  sendText: {
    color: '#8C9BAA',
    fontFamily: 'RedHatDisplay-Bold',
    alignSelf: 'center',
    fontSize: 14
  },
  inputContainer: {
    alignSelf: 'center',
    width: WindowWidth,
    height: 70,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20
  },
  inputView: {borderRadius: 30,
    width: WindowWidth - 20,
    marginHorizontal: 10,
    height: 50,
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: '#EBF0F9'
  },
  inputText: {
    width: WindowWidth - WindowWidth/6 - 20 - 20,
    height: 50,
    paddingLeft: 20,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    fontFamily: 'RedHatDisplay-Medium'
  },
  left: {
    width: WindowWidth - WindowWidth/5 - 20,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  right: {
    width: WindowWidth/5,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  }
});
