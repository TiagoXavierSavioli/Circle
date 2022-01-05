import { GET_USER_BY_ID, UPDATE_USER_PICTURE, FOLLOW, UNFOLLOW } from './types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../services/api'
import RNFetchBlob from 'react-native-fetch-blob'
import base64 from 'react-native-base64'

export const getUserById = (user_id) => {
    return async dispatch => {
        const response = await api.get(`/find/${user_id}`)

        const resData = await response.data

        dispatch({
            type: GET_USER_BY_ID,
            users: resData
        });
    };
};

export const putUserPicture = (user_id, picture) => {
    return async dispatch => {

        const file = {picture: picture}
        const response = await api.put(`/user/picture/update/${user_id}`, {picture: picture})
        const resData = await response.request

        dispatch({
            type: UPDATE_USER_PICTURE,
            pictures: resData
        });
    };
};

export const follow = ( follow_id, fan_id ) => {
    return async dispatch => {

        const response = await api.post(`/user/follow`, {
            follow_id: follow_id,
            fan_id: fan_id  
        })
        const resData = await response.data

        dispatch({
            type: FOLLOW,
            follows: resData
        });
    };
};

export const unfollow = ( follow_id, fan_id ) => {
    return async dispatch => {
        console.log('unfollow press')

        const response = await api.delete(`/user/unfollow/${follow_id}/${fan_id}`)
        const resData = await response.data

        dispatch({
            type: UNFOLLOW,
            unfollows: resData
        });
    };
};