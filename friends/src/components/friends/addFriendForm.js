import React, { useState } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth';

import { Form, Input, Button } from 'reactstrap';

const AddFriendForm = (props) => {
    
    const [newFriend, setNewFriend] = useState({name:'', age:'', email:''});

    const addFriend = () => {
        axiosWithAuth()
            .post('/friends', newFriend)
            .then(request => {
                console.log('Added Friend ', request.data)
                window.location.reload();
            })
            .catch(err => {
                console.log('addFriend Error on addFriendForm.js: ', err);
            })
    }

    const handleChange = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});
        console.log('handleChange newFriend: ', newFriend);
    }

    return (
        <div className="add-friend">
            <h2>Add a Friend</h2>
            <Form onSubmit={addFriend}>
                <Input
                    type="text"
                    name="name"
                    className="add-friend-input"
                    value={newFriend.name}
                    placeholder="Name"
                    onChange={handleChange}
                />

                <Input
                    type="number"
                    name="age"
                    className="add-friend-input"
                    value={newFriend.age}
                    placeholder="Age"
                    onChange={handleChange}
                />

                <Input
                    type="email"
                    name="email"
                    className="add-friend-input"
                    value={newFriend.email}
                    placeholder="Email Address"
                    onChange={handleChange}
                />

                <Button onClick={addFriend}>Add Friend</Button>
            </Form>
        </div>
    )
}

export default AddFriendForm;