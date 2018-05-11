import React, { Component } from 'react'

import MenuItem from './MenuItem';

export default class MenusContainer extends Component {
    render() {
        const { children } = this.props;
        return (
            <div className="container">
                <div className="title">
                    Lunch table d'hote
                </div>
                {children}
            </div>
        )
    }
}
