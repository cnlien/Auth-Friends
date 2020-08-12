import React, { useState } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth'

// STYLING
import { Form, Input, Button } from 'reactstrap'

const AddFriendForm = () => {

    const [newFriend, setNewFriend] = useState(
        {
            name:'',
            age: '',
            email: ''
        }
    )

    const handleAddFriend= () => {
        axiosWithAuth()
            .post('friends', newFriend)
            .then(res => {
                res.data.push('friends')
                window.location.reload();
            })
    }

    const handleChange = (e) => {
        setNewFriend(
            {
                ...newFriend,
                [e.target.name]: e.target.value
            }
        )
    }

    return(
        <Form onSubmit={handleAddFriend}>
            <Input
                type="text"
                name="name"
                value={newFriend.name}
                className="addFriendFormInput"
                placeholder="name"
                onChange={handleChange}
            />
            <Input
                type="text"
                name="age"
                value={newFriend.age}
                className="addFriendFormInput"
                placeholder="age"
                onChange={handleChange}
            />
            <Input
                type="text"
                name="email"
                value={newFriend.email}
                className="addFriendFormInput"
                placeholder="email"
                onChange={handleChange}
            />
            <Button block onClick={handleAddFriend}>Add Friend</Button>
        </Form>
    )
}

export default AddFriendForm