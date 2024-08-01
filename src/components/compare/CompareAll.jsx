import React from 'react'
import './CompareAll.css'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa";

const CompareAll = () => {
  return (
    <div>
        <div className='compare container d-flex justify-content-center  '>
            <Link to='/compare'><button className='compare-btn'>Compare All <FaArrowRight /></button></Link>
        </div>
      
    </div>
  )
}

export default CompareAll
