import React, { useEffect } from 'react';
import sadmac from '/assets/images/sadmac.png';

const NotFound = () => {

    

    return (
        <div className="grid notfound">
            <h1 className="pagetitle">Our Sincerest Apologies...</h1>
            <p>It seems that the page you have requested cannot be found, or does not exist.</p>
            <img className="sadmac" src={sadmac} alt="image of the Sad Macintosh icon from classic Mac OS" />
        </div>
    )
}

export default NotFound;