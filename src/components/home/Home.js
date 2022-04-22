import React from 'react';
import Slider from './slider/Slider';
import Brand from './brand/Brand';
import Location from './location/Location';

import img1 from '../../assets/images/slider_images/b1.jpg';
import img2 from '../../assets/images/slider_images/b2.jpg';
import img3 from '../../assets/images/slider_images/b3.jpg';
import img4 from '../../assets/images/slider_images/b4.jpg';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {images: [img1, img2, img3, img4]}
      }
    render(){
        return(
            <div>
                <Slider images={this.state.images} />
                <Brand />
                <Location headingImage={this.props.appLogo} />
            </div>
        )
    }
    
}
export default Home;