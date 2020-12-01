import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'


import Home from './components/home/Home'
import About from './components/about/About'
import NavBar from './components/navBar/NavBar'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div className="app">

    <NavBar />
      {/* <Route exact path='/about' component={Home}/> */}




        <Route component={Home} />

  </div>

);

export default App;
