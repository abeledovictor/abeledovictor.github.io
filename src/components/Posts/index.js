import React from 'react';
import { useTranslation } from 'react-i18next';
import { postsCount } from '../../posts';

function Posts() {
    const { t } = useTranslation('posts', { useSuspense: false });
    const count = postsCount();
    const items = [];
    for(let i = 0; i < count; i++) {
        items.push(
            <div key={i}>
                <h3>{t(`posts.${i}.title`)}</h3>
                <article>{t(`posts.${i}.body`)}</article>
            </div>
        );
    }

    return (items);
}

export default Posts;
