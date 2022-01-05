import React, {useState} from 'react';
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, TextInput, Pressable,} from 'react-native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Image} from 'react-native-elements'
import { Text, ViewAuth, View } from '../../../components/Themed';
import {MessageParamList, RootStackParamList} from '../../../types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import { Button, Input } from '../../../components/Auth/Button';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import api from '../../../services/api'

const WindowWidth = Dimensions.get('window').width
export default function UserScreen() {

  const navigation = useNavigation()
  const colorScheme = useColorScheme();

  const [username, setUsename] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(true)
  const [userData, setUserData] = useState([])

  async function register(){
    if(username == ''){
      setErrorMessage('* complete username for sign up')
      setTimeout(() => {
        setErrorMessage('')
      }, 10000)
    }if(password == ''){
      setErrorMessage('* complete password for sign up')
      setTimeout(() => {
        setErrorMessage('')
      }, 10000)
    }if(username !== '' && password !== ''){
      setErrorMessage('')
    }
    try{  
      const response = await api.post('/account/login', 
      {
        username: String(username),
        password: String(password),
      },
      {
        headers: {}
         //other header fields
      })
      const data = response.data
      
      const userName = data.username
      const userId = data.id
      const userPicture = data.picture
      try{
        await AsyncStorage.setItem('userName', String(userName))
        await AsyncStorage.setItem('userId', String(userId))
        await AsyncStorage.setItem('userPicture', String(userPicture))
      }catch(err){
        console.warn(err)
      }
      navigation.navigate('Root')
      
      
    }catch(err){
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors[colorScheme].background} barStyle={'dark-content'}/>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>create a new account and discover new people near you</Text>         
      </View>

      {errorMessage !== ''?
        <View style={{position: 'absolute', top: 150, zIndex: 3}}>
          <Text style={{color: Colors[colorScheme].warwing}}>{errorMessage}</Text>         
        </View>
        :null
      }
      <View style={styles.buttonContainer}>
        <View style={styles.textContainer}>
          <>
            <View style={{position: 'absolute', left: 15}}>
              <Image source={require('../../../assets/icons/user.png')} style={styles.textImage}/>
            </View>
            <TextInput
              style={styles.textInput}
              placeholder={'Username'}
              placeholderTextColor={'#8C9BAA'}
              onChangeText={(text) => setUsename(text)}
              maxLength={50}
              autoFocus={true}
              value={username}
            />
          </>        
        </View>
        <View style={styles.textContainer}>
          <>
            <View style={{position: 'absolute', left: 15}}>
              <Image source={require('../../../assets/icons/lock.png')} style={styles.textImage}/>
            </View>
            {passwordVisible == true?
              <Pressable style={{position: 'absolute', right: 15}} onPress={() => setPasswordVisible(false)}>
                <Image source={require('../../../assets/icons/eye-off.png')} style={styles.textImage}/>
              </Pressable>:
              <Pressable style={{position: 'absolute', right: 15}} onPress={() => setPasswordVisible(true)}>
                <Image source={require('../../../assets/icons/eye.png')} style={styles.textImage}/>
              </Pressable>        
            }

            <TextInput
              secureTextEntry={passwordVisible}
              style={styles.textInput}
              placeholder={'Password'}
              placeholderTextColor={'#8C9BAA'}
              onChangeText={(text) => setPassword(text)}
              maxLength={30}
              value={password}
            />
          </>        
        </View> 
      </View>

      <View style={styles.buttonContainerText}>
        <Text style={[styles.buttonText, {color: '#8C9BAA', marginRight: 3}]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.buttonText, {color: Colors[colorScheme].tint}]}>Sign In</Text>          
        </TouchableOpacity>
        <Text style={[styles.buttonText, {color: '#8C9BAA', marginRight: 3}]}>.</Text>
      </View>
      <TouchableOpacity 
      onPress={() => register()}
        style={{width: WindowWidth - 70, backgroundColor: Colors[colorScheme].tint, height: 60, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 30}}
        >
          <Text style={{fontSize: 14, fontFamily: 'RedHatDisplay-Bold', color: Colors[colorScheme].background}}>Sign Up</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  descriptionContainer: {
    marginTop: 100,
  }, 
  description: {
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Medium',
    textAlign: 'center',
    color: '#8C9BAA',
    width: 277
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonContainerText: {
    marginTop: 30,
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Medium',
    color: '#8C9BAA',
  },
  footerContainer: {
    position: 'absolute',
    bottom: 85
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'RedHatDisplay-Medium',
    textAlign: 'center',
    color: '#8C9BAA',
    width: 277
  },
  textContainer: {
    marginTop: 20,
    width: WindowWidth - 70,
    height: 60,
    borderWidth: 1.5,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 50,
    flexDirection: 'row',
    borderColor: '#E1E5EB',
  },
  textImage: {
    width: 22,
    height: 22,
    left: 0,
    resizeMode: 'contain',
    tintColor: '#8C9BAA',
  },
  textInput: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Medium',
  }
});