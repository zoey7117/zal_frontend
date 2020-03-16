import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Fabrics from './components/fabrics/Fabrics'
import Originals from './components/originals/Originals'
import Prints from './components/prints/Prints'
import Home from './components/home/Home'
import About from './components/about/About'
import NavBar from './components/navBar/NavBar'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div className="app">
    <NavBar />
      <Route path='/' component={ Home }/>
      <Route path='/about' component={About}/>
          <Route path='/prints' component={Prints}/>
          <Route path='/original work' component={Originals}/>
          <Route path='/clothing' component={Fabrics}/>
  </div>
);

export default App;
