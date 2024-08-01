import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <a href='#' className='link'>Info</a>
            <a href='#' className='link'>Routes</a>
            <a href='#' className='link'>Official Records</a>
            <a href='#' className='link'>Submit Records</a>
        </div>
    );
}

export default Navbar;