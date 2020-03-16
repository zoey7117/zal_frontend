import React from "react";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom'


export default () => (

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


     >


            <div>
                    <Link to='/'><img src="../img-01.jpg" alt=''style={{height:'300px', width: 'inherit' }}/></Link>
              </div>
                <div>
                  <img src="../img-02.jpg" alt=''/>
              </div>
                <div>
                  <img src="../img-03.jpg"alt='' />
              </div>
          </Carousel>
        </div>
        </div>
  );
