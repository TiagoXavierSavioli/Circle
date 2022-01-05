import React,{ useState, useCallback, useEffect, useRef } from "react";
import { View, FlatList, Animated, Dimensions, ActivityIndicator, TouchableOpacity, Text} from "react-native";
import UserMomentsPreview from "../ListCard"
import api from '../../../services/api'
import Colors from '../../../constants/Colors';
import useColorScheme from "../../../hooks/useColorScheme";
import {Image} from 'react-native-elements'
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as momentsActions from '../../../store/actions/moments';
import * as usersActions from '../../../store/actions/users';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const UserMomentsList = () => {
    
    const [ showErrorMsg, setShowErrorMsg ] = useState(false)
    const [error, setError] = useState();

    const [refreshing, setRefreshing] = useState(false);
    const [ loading, setLoading ] = useState(true)

    const[user, setUser] = useState([])

    const colorScheme = useColorScheme()
    const dispatch = useDispatch();
    const refMoments = useRef(null);
    

    const moments = useSelector(state => state.moments.allMoments)

    

    const LoadMoments = useCallback(async () => {
        setError(null)
        setRefreshing(true)
        
        try {
            await dispatch(momentsActions.getMoments())


        } catch (err) {
            setError(err.message)
        }
        setRefreshing(false)
    }, [dispatch, setLoading, setError])

    useEffect(() => {
        setLoading(true);
        LoadMoments()
        .then(() => {
            setLoading(false);
        });
    }, [dispatch, LoadMoments])

    if(loading || refreshing){
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', width: WindowWidth, height: WindowHeight}}>
                <ActivityIndicator color={Colors[colorScheme].tint} size={'large'}/>
            </View>
        );
    }

    if(!loading && moments.length === 0){
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', width: WindowWidth, height: WindowHeight}}>
                <Image source={require('../../../assets/icons/mood-sad.png')} style={{width: 50, height: 50, tintColor: '#FFF', marginBottom: 10}}/>
                <Text style={{color: '#FFF', textAlign: 'center', fontFamily: 'RedHatDisplay-Medium', fontSize: 12}}>Moments not found,</Text>
                <Text style={{color: '#FFF', textAlign: 'center', fontFamily: 'RedHatDisplay-Medium', fontSize: 12}}>verify your connection to internet</Text>
                <TouchableOpacity style={{marginTop: 30}} onPress={() => LoadMoments()}>
                    <Text style={{color: Colors[colorScheme].tint, textAlign: 'center', fontFamily: 'RedHatDisplay-Medium', fontSize: 16}}>Reload</Text>
                </TouchableOpacity>
                
            </View>
        );
    }

    return(
        <View>
            <Animated.FlatList
                ref={refMoments}
                data={moments}
                onRefresh={LoadMoments}
                refreshing={refreshing}
                initialNumToRender={2}
                removeClippedSubviews={true}
                onScroll={(event) => {console.log(event.nativeEvent.contentOffset.y)}}
                renderItem={({item}) => {
                    
                    return(
                        <UserMomentsPreview user={item} moment={item.moments}/>
                    )
                }}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}       
            />                
        </View>    
    )
}

export default UserMomentsList