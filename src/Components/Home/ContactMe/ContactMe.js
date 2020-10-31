import React, { useEffect } from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import './ContactMe.css';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import AOS from 'aos';
import 'aos/dist/aos.css';

toast.configure();
const ContactMe = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, [])

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('email_template', 'email_template', e.target, 'user_z2OsuESdq1GQwRKKe0F5Q')
            .then((result) => {
                if (result) {
                    console.log(result.text);
                    toast.success('Message send successfully');
                }
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="bg-dark page">
            <Topbar />
            <div data-AOS="fade-down" className="container w-50">
                <form className="contact-form" onSubmit={sendEmail}>
                    <label className="text-light">Name</label>
                    <input required type="text" name="name" className=" form-control mb-4 mr-1 w-100" placeholder="user name" />
                    <label className="text-light">Email</label>
                    <input required className="form-control mb-4" placeholder="example@gmail.com" type="email" name="email" />
                    <label className="text-light">Message</label>
                    <textarea placeholder="write message..." className="form-control" name="" id="" cols="30" rows="5" name="message" />
                    <br />
                    <input className="btn btn-outline-warning w-100" type="submit" value="Send" />
                </form>
            </div>
        </div>
    );
};

export default ContactMe;