import React from 'react'
// import { axiosWithAuth } from '../utils/axiosWithAuth'

import { connect } from 'react-redux'
import { fetchFriends } from '../actions'

import FriendCard from './FriendCard'


const Dashboard= (props) => {

    if(props.isFetching) {
        return(
            <div>
                <h1>Dashboard Private Route</h1>
                {props.fetchFriends()}
            </div>
        ) 
    } else if (props.error) {
        return(
            <h1>{props.errorMessage}</h1>
        )
    } else {
        return(
            <div>
                {props.friends.map( friend => {
                    return(
                        <FriendCard
                            key={friend.id}
                            name={friend.name}
                            age={friend.age}
                            email={friend.email}
                            id={friend.id}
                        />
                    )
                })}
            </div>
        )

    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.isFetching,
        friends: state.friends,
        error: state.error,
        errorMessage: state.errorMessage
    }
}

export default connect(
    mapStateToProps,
    { fetchFriends }
)(Dashboard)