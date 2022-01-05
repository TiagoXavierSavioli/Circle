import React, {useEffect, useState} from 'react'
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, Pressable, TextInput, View} from 'react-native'
import AccountView from '../../components/Profile/AccountView'
import { Text } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import userProfile from '../../components/data/userProfile'
import { ProfilePicture, ProfilePictureDefault } from '../../components/ProfilePicture'
import {useNavigation} from '@react-navigation/native'
import {ListItem, Icon, Image} from 'react-native-elements'
import { useRoute } from '@react-navigation/core'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker'
import FastImage from 'react-native-fast-image'
import { useDispatch, useSelector } from 'react-redux'
import * as momentsActions from '../../store/actions/moments'
import AsyncStorage from '@react-native-async-storage/async-storage';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height
const imageSize = WindowWidth
const imageRadius = 0
const IconMessage = require('../../assets/icons/camera.png')
const IconArrow = require('../../assets/icons/arrow-right.png')

export default function NewMomentEditScreen() {

  const route = useRoute()
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  const [error, setError] = useState()
  const [refreshing, setRefreshing] = useState(false)

  const dispatch = useDispatch();
  const { image } = route.params

  const imageWidth = WindowWidth - 20
  const imageHeight = WindowHeight - 200

  const [input, setInput] = useState('')

  const UploadPicture = async () => {
    try {
      const userData = await AsyncStorage.getItem('userData')
      const transformedData = JSON.parse(userData)
      const { token } = transformedData

      await dispatch(momentsActions.createMoment(token, image, input))

    } catch (err) {
        setError(err.message)
    }
    setRefreshing(false)
  }

  return (
    <View style={styles.container}>
      <View style={styles.pictureContainer}>
        <Image source={{ uri: image}} style={{width: imageWidth/1.62, height: imageHeight/1.62, borderRadius: 20}} resizeMode='cover'/>
      </View>

      <View style={{width: WindowWidth, height: 50, justifyContent: 'center', paddingHorizontal: 20, position: 'absolute', bottom: 280}}>
        <Text style={{fontSize: 14, color: '#FFF', fontFamily: 'RedHatDisplay-Bold'}}>Description</Text>
      </View>

      

      <View style={[styles.textContainer, {borderColor: input.length == 300? Colors[colorScheme].warwing: '#FFF'}]}>
        <Text style={[styles.textCount, {color: input.length == 300? Colors[colorScheme].warwing: '#000'}]}>{input == ''? null : input.length}</Text>
          <TextInput
            style={[styles.textInput, {color: input.length == 300? Colors[colorScheme].warwing: '#000'}]}
            placeholder='Write a caption'
            placeholderTextColor={'#00000050'}
            onChangeText={(text) => setInput(text)}
            value={input}
            multiline={true}
            maxLength={300}
          />            
        </View>

      <TouchableOpacity
        style={[styles.nextButtonContainer, {backgroundColor: image == ''? '#3EB16F60': Colors[colorScheme].tint}]}
        onPress={() => UploadPicture()}
      >
            <Text style={[styles.nextButtonTitle, {color:Colors[colorScheme].background}]}>Publish</Text>
      </TouchableOpacity>     
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: WindowWidth,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingTop: 80,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  maskImageLayer: {
    backgroundColor: '#00000050',
    zIndex: 2,
    width: WindowWidth - 20,
    height: WindowHeight - 200,
    position: 'absolute',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pictureContainer: {
    width: WindowWidth,
    alignItems: 'center',
    backgroundColor: '#000',
    paddingVertical: 20,
  },
  nextButtonContainer: {
    width: WindowWidth - 20,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
    flexDirection: 'row',
    paddingHorizontal: 20,
    position: 'absolute',
    bottom: 20
  },
  nextButtonTitle: {
    fontSize: 14,
    alignSelf: 'center',
    fontFamily: 'RedHatDisplay-Bold', 
  },
  textContainer: {
    marginTop: 20,
    width: WindowWidth - 20,
    height: 180,
    borderWidth: 1.5,
    borderRadius: 20,
    backgroundColor: '#FFF',
    alignItems: 'flex-start',
    paddingLeft: 20,
    flexDirection: 'row',
    borderColor: '#E1E5EB',
    position: 'absolute',
    bottom: 100
  },
  textInput: {
    textAlign: 'left',
    color: '#000',
    fontSize: 14,
    maxHeight: 200, 
    fontFamily: 'RedHatDisplay-Medium',
    flex: 1
  },
  textCount: {
    color: '#FFF',
    fontSize: 10,
    fontFamily: 'RedHatDisplay-Medium',
    position: 'absolute',
    bottom: 8,
    right: 8
  }
});
