import React, {useState} from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { Card, CardHeader, CardText, CardBody, Button  } from 'reactstrap'

const FriendCard = (props) => {

  // const [activeFriend, setActiveFriend] = useState();
  
  // const selectFriend = (friend) => {
  //   setActiveFriend(friend)
  // }

  // const deleteFriend = () => {
  //   axiosWithAuth()
  //     .delete(`/friends/${friend.id}`)
  //     .then(res => {
  //       console.log('Deleted Friend: ', res)
  //       this.setState({
  //         friends: res.data,
  //       })
  //     })
  //     .catch(err => {
  //       console.log('deleteFriend Error: ', err)
  //     })
  // }

  // const editFriend = (id) => {
  //   axiosWithAuth()
  //     .put(`/friends/${id}`)
  //     .then(res => {
  //         console.log('Editing Friend: ', selectFriend)
  //     })
  //     .catch(err => {
  //         console.log('Edit Friend Error: ', err)
  //     })
  // }

  return(
    <Card className='friend-card'>
      <CardHeader>{props.name}, {props.age}</CardHeader>
      <CardBody>
        <CardText>Email: {props.email}</CardText>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </CardBody>
    </Card>
  )
}

export default FriendCard;