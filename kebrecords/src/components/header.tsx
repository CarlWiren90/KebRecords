import React from 'react';
import './header.css';

const Header = () => {
    return(
        <div className='header'>
            <div className='wrapper'>
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
            </div>
            <div className='contact'>
                Contact
            </div>
        </div>     
    );
}

export default Header;