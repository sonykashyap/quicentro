import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Logo from './assets/images/app-logo.png';
import Home from './components/home/Home';
import News from './components/news/News';


import './App.css';

var listOfImages =[];

class App extends React.Component {
  importAll(r) {
    return r.keys().map(r);
  }
  componentWillMount() {
    listOfImages = this.importAll(require.context('./assets/images/slider_images', false, /\.(png|jpg|svg)$/));
    console.log("All images are ", this.listOfImages);
  }
  render(){
    return (
      <BrowserRouter>
      <div className="App container-fluid">
        <Header />
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/news' element={<News/>} />
        </Routes>
        <Footer appLogo={Logo} />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

