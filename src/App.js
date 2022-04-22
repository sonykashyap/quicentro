import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Logo from './assets/images/app-logo.png';
import Home from './components/home/Home';
import News from './components/news/News';


import './App.css';

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App container-fluid">
        <Header />
        <Routes>
        <Route path='/' element={<Home appLogo={Logo}/>} />
        <Route path='/news' element={<News/>} />
        </Routes>
        <Footer appLogo={Logo} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

