import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Navbar from './components/NavBar/NavBar';
import { GlobalStyle } from './GlobalStyle';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <BrowserRouter>
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element = { <Home /> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);