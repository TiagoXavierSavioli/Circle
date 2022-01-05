import React ,{useState, useEffect} from 'react'
import { useRoute } from '@react-navigation/native';
import { StyleSheet, TextInput, FlatList, ActivityIndicator, View, Text, Dimensions, ScrollView} from 'react-native';
import { ListItem, LinearProgress } from 'react-native-elements';
import { ProfilePicture } from '../../components/ProfilePicture';
import users from '../../components/data/search/Users'
import FastImage from 'react-native-fast-image';

export default function NewsScreen() {
  const WindowWidth = Dimensions.get('window').width
  const route = useRoute()
  const[searchResults, setSearchResults] = useState([])

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

    }apiQuerie()


  return (
    <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.subTitleContainer}>
              <Text style={styles.subTitle}>News of today:</Text>
        </View>
        {searchResults.map((item) => {
            const {
                title,
                abstract,
                id,
                byline,
                media,
                source,
                published_date,
                updated
            } = item

            const image = media.map((item) => item["media-metadata"][2].url)
            const image_Width = media.map((item) => item["media-metadata"][2].width)
            const image_Height = media.map((item) => item["media-metadata"][2].height)

            return(
                <View style={{alignItems: 'center', marginBottom: 0, marginTop: 20}}>

                    <View style={{backgroundColor: '#E1EF2E00'}}>
                        <FastImage source={{uri: `${image}`, priority: 'high'}} style={{width: WindowWidth, height: 400, borderTopLeftRadius: 30, borderTopRightRadius: 30}} resizeMode={'cover'}/>
                    </View>

                    <View style={{paddingHorizontal: 20, backgroundColor: '#FFF', width: WindowWidth, borderTopLeftRadius: 30, borderTopRightRadius: 30, marginTop: -25}}>
                        <View style={{backgroundColor: '#E1F2B300', paddingTop: 20}}>
                            <Text style={{fontFamily: 'RedHatDisplay-Medium', fontSize: 18}}>{title}</Text>
                        </View>
                        <View style={{backgroundColor: '#F2C3B200', paddingTop: 20}}>
                            <Text style={{fontFamily: 'RedHatDisplay-Regular', fontSize: 14, color: '#00000090'}}>{abstract}</Text>
                        </View>    
                        <View style={{backgroundColor: '#F2C3B200', paddingTop: 50}}>
                            <Text style={{fontFamily: 'RedHatDisplay-Italic', fontSize: 12, color: '#00000090'}}>{byline}, {source}</Text>
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
    borderRadius: 30,
    overflow: 'hidden',
  },
  subTitleContainer: {
    width: '100%',
    paddingTop: 20,
    paddingLeft: 20,
    justifyContent: 'center',
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
