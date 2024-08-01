import React from 'react';
import './layout.css';
import Header from './header.tsx';
import Hero from './hero.tsx';

const Layout = () => {
    return (
        <div className="layout">
            <Header/>
            <Hero/>
        </div>
    );
}

export default Layout;