import { GET_MOMENTS, LIKE, DISLIKE, SET_VIEWED, SET_MOMENT } from './types'
import api from '../../services/api'

export const getMoments = () => {
    return async (dispatch, getState) => {
        const response = await api.get(`/moments/find`)

        const resData = await response.data

        if(resData.error){
            throw new Error(resData.error)
        }

        dispatch({
            type: GET_MOMENTS,
            moments: resData
        })

        
    }
};

export const likeMoment = (user_id, moment_id) => {
    return async (dispatch, getState ) => {

        dispatch({
            type: LIKE,
            userId: user_id,
            postId: moment_id
        });        
        await api.post(`/moments/like/${user_id}/${moment_id}`, 
        {
            type: 'MOMENT',
        })

        const resData = await response.data

        if(resData.error){
            throw new Error(resData.error)
        }
    }
};

export const dislikeMoment = (user_id, moment_id) => {
    return async (dispatch, getState ) => {

        dispatch({
            type: DISLIKE,
            userId: user_id,
            postId: moment_id
        }); 
        await api.delete(`/moments/dislike/${user_id}/${moment_id}`)

        const resData = await response.data

        if(resData.error){
            throw new Error(resData.error)
        }

        dispatch({
            type: DISLIKE,
            dislike: resData
        })

        
    }
};

export const viewedMoment = (user_id, moment_id) => {
    return async (dispatch, getState ) => {

        dispatch({
            type: SET_VIEWED,
            userId: user_id,
            postId: moment_id
        });        
        await api.post(`/moments/view/${user_id}/${moment_id}`, 
        {
            type: 'MOMENT',
        })

        const resData = await response.data

        if(resData.error){
            throw new Error(resData.error)
        }
    }
};

export const createMoment = (user_id, picture, description) => {
    return async (dispatch, getState) => {

        try{
            const response = await api.post(`/moments/${user_id}`, {
                picture: picture,
                picture_low: '',
                description: description,
            })

            const resData = await response.data
            if(resData.error){
                throw new Error(resData.error)
            }         


            dispatch({
                type: SET_MOMENT,
                setMoment: resData
            })           
        }catch(err){
            console.log(err.message)
        }


    }
};

const saveDataToStorage = (moments) => {
    AsyncStorage.setItem('momentsData', moments);
}