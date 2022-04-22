import React from 'react';
import Navbar from './Navbar';

const Header = () => {
return(
    <div className='row'>
        <div className='col-lg-12 header-background header1'>
            <div className='row'>
                <div className='col-lg-9 text-center text-lg-left text-md-left text-xl-left text-xxl-left'>
                    <span>OPEN NOW FRIDAY 7H00-13H00</span>
                </div>
                <div className='col-lg-3 d-flex align-items-center'>
                    <div className='input-container position-relative'>
                        <input className='input-search' placeholder='Seek...'/>
                        <span className='position-absolute'><i class="fa-solid fa-magnifying-glass"></i></span>
                    </div>
                    
                    <div className='social-icons'>
                        <span className='icon'><i class="fa-brands fa-facebook-f"></i></span>
                        <span className='icon'><i class="fa-brands fa-instagram"></i></span>
                        <span className='icon'><i class="fa-brands fa-youtube"></i></span>
                        <span className='icon'><i class="fa-brands fa-twitter"></i></span>
                    </div>
                </div>
            </div>
        </div>
        <div className='col-lg-12 header-background header2 sticky-top'>
            <Navbar />
        </div>
    </div>
)

}
export default Header;