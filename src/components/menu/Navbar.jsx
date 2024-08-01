import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from '../../assets/logo1.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#"><img className='logoBW' src={Logo} alt="Logo" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </a>
                            <ul className="dropdown-menu">
                                <Link className='nav-link' to='/productpage1'><li><a className="dropdown-item" >SE03 Lite</a></li></Link>
                                <Link className='nav-link' to='/productpage2'><li><a className="dropdown-item" >SE03 </a></li></Link>
                                <Link className='nav-link' to='/productpage3'><li><a className="dropdown-item" >SE03 MAX</a></li></Link>
                                <li><hr className="dropdown-divider" /></li>
                                <Link className='nav-link' to='/compare'><li><a className="dropdown-item" >Compare All</a></li></Link>
                                
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/pre-book">Pre Book Now</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link " aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
