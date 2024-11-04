import React from 'react';
import '../scss/header.css';
import { Link } from 'react-router-dom';

function Navbar () {
    return (
        <header>
            <nav>
                <div className="logo">
                    <p>Lucas M.A</p>
                </div>

                <ul className="navList">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/">À propos</Link></li>
                    <li><Link to="#projet">Projets</Link></li>
                </ul>

                <div className="navContact">
                    <li>Contact</li>
                </div>
                
            </nav>
        </header>
    )
}

export default Navbar;