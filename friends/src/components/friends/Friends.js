import React from 'react'
import Loader from 'react-loader-spinner';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

// import FriendCard from './FriendsCard';
import AddFriendForm from './addFriendForm';

import { Container, Card, CardHeader, CardText, CardBody, Button } from 'reactstrap';
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
      .get(`friends`)
      .then(res => {
        console.log('getData from Friends.js: ', res);
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

    const handleDelete = (id) => {
      axiosWithAuth()
        .delete(`friends/${id}`)
        .then(res=>{
          console.log('handleDelete: ', res)
          console.log(`DELETED FRIEND ${id} SUCCESSFULLY`)
        })
    }

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

            <Card className='friend-card' key={friend.id}>
              <CardHeader>{friend.name}, <em>{friend.age}</em></CardHeader>
              <CardBody>
                <CardText>Email: {friend.email}</CardText>
                <Button className="friend-card-button">Edit</Button>
                <Button
                  onClick={()=>handleDelete(friend.id)}
                >
                  Delete
                </Button>
              </CardBody>
            </Card>

            // <FriendCard
            //   key={friend.id}
            //   name={friend.name}
            //   age={friend.age}
            //   email={friend.email}
            // />
          ))}
        </div>  
        }
      </Container>
    );
  }

}

export default Friends;