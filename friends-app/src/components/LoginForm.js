import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// STYLES
import '../styles/loginForm.scss'

// COMPONENTS
import { Card, Form, Input, Button } from 'reactstrap';


class LoginForm extends React.Component {

    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
    

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        })
    }

    handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post('http://localhost:5000/api/login', this.state.credentials)
            .then((res) => {
                localStorage.setItem('token', res.data.payload);
                this.props.history.push('/dashboard');
            })
            .catch((err) => {
                console.error(err.message);
            })
    }

    render() {
        return(
            <div className='loginForm'>
                <Card body className="loginForm--card">
                    <h1 className="loginForm--heading">Sign In</h1>
                    <Form className="loginForm--form" onSubmit={this.handleLogin}>
                        <Input className="loginForm--input" placeholder="username" type="text" name="username" value={this.state.credentials.username} onChange={this.handleChange}/>
                        <Input className="loginForm--input" placeholder="i<3Lambd4" type="password" name="password" value={this.state.credentials.password} onChange={this.handleChange}/>
                        <Button block className="loginForm--button" onSubmit={this.handleLogin}>Sign In</Button>
                    </Form>
                </Card>
            </div>
        )
    }

}

export default LoginForm