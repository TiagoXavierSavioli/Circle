import React, { useEffect, useCallback } from 'react';
import { View, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch } from 'react-redux';
import useColorScheme from '../../hooks/useColorScheme';
import Colors from '../../constants/Colors';

import * as authActions from '../../store/actions/auth';

const WindowWidth = Dimensions.get('window').width
const WindowHeight = Dimensions.get('window').height

const StartupScreen = () => {

    const dispatch = useDispatch();
    const colorScheme = useColorScheme()

    const tryLogin = async () => {
        const userData = await AsyncStorage.getItem('userData');
        if (!userData) {
            // props.navigation.navigate('Auth');
            dispatch(authActions.setDidTryAutoLogin());
            return;
        }
        const transformedData = JSON.parse(userData);
        const { token, user } = transformedData;

        console.log(user)

        // props.navigation.navigate('Shop');
        dispatch(authActions.authenticate(user, token));
    };
     

    useEffect(() => {
        tryLogin()
    }, [dispatch])


    return null
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        width: WindowWidth,
        height: WindowHeight,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000'
    }
});

export default StartupScreen;