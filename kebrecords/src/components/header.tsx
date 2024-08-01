import React from 'react';
import './header.css';
import Navbar from './navbar.tsx';

const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <img src='./src/assets/logo.png'/>
            </div>
            <div className='contact'>
                <img src='./src/assets/Contact.png'/>
            </div>
            <Navbar/>
        </div>     
    );
}

export default Header;