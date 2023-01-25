import React from "react";
import "../styles/App.css";
import Header from "./header/Header";
import About from "./about/About";
import Home from "./home/Home";
import Users from "./users/login/Users";
import { Route, Routes } from "react-router-dom";
import CallToApi from "./CallToApi/CallToApi";
import Footer from "./footer/Footer";
import Error from "./error/Error";
import Back from "./error/Error";


import React from 'react';
import '../styles/App.css';
import Header from './header/Header';
import About from './about/About';
import Home from './home/Home';
import Users from './users/login/Users';
import { Route, Routes } from 'react-router-dom'; 
import CallToApi from './CallToApi/CallToApi';
import Footer from './footer/Footer';
import Error from './error/Error';
import DetailView from './detailView/DetailView';




import Personaje from "../components/character/character";

function App() {
  
  return (
    <div className="app__div">
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Users /> } />
        <Route path='/about' element={<About />} />
        <Route path='/api' element={<CallToApi />} /> 
        <Route path= '/api/:id' element={<DetailView />} />

        <Route path='*' element={<Error/>} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Users />} />
        <Route path="/about" element={<About />} />
        <Route path="/api" element={<CallToApi />} />
        <Route path="/characters" element={<Personaje />} />
        <Route path="/api" element={<Back/>} />	

        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
