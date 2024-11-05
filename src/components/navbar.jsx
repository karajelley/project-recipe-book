import React from 'react';
import './navbar.css'; 

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <a href="/">Recipe Book</a> 
            </div>
            <ul className="navbar-links">
                <li>
                    <a href="/recipes">Recipes</a> 
                </li>
                <li>
                    <a href="/about">About</a> 
                </li>
                <li>
                    <a href="/contact">Contact</a> 
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
