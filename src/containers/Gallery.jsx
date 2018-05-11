import React, { Component } from 'react'

import GalleryItem from "../components/Gallery/GalleryItem";
import App from "../App";

export default class Gallery extends Component {

    state = {
        items: [
            {
                text: ' Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ut omnis fugit, ea. ',
                img: 'https://www.wien.info/media/images/41993-das-loft-sofitel-19to1.jpeg',
                side: 1,
            },
            {
                text: 'wqeqweqweqwe',
                img: 'http://apparelmagazine.co.nz/restaurantandcafe/wp-content/uploads/sites/3/2018/04/RC-NEWS-RESTAURANTS-TO-BECOME-HEALTH-HAVENS-0518.jpeg',
                side: 2,
            },
            {
                text: 'wqeqweqweqwe',
                img: 'http://apparelmagazine.co.nz/restaurantandcafe/wp-content/uploads/sites/3/2018/04/RC-NEWS-RESTAURANTS-TO-BECOME-HEALTH-HAVENS-0518.jpeg',
                side: 1,
            },
            {
                text: 'wqeqweqweqwe',
                img: 'http://apparelmagazine.co.nz/restaurantandcafe/wp-content/uploads/sites/3/2018/04/RC-NEWS-RESTAURANTS-TO-BECOME-HEALTH-HAVENS-0518.jpeg',
                side: 2,
            },
            {
                text: 'wqeqweqweqwe',
                img: 'http://apparelmagazine.co.nz/restaurantandcafe/wp-content/uploads/sites/3/2018/04/RC-NEWS-RESTAURANTS-TO-BECOME-HEALTH-HAVENS-0518.jpeg',
                side: 1,
            },
        ]
    }

    render() {
        const { items } = this.state;
        return (
            <App>
                <section id="gallery">
                    {
                        items.map(item => <GalleryItem item={item} />)
                    }
                </section>
            </App>
        )
    }
}
