import React from 'react';
import ServiceItem from './ServiceItem';

import icon1 from '../../assets/img/icon1.svg';
import icon2 from '../../assets/img/icon2.svg';
import icon3 from '../../assets/img/icon3.svg';


const Services = ({ data }) => {
    return (
        <div className="services-section">
            {
                data.map(item => {
                    let icon;
                    if (item.id === 1) {
                        icon = icon2;
                    } else if (item.id === 2) {
                        icon = icon3;
                    } else {
                        icon = icon1
                    }
                    return <ServiceItem key={item.id} icon={icon} item={item} />
                })
            }
        </div>
    )
}

export default Services
