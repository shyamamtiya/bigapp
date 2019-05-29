import React from 'react';
import Users from './Container/Users'
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './Components/Login/Login';
import PrivateRoute from './Route/PrivateRoute';
import TransferComponent from './Components/Transfer/Transfer';

function App() {
  return (
    <div className="App">
    <Router>
    <Switch>
      <Route exact path="/" component={Login}/>
      <PrivateRoute path='/users' component={Users} />
      <PrivateRoute path='/transfer' component={TransferComponent} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
