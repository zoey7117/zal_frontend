import React from 'react';
import './App.css';
import Home from './components/home/Home'
import NavBar from './components/navBar/NavBar'

import "react-responsive-carousel/lib/styles/carousel.min.css";

const App = () => (
  <div className="app">
    <NavBar />
    <Home />
  </div>
);

export default App;
