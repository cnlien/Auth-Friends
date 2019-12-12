import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { Card, CardHeader, CardText, CardBody, Button  } from 'reactstrap';

const FriendCard = (props) => {

  console.log('props from FriendsCard.js: ',props)

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then(res => {
        console.log('id from handleDelete: ',id)
        console.log('handleDelete on FriendsCard.js: ', res);
        // window.location.reload();
      })
      .catch(err => console.log('handleDeleteError: ', err))
  }

   return(
    <Card className='friend-card'>
      <CardHeader>{props.name}, {props.age}</CardHeader>
      <CardBody>
        <CardText>Email: {props.email}</CardText>
        <Button className="friend-card-button">Edit</Button>
        <Button
          onClick={()=>handleDelete(props.id)}
        >Delete</Button>
      </CardBody>
    </Card>
  )
}

export default FriendCard;