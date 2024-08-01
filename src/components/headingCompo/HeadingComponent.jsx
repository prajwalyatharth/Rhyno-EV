import React from 'react'
import './Heading.css';

const HeadingComponent = ({heading}) => {
  return (
    <div className='heading my-5'>
        <h1>{heading}</h1>  
    </div>
  )
}

export default HeadingComponent
