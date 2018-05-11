import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import AboutFooterItem from './AboutFooterItem';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <ScrollAnimation animateIn="fadeInDown">
                    <div className="about-title">
                        ~ About us ~
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInDown" delay={500}>
                    <div className="about-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis sunt beatae earum corrupti maiores optio omnis cum dolorem incidunt, dolor ipsa voluptatibus. Repellendus qui, maxime magni iure tempora sint?
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn">
                    <div className="about-image"></div>
                </ScrollAnimation>
            </div>
            <div className="about-footer">
                <AboutFooterItem />
                <AboutFooterItem />
                <AboutFooterItem />
                <AboutFooterItem />
            </div>
        </section>
    );
}

export default About;