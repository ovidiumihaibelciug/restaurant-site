import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutFooterItem from './AboutFooterItem';

const About = ({ data }) => {
    const { title, description, items } = data;
    return (
        <section id="about">
            <div className="container">
                <ScrollAnimation animateIn="fadeInDown">
                    <div className="about-title">
                        {title}
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" delay={500}>
                    <div className="about-description">
                        {description}
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn">
                    <div className="about-image"></div>
                </ScrollAnimation>
            </div>
            <div className="about-footer">
                {
                    items.map(item => <AboutFooterItem item={item} />)
                }
            </div>
        </section>
    );
}

export default About;