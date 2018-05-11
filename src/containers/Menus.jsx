import React, { Component } from 'react';

import App from '../App';
import NavMenu from '../components/Menus/NavMenu';
import MenuItem from '../components/Menus/MenuItem';
import MenusContainer from '../components/Menus/MenusContainer';

export default class Menus extends Component {
    render() {
        return (
            <App>
                <section id="menus">
                    <NavMenu />
                    <MenusContainer>
                        <div className="menu">
                            <div className="menu-title">
                                Menu Title
                            </div>
                            <div className="menu-container">
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                                <MenuItem />
                            </div>
                        </div>
                    </MenusContainer>

                </section>
            </App>
        )
    }
}
