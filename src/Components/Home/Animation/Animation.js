import React from 'react';
import Particles from 'react-particles-js';

const Animation = () => {
    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 160,
                        density: {
                            enable: false,
                        },
                    },
                    size: {
                        value: 4,
                        random: true,
                        anim: {
                            speed: 4,
                            size_min: 0.3,
                        },
                    },
                    line_linked: {
                        enable: false,
                    },
                    move: {
                        random: true,
                        speed: 2,
                        direction: 'top',
                        out_mode: 'out',
                    },
                },
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: {
                            enable: true,
                            mode: "push",
                        },
                        onHover: {
                            enable: true,
                            mode: "repulse",
                        },
                        resize: true,
                    },
                    events: {
                        onhover: {
                            enable: true,
                            mode: 'bubble',
                        },
                        onclick: {
                            enable: true,
                            mode: 'repulse',
                        },
                    },
                    modes: {
                        bubble: {
                            distance: 250,
                            duration: 2,
                            size: 0,
                            opacity: 0,
                        },
                        repulse: {
                            distance: 400,
                            duration: 4,
                        },
                    },
                },
            }}
        />
    );
};

export default Animation;