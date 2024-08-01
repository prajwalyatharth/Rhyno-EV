import React from 'react'
import './Rentals.css'
import HeadingComponent from '../../components/headingCompo/HeadingComponent';
import { BsAndroid2 } from "react-icons/bs";
import { FaApple } from "react-icons/fa";

const Rentals = () => {
    return (
        <div className='container about-page'>
            <div className='d-flex justify-content-center align-items-start flex-column'>
                <HeadingComponent heading="Rentals" />
                <p className='blog my-3'>
                    Explore the roars of Rhyno at your own pace with our rental options! Test the waters with our flexible rental
                    model, available for a week or a month, allowing you to experience the Rhyno first hand before committing. Simply
                    visit our authorized dealerships to unlock this opportunity.
                    <br /><br />
                    Additionally, we're redefining campus commuting with our rental fleet tailored for college
                    students. Navigate your daily commute effortlessly by renting Rhyno vehicles on an hourly basis through our user-friendly mobile app.
                    Embrace the freedom to ride and explore a new dimension in sustainable and convenient transportation.
                </p>
            </div>

            <div className='d-flex flex-column flex-md-row gap-3 my-5 justify-content-center align-items-start'>
                <div>
                    <h4>Download our rental app:</h4>
                </div>
                <div className='d-flex gap-3'>
                    <button
                        onClick={() => window.open('', '_blank')} className="icon-button">
                        <BsAndroid2 className="social-media-link" />
                    </button>
                    <button
                        onClick={() => window.open('', '_blank')} className="icon-button">
                        <FaApple className="social-media-link" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Rentals
