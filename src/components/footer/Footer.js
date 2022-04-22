import React from 'react';


const Footer = (props) => {
    return(
        <footer>
            <div className='row'>
                <div className='footer-above-section'>
                    <span>COMPARTE EN NUESTRAS REDES SOCIALES</span>
                    <div className='social-icons'>
                        <span className='icon'><i class="fa-brands fa-facebook-f"></i></span>
                        <span className='icon'><i class="fa-brands fa-instagram"></i></span>
                        <span className='icon'><i class="fa-brands fa-youtube"></i></span>
                        <span className='icon'><i class="fa-brands fa-twitter"></i></span>
                    </div>
                </div>
                <div className='col-lg-12 footer-section'>
                    <div className='row'>
                        <div className='col-lg-5 px-5 mt-5 mb-3 brand-information'>
                            <div className='row'>
                                <div className='col-lg-12 text-center'>
                                    <img className='w-25' src={props.appLogo} alt="Footer logo" />
                                </div>
                                <div className='col-lg-12 pt-5 brand-heading'>
                                    <h4 className='text-white'> UBICACIÓN </h4>
                                </div>
                                <div className='col-lg-12 brand-description'>
                                    <p className='text-white'> Quicentro Shopping está ubicado en el centro ejecutivo y financiero de la ciudad de Quito, rodeado de hoteles de primera clase y otros puntos de interés turístico. </p>
                                </div>
                                <div className='col-lg-12 brand-description'>
                                    <p className='text-white'> Dirección: </p>
                                </div>
                                <div className='col-lg-12 brand-description'>
                                    <p className='text-white'> Avenida Naciones Unidas entre Avenida 6 de Diciembre y Avenida De Los Shyris. </p>
                                </div>
                                <div className='col-lg-12 brand-description'>
                                    <p className='text-white'> Telf.: +59322464526 </p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-7 ps-5 mt-5 mb-3 brand-contactInfo'>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <h4 className="text-white">EMPRESA</h4>
                                    <ul className="nav flex-column pt-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Acerca de Nosotros</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Trabaja con nosotros</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Contacto</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link disabled">Sugerencias</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-lg-4'>
                                <h4 className="text-white">SERVICIOS</h4>
                                    <ul className="nav flex-column pt-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Wifi Gratis</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Parqueadero</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-lg-4'>
                                <h4 className="text-white">POLÍTICAS</h4>
                                    <ul className="nav flex-column pt-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Wifi Gratis</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Parqueadero</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-4'>
                                    <h4 className="text-white pt-4">AVISO LEGAL</h4>
                                    <ul className="nav flex-column pt-3">
                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" href="#">Privacidad</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Términos y condiciones</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-lg-6'>
                                <h5 className="text-white pt-4">TRABAJA CON NOSOTROS</h5>
                                    <ul className="nav flex-column pt-3">
                                        <li className="nav-item pt-2">
                                            <p className='text-white'><span><strong>Número de teléfono :</strong></span>022464526</p>
                                            <p className='text-white'><span><strong>Correo electrónico :</strong></span> info@quicentro.com</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;