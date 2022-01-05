import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, TextInput, View } from 'react-native';
import AccountView from '../../components/Profile/AccountView';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import userProfile from '../../components/data/userProfile'; 
import { ProfilePicture, ProfilePictureDefault } from '../../components/ProfilePicture';
import {Image} from 'react-native-elements'
import {useNavigation} from '@react-navigation/native';
import {ListItem, Icon} from 'react-native-elements'
import { useRoute } from '@react-navigation/core';

const WindowWidth = Dimensions.get('window').width
const imageSize = 120
const IconMessage = require('../../assets/Icons/camera-outline.png')

export default function EditScreen() {
  const route = useRoute()
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  const [inputA, setInputA] = useState('')
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => setInputA(text)}
            value={inputA}
            multiline={false}
          />            
        </View>
        <TouchableOpacity style={{width: WindowWidth - 70, backgroundColor: Colors[colorScheme].tint, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 30}}>
            <Text style={{fontSize: 14, fontFamily: 'RedHatDisplay-Bold', color: Colors[colorScheme].background}}>Confirm</Text>
        </TouchableOpacity>        
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#FFF',
    width: WindowWidth,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  textContainer: {
    marginTop: 20,
    width: WindowWidth - 70,
    height: 60,
    borderWidth: 1.5,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingLeft: 20,
    flexDirection: 'row',
    borderColor: '#E1E5EB',
  },
  textInput: {
    color: '#000000',
    fontSize: 14,
    maxHeight: 200, 
    fontFamily: 'RedHatDisplay-Medium',
    flex: 1
  }
});
