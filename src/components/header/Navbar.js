import React from 'react';
import Logo from '../../assets/images/app-logo.png';


const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
            <div className='col-lg-3'>
                <a className="navbar-brand brand-logo" href="#"> <img src={Logo} alt="Logo" /> </a>
            </div>
            <div className='col-lg-8'>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">NEWS <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">REGISTER EARN</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        STORES
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">DISCOUNTS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">GASTRONOMY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">SOCIAL RESPONSIBILITY</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">COMMERCIAL CONTACT</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-1'>
                <span className='btn-login'>LOG IN</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}
export default Navbar;