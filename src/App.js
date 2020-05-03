import React, { Component } from 'react'
import {Switch,Route} from 'react-router-dom';
import Homepage from './component/Homepage/homepage';
import Signup from './container/Singup/signup';
import Login from './container/Login/login';

import Dashboard from './container/Dashboard/dashboard';
export class App extends Component {
  render() {
    return (
     <Switch>
     <Route exact path="/" component={Homepage}></Route>
     <Route path="/login" component={Login}></Route>
     <Route path="/signup" component={Signup}></Route>
     <Route path="/dashboard" component={Dashboard}></Route>
     </Switch>
    )
  }
}

export default App
