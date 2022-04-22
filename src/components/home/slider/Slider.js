import React from 'react';
import {Carousel} from 'react-bootstrap';


const Carousels = (props) =>{
  const sliderImages = props.images.map(image=>{
    return <Carousel.Item interval={1500}><img className="d-block w-100" src={image} alt="First slide"/></Carousel.Item>
  });
  return(
    <div className='row'>
      <div className='col-lg-12 px-0'>
      <Carousel>
        {
          sliderImages
        }
      </Carousel>
      </div>
    </div>
  )
}
export default Carousels;