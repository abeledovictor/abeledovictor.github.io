import React from 'react';
import image from '../../assets/avatar.jpg';
import './styles.css';

function Avatar() {
    return (
        <div className="i18n-blog-app-avatar-container">
            <div className="i18n-blog-app-avatar"><img src={image} /></div>     
        </div>
    );
}

export default Avatar;
