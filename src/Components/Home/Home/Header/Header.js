import React, { useEffect } from 'react';
import './Header.css';
import hero from '../../../../images/hero-img.png';
import MyPDF from '../../../../resume/Resume-of-rayhan-islam.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare, } from '@fortawesome/free-solid-svg-icons';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa';
import Typical from 'react-typical';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2500 });
    }, [])

    return (
        <section className="header">
            <div className="container-fluid">
                <div className="row d-flex align-items-center">
                    <div data-AOS="zoom-in" className="col-md-6 col-sm-12">
                        <img className="w-75 img-fluid" src={hero} alt="" />
                    </div>

                    <div className="col-md-6 col-sm-12 pl-5">
                        <h1 className="font-weight-bold text-light">I'M <span className="text-warning text-uppercase">Rayhan Islam</span></h1>
                        <div style={{ color: "#28df99" }}>
                            <Typical
                                steps={['PROGRAMMER', 1000, 'MERN STACK DEVELOPER', 1000]}
                                loop={Infinity}
                                wrapper="h4"
                            />
                        </div>
                        <p className="text-light text-break mt-0 pt-0"><strong><FontAwesomeIcon icon={faEnvelopeSquare} /> raihanislamshagor@gmail.com</strong></p>
                        <div className="text-light">
                            <a target="_blank" className="text-light" to="https://github.com/Rayhan0Islam0Shagor"><FaGithub className="ml-0" /></a>
                            <a target="_blank" className="text-light" to="https://www.linkedin.com/in/rayhan045"><FaLinkedin className="ml-3" /></a>
                            <a target="_blank" className="text-light" to="https://www.facebook.com/Rayhan19980/"><FaFacebook className="ml-3" /></a>
                            <a target="_blank" className="text-light" to="https://www.instagram.com/is_rayhan_sh/"><FaInstagramSquare className="ml-3" /></a>
                            <a target="_blank" className="text-light" to="https://medium.com/@raihanislamshagor2"><FaMedium className="ml-3" /></a>
                        </div>
                        <br />
                        <Link target="_blank" to={MyPDF} download="Resume-of-rayhan-islam.pdf">
                            <button className="btn btn-outline-warning text-uppercase">
                                download Resume
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;