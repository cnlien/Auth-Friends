import React from 'react'
import { axiosWithAuth } from '../../axiosWithAuth';

import FriendCard from './FriendsCard';

import { Container } from 'reactstrap';
import './friends.scss';

class Friends extends React.Component {

  state = {
    friends: ['']
  };

  componentDidMount() {
    this.getData();
    console.log('Component State on Mount: ', this.state)
  }

  getData = () => {
    axiosWithAuth()
      .get('/friends')
      .then(res => {
        console.log('getData: ', res);
        this.setState({
          friends: res.data
        });
        console.log('Component State After API Request: ', this.state)
      })
      .catch(err => console.log('getData Error: ', err))
  }

  render() {
    console.log('this.state from Friends.js: ', this.state);
    console.log(this.state.friends[0])
    return(
      <Container>
        <h1 className="friend-list-header">Friend List</h1>
        <div className="friend-list">
          {this.state.friends.map (friend => (
            <FriendCard
              key={friend.id}
              name={friend.name}
              age={friend.age}
              email={friend.email}
            />
          ))}

        </div>
      </Container>
    );
  }

}

export default Friends;