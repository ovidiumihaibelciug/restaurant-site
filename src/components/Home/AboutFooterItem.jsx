import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutFooterItem = ({ item }) => {
    const { id, title, icon } = item;
    return (
        <ScrollAnimation animateIn="zoomIn" delay={id * 100}>
            <div className="footer-item">
                <i className={"fa fa-" + icon}></i>
                &nbsp;&nbsp;
                {title}
            </div>
        </ScrollAnimation>
    )
}

export default AboutFooterItem
