import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagramSquare, FaLinkedin, FaMedium, FaGithub } from 'react-icons/fa';
import TeamMember from '../../FakeData/Team';


const Footer = () => {
    const [members, setMembers] = useState(TeamMember);

    return (
        <section className="container text-center  pt-5 pb-3">
            <h2 className="text-light">My Team</h2>

            <div className="row pt-4">

                {
                    members.map(member =>
                        <div className="col-md-6 col-sm-12">
                            <div class="card mb-3 m-2" style={{ maxWidth: '540px' }}>
                                <div class="row no-gutters">
                                    <div class="col-md-4 pl-2">
                                        <img src={member.img} class="card-img pt-3" alt="..." />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title font-weight-bold">{member.name}</h5>
                                            <h6 class="card-text text-primary">{member.work}</h6>
                                            <p className="text-left">{member.shortDescription}</p>
                                            <div>
                                                <a target="_blank" className="text-dark" to="#"><FaGithub className="ml-0" /></a>
                                                <a target="_blank" className="text-dark" to="#"><FaLinkedin className="ml-2" /></a>
                                                <a target="_blank" className="text-dark" to="#"><FaFacebook className="ml-2" /></a>
                                                <a target="_blank" className="text-dark" to="#"><FaInstagramSquare className="ml-2" /></a>
                                                <a target="_blank" className="text-dark" to="#"><FaMedium className="ml-2" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
            <h3 className="text-light pt-5">Stay in touch</h3>
            <h6 className="text-light pb-5">I'd Love to hear from you . Whether you have a question or just want to say hi, feel free to drop a <br /> message. I'll try my best to get back to you!</h6>
            <Link to="/contactMe"><button className="btn btn-outline-success">Say Hello</button></Link>

            <footer className="Text-center font-weight-bold text-light pt-5">
                &copy;RAYHAN ISLAM SHAGOR 2020 || ALL RIGHT RESERVE
            </footer>

        </section >
    );
};

export default Footer;