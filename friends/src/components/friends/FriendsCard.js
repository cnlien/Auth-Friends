import React from 'react';

import { Card, CardHeader, CardText, CardBody, Button  } from 'reactstrap';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const FriendCard = (props) => {

  const handleDelete = (id) => {
    axiosWithAuth()
      .delete(`/friends/${id}`)
      .then((res) => {
        console.log('handleDelete: ', res);
        window.location.reload();
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