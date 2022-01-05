import { GET_MOMENTS, GET_USERS_MAPS, SET_USERS_MAPS} from './types'
import api from '../../services/api'

export const getMaps = () => {
    return async (dispatch, getState) => {
        const response = await api.get(`/coordinates/find`)

        const resData = await response.data

        if(resData.error){
            throw new Error(resData.error)
        }
        console.log(resData)
        dispatch({
            type: GET_USERS_MAPS,
            maps: resData
        })
    }
};

export const setMapsLocation = (user_id, latitude, longitude) => {
    return async (dispatch, getState) => {
        const response = await api.post(`/coordinates/${user_id}/store`, {
            latitude: latitude,
            longitude: longitude
        })

        const resData = await response.data

        console.log(resData)
        
        if(resData.error){
            throw new Error(resData.error)
        }

        dispatch({
            type: SET_USERS_MAPS,
            setMaps: resData
        })
    }
};