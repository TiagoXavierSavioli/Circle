import React, {useEffect, useState, useLayoutEffect, useCallback, useRef} from 'react'
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, Pressable, TextInput, View, ActivityIndicator} from 'react-native';
import AccountView from '../../components/Profile/AccountView';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import { ProfilePicture, ProfilePictureDefault } from '../../components/ProfilePicture';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Icon, Image} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import * as usersActions from '../../store/actions/users'
import * as mapsActions from '../../store/actions/maps'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';

const WindowWidth = Dimensions.get('window').width
const imageSize = WindowWidth
const imageRadius = 0
const IconMessage = require('../../assets/icons/camera.png')

export default function photoPickerScreen() {
  const colorScheme = useColorScheme()
  const navigation = useNavigation()

  const [error, setError] = useState()
  const [refreshing, setRefreshing] = useState(false)
  const [ loading, setLoading ] = useState(false)
  const [imageUri, setImageUri] = useState('')
  const [press, setPress] = useState(0)

  const dispatch = useDispatch()

  const UploadPicture = async () => {
    setError(null)
    setRefreshing(true)
    try {
      setLoading(true)
      const userData = await AsyncStorage.getItem('userData')
      const transformedData = JSON.parse(userData)
      const { token } = transformedData

      await dispatch(usersActions.putUserPicture(token, imageUri))
      await dispatch(usersActions.getUserById(token))
      await dispatch(mapsActions.getMaps())
      
      setLoading(false)
      navigation.goBack()

    } catch (err) {
        setError(err.message)
    }
    setRefreshing(false)
  }

  const openCamera = async () => {
    const options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo'
      },
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.9,
      includeBase64: true,
    }
    launchImageLibrary(options, response => {
      console.log(`response = ${response}`);
      if (response.didCancel) {
        console.log('user canceled image picker');
      } else if (response.errorCode) {
        console.log(`image picker error: ${response.errorMessage}`)
      } else {
        const source = 'data:image/jpeg;base64,' + String(response.assets[0].base64)
        setImageUri(source)
      }
    })
  }
  
  return (
    <View style={styles.container}>
      <Pressable style={styles.pictureContainer} onPress={() => openCamera()}>
        {imageUri == ''?
          <View style={[styles.maskImageLayer, {borderRadius: imageRadius}]}>
            <Image source={IconMessage} style={{width: 30, height: 30, tintColor: '#FFF'}} resizeMode='contain'/>
          </View>
          : null        
        }

        <FastImage source={{ uri: imageUri}} style={{width: imageSize, height: imageSize, borderRadius: imageRadius}}/>
      </Pressable>
      <TouchableOpacity
        style={[styles.buttonContainer, {backgroundColor: Colors[colorScheme].tint}]}
        onPress={() => {UploadPicture(), setPress(press+1)}}
      >
        {loading == true?
        <ActivityIndicator color={'#FFF'} size={'large'}/>
        :
        
          <Text style={{fontSize: 14, fontFamily: 'RedHatDisplay-Bold', color: Colors[colorScheme].background}}>Confirm</Text>
        }
            
      </TouchableOpacity>       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    width: WindowWidth,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30
  },
  maskImageLayer: {
    backgroundColor: '#00000050',
    zIndex: 2,
    width: imageSize,
    height: imageSize,
    position: 'absolute',
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pictureContainer: {
    width: WindowWidth,
    alignItems: 'center'
  },
  buttonContainer: {
    width: WindowWidth - 70,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
  }
});
