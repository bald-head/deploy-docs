import {defineConfig} from 'vitepress';

export default defineConfig({
    // base: '/deploy-docs/',
    // 对 markdown 的配置
    markdown: {
        toc: {
            level: [1, 2, 3, 4], // 指定标题的层级
        }
    },
    locales: {
        root: {
            label: '简体中文',
            lang: 'zh',
            dir: 'src/zh',
            title: 'deploy-docs',
            description: '更快的 deploy'
        },
        // en: {
        //     label: 'English',
        //     lang: 'en',
        //     dir: 'src/en',
        //     title: 'deploy-docs',
        //     description: 'Faster deploy',
        //     themeConfig: {
        // footer: {
        //     message: '根据 <a href="https://www.gnu.org/licenses/" target="_blank"> GNU AFFERO GENERAL PUBLIC LICENSE</a> 许可证发布',
        //     copyright: 'Copyright © 2024 <a href="https://deploy.baldhead.cn" target="_blank">BaldHead</a>'
        // },
        //         nav: [
        //             {text: 'INTRO', link: '/en/guide/intro', activeMatch: '/en/guide/'},
        //             {text: 'FAQ', link: '/en/faq/', activeMatch: '/en/faq/'},
        //             {text: 'DONATE', link: '/guide/donate'},
        //         ],
        //         sidebar: {
        //             '/en/guide/': [
        //                 {
        //                     text: 'Getting Started',
        //                     items: [
        //                         {
        //                             text: 'Introduction',
        //                             link: '/en/guide/intro'
        //                         },
        //                         {
        //                             text: 'Quick Start',
        //                             link: '/en/guide/quick-start'
        //                         }
        //                     ]
        //                 },
        //             ],
        //         }
        //     }
        // }
    },
    head: [
        ['meta', {name: 'author', content: 'BaldHead'}],
        [
            'meta',
            {
                name: 'keywords',
                content: 'deploy, docker, docker-compose , devops, linux'
            }
        ],
        ['link', {rel: 'icon', type: 'image/svg+xml', href: '/logo.svg'}],
        [
            'meta',
            {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
            }
        ],
        ['link', {rel: 'icon', href: '/favicon.ico'}],
        ['script',{},`!function(p){"use strict";!function(t){var s=window,e=document,i=p,c="".concat("https:"===e.location.protocol?"https://":"http://","sdk.51.la/js-sdk-pro.min.js"),n=e.createElement("script"),r=e.getElementsByTagName("script")[0];n.type="text/javascript",n.setAttribute("charset","UTF-8"),n.async=!0,n.src=c,n.id="LA_COLLECT",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:"CDqGooQbS8dts6eI",ck:"CDqGooQbS8dts6eI",hashMode:true});`]
    ],
    assetsDir: 'public',
    srcDir: 'src',
    themeConfig: {
        logo: '/logo.svg',
        socialLinks: [
            {icon: 'github', link: 'https://github.com/bald-head/deploy-docs.git'},

        ],
        search: {
            provider: "algolia",
            options: {
                appId: "HVG0I8JYN8",
                apiKey: "1ce3df51e758636d077a6c9561e7e1c7",
                indexName: "bald-headio",
                placeholder: "Search Doc",
            }
        },
        footer: {
            message: '根据 <a href="https://www.gnu.org/licenses/" target="_blank"> GNU AFFERO GENERAL PUBLIC LICENSE</a> 许可证发布',
            copyright: 'Copyright © 2024 <a href="https://deploy.baldhead.cn" target="_blank">BaldHead</a>'
        },
        nav: [
            {text: 'docker', link: '/docker/home', activeMatch: '/zh/guide/'},
            {text: 'linux', link: '/linux/home', activeMatch: '/zh/faq/'},
        ],
        sidebar: {
            '/docker/': [
                {
                    text: '首页',
                    link: '/docker/home'
                },
               {
                    text: 'docker',
                    items: [
                        {
                            text: '快速开始',
                            link: '/docker/quick-start'
                        }
                    ]
                }
            ],
            '/linux/': [
                {
                    text: '首页',
                    link: '/linux/home'
                },
                {
                    text: 'linux',
                    items: [
                        {
                            text: '快速开始',
                            link: '/linux/quick-start'
                        }
                    ]
                }
            ]
        }
    }
});
