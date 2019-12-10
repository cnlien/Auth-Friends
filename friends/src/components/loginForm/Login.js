import React from 'react';

import {NavItem, Button, Form, Input, Card, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './loginStyles.scss';


const Navigation = () => {
    return (
        <Card className="login-card">
            <h1 className="login-header">Login Page</h1>
            <Form>
                <Input
                    type="text"
                    name="username"
                    placeholder="Username"
                    className="login-input"
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="login-input"
                />

                <Button
                    className="login-button"
                >
                    Login
                </Button>
            </Form>
        </Card>
    )
}

export default Navigation;