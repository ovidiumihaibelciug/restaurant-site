import React, { Component } from 'react'

import GalleryItem from "../components/Gallery/GalleryItem";
import App from "../App";

import axios from 'axios';
import { HOST } from '../utils';

import Loading from '../components/Loading';

export default class Gallery extends Component {

    state = {
        items: [],
        loading: true
    }

    componentDidMount() {
        axios.get(HOST + "gallery.json")
            .then(({ data }) => {
                this.setState({
                    items: data.gallery,
                    loading: false
                });
            })
            .catch(err => console.log(err));
    }

    render() {
        const { loading, items } = this.state;
        return (
            <App>
                {
                    loading ? <div>Loading..</div> : (

                        <section id="gallery">
                            {
                                items.map(item => <GalleryItem item={item} />)
                            }
                        </section>
                    )
                }
            </App>
        )
    }
}
