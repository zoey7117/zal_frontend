import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Fabrics from './components/fabrics/Fabrics'
import Originals from './components/originals/Originals'
import Prints from './components/prints/Prints'
import PrintCard from './components/prints/PrintCard'
import MediaQuery from 'react-responsive'


import Home from './components/home/Home'
import About from './components/about/About'
import NavBar from './components/navBar/NavBar'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (


  <div className="app">
    <div className='container'/>

    <NavBar />
      <Route exact path='/about' component={About}/>
      <Route exact path='/original work' component={Originals}/>
      <Route exact path='/clothing' component={Fabrics}/>
      <Route exact path='/print card' component={PrintCard} />
      <Route exact path='/prints' component={Prints} />

      <Switch>
        <Route exact path='/prints' render={null} />
        <Route exact path='/clothing' render={null} />
        <Route exact path='/about' render={null} />
        <Route exact path='/original work' render={null} />
        <Route exact path='/print card' render={null} />

        <MediaQuery minDeviceWidth={1224} device={{ deviceWidth: 1600 }}>
        <Route component={Home} />
      </MediaQuery>
      </Switch>

  </div>

);

export default App;
