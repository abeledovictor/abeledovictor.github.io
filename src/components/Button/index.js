import React from 'react';
import './styles.css';

function Button({ children, className = '', ...rest }) {
    return (
        <button {...rest} className={"i18n-blog-app-button " + className}>
            {children}
        </button>
    );
}

export default Button;
