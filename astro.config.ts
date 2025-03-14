import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'
import catppuccin from "starlight-theme-catppuccin";



export default defineConfig({
    // base: '/deploy-docs/',
    trailingSlash: "always",
    integrations: [
        starlight({
            title: 'deploy-docs',
            plugins: [starlightImageZoom(),
                catppuccin(),
                starlightSidebarTopicsDropdown([
                    // {
                    // 	label: 'docker',
                    // 	link: '/guides/',
                    // 	items: ["guides/example"],
                    // },
                    // 这种方式是直接解析目录下的所有文件形成目录
                    {
                        label: 'docker',
                        link: '/docker/',
                        icon: 'seti:docker',
                        items: [
                            {label: 'docker-compose', autogenerate: {directory: 'docker/use'}},
							{label:"FQA", autogenerate: {directory: 'docker/FQA'}}
						]
                    },
                    {
                        label: 'linux',
                        link: '/linux/',
                        icon: 'linux',
                        items: [

                        ]
                    },
                    {
                        label: 'Java',
                        link: '/java/',
                        icon: 'seti:java',
                        items: [
                            {label:"日志", autogenerate: {directory: 'java/logging'}},
                        ]
                    },
                ])
            ],
            social: {
                github: 'https://starlight.astro.build/zh-cn/manual-setup/',
            },
            defaultLocale: 'root',
            locales: {
                root: {
                    label: '简体中文',
                    lang: 'zh-CN',
                },
                // 英文版本的文档在 '/src/content/docs/en'下
                // 'en': {
                //     label: 'English',
                //     lang: 'en'
                // }
            },

        }),
    ],
});
