import React from 'react';
import './BikeOne.css';
import img1 from '../../../assets/bike1.png'


const BikeOne = () => {
    return (
        <div className='Bike-component '>
            <div className='d-flex justify-content-center my-3 mb-4'>
                <h1>PICK YOUR RHYNO EV</h1>
            </div>
            <div className='container d-flex justify-content-between '>
                <div className='bike-card d-flex '>
                    <img src={img1} alt="bike" />
                    <div className='d-flex justify-content-end gap-2 '>
                        <span>Available color</span>
                        <button className='color-btn' style={{ backgroundColor: 'red' }}></button>
                        <button className='color-btn' style={{ backgroundColor: 'yellow' }}></button>
                        <button className='color-btn' style={{ backgroundColor: 'grey' }}></button>

                    </div>

                </div>

                <div className='bike-card my-4 '>
                    <h3>Rhyno SE03 Lite</h3>
                    <p>
                        Indulge in the perfect harmony of power and range with this Rhyno.
                        Offering an exhilarating experience with its robust 2000W motor,
                        it ensures a thrilling ride while still delivering an impressive
                        80-100 km range on a single charge. Like its counterparts, this machine
                        features the safety assurance of a fire-safe advanced LFP battery, along
                        with the comprehensive benefits of owning a Rhyno. Boasting a formidable
                        combination of a 2000W motor and a 2.7kWh battery, this beast is ready to
                        roar on the roads, providing an electrifying
                        journey at every turn. Check out the other details below!
                    </p>

                </div>

            </div>
        </div>
    )
}

export default BikeOne
