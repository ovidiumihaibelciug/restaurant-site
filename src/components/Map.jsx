import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import { mapStyles } from '../utils';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default class Map extends Component {
    static mapOptions = {
        styles: [{ stylers: [{ 'saturation': -100 }, { 'gamma': 0.8 }, { 'lightness': 4 }, { 'visibility': 'on' }] }] // straight out of something like snazzymaps
    };
    static defaultProps = {
        center: { lat: 47.1585, lng: 27.6014 },
        zoom: 11,
        styles: mapStyles,
        defaultOptions: this.mapOptions
    }



    render() {
        return (
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyCxTTXT3XyYt1MMy10Y7yBEzMiNbd1b7Eo" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    styles={mapStyles}
                    options={{ styles: mapStyles }}
                >
                    <AnyReactComponent
                        lat={47.1585}
                        lng={27.6014}
                        text={'Restaurant'}
                    />
                </GoogleMapReact>
            </div>
        )
    }
}