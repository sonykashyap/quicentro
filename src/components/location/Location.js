import React from 'react';

const Location = (props) => {
    return(
        <div className='row'>
            <div className='col-lg-6'>
                <div className='row'>
                    <div className='col-lg-12 px-0'>
                        <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7979.598857305571!2d-78.479216!3d-0.176318!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3a84aaacbd81297a!2sQuicentro!5e0!3m2!1sen!2sin!4v1650607496213!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            <div className='col-lg-6 q-address px-5'>
                <div className='row'>
                    <div className='col-lg-12 pt-5 text-center'>
                        <img src={props.headingImage} style={{width: '120px'}} alt="heading pic" />
                    </div>
                    <div className='col-lg-12 pt-4 text-center'>
                        <h3 className='text-white'>UBICACIÓN</h3>
                    </div>
                    <div className='col-lg-12 pt-3 text-center text-white'>
                        <p>Avenida Naciones Unidas entre Avenida 6 de Dicie, bre y Avenida De Los Shyris. Quito, Ecuador</p>
                    </div>
                    <div className='col-lg-12 pt-2 text-center text-white'>
                        <p><strong>Phone Number :</strong>022464526</p>
                    </div>
                    <div className='col-lg-12 pt-2 text-center text-white'>
                        <p><strong>Email :</strong>info@quicentro.com</p>
                    </div>
                    <div className='col-lg-12 pt-2 text-center text-white'>
                        <h5>Contact on:</h5>
                        <button className='btn-fbmessenger text-primary btn-lg d-flex-inline align-items-center'><i class="fa-brands fa-facebook-messenger text-primary me-3"></i>Message us</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Location;