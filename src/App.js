import React, { Component } from 'react';
import './assets/scss/App.css';
import 'animate.css';

import Sidebar from './components/Sidebar';

class App extends Component {
    render() {
        return (
            <section className="App flex-layout">
                <Sidebar />
                <div className="app-content">
                    {this.props.children}
                </div>
            </section>
        );
    }
}

export default App;
