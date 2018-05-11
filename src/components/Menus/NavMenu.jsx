import React, { Component } from 'react'

import NavMenuItem from './NavMenuItem';

export default class NavMenu extends Component {
    render() {
        const { menus } = this.props;
        return (
            <div className="menu-nav">
                <div className="nav-container">
                    {
                        menus.map(menu => {
                            return <NavMenuItem menu={menu} />
                        })
                    }
                </div>
            </div>
        )
    }
}
