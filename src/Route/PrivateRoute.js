import React from 'react';
import fakeAuth from '../Components/Login/Authanticate';
import {
    Route,
    Redirect,
  } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
      fakeAuth.isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
            pathname: '/',
            state: { from: props.location }
          }} />
    )} />
  )

  export default PrivateRoute;