import React from 'react';
import './styles.css';

function Label({ children, ...rest }) {
    return (
        <label {...rest} className="i18n-blog-app-label">{children}</label>
    );
}

export default Label;