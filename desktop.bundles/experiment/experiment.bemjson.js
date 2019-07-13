module.exports = {
    block: 'page',
    title: 'Title of the experiment page',
    favicon: '/favicon.ico',
    head: [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'experiment.min.css' }
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
                    content: {
                        tag: 'form',
                        attrs: { action: 'https://yandex.ru/yandsearch' },
                        content: [
                            {
                                block: 'input',
                                name: 'text',
                                val: 'Find'
                            },
                            {
                                block: 'button',
                                mods: { type: 'submit' },
                                content: 'Search'
                            }
                        ]
                    }
                },
                    {
                        elem: 'right',
                        content: {
                            block: 'logo',
                            content: [
                                {
                                    block: 'link',
                                    url: 'https://ru.bem.info',
                                    content: [
                                        {
                                            block: 'image',
                                            url: 'http://varya.me/online-shop-dummy/desktop.blocks/b-logo/b-logo.png'
                                        },
                                        {
                                            elem: 'slogan',
                                            content: 'A new way of thinking'
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            }
        },
        {
            block: 'goods',
            goods: [
                {
                    title: 'iPhone 7 128Gb',
                    image: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub__iphone7.png',
                    price: '47 000',
                    url: '/'
                },
                {
                    title: 'Samsung Galaxy A7 32Gb',
                    image: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub__samsung.png',
                    price: '26 000',
                    url: '/'
                },
                {
                    title: 'Meizu MX5 16Gb',
                    image: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub__meizu.png',
                    price: '15 000',
                    url: '/'
                },
                {
                    title: 'iPhone 6s 32GB',
                    image: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub__iphone6s.png',
                    price: '***',
                    url: '/',
                    new: true
                },
                {
                    title: 'Xiaomi Redmi 4X 16Gb',
                    image: 'https://github.com/bem-site/bem-method/blob/bem-info-data/platform/tutorials/start-with-project-stub/start-with-project-stub__xiaomi.png',
                    price: '10 000',
                    url: '/'
                }
            ]
        }
    ]
};