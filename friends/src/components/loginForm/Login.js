import React from 'react';
import axios from 'axios';

import { Button, Form, Input, Card } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginStyles.scss';


class Login extends React.Component {

  state = {
    credentials: {
      username: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = e => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/login', this.state.credentials)
      .then (res => {
        console.log('handleLogin: ', res);
        localStorage.setItem('token', res.data.payload);
        this.props.history.push('/friends');
      })
      .catch(err => {
        console.log('handleLogin Error: ', err.message)
      });
  }

  render(){
    return(
      <Card className="login-card">
          <h1 className="login-header">Login Page</h1>
          <Form onSubmit={this.handleLogin}>
              <Input
                type="text"
                name="username"
                value={this.state.credentials.username}
                onChange={this.handleChange}
                placeholder="Username"
                className="login-input"
              />
              <Input
                type="password"
                name="password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
                placeholder="Password"
                className="login-input"
              />

              <Button
                  onSubmit={this.handleLogin}
                  className="login-button"
              >
                  Login
              </Button>
          </Form>
      </Card>
    ); 
  }
}

export default Login;