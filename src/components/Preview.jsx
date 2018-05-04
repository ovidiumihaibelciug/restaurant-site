import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'

const Preview = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    let imgs = [
        {
            id: 1,
            img: 'http://unitedtemplates.com/food%20and%20restuarant/template2/img/banner.jpg',
            caption: 'Lorem ipsum'
        },
        {
            id: 2,
            img: 'http://ak7.picdn.net/shutterstock/videos/4448807/thumb/8.jpg?i10c=img.resize(height:160)',
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