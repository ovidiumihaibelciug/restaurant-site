import React, { Component } from 'react';
import App from '../App';
import Map from '../components/Map';

export default class Contact extends Component {

    componentWillMount() {
        // let map = new google.maps.Map(document.getElementById('map'), {
        //     center: { lat: -34.397, lng: 150.644 },
        //     zoom: 8
        // });
    }

    render() {
        return (
            <App>
                <section id="contact">
                    <div className="contact-form">
                        <div className="contact-title">
                            Contact us
                        </div>
                        <form action="">
                            <div className="inputs-inline">
                                <input className="contact-input" type="text" placeholder="Name" />
                                <input className="contact-input" type="email" placeholder="Email" />
                            </div>
                            <input className="contact-input contact-subject" type="text" placeholder="Subject" />
                            <br />
                            <textarea className="contact-input contact-textarea" type="text" placeholder="Message" rows="5" />
                            <input className="contact-button" type="submit" />
                        </form>
                    </div>
                    <div className="contact-map">
                        <Map />
                    </div>
                </section>

                {/*  */}
            </App>
        )
    }
}
