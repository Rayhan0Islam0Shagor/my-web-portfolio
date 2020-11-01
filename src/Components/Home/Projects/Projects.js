import React, { useEffect, useState } from 'react';
import FakeData from '../FakeData/FakeData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeBranch, faExternalLinkSquareAlt, faCircle } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Shared/Topbar/Topbar';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Projects = () => {

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])

    const [Projects, setProjects] = useState(FakeData);
    return (
        <section className="bg-dark">
            <Topbar />
            <div className="container pt-3 pb-5">
                <div className="row">
                    {
                        Projects.map(project =>

                            <div className="col-md-6 col-sm-12">
                                <div data-AOS="zoom-in" className="card m-2">
                                    <div className="custom">
                                        <img src={project.img} className="card-img-top p-3" alt="..." />
                                    </div>
                                    <div data-AOS="zoom-out">
                                        <div className="card-body custom-body">
                                            <h5 className="card-title text-center">{project.title}</h5>
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
                                                <a target="_blank" className="font-weight-bold text-primary" href={project.sourceCode}><FontAwesomeIcon color="black" icon={faCodeBranch} /> Source code </a>
                                                <a target="_blank" className="font-weight-bold text-primary" href={project.liveSite}><FontAwesomeIcon color="black" icon={faExternalLinkSquareAlt} /> Live site </a>
                                            </div>
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



// <div className="col-md-4 col-sm-6 col-12">
                            //     <div class="card" style={{ maxWidth: '18rem' }}>
                            //         <div class="w-100 p-2 custom">
                            //             <img src={project.img} class="card-img-top" alt="..." />
                            //         </div>
                            //         <div class="card-body">
                            //             <h5 class="card-title"></h5>
                            //             <Link to="/projects">Details</Link>
                            //             <div className="technology text-light">
                            //                 <span>ReactJs</span>
                            //                 <span>MongoDB</span>
                            //                 <span>HTML5</span>
                            //                 <span>NodeJs</span>
                            //             </div>
                            //         </div>
                            //         <div className="d-flex detail justify-content-around pb-3">
                            //             <a target="_blank" className="font-weight-bold text-primary" href={project.sourceCode}><FontAwesomeIcon color="black" icon={faCodeBranch} /> Source code </a>
                            //             <a target="_blank" className="font-weight-bold text-primary" href={project.liveSite}><FontAwesomeIcon color="black" icon={faExternalLinkSquareAlt} /> Live site </a>
                            //         </div>
                            //     </div>
                            // </div>