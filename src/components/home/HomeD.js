import React from "react";
import { Carousel } from 'react-responsive-carousel';

class Home extends React.Component {



   render() {
        return (
          <div>
          <div className='box'/>

 <div className='carousel-wrapper'>




   <Carousel
className="carousel-wrapper"
dynamicHeight
showThumbs={false}
autoPlay
infiniteLoop
>
            <div className="image-container" >


                  <img src="../img-01.jpg" />
              </div>
              <div className="image-container" >
                  <img src="../img-02.jpg" />
              </div>
              <div className="image-container" >
                  <img src="../img-03.jpg" />
              </div>
          </Carousel>
          </div>
          </div>
  );
}
}
export default Home
