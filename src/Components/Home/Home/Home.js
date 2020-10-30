import React from 'react';
import Animation from '../Animation/Animation';
import Topbar from '../Shared/Topbar/Topbar'
import Body from './Body/Body';
import Header from './Header/Header';
import './Home.css'

const Home = () => {
    return (
        <div className="bg-dark">
            <div className="style-header">
                <Animation />
                <div className="header pt-3">
                    <Topbar />
                    <Header />
                </div>
            </div>
            <div className="body pt-5">
                <Body />
            </div>
        </div>

    );
};

export default Home;