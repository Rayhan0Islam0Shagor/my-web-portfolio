import React from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import heroImg from '../../../images/hero-img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import Typical from 'react-typical';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa';

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
    return (
        <div className="bg-dark">
            <Topbar />
            <div style={{ paddingBottom: "20px" }} className="text-light container pt-10">
                <div className="row">
                    <div className="col-md-7 col-sm-12">
                        <div className="text-light">
                            <div className="pl-4">
                                <img height="300px" width="300px" src={heroImg} alt="" />
                            </div>
                            <a target="_blank" className="text-light" href="https://github.com/Rayhan0Islam0Shagor"><FaGithub className="ml-0" /></a>
                            <a target="_blank" className="text-light" href="www.linkedin.com/in/rayhan045"><FaLinkedin className="ml-2" /></a>
                            <a target="_blank" className="text-light" href="https://www.facebook.com/Rayhan19980/"><FaFacebook className="ml-2" /></a>
                            <a target="_blank" className="text-light" href="https://www.instagram.com/is_rayhan_sh/"><FaInstagramSquare className="ml-2" /></a>
                            <a target="_blank" className="text-light" href="https://medium.com/@raihanislamshagor2"><FaMedium className="ml-2" /></a>
                        </div>
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
                        <button className="btn btn-success w-50">Hire me</button>
                    </div>

                    <div className="col-md-5 col-sm-12">
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