import React, { Component } from 'react';
import './assets/scss/App.css'

import Sidebar from './components/Sidebar';
import Preview from './components/Preview';
import Menus from './components/Menus';
import Gallery from './components/Gallery';

class App extends Component {
    render() {
        return (
            <section className="App flex-layout">
                <Sidebar />
                <div className="app-content">
                    <Preview />
                    <Menus />
                    <Gallery />
                </div>
            </section>
        );
    }
}

export default App;
