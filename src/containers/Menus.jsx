import React, { Component } from 'react';

import App from '../App';
import NavMenu from '../components/Menus/NavMenu';
import MenuItem from '../components/Menus/MenuItem';
import MenusContainer from '../components/Menus/MenusContainer';

import axios from 'axios';
import { HOST } from '../utils';

export default class Menus extends Component {

    state = {
        menus: [],
        menuType: {},
        loading: true
    }

    getMenus = (props) => {
        axios.get(HOST + 'menus.json')
            .then(({ data }) => {
                let menuId = props.match.params.menu;
                menuId = menuId ? parseInt(menuId) : 1;
                console.log("AAAAAAA", menuId)
                let menuType = data.menus.filter(item => item.id === menuId);
                console.log("VVVVVVVVVV", menuType);
                this.setState({
                    menus: data.menus,
                    menuType: menuType[0],
                    loading: false
                });
            }).catch(res => console.log(res));
    }

    componentWillMount() {
        this.getMenus(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.getMenus(nextProps);
    }

    render() {
        const { loading, menus, menuType } = this.state;
        return (
            <App>
                {
                    loading ? <div>Loading</div> : (
                        <section id="menus">
                            <NavMenu menus={menus} />
                            <MenusContainer title={menuType.longTitle}>
                                {
                                    menuType.menus.map(menu => {
                                        return (
                                            <div className="menu">
                                                <div className="menu-title">
                                                    {menu.title}
                                                </div>
                                                <div className="menu-container">
                                                    {
                                                        menu.items.map(menuItem => (
                                                            <MenuItem key={menuItem.id} menu={menuItem} />
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </MenusContainer>
                        </section>
                    )
                }
            </App>
        )
    }
}
