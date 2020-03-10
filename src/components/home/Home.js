import React from "react";
import { Carousel } from 'react-responsive-carousel';

export default () => (






   <Carousel
     showThumbs={false}
     infiniteLoop
     autoPlay
     interval={4000}
     transitionTime={1000}>


            <div>
                  <img src="../img-01.jpg" alt=''/>
              </div>
                <div>
                  <img src="../img-02.jpg" alt=''/>
              </div>
                <div>
                  <img src="../img-03.jpg"alt='' />
              </div>
          </Carousel>

  );
