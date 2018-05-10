import React from 'react';

// import icon1 from '../assets/img/icon1';

import ScrollAnimation from 'react-animate-on-scroll'

const ServiceItem = ({ icon, delay }) => {
    return (
        <ScrollAnimation animateIn="lightSpeedIn" animateOut="fadeOut" delay={delay} >
            <div className="box service-item">
                <div className="service-icon" style={{ backgroundImage: `url(${icon})` }}>
                </div>
                <div className="service-title">
                    Lorem, ipsum dolor.
                </div>
                <div className="service-description">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium necessitatibus at molestias sit totam odio culpa debitis eveniet pariatur quis?
                </div>
            </div>
        </ScrollAnimation>
    )
}

export default ServiceItem
