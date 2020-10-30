import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faExternalLinkSquareAlt, faCircle } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer';
import FakeData from '../../FakeData/FakeData'
import { Link } from 'react-router-dom';

const Body = () => {
    const [Projects, setProjects] = useState(FakeData)

    return (
        <div className="text-center">
            <h1 className="text-light pb-5">My Projects</h1>

            <div className="container">
                <div className="row">

                    {
                        Projects.map(project =>

                            <div className="col-md-6 col-sm-12">
                                <div class="card mb-3" style={{ maxWidth: '540px' }}>
                                    <div class="row no-gutters">
                                        <div class="col-md-4 pt-4 pl-2">
                                            <Link to="/projects">
                                                <img height="172px" width="167px" src={project.img} class="card-img" alt="..." />
                                            </Link>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">{project.title}</h5>
                                                <p class="card-text"><FontAwesomeIcon color="#726a95" icon={faCircle} /> {project.detail1.substring(0, 80) + "..."}</p>
                                                <h6 class="card-text"><FontAwesomeIcon color="#726a95" icon={faCircle} /> react, react-router-dom, firebase-authentication, Backend, Html5 </h6>
                                                <p class="card-text">
                                                    <div className="d-flex justify-content-around">
                                                        <a target="_blank" className="font-weight-bold text-primary" href={project.sourceCode}><FontAwesomeIcon color="black" icon={faCodeBranch} /> Source code </a>
                                                        <a target="_blank" className="font-weight-bold text-primary" href={project.liveSite}><FontAwesomeIcon color="black" icon={faExternalLinkSquareAlt} /> Live site </a>
                                                    </div>
                                                </p>
                                            </div>
                                        </div>
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
        </div>
    );
};

export default Body;