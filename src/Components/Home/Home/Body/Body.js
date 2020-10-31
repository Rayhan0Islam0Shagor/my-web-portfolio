import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faExternalLinkSquareAlt, faCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
import FakeData from '../../FakeData/FakeData'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Body = () => {

    useEffect(() => {
        AOS.init({ duration: 500 });
    }, [])

    const first3 = FakeData.slice(0, 3);
    const [Projects, setProjects] = useState(first3)

    return (
        <div className="text-center">
            <h1 className="text-light pb-5">My Projects</h1>
            <div className="container">
                <div className="row">
                    {
                        Projects.map(project =>
                            <div data-AOS="fade-up" class="row rounded no-gutters bg-light position-relative m-2">
                                <div style={{ overflow: "hidden" }} class="col-md-6 mb-md-0 p-md-4">
                                    <Link to="/projects">
                                        <div className="custom">
                                            <img src={project.img} class="w-100" alt="..." />
                                        </div>
                                    </Link>
                                </div>
                                <div data-AOS="zoom-in" class="col-md-6 position-static p-4 pl-md-0">
                                    <h5 class="mt-0">{project.title}</h5>
                                    <p className="text-left text-justify"><FontAwesomeIcon color="purple" icon={faCircle} /> {project.detail1}</p>
                                    <p className="text-left text-justify"><FontAwesomeIcon color="purple" icon={faCircle} /> {project.detail2}</p>
                                    <div data-AOS="zoom-out" className="technology py-5 text-light">
                                        <span>ReactJs</span>
                                        <span>MongoDB</span>
                                        <span>HTML5</span>
                                        <span>NodeJs</span>
                                    </div>
                                    <div data-AOS="zoom-out" className="d-flex detail justify-content-around pt-2">
                                        <a target="_blank" className="font-weight-bold text-primary" to={project.sourceCode}><FontAwesomeIcon color="black" icon={faCodeBranch} /> Source code </a>
                                        <a target="_blank" className="font-weight-bold text-primary" to={project.liveSite}><FontAwesomeIcon color="black" icon={faExternalLinkSquareAlt} /> Live site </a>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <section>
                    <Footer />
                </section>
            </div >
        </div >
    );
};

export default Body;