import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles.css';

function Component(props, ref) {
    const { t } = useTranslation('common', { useSuspense: false });
    return (
        <div ref={ref} className="i18n-blog-app-work">
            <h2>{t('work')}</h2>
            <p>{t('workText')}</p>
        </div>
    );
}

const Work = React.forwardRef(Component);

export default Work;
