import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href='#'><img src='./src/assets/Info.png' className='navbar-img'/></a>
            <a href='#'><img src='./src/assets/Routes.png' className='navbar-img'/></a>
            <a href='#'><img src='./src/assets/OfficialRecords.png' className='navbar-img'/></a>
            <a href='#'><img src='./src/assets/Submitrecord.png' className='navbar-img'/></a>
            <a href="#"><img src='./src/assets/Contact.png' className='navbar-img'/></a>
        </div>
    );
}

export default Navbar;