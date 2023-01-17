import React from 'react';
import '../styles/App.css';
import Header from './header/Header';
import About from './about/About';
import Home from './home/Home';
import Users from './users/login/Users';
import { Route, Routes } from 'react-router-dom'; 
import CallToApi from './CallToApi/CallToApi';








function App() {

 
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Users /> } />
        <Route path='/about' element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<CallToApi />} />
        
      </Routes>
    
    
    </div>
  )
};

  


export default App;
