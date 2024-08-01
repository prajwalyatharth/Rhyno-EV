import React from 'react'
import './Productpage.css'
import img1 from '../../assets/bike1.png'

import HeadingComponent from '../../components/headingCompo/HeadingComponent'
import Prebook from '../../components/prebook/Prebook'


const ProductPage1 = () => {
    return (
        <div className='product-1'>
            <div className='container d-flex justify-content-center align-items-start flex-column'>
                <HeadingComponent heading='SE03 Lite' />
                <div className='row'>
                    <div className='col-12 col-md-6 bike-card d-flex flex-column align-items-center'>
                        <img src={img1} alt="bike" className='img-fluid' />
                        <div className='d-flex justify-content-center gap-2 mt-3'>
                            <span>Available color</span>
                            <button className='color-btn' style={{ backgroundColor: 'red' }}></button>
                            <button className='color-btn' style={{ backgroundColor: 'yellow' }}></button>
                            <button className='color-btn' style={{ backgroundColor: 'grey' }}></button>
                        </div>
                    </div>

                    <div className='col-12 col-md-6 bike-card my-4'>
                        <h3>Rhyno SE03 Lite</h3>
                        <p>
                            Indulge in the perfect harmony of power and range with this Rhyno. Offering an exhilarating experience with its robust 2000W motor, it ensures a thrilling ride while still delivering an impressive 80-100 km range on a single charge. Like its counterparts, this machine features the safety assurance of a fire-safe advanced LFP battery, along with the comprehensive benefits of owning a Rhyno. Boasting a formidable combination of a 2000W motor and a 2.7kWh battery, this beast is ready to roar on the roads, providing an electrifying journey at every turn. Check out the other details below!
                        </p>
                    </div>
                </div>
            </div>

            <div className='container d-flex flex-column flex-md-row justify-content-center gap-5'>
                <ul className='specification d-flex flex-column'>
                    <h3>Specification</h3>
                    <span>Motor</span>
                    <span>Battery</span>
                    <span>Battery features</span>
                    <span>Battery warranty</span>
                    <span>Charging time</span>
                    <span>Max speed</span>
                    <span>Warranty on electronics</span>
                    <span>Max range (@30km/h)</span>
                    <span>Max range (@45km/h)</span>
                    <span>Other key benefits</span>
                </ul>

                <ul className='specification d-flex flex-column'>
                    <h3>Rhyno SE03 Lite</h3>
                    <span>1500W</span>
                    <span>1.8Kwh</span>
                    <span>LFP with 1500 cyclesActive Balancing Waterproof (IP67)</span>
                    <span>3 Years</span>
                    <span>3 hours (12A)</span>
                    <span>70 km</span>
                    <span>1 year</span>
                    <span>100 km</span>
                    <span>Max range (@45km/h)</span>
                    <span>Fire-safe battery, Range prediction, Comfortable ride and safe</span>
                </ul>
            </div>
            <Prebook />
        </div>
    );
};

export default ProductPage1
