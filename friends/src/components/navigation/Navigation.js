import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import {Navbar, Nav, NavItem} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navigation = () => {
  const [loggedIn, setLoggedIn] = useState('');

  useEffect(()=>{
    if(localStorage.getItem('token')) {
      setLoggedIn(true);
    }
  },[])

  const handleLogout = e => {
    localStorage.removeItem('token')
    setLoggedIn(false);
  }

  return (
    <Navbar>
        <Nav>
            <NavItem>
              {loggedIn ? <Link to='/friends'>Friends</Link> : <Link to="/">Friends</Link>}
            </NavItem>

            <NavItem>
                {!loggedIn ? <Link to="/login">Login</Link> : <Link to="/" onClick={handleLogout}>Logout</Link>}
            </NavItem>
        </Nav>
    </Navbar>
  )
}

export default Navigation;