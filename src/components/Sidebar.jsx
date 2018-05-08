import React from 'react';

import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <section className="section-sidebar">
            <div className="navbar-logo"><span>CTRL</span></div>
            <div className="navbar-menu">
                <div className="menu-item"><Link to="/home">Home</Link></div>
                <div className="menu-item"><Link to="/menus">Menus</Link></div>
                <div className="menu-item"><Link to="/gallery">Gallery</Link></div>
                <div className="menu-item"><Link to="/contact">Contact</Link></div>
            </div>
        </section>
    );
}

export default Sidebar;