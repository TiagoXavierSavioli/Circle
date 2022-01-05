import { GET_USERS_MAPS, SET_USERS_MAPS } from "../actions/types";

const initialState = {
    allUsersMaps: [],
};

export default (state=initialState, action) => {
    switch(action.type){
        case GET_USERS_MAPS:
            return{
                ...state,
                allUsersMaps: action.maps
            }
        default:
            return state

        case SET_USERS_MAPS:
            return{
                ...state,
                setUsersMaps: action.setMaps
            }
    
    }
}