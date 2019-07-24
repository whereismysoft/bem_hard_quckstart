module.exports = {
    block: 'page',
    title: 'Page contact',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: 'contact.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'contact.min.js' }],
    mods: { theme: 'islands' },
    content: []
};
