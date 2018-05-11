import React, { Component } from 'react'

import NavMenuItem from './NavMenuItem';

export default class NavMenu extends Component {
    render() {
        return (
            <div className="menu-nav">
                <div className="nav-container">
                    <NavMenuItem />
                    <NavMenuItem />
                    <NavMenuItem />
                </div>
            </div>
        )
    }
}
