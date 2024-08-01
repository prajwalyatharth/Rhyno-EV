import React from 'react';
import './Footer.css';
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";

import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='footer-part'>
            <div className='container'>
                <div className='py-3 d-flex justify-content-around '>
                    <div>
                        <h3>
                            <Link className="nav-link " aria-current="page" to="/">Products</Link>
                        </h3>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/productpage1">SE03 Lite</Link>
                        </div>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/productpage2">SE03 </Link>
                        </div>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/productpage3">SE03 MAX</Link>
                        </div>
                    </div>


                    <div className=''>
                        <h3>RHYNO EV</h3>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/rentals">Rentals</Link>
                        </div>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                        </div>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                        </div>
                    </div>

                </div>

                <br />
                <br />



                <div className=' footer-policy py-2 d-flex justify-content-around '>
                <div>
                            <Link className="nav-link active" aria-current="page" to="/">Privacy Policy</Link>
                        </div>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/">Refund Policy</Link>
                        </div>
                        <div>
                            <Link className="nav-link active" aria-current="page" to="/ ">Website Policy</Link>
                        </div>
                </div>

                <div className='container d-flex justify-content-around '>
                    <div className='py-3 d-flex flex-column' style={{ fontSize: '12px' }}>
                        <p >Mail : <a className='link-color' href="mailto:info@rhyno.in">info@rhyno.in</a></p>
                        <p >Mobile no : <a className='link-color' href="+91-9023987528">+91-9023987528</a></p>
                        <p>Location : Rhyno Wheels Private limited, Near UG hostel gate #2, Behind PDEU,
                            Raisan, Gandhinagar, Gujarat, India.</p>
                    </div>

                    <div>
                        <div className='d-flex mb-2 my-4 '>
                            <button
                                onClick={() => window.open('https://www.instagram.com/rhyno.in/', '_blank')} className="icon-button ">
                                <FaInstagram className="social-media-link" />

                            </button>

                            <button
                                onClick={() => window.open('https://www.linkedin.com/company/rhyno-wheels/', '_blank')} className="icon-button mx-4">
                                <CiLinkedin className="social-media-link " />

                            </button>

                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Footer
