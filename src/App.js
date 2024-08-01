
import './App.css';
import Footer from './components/footer/Footer';

import Home from './pages/home/Home';
import Navbar from './components/menu/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/about/About';
import Rentals from './pages/rentals/Rentals';
import Compare from './pages/compare/Compare';
import ProductPage3 from './pages/productpage/ProductPage3';
import ProductPage2 from './pages/productpage/ProductPage2';
import ProductPage1 from './pages/productpage/ProductPage1';
import Payment from './pages/payment/Payment';
import Contact from './pages/contact/Contact';

 



function App() {
  return (
    <div >
      <Router>
        <Navbar/>
       

          <Routes>
            
          <Route exact path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/rentals' element={<Rentals/>}/>
          <Route path='/compare' element={<Compare/>}/>
          <Route path='/productpage1' element={<ProductPage1/>}/>
          <Route path='/productpage2' element={<ProductPage2/>}/>
          <Route path='/productpage3' element={<ProductPage3/>}/>
          <Route path='/pre-book' element={<Payment/>}/>
          <Route path='/contact' element={<Contact/>}/>


          </Routes>

        <Footer/>
      </Router>
    </div>
  );
}

export default App;
