import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                synonym: resolve(__dirname, 'tools/synonym-finder/index.html'),
                simplifier: resolve(__dirname, 'tools/sentence-simplifier/index.html'),
                emoji: resolve(__dirname, 'tools/emoji-translator/index.html'),
                hashtag: resolve(__dirname, 'tools/hashtag-generator/index.html'),
                business: resolve(__dirname, 'tools/business-name-generator/index.html'),
                blog: resolve(__dirname, 'blog/index.html'),
                post1: resolve(__dirname, 'blog/power-of-synonyms.html'),
                post2: resolve(__dirname, 'blog/viral-instagram-hashtags.html'),
                about: resolve(__dirname, 'about/index.html'),
                contact: resolve(__dirname, 'contact/index.html'),
            },
        },
    },
});
