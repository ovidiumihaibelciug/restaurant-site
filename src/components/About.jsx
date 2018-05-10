import React from 'react';

const About = () => {
    return (
        <section id="about">
            <div className="container">
                <div className="about-title">
                    ~ About us ~
                </div>
                <div className="about-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corporis sunt beatae earum corrupti maiores optio omnis cum dolorem incidunt, dolor ipsa voluptatibus. Repellendus qui, maxime magni iure tempora sint?
                </div>
                <div className="about-image"></div>
            </div>
            <div className="about-footer">
                <div className="footer-item">
                    <i className="fa fa-check"></i>
                    &nbsp;&nbsp;
                    Lorem ipsum dolor sit.
                </div>
                <div className="footer-item">
                    <i className="fa fa-star"></i>
                    &nbsp;&nbsp;
                    Lorem, ipsum.
                </div>
                <div className="footer-item">
                    <i class="fa fa-cutlery"></i>
                    &nbsp;&nbsp;
                    Lorem, ipsum dolor.
                </div>
                <div className="footer-item">
                    <i class="fa fa-lemon-o"></i>
                    &nbsp;&nbsp;
                    Lorem, ipsum dolor.
                </div>
            </div>
        </section>
    );
}

export default About;