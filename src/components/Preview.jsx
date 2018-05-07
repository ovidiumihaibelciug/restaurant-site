import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'

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
        <div className="carousel">
            <BackgroundSlideshow images={[imgs[0].img, imgs[1].img]} />
        </div>
    )
}

export default Preview;