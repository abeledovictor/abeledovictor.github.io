import React from 'react';
import { useTranslation } from 'react-i18next';
import { IoIosAt, IoLogoLinkedin, IoLogoGithub } from "react-icons/io";
import { FaStackOverflow } from 'react-icons/fa';
import ContactForm from '../ContactForm';
import './styles.css';

function Component(props, ref) {
    const { t } = useTranslation('common', { useSuspense: false });
    return (
        <div ref={ref} className="i18n-blog-app-contact">
            <h2>{t('contact')}</h2>
            <div className="i18n-blog-app-contact__link">
                <span className="i18n-blog-app-contact__link-icon">
                    <IoIosAt color={'#40739e'} size={25} title="email" />
                </span>
                <a href="mailto:abeledovictor@gmail.com" className="i18n-blog-app-contact__link-a">
                    abeledovictor@gmail.com
                </a>
            </div>
            <div className="i18n-blog-app-contact__link">
                <span className="i18n-blog-app-contact__link-icon">
                    <IoLogoGithub color={'#40739e'} size={25} title="github" />
                </span>
                <a href="https://github.com/abeledovictor" target="_blank" className="i18n-blog-app-contact__link-a">
                    github.com/abeledovictor
                </a>
            </div>
            <div className="i18n-blog-app-contact__link">
                <span className="i18n-blog-app-contact__link-icon">
                    <IoLogoLinkedin color={'#40739e'} size={25} title="linkedin" />
                </span>
                <a href="https://linkedin.com/in/victor-abeledo-aa5050ba" target="_blank" className="i18n-blog-app-contact__link-a">
                    linkedin.com/in/victor-abeledo-aa5050ba
                </a>
            </div>
            <div className="i18n-blog-app-contact__link">
                <span className="i18n-blog-app-contact__link-icon">
                    <FaStackOverflow color={'#40739e'} size={25} title="stackoverflow" />
                </span>
                <a href="https://stackoverflow.com/users/6739197/victor-ja" target="_blank" className="i18n-blog-app-contact__link-a">
                    stackoverflow.com/users/6739197/victor-ja
                </a>
            </div>
            <ContactForm useSuspense={false} />
        </div>
    );
};

const Contact = React.forwardRef(Component);

export default Contact;
