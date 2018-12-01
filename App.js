import React, { Component } from 'react';
import {Router , Scene } from 'react-native-router-flux';

import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Regis from './src/pages/Regis';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="login" component={Login} title="Login" initial={true} />
          <Scene key="home" component={Home} title="Home"/>
          <Scene key="regis" component={Regis} title="Regis"/>
        </Scene>
      </Router>
    ); 
  }
}

