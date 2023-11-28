import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/image/slider1.jpg';
import slider2 from '../../assets/image/slider2.jpg';
import slider3 from '../../assets/image/slider3.jpg';
import slider4 from '../../assets/image/slider4.jpg';
const Banner = () => {
  return (
    <Carousel className="w-11/12 mx-auto">
      <div className="">
        <img className="h-[500px]" src={slider1} />
      </div>
      <div>
        <img className="h-[500px]" src={slider2} />
      </div>
      <div>
        <img className="h-[500px]" src={slider3} />
      </div>
      <div>
        <img className="h-[500px]" src={slider4} />
      </div>
    </Carousel>
  );
};

export default Banner;
