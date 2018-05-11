import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutFooterItem = () => {
    return (
        <ScrollAnimation animateIn="zoomIn" delay={300}>
            <div className="footer-item">
                <i className="fa fa-star"></i>
                &nbsp;&nbsp;
                Lorem, ipsum.
                    </div>
        </ScrollAnimation>
    )
}

export default AboutFooterItem
