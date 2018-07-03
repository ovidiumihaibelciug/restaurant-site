import React, { Component } from 'react';
import App from '../App';
import firebase from '../firebase';

import axios from 'axios';
import { HOST } from '../utils';

export default class Contact extends Component {

    state = {
        name: '',
        email: '',
        date: '',
        hour: '',
        alert: false,
        schedule: '',
        loading: true
    }

    componentDidMount() {
        axios.get(HOST + "schedule.json")
            .then(({ data }) => {
                console.log(data);
                this.setState({
                    schedule: data.schedule,
                    loading: false
                });
            })
            .catch(err => console.log(err));
    }

    handleSubmit = e => {
        e.preventDefault();
        const itemsRef = firebase.database().ref('books');
        const { name, email, date, hour } = this.state;
        const item = {
            name, email, date, hour
        }
        itemsRef.push(item);
        this.setState({
            alert: true,
            name: '',
            email: '',
            date: '',
            hour: '',
        });
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { alert, name, email, date, hour, schedule, loading } = this.state;
        console.log(schedule);
        return (
            <App>
                <section id="contact">
                    <div className="contact-form">
                        <div className="contact-title">
                            Book a table
                        </div>
                        <form onSubmit={this.handleSubmit}>
                            <div className="inputs-inline">
                                <input onChange={this.handleChange} name="name" value={name} className="contact-input" type="text" placeholder="Name" />
                                <input onChange={this.handleChange} name="email" value={email} className="contact-input" type="email" placeholder="Email" />
                            </div>
                            <input onChange={this.handleChange} type="date" name="date" value={date} className="contact-input contact-subject" placeholder="Subject" />
                            <input onChange={this.handleChange} type="time" name="hour" value={hour} className="contact-input contact-message" placeholder="Hour" />
                            <input className="contact-button" type="submit" />
                        </form>
                        {
                            alert && <div className="alert-success alert-active">
                                Message sent!
                            </div>
                        }
                    </div>
                    <div className="book-schedule">
                        ~ Schedule ~
                        {
                            !loading && schedule.map(item => {
                                return (
                                    <div>
                                        <div>{item.day}</div>
                                        <div>{item.hours}</div>
                                        <br />
                                    </div>
                                )
                            })
                        }
                    </div>
                </section>
            </App>
        )
    }
}
