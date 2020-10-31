import React, { useEffect } from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import heroImg from '../../../images/hero-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
    { name: 'React.js' }, { name: 'JavaScript' }, { name: 'ES6' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'MongoDB' }, { name: 'Redux.js' },
    { name: 'NPM' }, { name: 'VS Code' }, { name: 'REST API' }, { name: 'Firebase' }, { name: 'Git' }, { name: 'HTML5' }, { name: 'CSS3' },
    { name: 'Gatsby.js' }, { name: 'PHP' }, { name: 'MySQL' }, { name: 'Laravel' }, { name: 'Wordpress' }, { name: 'Plugins' }, { name: 'Theme Customize' },

]

const preferableSkills = [
    { name: 'React.js' }, { name: 'JavaScript' }, { name: 'ES6' }, { name: 'Node.js' }, { name: 'Express.js' }, { name: 'MongoDB' }, { name: 'Redux.js' },
    { name: 'VS Code' }, { name: 'REST API' }, { name: 'Firebase' }, { name: 'Git' }, { name: 'HTML5' }, { name: 'CSS3' },
]

const notPreferable = [
    { name: 'Gatsby.js' }, { name: 'PHP' }, { name: 'MySQL' }, { name: 'Laravel' }, { name: 'Redux.js' },
]

const About = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    return (
        <div className="bg-dark">
            <Topbar />
            <div style={{ paddingBottom: "20px" }} className="text-light container-fluid">
                <div className="row d-flex align-items-center">
                    <div className="col-md-7 col-sm-12">
                        <div data-AOS="fade-up" className="d-flex justify-content-around">
                            <img height="360px" width="400px" src={heroImg} alt="" />
                        </div>
                        <div className="pl-5">
                            <a target="_blank" className="text-light" to="https://github.com/Rayhan0Islam0Shagor"><FaGithub className="ml-0" /></a>
                            <a target="_blank" className="text-light" to="https://www.linkedin.com/in/rayhan045"><FaLinkedin className="ml-2" /></a>
                            <a target="_blank" className="text-light" to="https://www.facebook.com/Rayhan19980/"><FaFacebook className="ml-2" /></a>
                            <a target="_blank" className="text-light" to="https://www.instagram.com/is_rayhan_sh/"><FaInstagramSquare className="ml-2" /></a>
                            <a target="_blank" className="text-light" to="https://medium.com/@raihanislamshagor2"><FaMedium className="ml-2" /></a>
                            <h2 className="font-weight-bold text-light inline-block">
                                I'M <span ></span>
                                <span style={{ color: "#FFA330", textTransform: "uppercase" }}>
                                    <Typical
                                        steps={['Rayhan Islam', 1000, "a Programmer", 1000, "a stack learner", 1000]}
                                        loop={Infinity}
                                        wrapper="span"
                                    />
                                </span>
                            </h2>
                            <p className="text-white">A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.</p>
                            <p className="text-light text-break mt-0 pt-0"><strong><FontAwesomeIcon icon={faEnvelopeSquare} /> raihanislamshagor@gmail.com</strong></p>
                            <a target="_blank" className="text-light" to="https://www.linkedin.com/in/rayhan045"><button className="btn btn-success w-50">Hire me</button></a>
                        </div>
                    </div>

                    <div data-AOS="zoom-in" className="col-md-5 col-sm-12 pt-5">
                        <div>
                            <h2 className="skill mb-3">My Skills</h2>
                            <div className="technology">
                                {
                                    skills.map(skill =>
                                        <span>{skill.name}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <h4 className="skill mb-2 mt-3">I want to work with</h4>
                            <div className="technology">
                                {
                                    preferableSkills.map(skill =>
                                        <span>{skill.name}</span>
                                    )
                                }
                            </div>
                        </div>
                        <div>
                            <h4 className="skill mb-2 mt-3">Not to prefer with</h4>
                            <div className="technology">
                                {
                                    notPreferable.map(skill =>
                                        <span>{skill.name}</span>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;