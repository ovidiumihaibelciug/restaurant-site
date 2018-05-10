import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/img/1.png'

const Sidebar = () => {
    return (
        <section className="section-sidebar">
            <div className="navbar-logo" style={{ backgroundImage: `url(${logo})` }}>
            </div>
            <div className="navbar-menu">
                <div className="menu-item"><Link to="/">Home</Link></div>
                <div className="menu-item"><Link to="/menus">Menus</Link></div>
                <div className="menu-item"><Link to="/gallery">Gallery</Link></div>
                <div className="menu-item"><Link to="/contact">Contact</Link></div>
            </div>
        </section>
    );
}

export default Sidebar;