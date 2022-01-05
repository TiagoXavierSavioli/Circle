import React ,{useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import { StyleSheet, TextInput, FlatList, ActivityIndicator, View, Text, Dimensions, ScrollView} from 'react-native';
import { ListItem, LinearProgress } from 'react-native-elements';
import { ProfilePicture } from '../../components/ProfilePicture';
import users from '../../components/data/search/Users'
import FastImage from 'react-native-fast-image';

export default function ListUsersSearchScreen() {
  const WindowWidth = Dimensions.get('window').width
  const route = useRoute()
  const[searchResults, setSearchResults] = useState(users)

    async function apiQuerie() {
      try {
        const response = await fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=uWUtuJP0La881GjWoB0P7DjI9d2tvqyS', {
          method: 'GET',
        });
        const json = await response.json();
        setSearchResults(json.results)
      }catch(err){
        console.log(err)
      }

    }


  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>

        {users.map((u) => {
          return(
            <View style={{marginBottom: 0, marginTop: 20, marginHorizontal: 20, flexDirection: 'row'}} key={u.id}>

              <View style={{width: 65}}>
                <FastImage source={{uri: `${u.imageUri}`, priority: 'high'}} style={{width: 60, height: 60, borderRadius: 50}} resizeMode={'cover'}/>
              </View>
              <View style={{flex: 1, height: 65, paddingLeft: 3}}>

                <View style={{flex: 1, height: 65/2, justifyContent: 'center'}}>
                  <Text style={styles.username}>@{u.username}</Text>
                </View>
                <View style={{flex: 1, height: 65/2}}>
                <Text style={styles.name}>{u.name}</Text>
                </View>
              </View>


            </View>
          )
        })

        }
        </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: 'hidden',
  },
  subTitleContainer: {
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  username: {
    fontSize: 14,
    fontFamily: 'RedHatDisplay-Bold'
  },
  name: {
    fontSize: 12,
    fontFamily: 'RedHatDisplay-Regular',
    color: '#8C9BAA'
  },
  footerContainer: {
    width: '100%',
    height: 50,
    alignItems:'center'
  },
});
