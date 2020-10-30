import React, { useState } from 'react';
import './Topbar.css';
import { Link } from "react-router-dom";


const Topbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    return (
        <header>
            <div className={`menu-btn ${showMenu ? 'close' : ''}`} onClick={toggleMenu}>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
                <div className="btn-line"></div>
            </div>

            <nav className={`menu ${showMenu ? 'show' : ''}`}>
                <div className={`menu-branding ${showMenu ? 'show' : ''}`}>
                    <div className="portrait"></div>
                </div>
                <ul className={`menu-nav ${showMenu ? 'show' : ''}`}>
                    <li className={`nav-item ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                        <Link to="home" className="nav-link">
                            Home
                        </Link>
                    </li>
                    <li className={`nav-item ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                        <Link to="about" className="nav-link">
                            About Me
                        </Link>
                    </li>
                    <li className={`nav-item ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                        <Link to="projects" className="nav-link">
                            My Work
                        </Link>
                    </li>
                    <li className={`nav-item ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                        <Link to="blog" className="nav-link">
                            Blog
                        </Link>
                    </li>
                    <li className={`nav-item ${showMenu ? 'show' : ''}`} onClick={toggleMenu}>
                        <Link to="contactMe" className="nav-link">
                            Contact Me
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Topbar;