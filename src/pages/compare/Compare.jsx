import React from 'react'
import './Compare.css'
import img1 from '../../assets/bike1.png';
import img2 from '../../assets/bike 2.png';
import img3 from '../../assets/bike3.png';
import HeadingComponent from '../../components/headingCompo/HeadingComponent';
import Prebook from '../../components/prebook/Prebook';

const Compare = () => {
    return (
        <div className='compare-page'>
            <div className='container d-flex justify-content-center align-items-start flex-column'>
                <HeadingComponent heading='Compare All' />
            </div>

            <div className='container d-flex flex-wrap justify-content-center gap-3'>
                <div className='product-card text-center'>
                    <img src={img1} alt="SSE03 Lite" />
                    <h5>SSE03 Lite</h5>
                </div>

                <div className='product-card text-center'>
                    <img src={img2} alt="SSE03" />
                    <h5>SSE03</h5>
                </div>

                <div className='product-card text-center'>
                    <img src={img3} alt="SSE03 MAX" />
                    <h5>SSE03 MAX</h5>
                </div>
            </div>

            <div className='container d-flex flex-wrap align-items-start gap-5'>
                <ul className='specification'>
                    <h3>Specification</h3>
                    <li>Motor</li>
                    <li>Battery</li>
                    <li>Battery warranty</li>
                    <li>Charging time</li>
                    <li>Max speed</li>
                    <li>Max range (@30km/h)</li>
                </ul>

                <ul className='specification'>
                    <h3>SE03 Lite</h3>
                    <li>1500W</li>
                    <li>1.8Kwh</li>
                    <li>3 Years</li>
                    <li>3 hours (12A)</li>
                    <li>55 km/h</li>
                    <li>150 km</li>
                    <button type="button" className="buy-now">BUY NOW</button>
                </ul>

                <ul className='specification'>
                    <h3>SE03</h3>
                    <li>1500W</li>
                    <li>2.7Kwh</li>
                    <li>3 Years</li>
                    <li>4 hours (12A)</li>
                    <li>55 km/h</li>
                    <li>150 km</li>
                    <button type="button" className="buy-now">BUY NOW</button>
                </ul>

                <ul className='specification'>
                    <h3>SE03 MAX</h3>
                    <li>1500W</li>
                    <li>2.7Kwh</li>
                    <li>3 Years</li>
                    <li>4 hours (12A)</li>
                    <li>55 km/h</li>
                    <li>150 km</li>
                    <button type="button" className="buy-now">BUY NOW</button>
                </ul>
            </div>

            <Prebook />
        </div>
    );
}

export default Compare;