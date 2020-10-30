import React, { useState } from 'react';
import FakeData from '../FakeData/FakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faExternalLinkSquareAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Shared/Topbar/Topbar';

const Projects = () => {
    const [Projects, setProjects] = useState(FakeData);
    return (
        <section className="bg-dark">
            <Topbar />
            <div className="container top">
                <div className="row">
                    {
                        Projects.map(project =>

                            <div className="col-md-6 col-sm-12">
                                <div className="card m-2">
                                    <img height="300px" width="500px" src={project.img} className="card-img-top p-3" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">{project.title}</h5>
                                        <p className="card-text text-left">
                                            <FontAwesomeIcon color="#726a95" icon={faCircle} /> {project.detail1}
                                            <br />
                                            <FontAwesomeIcon color="#726a95" icon={faCircle} /> {project.detail2}
                                            <br />
                                            <FontAwesomeIcon color="#726a95" icon={faCircle} />
                                            <span className="font-weight-bold text-uppercase"> Technology Used: {project.technologyUsed}</span>
                                        </p>
                                    </div>
                                    <div className="card-footer">
                                        <div className="d-flex justify-content-around">
                                            <a className="font-weight-bold text-primary" href={project.sourceCode}><FontAwesomeIcon color="black" icon={faCodeBranch} /> Source code </a>
                                            <a className="font-weight-bold text-primary" href={project.liveSite}><FontAwesomeIcon color="black" icon={faExternalLinkSquareAlt} /> Live site </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }
                </div>
            </div>
        </section>


    );
};

export default Projects;