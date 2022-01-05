import React, {useEffect, useState} from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, Pressable, TextInput, View, FlatList, ScrollView} from 'react-native';
import AccountView from '../../components/Profile/AccountView';
import { Text } from '../../components/Themed';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import userProfile from '../../components/data/userProfile'; 
import { ProfilePicture, ProfilePictureDefault } from '../../components/ProfilePicture';
import {useNavigation} from '@react-navigation/native';
import {ListItem, Icon, Image} from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import FastImage from 'react-native-fast-image';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height
const imageSize = WindowWidth
const imageRadius = 0
const IconMessage = require('../../assets/icons/camera.png')
const IconArrow = require('../../assets/icons/arrow-right.png')

export default function NewMomentScreen() {
  const colorScheme = useColorScheme()
  const navigation = useNavigation()
  const[defaultImage, setDefaultImage]=useState(userProfile.map(u => u.picture))

  const [imageUri, setImageUri] = useState('')

  const image_width =  1080
  const image_height = image_width/1.2 

  const openCamera = () => {
    const options = {
      storageOption: {
        path: 'images',
        mediaType: 'photo',
      },
      maxWidth: image_width,
      maxHeight: image_height,
      includeBase64: true,
      quality: 0.9
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

  async function Navigate() {
    if(imageUri !== ''){
      await navigation.navigate('MomentScreen', { image: imageUri})
    }
    await setImageUri('')
  }

  
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'}/>
      <Pressable style={styles.pictureContainer} onPress={() => openCamera()}>
        {imageUri == ''?
          <View style={[styles.maskImageLayer, {borderRadius: 30}]}>
            <Image source={IconMessage} style={{width: 30, height: 30, tintColor: '#FFF'}} resizeMode='contain'/>
          </View>
          : null        
        }

        <FastImage source={{ uri: imageUri}} style={{width: WindowWidth - 20, height: WindowHeight- 240, borderRadius: 30}} resizeMode='cover'/>
      </Pressable>
      <TouchableOpacity
        style={[styles.nextButtonContainer, {backgroundColor: imageUri == ''? '#3EB16F60': Colors[colorScheme].tint}]}
        onPress={() => Navigate()}
      >
            <Text style={[styles.nextButtonTitle, {color:Colors[colorScheme].background}]}>Next</Text>
      </TouchableOpacity>       
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    width: WindowWidth,
    alignItems: 'center',
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  maskImageLayer: {
    backgroundColor: '#ffffff30',
    zIndex: 2,
    width: WindowWidth - 20,
    height: WindowHeight - 240,
    position: 'absolute',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  pictureContainer: {
    width: WindowWidth,
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#000000',
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
  }
});
