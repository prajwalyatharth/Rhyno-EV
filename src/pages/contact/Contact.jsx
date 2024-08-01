import React from 'react'
import HeadingComponent from '../../components/headingCompo/HeadingComponent'
import './Contact.css'

const Contact = () => {
  return (
    <div className='contact-page d-flex justify-content-center align-items-start'>
    <div className='container d-flex justify-content-center align-items-start flex-column '>
     <HeadingComponent heading="Contact Us"/> 
      <div className='blog my-3' >
      <p >Mail : info@rhyno.in</p>
                        <p >Mobile no : +91-9023987528</p>
                        <p>Location : Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
                            Raisan, Gandhinagar, Gujarat, India.</p>
     
      </div>
    </div>
  </div>
  )
}

export default Contact
