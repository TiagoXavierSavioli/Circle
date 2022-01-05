import React, {useEffect, useState, useCallback} from 'react'
import { StyleSheet, TouchableOpacity, StatusBar, Dimensions, Pressable, TextInput, View, FlatList} from 'react-native';
import { Text } from '../../components/Themed'
import Colors from '../../constants/Colors'
import useColorScheme from '../../hooks/useColorScheme'
import userProfile from '../../components/data/userProfile';
import { ProfilePicture, ProfilePictureDefault } from '../../components/ProfilePicture'
import {Image} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux'
import * as usersActions from '../../store/actions/users'
import * as authActions from '../../store/actions/auth'
import {useNavigation} from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native-gesture-handler';

const WindowWidth = Dimensions.get('window').width
const imageSize = 120
const IconArrow = require('../../assets/icons/edit.png')
const IconInfo = require('../../assets/icons/arrow-right.png')

export default function ConfigScreen() {
  const colorScheme = useColorScheme()
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const usernotFiltered = useSelector(state => state.users.user)
  const user = usernotFiltered[0]

  const LoadUser = useCallback(async () => {
    const userData = await AsyncStorage.getItem('userData');
    const transformedData = JSON.parse(userData)
    const { token } = transformedData

    await dispatch(usersActions.getUserById(token))
  }, [])

  const LogOut = useCallback(async () => {
    dispatch(authActions.logout())
  }, [])

  useEffect(() => {
    LoadUser()
  }, [])
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'}/>

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.card2}>
          <View style={styles.header2}>
            <Text style={styles.sectionTitle}>Your information</Text>
            <TouchableOpacity
              onPress={() => {navigation.navigate('InfoScreen')}}
            >
              <Image source={IconArrow} style={styles.icons}/>   
            </TouchableOpacity>
                     
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>Username</Text>
            </View>
            <View style={styles.right}>
              <Text
                style={user.username != null? styles.item: styles.itemNull}
              >{user.username != null? '@' + user.username: '@username'}</Text>
              
            </View>
          </View>        

          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>Biography</Text>
            </View>
            <View style={styles.right}>
              <Text
                style={user.description != null? styles.item: styles.itemNull}
              >{user.description != null? user.description: 'add biography'}</Text>
              
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>Phone</Text>
            </View>
            <View style={styles.right}>
              <Text
                style={user.informations.phone != null? styles.item: styles.itemNull}
              >{user.informations.phone != null? user.informations.phone: 'add phone'}</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>Email</Text>
            </View>
            <View style={styles.right}>
              <Text
                style={user.informations.email != null? styles.item: styles.itemNull}
              >{user.informations.email != null? user.informations.email: 'add email'}</Text>
            </View>
          </View>
          
          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>Gender</Text>
            </View>
            <View style={styles.right}>
              <Text
                style={user.informations.gender != null? styles.item: styles.itemNull}
              >{user.informations.gender != null? user.informations.gender: 'add your gender'}</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>Orientation</Text>
            </View>
            <View style={styles.right}>
              <Text
                style={user.informations.orientation != null? styles.item: styles.itemNull}
              >{user.informations.orientation != null? user.informations.orientation: 'add your orientation'}</Text>
            </View>
          </View>

          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.title}>Birthday</Text>
            </View>
            <View style={styles.right}>
              <Text 
                style={user.informations.birthday != null? styles.item: styles.itemNull}
              >{user.informations.birthday != null? user.informations.birthday: 'add your birthday'}</Text>
            </View>
          </View>
        </View>

        <View style={styles.card2}>
          <View style={styles.header2}>
            <Text style={styles.sectionTitle}>Legal</Text>         
          </View>

          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {navigation.navigate('TermsOfUseScreen')}}
          >
            <View style={styles.left}>
              <Image source={require('../../assets/icons/file-text.png')} style={styles.iconShow2}/>
              <Text style={styles.item}>Terms of Use</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {navigation.navigate('PolicyScreen')}}
          >
            <View style={styles.left}>
              <Image source={require('../../assets/icons/book.png')} style={styles.iconShow2}/>
              <Text style={styles.item}>Privacity Policy</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.card2}>
          <View style={styles.header2}>
            <Text style={styles.sectionTitle}>Account</Text>         
          </View>

          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {LogOut()}}
          >
            <View style={styles.left}>
              <Image source={require('../../assets/icons/arrow-bar-right.png')} style={styles.iconShow}/>
              <Text style={styles.item2}>Log out</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.itemContainer}>
            <View style={styles.left}>
              <Image source={require('../../assets/icons/trash.png')} style={styles.iconShow}/>
              <Text style={styles.item2}>Delete</Text>
            </View>
          </TouchableOpacity>

        </View>

        <View style={styles.card2}>

          <View style={styles.itemContainer}>
            <View style={styles.left}>
              <Text style={styles.item}>Circle 1.0</Text>
            </View>
          </View>
        </View>

      </ScrollView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#FFF',
    width: WindowWidth,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    marginBottom: 20,
    backgroundColor: '#00000009',
  },
  card2: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderBottomWidth: 1.5,
    borderColor: '#00000010',
  },
  header: {
    width: WindowWidth - 20,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#FFF',
  },
  header2: {
    width: WindowWidth - 20,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  sectionTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'RedHatDisplay-Bold',
    flex: 1
  },
  left: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  right: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  itemContainer: {
    width: WindowWidth - 40,
    height: 40,
    backgroundColor: '#00000000',
    marginBottom: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    marginHorizontal: 10
  },
  title: {
    fontSize: 12,
    color: '#8C9BAA',
    fontFamily: 'RedHatDisplay-Medium',
  },
  item: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'RedHatDisplay-Bold',
  },
  item2: {
    fontSize: 14,
    color: Colors.light.warwing,
    fontFamily: 'RedHatDisplay-Bold',
  },
  itemNull: {
    fontSize: 14,
    color: '#8C9BAA',
    fontFamily: 'RedHatDisplay-Medium',
  },
  icons: {
    width: 30,
    height: 30,
    tintColor: Colors.light.tint,
  },
  iconShow: {
    width: 20,
    height: 20,
    tintColor: Colors.light.warwing,
    marginRight: 10
  },
  iconShow2: {
    width: 20,
    height: 20,
    tintColor: '#000',
    marginRight: 10
  }
});
