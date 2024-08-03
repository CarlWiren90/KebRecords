import React from "react";
import './hero.css';

const Hero = () => {
    return (
        <div className="hero">
            <img src='./src/assets/hero2.jpg' className="hero-img"/>
            <img src='./src/assets/theprovingground.png' className="hero-text"/>
            <div className="hero-fader">
                
            </div>
        </div>
    );
}

export default Hero;