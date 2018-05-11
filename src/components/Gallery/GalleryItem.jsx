import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const GalleryItem = ({ item }) => {
    const { side, text, img } = item;

    return (
        <React.Fragment>
            {
                side === 1 ? (
                    <ScrollAnimation animateIn="slideInLeft" animateOut="fadeOut" >
                        <div className="gallery-row">
                            <div className="item gallery-item-text">{text}</div>
                            <div className="item gallery-item-image" style={{ backgroundImage: `url(${img})` }}></div>
                        </div>
                    </ScrollAnimation>
                ) : (
                        <ScrollAnimation animateIn="slideInRight" animateOut="fadeOut" >
                            <div className="gallery-row">
                                <div className="item gallery-item-image" style={{ backgroundImage: `url(${img})` }}></div>
                                <div className="item gallery-item-text">{text}</div>
                            </div>
                        </ScrollAnimation>
                    )
            }
        </React.Fragment >

    )
}

export default GalleryItem;