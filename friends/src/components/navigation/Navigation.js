import React from 'react';
import { Link } from 'react-router-dom';

import {Navbar, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
  return (
    <Navbar>
        <Nav>
            <NavItem>
                <Link to="/login">Login</Link>
            </NavItem>

            <NavItem>
                <Link to="/friends">Friends(Protected Page)</Link>
            </NavItem>
        </Nav>
    </Navbar>
  )
}

export default Navigation;