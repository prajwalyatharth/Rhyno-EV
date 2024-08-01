import React from 'react'
import './Prebook.css'
import { Link } from 'react-router-dom'

const Prebook = () => {
    return (
        <div className='pre-book'>
            <Link to= '/pre-book'>

            <button className='prebook-btn'>Pre-Book Now</button>
            </Link>

        </div>
    )
}

export default Prebook
