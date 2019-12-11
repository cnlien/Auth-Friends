import React from 'react'
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import FriendCard from './FriendsCard';
import AddFriendForm from './addFriendForm';

import { Container } from 'reactstrap';
import './friends.scss';


class Friends extends React.Component {

  state = {
    friends: [''],
    isLoading: true,
    isLoggedIn: false,
  };

  componentDidMount() {
    this.getData();
    console.log('Component State on Mount: ', this.state)
  }

  getData = () => {
    axiosWithAuth()
      .get(`/friends`)
      .then(res => {
        console.log('getData: ', res);
        this.setState({
          friends: res.data,
          isLoading: false
        });
        console.log('Component State After API Request: ', this.state)
      })
      .catch(err => console.log('getData Error: ', err))
  }

  render() {
    console.log('this.state from Friends.js: ', this.state);

    return(
      <Container>
        <AddFriendForm />

        <h1 className="friend-list-header">Friend List</h1>
        {this.state.isLoading &&
            <div>
                <h3>Loading...</h3>
                <Loader type="Puff" color="#204963" height="60" width="60" />
            </div>
        }
        
        {!this.state.isLoading && 
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
        }
      </Container>
    );
  }

}

export default Friends;