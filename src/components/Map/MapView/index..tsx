import React,{useEffect, useState, useRef, useCallback} from 'react'
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Pressable,
	Dimensions,
	SafeAreaView,
	Platform,
	PermissionsAndroid,
	ActivityIndicator,
} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import useColorScheme from "../../../hooks/useColorScheme"
import Geolocation from '@react-native-community/geolocation'
import MarkerContent, {MarkerContentYou} from '../MarkerView'
import {Image} from 'react-native-elements'
import Colors from '../../../constants/Colors'
import api from '../../../services/api'
import MapView, {Marker, Callout, Address} from 'react-native-maps'
import ProximUsersScreen from '../../../Screens/Search/proximUsers'
import calcCrow from '../../../helpers/distanceCalcule'
import MapStyle from './MapStyle'
import ImageDecoding from '../../../helpers/imageDecoding'
import { useDispatch, useSelector } from 'react-redux'
import AsyncStorage from '@react-native-async-storage/async-storage'
import MarkerCallout from '../MarkerCallout'
import {useNavigation} from '@react-navigation/native';

import * as mapsActions from '../../../store/actions/maps'

//MapboxGL.setAccessToken("pk.eyJ1IjoidGlhZ3VpbmhvIiwiYSI6ImNrcXpoYW93azE1dWYybm52bWM0NXlkcHgifQ.5sAWuRq6yW_pIHX394Mw9Q");

const default_picture = '../../../assets/images/user/userPicture.png'

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

export default function MapViewScreen() {
	const[locationPermission, setLoacationPermission] = useState(false)
	const [currentLatitude, setCurrentLatitude] = useState('')
	const [currentLongitude, setCurrentLongitude] = useState('')
	const [error, setError] = useState()
    const [refreshing, setRefreshing] = useState(false)
    const [ loading, setLoading ] = useState(false)
	const [ token, setToken ] = useState(0)
	const [ region, setRegion ] = useState([])

	const colorSheme = useColorScheme()
	const dispatch = useDispatch()
	const navigation = useNavigation()

	const maps = useSelector(state => state.maps.allUsersMaps)

	const loadUsersMaps = useCallback(async () => {
        setError(null);
        setRefreshing(true);
        try {
            await dispatch(mapsActions.getMaps())

			const userData = await AsyncStorage.getItem('userData');
			const transformedData = JSON.parse(userData)
			const { token } = transformedData
			setToken(token)

        } catch (err) {
            setError(err.message);
        }

		setTimeout(() => {
			loadUsersMaps()
		}, 60000)
        setRefreshing(false);
    }, [dispatch, setLoading, setError])

	const setUserPosition = async () => {


		try{
			console.log(token, currentLatitude, currentLongitude)
			await dispatch(mapsActions.setMapsLocation(token, currentLatitude, currentLongitude))
			
		}catch(err){
			setError(err.message);
		}

	}

	async function getLocation() {
		const userData = await AsyncStorage.getItem('userData');
		const transformedData = JSON.parse(userData)
		const { token } = transformedData		
		Geolocation.getCurrentPosition(
			(position) => {
				const latitude = JSON.stringify(position.coords.latitude)
				const longitude = JSON.stringify(position.coords.longitude)
				setCurrentLatitude(latitude)
				setCurrentLongitude(longitude)

				const aspect_ratio = WindowWidth / WindowHeight
				const latitude_delta = 0.0022
				const longitude_delta = latitude_delta * aspect_ratio

				const region_2= {
					latitude: position.coords.latitude,
					longitude: position.coords.longitude,
					latitudeDelta: latitude_delta,
					longitudeDelta: longitude_delta,
				}
				setRegion(region_2)
				dispatch(mapsActions.setMapsLocation(token, position.coords.latitude, position.coords.longitude))
			}
		)
		setTimeout(() => {
			getLocation()
		}, 10000)
	}
	
	async function callLocationPermission() {
		const granted = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
				title: "Permission to access location",
				message: "Circle need to access your location to work",
				buttonPositive: 'Yes',
				buttonNegative: 'No',
				buttonNeutral: 'Cancel',
			}
		)
		if(granted == PermissionsAndroid.RESULTS.GRANTED) {
			setLoacationPermission(true)
		} else {
			console.log('location permission not granted')
		}
	}

	useEffect(() => {
        setLoading(true)
		callLocationPermission()
		getLocation()
		setLoading(false)
        loadUsersMaps()
    }, [dispatch, loadUsersMaps])

	if(loading){
        return (
            <View style={{alignItems: 'center', justifyContent: 'center', width: WindowWidth, height: WindowHeight}}>
                <ActivityIndicator color={Colors[colorSheme].tint} size={'large'}/>
            </View>
        );
    }

    if(!loading && maps.length === 0){
        return(
            <View style={{alignItems: 'center', justifyContent: 'center', width: WindowWidth, height: WindowHeight}}>
                <Image source={require('../../../assets/icons/mood-sad.png')} style={{width: 50, height: 50, tintColor: '#FFF', marginBottom: 10}}/>
                <Text style={{color: '#FFF', textAlign: 'center', fontFamily: 'RedHatDisplay-Medium', fontSize: 12}}>Map not found,</Text>
                <Text style={{color: '#FFF', textAlign: 'center', fontFamily: 'RedHatDisplay-Medium', fontSize: 12}}>verify your connection to internet</Text>
                
            </View>
        );
    }
  return (
    <SafeAreaView style={styles.container}>
			<MapView
				style={styles.map}
				initialRegion={region}
				pitchEnabled={false}
				showsMyLocationButton={true}
				rotateEnabled={false}
				showsIndoors={true}
				zoomEnabled={true}
				mapType={"standard"}
				customMapStyle={MapStyle}
				key={'AIzaSyAcW0PEyWczMoXjWfCVPGTR4T0QohBtmHY'}
			>
				{maps.map((userMap) => {
					
					const imageBase64 = String(ImageDecoding(userMap.picture.data))
					if(userMap.id == token){
						return(
							<Marker
								key={userMap.id}
								coordinate={{latitude: Number(currentLatitude) , longitude: Number(currentLongitude)}}>
								<MarkerContentYou image={imageBase64}/>  						
							</Marker>							
						)
					}
					const distance = String(calcCrow(currentLatitude,currentLongitude,userMap.coordinates.latitude,userMap.coordinates.longitude,'M').toFixed(2))
					return(

						
						<Pressable key={userMap.id}>
							<Marker
								id={userMap.id}
								coordinate={{latitude: Number(userMap.coordinates.latitude) , longitude: Number(userMap.coordinates.longitude)}}>
								
									<MarkerContent image={imageBase64}/>

									<Callout tooltip onPress={() => navigation.navigate('ProfileScreen', {userId: userMap.id})} >
										<MarkerCallout user={userMap} distance={distance}/>
									</Callout>
							</Marker>							
						</Pressable>	

					)
				})}

				
			</MapView>	
			<View style={{position: 'absolute', zIndex: 3, bottom: -20, left: 0, width: WindowWidth, height: WindowWidth/2.2}}>
			</View>

      	<LinearGradient 
        	style={{
            	width: WindowWidth,
            	height: 140,
            	position: 'absolute',
            	top: 0,
            	zIndex: 0,
            }}
        	colors={['#00000099', '#00000000']}
      	/>
		<LinearGradient 
        	style={{
            	width: WindowWidth,
            	height: 140,
            	position: 'absolute',
            	bottom: 0,
            	zIndex: 0,
            }}
        	colors={['#00000000', '#00000005']}
      	/>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	map: {
		width: WindowWidth,
		height: '100%',
	},
	safeArea: {
		flex: 1,
	},
	zoomContainer: {
		position: 'absolute',
		right: 10,
		bottom: 125,
		zIndex: 2,
		backgroundColor: '#00000000'
	},
	zoomButtom: {
		width: 40,
		height: 40,
		backgroundColor: '#FFF',
		borderRadius: 50,
		marginBottom: 5,
		alignItems: 'center',
		justifyContent: 'center',
	}
});