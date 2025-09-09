import React, {useEffect, useRef} from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ParallaxScene.css';

gsap.registerPlugin(ScrollTrigger);

const ParallaxScene = () => {
    const containerRef = useRef(null);
    useEffect(() => {
        const layers = containerRef.current.querySelectorAll('.layer');
        
        layers.forEach((layer, index) => {
            gsap.to(layer, {
                y: -(100 + index * 100), // deeper layers move less
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    // markers: true, // Uncomment for debugging
                },
            })
            gsap.to(".bird", {
                x: "-100vw", // Move left across the full viewport width
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
                    // markers: true, // Uncomment to debug
                },
            });
        })
        gsap.from(".welcome-text", {
            opacity: 1,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top center",
                toggleActions: "play none none reverse",
            },
        })

    }, []);
    return (
        <div className="parallax-container" ref={containerRef}>
            <div className="layer background"></div>
            <div className="layer forest"></div>
            <div className="layer foliage"></div>
            <div className="layer bird"></div>
            <h1 className='welcome-text'>Welcome to the Wilderness</h1>
        </div>
    )
}

export default ParallaxScene;