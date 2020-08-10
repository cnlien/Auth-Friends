import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  // NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Router>
      <Navbar color="light" light expand="sm">
        <NavbarBrand href="/">Auth Friends</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link to="/dashboard/">Dashboard</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Router>
    </div>
  );
}

export default Example;