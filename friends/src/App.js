import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap'

import Navigation from './components/navigation/Navigation';
import Friends from './components/friends/Friends';
import Login from './components/loginForm/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="App">
          <Navigation />
          <Switch>
            <PrivateRoute exact path="/friends" component={Friends} />
            <Route path="login" component={Login} />
            <Route component={Login} />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
