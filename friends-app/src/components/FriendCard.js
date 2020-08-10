import React from 'react'
import { Card } from 'reactstrap'

const FriendCard = (props) => {

    return(
        <Card id={props.id}>
            <h1>{props.name}</h1>
            <h2>{props.email}</h2>
            <h2>{props.age}</h2>
        </Card>
    )
}

export default FriendCard