import React, { useState } from 'react';
import "./Navbar.css"; 
import InstagramLogo from "../assets/Instagram_logo_2016.svg"; 
import appLogo from "../assets/app-logo.png"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
{/*             <div className="burger-menu" onClick={toggleMenu}>
                <span>&#9776;</span> 
            </div> */}
            <div className='app-logo'>
                <img src={appLogo} alt="App Logo" width="250" /> 
            </div>
            <div className="navbar-image">
                <img src={InstagramLogo} alt="Instagram Logo" width="40" /> 
            </div>
            <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <li>
                    <a href="/contact">Contact</a> 
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
