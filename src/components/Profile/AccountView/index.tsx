import React, {useState} from "react";
import { Text } from "../../Themed";
import { StyleSheet, FlatList, ScrollView, Dimensions, View, StatusBar, ActivityIndicator} from 'react-native';
import {ProfileType, ProfileDatas} from '../../../types'
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from '../../../services/api'
import userProfile from "../../data/userProfile";
import ProfileDataComponent from "../ProfileData";
import {ProfileUserComponent} from "../ProfileUser";
import { Image } from "react-native-elements";
import Colors from '../../../constants/Colors';
import useColorScheme from '../../../hooks/useColorScheme';
import {ProfileButtonsComponent_dev} from '../../../components/Profile/ProfileButtons'
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import { useRoute } from '@react-navigation/core';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const AccountView = () => {

    const[user, setUser]=useState([])
    const colorSheme = useColorScheme()

    async function getUserData() {
        const userData = AsyncStorage.getItem('userData')
        const transformedData = JSON.parse(userData)
        const { token, user } = transformedData
        try{
            const response = await api.get(`/find/${28}`)
            const data = response.data
            setUser(data)
          }catch(err){
            console.warn(err)
          }
    }
    getUserData()

    return (
        <View style={styles.container}>
          <StatusBar barStyle={'light-content'} translucent backgroundColor={'transparent'}/>
          <>
          {user.id == null?
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
              <ActivityIndicator style={{alignSelf: 'center'}} size={'large'} color={Colors[colorSheme].tint}/>
            </View>
          :
          <View style={{overflow: 'hidden', borderRadius: 30, width: WindowWidth, height: WindowHeight}}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{width: WindowWidth, height: 50, zIndex: 1, top: 210, position: 'absolute', borderTopLeftRadius: 30, borderTopRightRadius: 30}}/>
              <View style={{alignSelf: 'center', marginTop:120, zIndex: 2}}>
                
                <ProfileUserComponent username={user.username} image={user.picture} imageSize={150}/>
    
                <ProfileButtonsComponent_dev id={user.id} user={user} social_icon={false}/>
    
                <View style={styles.informationsContainer}>
                  <View style={styles.informationsSubviews}>
                    <Text style={styles.informations}>{user.description}</Text>                
                  </View>
    
                  <View style={styles.informationsSubviews}>
                    <Text style={styles.informations}>{user.informations.phone}</Text>                
                  </View>
                </View>
                
              </View>
            </ScrollView>
          </View>
        }
        
        {user.bg_picture == null?
          null:
          <LinearGradient 
            style={{
              width: WindowWidth,
              height: 180,
              position: 'absolute',
              top: 0,
              zIndex: 0,
              borderRadius: 30
            }}
            colors={['#00000070', '#00000000']}
          />
        }
          </>
        </View>
    
     );
}
export default AccountView
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
       informationsContainer: {
        marginTop: 20,
        paddingHorizontal: 10,
        width: '100%',
    },
    informationsSubviews: {
        marginBottom: 20,
        marginHorizontal: 10
    },
    informations: {
        fontSize: 14,
        fontFamily: 'RedHatDisplay-Medium',
        color:'#8C9BAA', 
        textAlign: 'center',
    }
    })