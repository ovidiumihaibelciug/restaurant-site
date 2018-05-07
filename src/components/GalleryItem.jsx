import React from 'react';

const GalleryItem = ({ item }) => {
    const { side, text, img } = item;

    return (
        <div className="gallery-item">
            {
                side === 1 ? (
                    <React.Fragment>
                        <div className="item gallery-item-text">{text}</div>
                        <div className="item gallery-item-image" style={{ backgroundImage: `url(${img})` }}></div>
                    </React.Fragment>
                ) : (
                        <React.Fragment>
                            <div className="item gallery-item-image" style={{ backgroundImage: `url(${img})` }}></div>
                            <div className="item gallery-item-text">{text}</div>
                        </React.Fragment>
                    )
            }
        </div>
    )
}

export default GalleryItem;