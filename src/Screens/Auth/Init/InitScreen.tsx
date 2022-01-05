import React, {useState, useEffect} from 'react';
import { StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import { Text, ViewAuth, View } from '../../../components/Themed';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack'
import { Button } from '../../../components/Auth/Button';
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import { useDispatch } from 'react-redux';
import * as authActions from '../../../store/actions/auth';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function InitScreen() {

  const navigation = useNavigation()
  const colorScheme = useColorScheme()
  const dispatch = useDispatch();

  useEffect(() => {
    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('userData')

        console.log(userData)
        if (!userData) {
            // props.navigation.navigate('Auth');
            dispatch(authActions.setDidTryAutoLogin())
            return
        }
        const transformedData = JSON.parse(userData)
        const { token, user } = transformedData

        // props.navigation.navigate('Shop');
        dispatch(authActions.authenticate(user, token))
    };

    tryLogin();
}, [dispatch])

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors[colorScheme].background} barStyle={'dark-content'}/>

      <View style={styles.titleContainer}>
        <Text style={styles.title}>Wellcome to Circle</Text>        
      </View>

      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>create a profile and discover new people near you</Text>         
      </View>

      <View style={styles.buttonContainer}>
        <Button title={'Sign up with Username'} navigateTo={'Register'} showLeftIcon/>
      </View>

      <View style={styles.buttonContainerText}>
        <Text style={[styles.buttonText, {color: '#8C9BAA', marginRight: 3}]}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.buttonText, {color: Colors[colorScheme].tint}]}>Sign In</Text>          
        </TouchableOpacity>
        <Text style={[styles.buttonText, {color: '#8C9BAA', marginRight: 3}]}>.</Text>
      </View>

      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>English (US)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  titleContainer: {
    marginTop: 120,
  },
  title: {
    fontSize: 30,
    fontFamily:'RedHatDisplay-Bold',
    width: 274,
    textAlign: 'center'
  },
  descriptionContainer: {
    marginTop: 75,
  }, 
  description: {
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Medium',
    textAlign: 'center',
    color: '#8C9BAA',
    width: 277
  },
  buttonContainer: {
    marginTop: 55,
  },
  buttonContainerText: {
    marginTop: 55,
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
  }
});
