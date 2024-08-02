import React from 'react';
import './layout.css';
import Header from './header.tsx';
import Hero from './hero.tsx';

const Layout = ({children}) => {
    return (
        <div className="layout">
            <Header/>
            <Hero/>
            <main>
                {children}
            </main>
        </div>
    );
}

export default Layout;