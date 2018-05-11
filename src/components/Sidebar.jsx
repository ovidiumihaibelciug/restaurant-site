import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../assets/img/1.png'
import ScrollAnimation from 'react-animate-on-scroll';

const Sidebar = () => {
    return (
        <section className="section-sidebar">
            <div className="navbar-logo animated rotateIn" style={{ backgroundImage: `url(${logo})` }} />
            <div className="navbar-menu">
                <div className="menu-item animated zoomIn">
                    <Link to="/">Home</Link>
                </div>
                <div className="menu-item animated zoomIn">
                    <Link to="/menus">Menus</Link>
                </div>
                <div className="menu-item animated zoomIn">
                    <Link to="/gallery">Gallery</Link>
                </div>
                <div className="menu-item animated zoomIn">
                    <Link to="/contact">Contact</Link>
                </div>
            </div>
        </section>

    );
}

export default Sidebar;