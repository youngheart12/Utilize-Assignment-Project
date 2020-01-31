import React,{Component} from 'react';
import {Switch,Route} from 'react-router-dom';
import Home from './component/Home/home';
import Order from './component/Order/order.js';

class App extends Component{
  render()
  {
    return (
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/order" component={Order}></Route>
      </Switch>
      );
  }
}
export default App;
