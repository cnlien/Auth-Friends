import { axiosWithAuth } from '../utils/axiosWithAuth'

// ACTION CREATORS
export const FETCH_FRIENDS = "FETCH_FRIENDS"
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS"
export const FETCH_FRIENDS_FAILED = "FETCH_FRIENDS_FAILED"

export const fetchFriends = () => dispatch => {
    dispatch({ type: FETCH_FRIENDS })

    axiosWithAuth()
        .get(`friends`)
        .then( res => {
            console.log(res.data)
            dispatch({
                type: FETCH_FRIENDS_SUCCESS,
                payload: res.data
            })
        })
        .catch( err => {
            dispatch({
                type: FETCH_FRIENDS_FAILED,
                payload: err.message
            })
        })
}