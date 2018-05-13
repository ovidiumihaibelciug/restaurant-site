import React from 'react';

import loader from '../assets/img/loader.gif';

const Loading = () => {
    return (
        <div id="loader" style={{ backgroundImage: `url(${loader})`, height: "100vh" }}></div>
    )
}

export default Loading;
