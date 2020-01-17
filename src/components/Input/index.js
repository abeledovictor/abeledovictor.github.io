import React from 'react';
import './styles.css';

function Input({ children, ...rest }) {
    return (
    <input {...rest} className="i18n-blog-app-input">{children}</input>
    );
}

export default Input;
