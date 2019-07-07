module.exports = {
    block: 'page',
    title: 'Title of the experiment page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'css', url: 'experiment.min.css' }
    ],
    scripts: [{ elem: 'js', url: 'experiment.min.js' }],
    content: [
        { 
            block : 'head',
            content: {
                block: 'layout',
                content: [
                    {
                        elem: 'left',
                        content: 'left here'
                    },
                    {
                        elem: 'right',
                        content: 'right here'
                    }
                ]
            }
        }
    ]
};