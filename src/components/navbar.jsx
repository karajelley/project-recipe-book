import React, { useState } from 'react';
import "./Navbar.css"; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="burger-menu" onClick={toggleMenu}>
                <span>&#9776;</span> 
            </div>
            <div className="navbar-brand">
                <img src="" alt="" /> 
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
