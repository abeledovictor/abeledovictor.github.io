import posts_en from './en/common.json';
import posts_es from './es/common.json';

export function postsCount() {
    if(posts_en.posts.length !== posts_es.posts.length) {
        console.error("Different number of posts for different locales!!");
    }
    return posts_en.posts.length;
}