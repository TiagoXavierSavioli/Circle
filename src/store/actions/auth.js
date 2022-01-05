import { AUTHENTICATE, LOGOUT, SET_DID_TRY_AUTO_LOGIN } from './types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import api from '../../services/api'

export const setDidTryAutoLogin = () => {
    return{
        type: SET_DID_TRY_AUTO_LOGIN
    };
};

export const authenticate = (user, token) => {
    return dispatch => {
        dispatch({
            type: AUTHENTICATE,
            user,
            token
        });
    }
};

export const signin = (username, password) => {
    return async dispatch => {
        const response = await api.post('/account/login',
        {
            username: username,
            password: password
        })

        const resData = await response.data;

        console.log(resData)

        dispatch(authenticate(resData, resData));

        saveDataToStorage(resData);
    };
};

export const logout = () => {
    AsyncStorage.removeItem('userData');
    return {
        type: LOGOUT
    };
}

const saveDataToStorage = (user) => {
    AsyncStorage.setItem('userData', JSON.stringify({
        token: user.id,
        user: user
    }));
    console.log(`${user.id} from Async storage save data`)
}
