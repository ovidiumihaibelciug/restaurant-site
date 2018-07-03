import React, { Component } from 'react';
import App from '../App';
import Map from '../components/Map';
import firebase from '../firebase';

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
        alert: false
    }

    handleSubmit = e => {
        e.preventDefault();
        const itemsRef = firebase.database().ref('messages');
        const { name, email, subject, message } = this.state;
        const item = {
            name, email, subject, message
        }
        itemsRef.push(item);
        this.setState({
            alert: true,
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { alert, name, email, subject, message } = this.state;
        return (
            <App>
                <section id="contact">
                    <div className="contact-form">
                        <div className="contact-title">
                            Contact us
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="inputs-inline">
                                <input onChange={this.handleChange} name="name" value={name} className="contact-input" type="text" placeholder="Name" />
                                <input onChange={this.handleChange} name="email" value={email} className="contact-input" type="email" placeholder="Email" />
                            </div>
                            <input onChange={this.handleChange} name="subject" value={subject} className="contact-input contact-subject" type="text" placeholder="Subject" />
                            <br />
                            <textarea onChange={this.handleChange} name="message" value={message} className="contact-input contact-textarea" type="text" placeholder="Message" rows="5" />
                            <input className="contact-button" type="submit" />
                        </form>
                        {
                            alert && <div className="alert-success alert-active">
                                Message sent!
                            </div>
                        }
                    </div>
                    <div className="contact-map">
                        <Map />
                    </div>
                </section>
            </App>
        )
    }
}
