import React from 'react';

import ScrollAnimation from 'react-animate-on-scroll';

const ServiceItem = ({ icon, item }) => {
    const { id, title, description } = item;
    return (
        <ScrollAnimation className="box service-item" animateIn="lightSpeedIn" animateOut="fadeOut" delay={id * 400} >
            <div className="service-icon" style={{ backgroundImage: `url(${icon})` }}>
            </div>
            <div className="service-title">
                {title}
            </div>
            <div className="service-description">
                {description}
            </div>
        </ScrollAnimation>
    )
}

export default ServiceItem;
