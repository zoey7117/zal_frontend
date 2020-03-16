import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'


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
                    <Link to='/'><img src="../confluencezGb.jpg" alt=''/></Link>
              </div>
                <div>
                  <img src="../turtle1920.jpg" alt=''/>
              </div>
                <div>
                  <img src="../mary-G-1920-1v.jpg"alt='' />
              </div>
          </Carousel>
        </div>
        </div>
  );
  export default Home
