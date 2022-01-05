import { GET_MOMENTS, LIKE, DISLIKE, SET_VIEWED, SET_REPORT, SET_MOMENT } from "../actions/types"

const initialState = {
    allMoments: [],
};

export default (state=initialState, action) => {
    switch(action.type){
        case GET_MOMENTS:
            return{
                ...state,
                allMoments: action.moments
            }
            
        default:
            return state;

        case LIKE:
            return{
                ...state,
                like: action.like
            }

        case DISLIKE:
            return{
                ...state,
                dislike: action.dislike
            }

        case SET_REPORT:
            return{
                ...state,
                viewed: action.viewed
            }    
        case SET_MOMENT:
            return{
                ...state,
                setMoment: action.setMoments
            }
        
    }
}