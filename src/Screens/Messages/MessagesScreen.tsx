import React, { useState, useRef } from 'react';
import { StyleSheet, FlatList, StatusBar } from 'react-native';
import ChatListItem from '../../components/Booblles/ChatsRoom';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text, View } from '../../components/Themed';
import ChatRooms from '../../components/data/Booblles/ChatRooms';
import api from '../../services/api'

export default function MessagesScreen() {

  const[user, setUser] = useState([])
  const [userRoom, setUserRoom] = useState([])

  const yourRef = useRef(null)

  async function get_rooms() {
    const userId = await AsyncStorage.getItem('userId') 
    try{
      const response = await api.get(`/chat/${userId}`)
      const data = response.data
      setUser(data)

      try{
        const user_room = user.user_id2
        const response = await api.get(`/find/${user_room}`)
        const data = response.data
        setUserRoom(data)
        console.log(user)
      }catch(err){
        console.warn(err)
      }

      console.log(user)
    }catch(err){
      console.warn(err)
    }
  }
  get_rooms()

  
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'}/>
      <FlatList
        data={userRoom}
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={true}
        renderItem={({item}) => <ChatListItem chatRoom={item}/>}
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <Text style={styles.text}>this is just for now</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  text: {
    color: '#8C9BAA',
    fontFamily: 'RedHatDisplay-Regular',
    alignSelf: 'center',
    paddingBottom: 20,
    fontSize: 12
  }
});
