
import '../styles/App.scss';
import Header from './header/Header';
import About from './about/About';
import Home from './home/Home';
import Users from './users/login/Users';
import { Route, Routes } from 'react-router-dom'; 
import Footer from './footer/Footer';



function App() {
  
  return (
    <div className='app__div'>
      <Header />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Users /> } />
        <Route path='/about' element={<About />} />
        {/*<Route path='/api' element={<Api />} />*/}
      </Routes>
      <Footer/>
    </div>
  )
};

export default App;
