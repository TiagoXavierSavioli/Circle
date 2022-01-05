import React, {useState, useRef, useCallback, useEffect} from 'react';
import { StyleSheet, FlatList, ScrollView, Dimensions, Pressable, View} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Text } from '../../components/Themed';
import { Image } from 'react-native-elements';
import FastImage from 'react-native-fast-image';
import usersWithMoments from '../../components/data/usersWithMoments'
import { MomentsType, UserType} from '../../types'
import ImageDecoding from '../../helpers/imageDecoding'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import LinearGradient from 'react-native-linear-gradient'
import * as momentsActions from '../../store/actions/moments'
import { timeDifference } from '../../helpers/timeDiference'

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height
const IconHeartFill= require('../../assets/icons/heart-fill.png')
const IconHeartOutline= require('../../assets/icons/heart.png')
const IconTime= require('../../assets/icons/clock.png')

export type ProfileMomentsProps = {
  moment?: undefined
}

export default function PostPreview({moment = []} : ProfileMomentsProps) {

  const dispatch = useDispatch()

  const [heart, setHeart] = useState(0)
  const [likesNumber, setLikesNumber] = useState(0)
  const [initialLiked, setIInitialLiked] = useState(false)
  const [description, setDescription] = useState('')

  async function heartPress() {     
    const userData = await AsyncStorage.getItem('userData')
    const transformedData = JSON.parse(userData)
    const { token } = transformedData
          
    if(heart == 1 ){
      if(initialLiked == true){
        setLikesNumber(-1)
      }else{
        setLikesNumber(0)
      }
        setHeart(0)
        dislike(token, moment.id)           
    }
    if(heart == 0){
      setHeart(1)
      if(initialLiked == true){
        setLikesNumber(0)
      }else{
        setLikesNumber(1)
      } 
        like(token, moment.id)      
    }  
  }

  const like = useCallback( async (user_id, moment_id) => {
    dispatch(momentsActions.likeMoment(user_id, moment_id))
  }, [dispatch])

  const dislike = useCallback( async (user_id, moment_id) => {
     dispatch(momentsActions.dislikeMoment(user_id, moment_id))
  }, [dispatch])

  useEffect(() => {
    const compareId = async () => {
      const userData = await AsyncStorage.getItem('userData');
      const transformedData = JSON.parse(userData);
      const { token } = transformedData
      await moment.likes.map(element =>{
        if(element.user_id == [token]){
          setIInitialLiked(true)
          setHeart(1)
        }else{
          setIInitialLiked(false)
          setHeart(0)
        }
                        
      })
    }
    compareId()
  }, [setHeart])

  useEffect(() => {
    if(moment.description.length > 110){
      const d = moment.description.substr(0, 110) + '...'
      setDescription(d)
    }else{
      setDescription(moment.description)
    }    
  })

  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>

        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>

          <Pressable
            style={[styles.likeContainer, { backgroundColor: heart == 1? '#FF004D': '#FFFFFF'}]}
            onPress={() => heartPress()}
          >
            {heart == 1?
              <>
                <View style={[styles.left, {marginRight: 10}]}>
                  <Image source={IconHeartFill} style={[styles.iconLike, {tintColor: '#FFFFFF'}]} resizeMode='contain'/>
                </View>
                <Text style={[styles.likesCount, {color: '#FFFFFF'}]}>{moment.likes.length + likesNumber}</Text>
              </>     
            :                       
              <>
                <View style={[styles.left, {marginRight: 10}]}>
                  <Image source={IconHeartOutline} style={styles.icon} resizeMode='contain'/>
                </View>
                <Text style={[styles.likesCount]}> {moment.likes.length + likesNumber}</Text>
              </>
            }
          </Pressable>
          <View style={styles.timeContainer}>
            <Text style={styles.description}>{timeDifference(new Date(), new Date(moment.createdAt))}</Text>
          </View>


        <FastImage
          source={{uri: String(ImageDecoding(moment.picture)), priority: 'high'}}
          style={{width: WindowWidth/1.8, height: WindowWidth/1.2, borderRadius: 20}}
        />    

        <LinearGradient 
          style={styles.gradient}
          colors={['#00000000', '#00000070']}
        />

      </View>
    </View>    

  );
}

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
  postContainer: {
    marginRight: 10
  },
  descriptionContainer: {
    position: 'absolute',
    zIndex: 2,
    bottom: 50,
    left: 10,
    right: 10
  },
  description: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF'
  },
  left: {
    alignItems: "center",
  },
  likeContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    zIndex: 2,
    marginRight: 20,
    bottom: 10,
    left: 10,
    backgroundColor: '#FFF',
    height: 32,
    paddingHorizontal: 15,
    borderRadius: 30
  },
  iconLike: {
    width: 20,
    height: 20,
    tintColor: '#FF004D',
  },
  likesCount: {
    fontSize: 14,
    color: '#000000',
    fontFamily: 'RedHatDisplay-Bold'
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
  gradient: {
    width: WindowWidth/1.8,
    height: WindowWidth/2,
    position: 'absolute',
    bottom: 0,
    zIndex: 1,
    borderRadius: 20
  },
  timeContainer: {
    position: 'absolute',
    bottom: 16,
    right: 20,
    zIndex: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  iconTime: {
    marginLeft: 3,
    width: 15,
    height: 15,
    tintColor: '#FFF',
  },
});
