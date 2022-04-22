import React from 'react';
import Logo from '../../assets/images/app-logo.png';
import {Link} from 'react-router-dom';


const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg">
            <div className='col-lg-3'>
                <Link className="navbar-brand brand-logo" to="/"> <img src={Logo} alt="Logo" /> </Link>
            </div>
            <div className='col-lg-8'>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className='nav-link' to="/news">NEWS <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to="/registerearn">REGISTER EARN</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to="/stores">
                                STORES
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="discounts">DISCOUNTS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="gastronomy">GASTRONOMY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="social-responsibility">SOCIAL RESPONSIBILITY</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="commerical-contact">COMMERCIAL CONTACT</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='col-lg-1'>
                <span className='btn-login float-end'>LOG IN</span>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    )
}
export default Navbar;