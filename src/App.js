import React, { Component } from 'react';
import './assets/scss/App.css'

import Sidebar from './components/Sidebar';
import Preview from './components/Preview';

class App extends Component {
    render() {
        return (
            <section className="App flex-layout">
                <Sidebar />
                <div className="app-content">
                    <Preview />
                </div>
            </section>
        );
    }
}

export default App;
