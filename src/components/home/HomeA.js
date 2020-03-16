import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends React.Component {


   render() {
        return (
          <div>
 <div className='box'/>




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
                <img src="../img-01.jpg" alt=''style={{width: "70%"}}/>
              </div>
              <div>
                  <img src="assets/mary-G-1920-1.jpg" alt=''style={{ width: '50%', height: '300px'}}/>
              </div>
              <div>
                  <img src="assets/mary-G-1920-1.jpg" alt=''style={{ width: '50%', height: '300px'}} />
              </div>
          </Carousel>
          </div>
  );
}
}
export default Home
