import React from 'react';
import Slider from "react-slick";

import App from '../App';
import About from '../components/About';
import Services from '../components/Services';

import ScrollAnimation from 'react-animate-on-scroll';

const scrollDown = () => {
    document.querySelector('#about').scrollIntoView({
        behavior: 'smooth', block: "start", inline: "nearest"
    })
}

const Preview = () => {
    let imgs = [
        {
            id: 1,
            img: 'https://www.pixelstalk.net/wp-content/uploads/images1/Free-hd-restaurant-wallpapers.jpg',
            caption: 'Lorem ipsum'
        },
        {
            id: 2,
            img: 'https://www.pixelstalk.net/wp-content/uploads/images1/Restaurant-backgrounds-HD.jpg',
            caption: 'Lorem ipsum dolor situm'
        }
    ];
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
    };

    return (
        <App>
            <section className="preview-section">
                <div className="carousel">
                    <Slider {...settings}>
                        <div>
                            <img src={imgs[0].img} alt="" />
                            <div className="preview-text animated fadeInUp">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>
                        <div>
                            <img src={imgs[1].img} alt="" />
                            <div className="preview-text animated fadeInUp">
                                Lorem, ipsum dolor.
                            </div>
                        </div>
                    </Slider>
                    <div className="go-down-btn" onClick={scrollDown}>
                        <i className="fa fa-arrow-down"></i>
                    </div>
                </div>
                <About />
                <Services />
            </section>
        </App >
    )
}

export default Preview;