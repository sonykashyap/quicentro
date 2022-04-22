import React from 'react';
import {Carousel} from 'react-bootstrap';
import img1 from '../../assets/images/slider_images/b1.jpg';
import img2 from '../../assets/images/slider_images/b2.jpg';
import img3 from '../../assets/images/slider_images/b3.jpg';
import img4 from '../../assets/images/slider_images/b4.jpg';

const Carousels = () =>{
  return(
    <div className='row'>
    <div className='col-lg-12 px-0'>
    <Carousel>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
      
  )
}
export default Carousels;