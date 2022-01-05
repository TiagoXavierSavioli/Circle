import React, {useState} from 'react'
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, TextInput, Pressable, ActivityIndicator} from 'react-native'
import {StackNavigationProp} from '@react-navigation/stack'
import {Image} from 'react-native-elements'
import { Text, ViewAuth, View } from '../../../components/Themed'
import {MessageParamList, RootStackParamList} from '../../../types'
import {useNavigation} from '@react-navigation/native'
import { Button, Input } from '../../../components/Auth/Button'
import Colors from '../../../constants/Colors'
import useColorScheme from '../../../hooks/useColorScheme'
import api from '../../../services/api'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux'
import * as authActions from '../../../store/actions/auth'

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

export default function LoginScreen() {

  

  const navigation = useNavigation()
  const colorScheme = useColorScheme();

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const [errorMessage, setErrorMessage] = useState('')
  const [passwordVisible, setPasswordVisible] = useState(true)

  const [isSignup, setIsSignUp] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  function AuthHandler() {
    var _username = username.toLowerCase()
    var _password = password.toLowerCase()

    try {
        setLoading(true)
        if(username == '' || password == '' ){
          if(username == ''){
            setErrorMessage('*type a username')
          }else{
            setErrorMessage('*type a password')
          }
          
        }
        dispatch(authActions.signin( _username, _password ))
        setIsSignUp(false)
        setUsername('')
        setPassword('')
        setLoading(false)
    } catch (error) {setLoading(false)}
      
  }

  if(loading){
    return (
        <View style={{alignItems: 'center', justifyContent: 'center', width: WindowWidth, height: WindowHeight, backgroundColor: '#FFF'}}>
            <ActivityIndicator color={Colors[colorScheme].tint} size={'large'}/>
        </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors[colorScheme].background} barStyle={'dark-content'}/>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>create a profile and discover new people near you</Text>         
      </View>
      {errorMessage !== ''?
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{errorMessage}</Text>         
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
              autoCompleteType={'name'}
              style={styles.textInput}
              placeholder={'Username'}
              placeholderTextColor={'#8C9BAA'}
              onChangeText={(text) => setUsername(text)}
              maxLength={30}
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
        <Text style={[styles.buttonText, {color: '#8C9BAA', marginRight: 3}]}>You don't have an account?</Text>
        <TouchableOpacity>
          <Text style={[styles.buttonText, {color: Colors[colorScheme].tint}]}>Sign Up</Text>          
        </TouchableOpacity>
        <Text style={[styles.buttonText, {color: '#8C9BAA', marginRight: 3}]}>.</Text>
      </View>
      <TouchableOpacity
        style={[{ backgroundColor: Colors[colorScheme].tint }, styles.signInButton ]}
        onPress={() => AuthHandler()}
      >
          <Text style={{fontSize: 14, fontFamily: 'RedHatDisplay-Bold', color: Colors[colorScheme].background}}>Sign In</Text>
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
  },
  signInButton: {
    width: WindowWidth - 70,
    height: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30}
});