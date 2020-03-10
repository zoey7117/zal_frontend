import React from 'react';
import './App.css';
import Home from './components/home/Home'
import Carousel from "./Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./overrides.css";

const App = () => (
  <div className="app">
    <Carousel />
  </div>
);

export default App;
