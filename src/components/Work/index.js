import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaWordpress, FaJava, FaReact, FaPhp } from 'react-icons/fa';
import './styles.css';

function Component(props, ref) {
    const { t } = useTranslation('common', { useSuspense: false });
    return (
        <div ref={ref} className="i18n-blog-app-work">
            <h2>{t('work')}</h2>
            <div className="i18n-blog-app-work__section">
              <FaWordpress
                className="i18n-blog-app-work__icon"
                color={'#718093'}
                size={25}
                title="wordpress"
              />
              <FaPhp
                className="i18n-blog-app-work__icon"
                color={'#718093'}
                size={25}
                title="php"
              />
              <p className="i18n-blog-app-work__text">
                <a href="http://nataliacuello.com" target="_blank" className="i18n-blog-app-work__link-a">
                  nataliacuello.com
                </a>
                {t('nataliaCuelloDesc')}
              </p>
            </div>
            <div className="i18n-blog-app-work__section">
              <FaJava
                className="i18n-blog-app-work__icon"
                color={'#718093'}
                size={25}
                title="java"
              />
              <FaReact
                className="i18n-blog-app-work__icon"
                color={'#718093'}
                size={25}
                title="reactjs"
              />
              <p className="i18n-blog-app-work__text">
              <a href="https://icuerpo.com" target="_blank" className="i18n-blog-app-work__link-a">
                  icuerpo.com
              </a>
              {t('cuerpoAppDesc')}
              </p>
            </div>
        </div>
    );
}

const Work = React.forwardRef(Component);

export default Work;
