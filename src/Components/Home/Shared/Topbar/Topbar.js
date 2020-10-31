import React, { useState } from 'react';
import './Topbar.css';
import { Link, NavLink } from "react-router-dom";
import logo from '../../../../images/logo.png'


const Topbar = () => {

    return (
        <section>
            <div class="sticky-top">
                <nav className="navbar navbar-expand-lg navbar-dark bg-transparent ">
                    <div className="container-fluid">
                        <Link to="/home" className="navbar-brand pl-5">
                            <img className="custom-logo" src={logo} alt="logo" />
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse text-center navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item pr-4"><NavLink activeClassName="active" to="/home" className="nav-link font-weight-bold">Home</NavLink></li>
                                <li className="nav-item pr-4"><NavLink activeClassName="active" to="/about" className="nav-link font-weight-bold">About</NavLink></li>
                                <li className="nav-item pr-4"><NavLink activeClassName="active" to="/projects" className="nav-link font-weight-bold">Projects</NavLink></li>
                                <li className="nav-item pr-4"><NavLink activeClassName="active" to="/blog" className="nav-link font-weight-bold">Blogs</NavLink></li>
                                <li className="nav-item pr-5"><NavLink activeClassName="active" to="/contactMe" className="nav-link font-weight-bold">Contact</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </section>
    );
};

export default Topbar;
