import React, { Component } from 'react';
import './assets/scss/App.css';
import 'animate.css';
import 'react-notifications/lib/notifications.css';

import Sidebar from './components/Sidebar';
import { HOST, config } from './utils';
import axios from 'axios';

import {fire} from './utils';

class App extends Component {
    state = {
        loading: true,
        data: [],
    }

    render() {
        const { children } = this.props;
        const { loading, data } = this.state;
        
        return (
            <section className="App flex-layout">
                <Sidebar />
                <div className="app-content">
                 {children}
                </div>
            </section>
        );
    }
}

export default App;
