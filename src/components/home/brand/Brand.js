import React from 'react';
// import * as images from '../../assets/images/brands';
import brandImage1 from '../../../assets/images/brands/accersories-1-1.png';
import brandImage2 from '../../../assets/images/brands/Logo_Bibi.png';
import brandImage3 from '../../../assets/images/brands/Logo_Fossil.png';
import brandImage4 from '../../../assets/images/brands/Logo_Funky-Fish.png';
import brandImage5 from '../../../assets/images/brands/movistar-2-1.png';


const Brand = () => {
    return(
        <div className='row'>
            <div className='col-lg-12 section-brands text-center py-5'>
                <h1>OUR FAMOUS BRANDS</h1>
            </div>
            <div className='col-lg-12 pb-5'>
                <div className='row'>
                    <div className='col-lg-3 col-6 mb-2 mb-lg-0 mb-md-0 mb-xl-0 mb-xxl-0'>
                        <div className='brandimg-container'>
                            <div className='brand-info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, harum?  </div>
                            <img className='w-100' src={brandImage1} alt="brand" />
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 mb-2 mb-lg-0 mb-md-0 mb-xl-0 mb-xxl-0'>
                        <div className='brandimg-container'>
                            <div className='brand-info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, harum?  </div>
                            <img className='w-100' src={brandImage2} alt="brand" />
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 mb-2 mb-lg-0 mb-md-0 mb-xl-0 mb-xxl-0'>
                        <div className='brandimg-container'>
                            <div className='brand-info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, harum?  </div>
                            <img className='w-100' src={brandImage3} alt="brand" />
                        </div>
                    </div>
                    <div className='col-lg-3 col-6 mb-2 mb-lg-0 mb-md-0 mb-xl-0 mb-xxl-0'>
                        <div className='brandimg-container'>
                            <div className='brand-info'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, harum?  </div>
                            <img className='w-100' src={brandImage4} alt="brand" />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className='col-lg-12 text-center pb-5'>
                <span className='btn-all-brands'>ALL BRANDS</span>
            </div>
        </div>
    )
}
export default Brand;