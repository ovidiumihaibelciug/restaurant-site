import React from 'react';
import { NavLink } from 'react-router-dom';

const NavMenuItem = ({ menu }) => {
    return (
        <NavLink activeClassName='menu-active' to={'/menu/' + menu.id}>
            <div className="menu-nav-item">
                <span>
                    {menu.shortTitle}
                </span>
            </div>
        </NavLink>
    )
}

export default NavMenuItem;
