import React, { Component } from 'react'
import Slider from "react-slick";

import App from '../App';
import About from '../components/Home/About';
import Services from '../components/Home/Services';

import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';
import { HOST } from '../utils';
import Loading from '../components/Loading';


export default class Preview extends Component {

    state = {
        loading: true,
        data: {}
    }

    componentDidMount() {
        axios.get(HOST + 'home.json')
            .then(({ data }) => {
                setTimeout(() => {
                    this.setState({
                        data: data,
                        loading: false
                    });
                }, 1000)
            }).catch(res => console.log(res));
    }

    scrollDown = () => {
        document.querySelector('#about').scrollIntoView({
            behavior: 'smooth', block: "start", inline: "nearest"
        })
    }



    render() {
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
        const { loading, data } = this.state;
        return (
            <React.Fragment>
                {
                    loading ? <Loading /> : (
                        <App>
                            <section className="preview-section">
                                <div className="carousel">
                                    <Slider {...settings}>
                                        {
                                            data.preview.map(item => {
                                                return (
                                                    <div key={item.id}>
                                                        <img src={item.image} alt="" />
                                                        <div className="preview-text animated fadeInUp">
                                                            {item.caption}
                                                        </div>
                                                    </div>)
                                            })
                                        }
                                    </Slider>
                                    <div className="go-down-btn" onClick={this.scrollDown}>
                                        <i className="fa fa-arrow-down"></i>
                                    </div>
                                </div>
                                <About data={data.about} />
                                <Services data={data.services} />
                            </section>
                        </App>
                    )

                }
            </React.Fragment>
        )
    }
}
