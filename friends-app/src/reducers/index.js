import {
    FETCH_FRIENDS,
    FETCH_FRIENDS_SUCCESS,
    FETCH_FRIENDS_FAILED
} from '../actions'

const initialState = {
    friends: [],
    isFetching: true,
    error: false,
    errorMessage: ""
}

export const friendsReducer = (state=initialState, action) => {
    switch(action.type) {

        case FETCH_FRIENDS:
            return {
                ...state,
                isFetching: true
            }
        
        case FETCH_FRIENDS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                friends: action.payload
            }

        case FETCH_FRIENDS_FAILED:
            return {
                ...state,
                isFetching: false,
                error: true,
                errorMessage: action.payload
            }

        default:
            return state
    }
}
