import React from 'react';
import './header.css';
import Navbar from './navbar.tsx';

const Header = () => {
    return(
        <div className='header'>
            <div className='logo'>
                <img src='./src/assets/logo2.png' className='logo-img'/>
            </div>
            <div className='logo-txt'>
                <h1 className='logo-txt1'>
                    Kebnekaise
                </h1>
                <h1 className='logo-txt2'>
                    Records
                </h1>
            </div>
            <Navbar/>
            <div className='contact'>
                Contact
            </div>
        </div>     
    );
}

export default Header;