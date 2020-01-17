import React from 'react';
import { useTranslation } from 'react-i18next';
import { useWindowSize } from '../../hooks/useWindowSize';
import LocaleChanger from '../LocaleChanger';
import logo from '../../untitled.svg';
import './styles.css';

function scroll(ref) {
    if(ref.current) {
        ref.current.scrollIntoView({block: "start", behavior: "smooth"});
    }
}

function Home({ contactRef, aboutRef, workRef }) {
    const { t } = useTranslation('common', { useSuspense: false });
    const size = useWindowSize();
    const min = size.height > size.width ? size.width / 1.5 : size.height / 2;
    return (
        <div style={{ height: size.height }} className="i18n-blog-app-home">
            <LocaleChanger className="i18n-blog-app-home__locale" />
            <h1>{t('title')}</h1>
            <img
                style={{height: min, width: min}}
                src={logo}
                alt="Logo"
                className="i18n-blog-app-home__logo"
            />
            <nav>
                <ul className="i18n-blog-app-home__list">
                    <li onClick={() => scroll(aboutRef)} >
                        {t('about')}
                        {size.width >= 600 && <span className="i18n-blog-app-home__list-divider">/</span>}
                    </li>
                    <li onClick={() => scroll(contactRef)}>
                        {t('contact')}
                        {size.width >= 600 && <span className="i18n-blog-app-home__list-divider">/</span>}
                    </li>
                    <li onClick={() => scroll(workRef)} >
                        {t('work')}
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Home;
