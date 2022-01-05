import React ,{useState, useEffect, useLayoutEffect} from 'react'
import { StyleSheet, TextInput, FlatList, ActivityIndicator, View, Text, Dimensions, ScrollView, Pressable} from 'react-native';
import api from '../../services/api'
import FastImage from 'react-native-fast-image';
import {Image} from 'react-native-elements'
import calcCrow from '../../helpers/distanceCalcule';
import Geolocation from '@react-native-community/geolocation';
import Colors from '../../constants/Colors';
import useColorScheme from '../../hooks/useColorScheme';
import {useNavigation, useRoute} from '@react-navigation/native';
import ImageDecoding from '../../helpers/imageDecoding'

export default function ProximUsersScreen() { 
  const navigation = useNavigation()
  const WindowWidth = Dimensions.get('window').width
  const route = useRoute()
  const[proximUsers, setProximUsers] = useState([])
  const [currentLatitude, setCurrentLatitude] = useState('')
	const [currentLongitude, setCurrentLongitude] = useState('')

  const colorScheme = useColorScheme()
  
  return (
    <View style={styles.container}>
      <View 
        style={{
          overflow: 'hidden',
          width: WindowWidth,
          alignSelf: 'center'
        }}>

        <FlatList
          data={proximUsers}
          horizontal
          keyboardShouldPersistTaps={'never'}
          onMomentumScrollEnd={() => {setProximUsers([]), getLocation()}}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => {
            return(
              <Pressable
                onPress={() => navigation.navigate('ProfileScreen', {userId: item.id})}
                key={item.id}
                style={{width: WindowWidth/3.2, marginBottom: 10}}>
                <FastImage
                  source={{uri: 'data:image/png;base64,'+String(ImageDecoding(item.picture.data)), priority: 'high'}}
                  style={{
                    alignSelf: 'center',
                    width: WindowWidth/3.2 - 20,
                    height: WindowWidth/3.2 - 20,
                    borderRadius: 100
                  }}/>
                  <View
                    style={{
                      top: -20,
                      borderRadius: 50,
                      backgroundColor: '#000',
                      alignSelf: 'center',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: -30
                    }}>
                    <FastImage source={require('../../assets/icons/map-pin.png')} style={{width: 20, height: 20, margin: 5}} resizeMode={'contain'} tintColor={'#FFF'}/>
                  </View>
                  <View
                    style={{
                      alignSelf: 'center',
                      marginTop: 5,
                      width: '100%',
                      paddingVertical: 5,
                      alignItems: 'center',
                    }}
                  >
                    <Text style={{color: '#000', fontFamily: 'RedHatDisplay-Bold', fontSize: 14}}>@{item.username}</Text>
                    <Text
                      style={{color: '#00000070', fontFamily: 'RedHatDisplay-Medium', fontSize: 12}}
                    >
                      {calcCrow(currentLatitude,currentLongitude,item.coordinates.latitude,item.coordinates.longitude,'K').toFixed(1)} Km
                    </Text>
                  </View>
              </Pressable>
            )
          }}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
});
