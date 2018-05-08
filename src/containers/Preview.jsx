import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'

import App from '../App';
import About from '../components/About';

const Preview = () => {
    let imgs = [
        {
            id: 1,
            img: 'https://www.pixelstalk.net/wp-content/uploads/images1/Free-hd-restaurant-wallpapers.jpg',
            caption: 'Lorem ipsum'
        },
        {
            id: 2,
            img: 'https://www.pixelstalk.net/wp-content/uploads/images1/Restaurant-backgrounds-HD.jpg',
            caption: 'Lorem ipsum dolor situm'
        }
    ];

    return (
        <App>
            <div className="carousel">
                <BackgroundSlideshow images={[imgs[0].img, imgs[1].img]} />
            </div>
            <About />
        </App>
    )
}

export default Preview;