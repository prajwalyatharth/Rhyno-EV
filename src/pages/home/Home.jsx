import React from 'react'
import './Home.css';
import FrontPage from '../../components/frontpage/FrontPage';
import Feature from '../../components/feature/Feature';
import BikeOne from '../../components/bikes/bikeOne/BikeOne';
import Products from '../../components/bikes/products/Products';
import CompareAll from '../../components/compare/CompareAll';
import Prebook from '../../components/prebook/Prebook';




const Home = () => {
  return (
    <div className='home-page'>
      <FrontPage />
      <Feature/>
      <BikeOne/>
      <Products/>
      <CompareAll/>
      <Prebook/>

    </div>
  )
}

export default Home
