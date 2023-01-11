
import '../styles/App.css';
import Header from './header/Header';
import About from './about/About';
import Home from './home/Home';
import Users from './users/login/Users';
import { Route, Routes } from 'react-router-dom'; 
import { useEffect, useState } from 'react';
import UserContext from '../context/userContext';



function App() {
  
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Users /> } />
        <Route path='/about' element={<About />} />
        {/*<Route path='/api' element={<Api />} />*/}
      </Routes>
    </div>
  )
};

export default App;
