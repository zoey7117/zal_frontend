import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'
import confluencezGb from '../../assets/confluencezGb.jpg'
import turtle1920 from '../../assets/turtle1920.jpg'
import mary1920 from '../../assets/mary1920.jpg'
import './Home.css'


const Home = () => (

  <div>
    <div className='box'/>
    <div className='carousel-wrapper'>

     <Carousel
       showThumbs={false}
       infiniteLoop
       autoPlay
       interval={4000}
       transitionTime={1000}
       showIndicators={false}
       centerMode
       centerSlidePercentage={50}
       >

        <div>
          <Link to='/'><img src={confluencezGb} alt=''/></Link>
        </div>
        <div>
          <Link to='/'><img src={turtle1920} alt=''/></Link>
        </div>
        <div>
          <Link to='/prints'><img src={mary1920}alt='' /></Link>
        </div>
      </Carousel>
    </div>
  </div>
  );
  export default Home
