import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

const GalleryItem = ({ item }) => {
    const { id, description, image } = item;

    return (
        <React.Fragment>
            {
                id % 2 === 1 ? (
                    <ScrollAnimation animateIn="slideInLeft" animateOut="fadeOut" >
                        <div className="gallery-row">
                            <div className="item gallery-item-text">{description}</div>
                            <div className="item gallery-item-image" style={{ backgroundImage: `url(${image})` }}></div>
                        </div>
                    </ScrollAnimation>
                ) : (
                        <ScrollAnimation animateIn="slideInRight" animateOut="fadeOut" >
                            <div className="gallery-row">
                                <div className="item gallery-item-image" style={{ backgroundImage: `url(${image})` }}></div>
                                <div className="item gallery-item-text">{description}</div>
                            </div>
                        </ScrollAnimation>
                    )
            }
        </React.Fragment >

    )
}

export default GalleryItem;