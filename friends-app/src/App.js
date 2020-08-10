import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'

// STYLES
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import LoginForm from './components/LoginForm';
import Navigation from './components/Navigation'
import { Container } from 'reactstrap'
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Container>
          <Switch>
            <PrivateRoute exact path="/dashboard" component = { Dashboard } />
            <Route component = { LoginForm } />
            <Route path="/" component={ LoginForm } />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
