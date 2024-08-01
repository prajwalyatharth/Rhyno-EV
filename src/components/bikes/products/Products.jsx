import React from 'react'
import './Products.css'
import img1 from '../../../assets/bike1.png';
import img2 from '../../../assets/bike 2.png';
import img3 from '../../../assets/bike3.png';
import { Link } from 'react-router-dom';

const Products = () => {
    return (
        <div className='Bike-component container'>
            <div className='my-3 mb-4'>
                <div className='container d-flex justify-content-center gap-3'>
                    <ul>
                        <div className='product-card'>
                            <img src={img1} alt="bike" />
                            <h5>SSE03 Lite</h5>
                            <span>Max speed : 50km/h</span>
                            <span>Battery 2.7Kwh</span>
                        </div>
                        <div className='d-flex justify-content-around my-2'>
                            <button type="button" className="buy-now">BUY NOW</button>
                            <Link to='/productpage1'><button type="button" className="Learn-more" style={{height:'40px'}}>Learn more</button></Link>

                        </div>
                    </ul>

                    <ul>
                        <div className='product-card'>
                            <img src={img2} alt="bike" />
                            <h5>SSE03</h5>
                            <span>Max speed : 55km/h</span>
                            <span>Battery 2.7Kwh</span>
                        </div>
                        <div className='d-flex justify-content-around my-2'>
                            <button type="button" className="buy-now">BUY NOW</button>
                            <Link to='/productpage2'><button type="button" className="Learn-more" style={{height:'40px'}}>Learn more</button></Link>

                        </div>
                    </ul>

                    <ul>
                        <div className='product-card'>
                            <img src={img3} alt="bike" />
                            <h5>SSE03 MAX</h5>
                            <span>Max speed : 55km/h</span>
                            <span>Battery 2.7Kwh</span>
                        </div>
                        <div className='d-flex justify-content-around my-2'>
                            <button type="button" className="buy-now">BUY NOW</button>
                            <Link to='/productpage3'><button type="button" className="Learn-more" style={{height:'40px'}}>Learn more</button></Link>


                        </div>
                    </ul>
                </div>  
            </div>
        </div>
    );
}


export default Products
