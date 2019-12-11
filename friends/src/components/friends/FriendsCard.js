import React from 'react';
import { Link } from 'react-router-dom';

import { Card, CardHeader, CardText, CardBody, Button  } from 'reactstrap'

const FriendCard = (props) => {
  
  return(
    <Card className='friend-card'>
      <CardHeader>{props.name}, {props.age}</CardHeader>
      <CardBody>
        <CardText>Email: {props.email}</CardText>
      </CardBody>
    </Card>
  )
}

export default FriendCard;