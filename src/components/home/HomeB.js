import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

class Home extends React.Component {


   render() {
        return (
          <div>
          <div className='box'/>

 <div className='carousel-wrapper'>




          <Carousel centerMode
                centerSlidePercentage={50}
                showThumbs={false}
                infiniteLoop={true}>
            <div>

                  <img src="../img-01.jpg" />
              </div>
              <div>
                  <img src="../img-02.jpg" />
              </div>
              <div>
                  <img src="../img-03.jpg" />
              </div>
          </Carousel>
          </div>
          </div>
  );
}
}
export default Home
