import React, { Component } from 'react';
import {BrowserRouter  ,Route}        from 'react-router-dom';
import Header  from './component/header/js/header';
import Home from './component/Home/home';
import Player from './component/player/player';




class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div>
    <Route  component={Header}/>
    <Route   path='/' exact component={Home}/>
    
      <Route path='/player/:vid' component={Player}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
