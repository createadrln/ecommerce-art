import React from 'react';
import './Banner.css';

function Banner() {
    return (
        <div className="banner">
            <div className="banner-text">
                <h1>Welcome to Digital Flyers & Invitations Shop!</h1>
                <p>Your one-stop shop for all digital event needs!</p>
            </div>
            <div className="banner-image">
                <img src="path/to/your/image.jpg" alt="Banner" />
            </div>
        </div>
    );
}

export default Banner;
