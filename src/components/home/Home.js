import React from 'react';
import Slider from './slider/Slider';
import Brand from './brand/Brand';
import Location from './location/Location';

const Home = (props) => {
    return(
        <div>
            <Slider />
            <Brand />
            <Location headingImage={props.appLogo} />
            <div>Hello</div>
        </div>
    )
}
export default Home;