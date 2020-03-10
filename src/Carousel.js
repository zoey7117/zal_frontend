import React from "react";
import { Carousel } from "react-responsive-carousel";

export default () => (
  <div>
    <Carousel
      className="carousel-wrapper"
      dynamicHeight
      showThumbs={false}
      autoPlay
      infiniteLoop
    >
      <div
        className="image-container"
        style={{
          backgroundImage: `url('http://lorempixel.com/output/cats-q-c-640-480-1.jpg')`
        }}
      />

      <div
        className="image-container"
        style={{
          backgroundImage: `url('https://i.pinimg.com/originals/da/fe/f9/dafef97cb397e61f4c47ef27523b092c.jpg')`
        }}
      />
    </Carousel>
  </div>
);
