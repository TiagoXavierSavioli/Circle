import React, {useState} from 'react';
import { StyleSheet, FlatList, StatusBar, Dimensions, View } from 'react-native';
import { Text } from '../../components/Themed';
import { SwipeListView } from 'react-native-swipe-list-view';
import { messageTime } from "../../helpers/messageTime";
import { Image } from 'react-native-elements'

export type BubbleProps = {
  id?: number,
  userId?: number,
  text?: string,
  seen?: boolean,
  createdAt?: string,
  myId?:string
}

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const Eye = require('../../assets/icons/eye.png')
const Send = require('../../assets/icons/send.png')




export const BubbleChat = ({id, userId, text, seen, createdAt, myId}: BubbleProps) => (
  <>
  {userId == myId?
    <View style={[styles.container]}>

      <View style={[styles.rightContainer, {flex: 1, alignItems: 'flex-end', paddingLeft: 80}]}>
        <View style={styles.top}>
          <Text style={[styles.text, {color: '#000', fontFamily: 'RedHatDisplay-Medium',}]}>{text}</Text>
        </View>
        <View style={styles.bottom}>
          <Image source={seen == true? Eye: Send} style={{width: 16, height: 16, tintColor: '#a5b1c2'}} resizeMode='contain'/>
          <Text style={styles.time}>{messageTime(new Date(), new Date(String(createdAt)))}</Text>
        </View>
          
      </View>
      <View style={[styles.leftContainer, {backgroundColor: '#3EB16F'}]}>
        
      </View>

    </View>  
    :
    <View style={styles.container}>

      <View style={styles.leftContainer}></View>
      <View style={[styles.rightContainer, {paddingRight: 80}]}>
        <View style={styles.top}>
          <Text style={styles.text}>{text}</Text>
        </View>
        <View style={styles.bottom}>
          <Text style={styles.time}>{messageTime(new Date(), new Date(String(createdAt)))}</Text>
        </View>
          
      </View>
      
    </View>      
  }
  </>          
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    width: WindowWidth - 20,
    marginBottom: 20,
    flexDirection: 'row',
    marginHorizontal: 10,
    overflow: 'hidden',
    borderRadius: 0
  },
  leftContainer: {
    width: 6,
    height: '100%',
    backgroundColor: '#007AFF',
    flexDirection: 'row',
    borderRadius: 30,
  },
  rightContainer: {
    paddingVertical: 2,
    paddingHorizontal: 10,
    
  },
  top: {
    marginBottom: 5
  },
  bottom: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    color: '#707A87',
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 14
  },
  time: {
    color: '#a5b1c2',
    fontFamily: 'RedHatDisplay-Regular',
    fontSize: 12,
    marginLeft: 5
  },
});
