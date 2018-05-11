import React from 'react'

import ScrollAnimation from 'react-animate-on-scroll';

const MenuItem = ({ menu }) => {
    const { id, name, price, description } = menu;
    return (
        <div className="menu-item">
            <ScrollAnimation animateIn="lightSpeedIn" animateOut="bounceOutRight" delay={id * 100} >
                <div className="item-header">
                    <div className="item-title">
                        {name}
                    </div>
                    <div className="item-price">
                        {price + "$"}
                    </div>
                </div>
                <div className="item-description">
                    {description}
                </div>
            </ScrollAnimation>
        </div >
    )
}

export default MenuItem
