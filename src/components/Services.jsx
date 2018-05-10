import React from 'react';
import ServiceItem from '../components/ServiceItem';

import icon1 from '../assets/img/icon1.svg';
import icon2 from '../assets/img/icon2.svg';
import icon3 from '../assets/img/icon3.svg';


const Services = () => {
    return (
        <div className="services-section">
            <ServiceItem icon={icon2} delay={0} />
            <ServiceItem icon={icon3} delay={500} />
            <ServiceItem icon={icon1} delay={1000} />
        </div>
    )
}

export default Services
