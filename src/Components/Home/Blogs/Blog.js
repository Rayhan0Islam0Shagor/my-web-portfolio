import React from 'react';
import Topbar from '../Shared/Topbar/Topbar';
import Typical from 'react-typical';

const Blog = () => {
    return (
        <div className="bg-dark">
            <Topbar />
            <div style={{ height: "100vh" }} className="text-light container text-center top">
                <h2 className="font-weight-bold text-light inline-block">
                    Coming soon <span ></span>
                    <span style={{ color: "#FFA330", textTransform: "uppercase" }}>
                        <Typical
                            steps={['...', 1500]}
                            loop={Infinity}
                            wrapper="span"
                        />
                    </span>
                </h2>
            </div>

        </div>
    );
};

export default Blog;