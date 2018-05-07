import React, { Component } from 'react'

export default class Menus extends Component {
    render() {
        return (
            <section id="menus">
                {/* <div className="menu-nav">
                    <div className="nav-container">
                        <div className="menu-nav-item">
                            <span>
                                Lunch
                            </span>
                        </div>
                        <div className="menu-nav-item">
                            <span>
                                Evening
                            </span>
                        </div>
                    </div>
                </div> */}
                <div className="container">
                    <div className="title">
                        Lunch table d'hote
                    </div>
                    <div className="menu">
                        <div className="menu-title">
                            Menu Title
                        </div>
                        <div className="menu-container">
                            <div className="menu-item">
                                <div className="item-header">
                                    <div className="item-title">
                                        Lorem, ipsum dolor. 1
                                </div>
                                    <div className="item-price">
                                        50$
                                </div>
                                </div>
                                <div className="item-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quam?
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-header">
                                    <div className="item-title">
                                        Lorem, ipsum dolor. 2
                                    </div>
                                    <div className="item-price">
                                        50$
                                    </div>
                                </div>
                                <div className="item-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quam?
                                    </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-header">
                                    <div className="item-title">
                                        Lorem, ipsum dolor. 3
                                    </div>
                                    <div className="item-price">
                                        50$
                                    </div>
                                </div>
                                <div className="item-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quam?
                                </div>
                            </div>
                            <div className="menu-item">
                                <div className="item-header">
                                    <div className="item-title">
                                        Lorem, ipsum dolor. 3
                                    </div>
                                    <div className="item-price">
                                        50$
                                    </div>
                                </div>
                                <div className="item-description">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, quam?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
