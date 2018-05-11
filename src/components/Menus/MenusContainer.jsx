import React, { Component } from 'react'

import MenuItem from './MenuItem';

export default class MenusContainer extends Component {
    render() {
        const { children, title } = this.props;
        return (
            <div className="container">
                <div className="title">
                    {title}
                </div>
                {children}
            </div>
        )
    }
}
