import React, { useCallback } from "react"
import Particles from "react-particles"
import { loadFull } from "tsparticles"


const Particle = () => {


    const options = {
        // background: {
        //     color: {
        //         value: "#1266B5",
        //     },
        // },
        fpsLimit: 60,
        interactivity: {
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#90a0d9",
            },
            links: {
                color: "#90a0d9",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            // fullScreen: {
            //     enable: true,
            //     zIndex: 5
            //   },
            collisions: {
                enable: true,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: true,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 60,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
            }
            

    const particlesInit = useCallback((engine)=> {
        loadFull(engine)
    }, [])

    return <Particles init={particlesInit} options={options} />
}

export default Particle