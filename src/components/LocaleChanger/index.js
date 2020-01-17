import React from 'react';
import i18n from 'i18next';

function LocaleChanger({ className }) {
    return (
        <span className={className}>
            <span style={{cursor: 'pointer'}} onClick={() => i18n.changeLanguage('en')}>EN</span>
            {' / '}
            <span style={{cursor: 'pointer'}} onClick={() => i18n.changeLanguage('es')}>ES</span>
        </ span>
    );
}

export default LocaleChanger;
