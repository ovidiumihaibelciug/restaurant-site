import React from 'react';

const Sidebar = () => {
    return (
        <section className="section-sidebar">
            <div className="navbar-logo"><span>CTRL</span></div>
            <div className="navbar-menu">
                <div className="menu-item"><a href="#menus">Menus</a></div>
                <div className="menu-item"><a href="">About Us</a></div>
                <div className="menu-item"><a href="">Gallery</a></div>
                <div className="menu-item"><a href="">Contact</a></div>
            </div>
        </section>
    );
}

export default Sidebar;