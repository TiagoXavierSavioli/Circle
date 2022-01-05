import { GET_USER_BY_ID, UPDATE_USER_PICTURE, FOLLOW, UNFOLLOW } from "../actions/types";

const initialState = {
    user: [],
};

export default (state=initialState, action) => {
    switch(action.type){
        case GET_USER_BY_ID:
            return{
                ...state,
                user: action.users
            }
        case UPDATE_USER_PICTURE:
            return{
                ...state,
                picture: action.pictures
            }
        case FOLLOW:
            return{
                ...state,
                follow: action.follows
            }    
        case UNFOLLOW:
            return{
                ...state,
                unfollow: action.unfollows
            }   
        default:
            return state;
    }
}