import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

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
                <ScrollAnimation animateIn="zoomIn" delay={100}>
                    <div className="footer-item">
                        <i className="fa fa-check"></i>
                        &nbsp;&nbsp;
                        Lorem ipsum dolor sit.
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" delay={300}>
                    <div className="footer-item">
                        <i className="fa fa-star"></i>
                        &nbsp;&nbsp;
                        Lorem, ipsum.
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" delay={500}>
                    <div className="footer-item">
                        <i class="fa fa-cutlery"></i>
                        &nbsp;&nbsp;
                        Lorem, ipsum dolor.
                </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="zoomIn" delay={700}>
                    <div className="footer-item">
                        <i class="fa fa-lemon-o"></i>
                        &nbsp;&nbsp;
                        Lorem, ipsum dolor.
                </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}

export default About;