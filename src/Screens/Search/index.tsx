import React ,{useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import { StyleSheet, TextInput, FlatList, ActivityIndicator, View, Text, Dimensions, StatusBar} from 'react-native';
import NewsScreen from './news';
import api from '../../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { itemsReportData } from '../../components/Moments/Report/itemsReportData';
import ProximUsersScreen from './proximUsers';
import ListUsersScreen from './listUsersSearch'

export default function SearchScreen() {
  const WindowWidth = Dimensions.get('window').width
  const WindowHeight = Dimensions.get('window').height
  const route = useRoute()
  const[search, setSearch]=useState('')
  const[proximUsers, setProximUsers] = useState([])

  async function getProximsUsers() {
    try{
      const response = await api.get('/coordinates/find')
      const data = response.data
      setProximUsers(data)
    }catch(err){
      console.warn(err)
    }
  }
  useEffect(() => {
    getProximsUsers()
  })

  return (
    <View style={{flex: 1, backgroundColor: '#000'}}>
      <StatusBar barStyle={'dark-content'} translucent backgroundColor={'transparent'}/>
    <View style={styles.container}>
      <View style={styles.searchInputContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by username..."
          placeholderTextColor={'#8C9BAA'}
          onChangeText={(index) => setSearch(index)}
          value={search}
        />     
      </View>       
      {search == ''?
        <ProximUsersScreen/>
        :
        <ListUsersScreen/>
      }
    </View>
</View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 0,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
  },
  searchInputContainer: {
    paddingTop: 0,
    paddingBottom: 20,
    paddingHorizontal: 22,
    backgroundColor: '#FFF',
    justifyContent: 'center',
  },
  searchInput: {
    paddingLeft: 35,
    backgroundColor: '#F0F2F5',
    borderRadius: 50,
    fontFamily: 'RedHatDisplay-Medium',
    fontSize: 14,
    color: '#000'
  },
  subTitleContainer: {
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'RedHatDisplay-Medium'
  },
  footerContainer: {
    width: '100%',
    height: 50,
    alignItems:'center'
  },
});
