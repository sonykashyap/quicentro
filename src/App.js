import React from 'react';
import Header from './components/header/Header';
import Slider from './components/slider/Slider';
import Brand from './components/brand/Brand';
import Location from './components/location/Location';
import Footer from './components/footer/Footer';
import Logo from './assets/images/app-logo.png';

import './App.css';

function App() {
  return (
    <div className="App container-fluid">
      <Header />
      <Slider />
      <Brand/>
      <Location headingImage={Logo} />
      <Footer appLogo={Logo} />
    </div>
  );
}

export default App;

