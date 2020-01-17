import React from 'react';
import { useTranslation } from 'react-i18next';
import Avatar from '../Avatar';

import './styles.css';

function Component(props, ref) {
    const { t } = useTranslation('common', { useSuspense: false });
    return (
        <div ref={ref} className="i18n-blog-app-about">
            <h2>{t('about')}</h2>
            <div className="i18n-blog-app-about__text">
                <Avatar />
                <div className="i18n-blog-app-about__text-box">
                <p className="i18n-blog-app-about__desc">{t('aboutDescription')}</p>
                <p className="i18n-blog-app-about__desc-text">{t('aboutText')}</p>
                </div>
            </div>
        </div>
    );
}

const About = React.forwardRef(Component);

export default About;
