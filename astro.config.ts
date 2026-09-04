import {defineConfig} from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightSidebarTopicsDropdown from 'starlight-sidebar-topics-dropdown'
import catppuccin from "starlight-theme-catppuccin";



export default defineConfig({
    image: {
        service: {
            entrypoint: 'astro/assets/services/noop'
        }
    },
    // base: '/deploy-docs/',
    trailingSlash: "always",
    integrations: [
        starlight({
            title: 'Skills & Deploy Docs',
            description: '研发 SOP 与部署实操的完整手册',
            head: [
                {
                    tag: 'meta',
                    attrs: {
                        property: 'og:title',
                        content: 'Skills Framework & 部署文档',
                    },
                },
            ],
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
                        label: 'Docker 部署',
                        link: '/docker/',
                        icon: 'seti:docker',
                        badge: {text: '11 组件', variant: 'default'},
                        items: [
                            {label: '安装 Docker', link: '/docker/'},
                            {label: 'docker-compose', autogenerate: {directory: 'docker/use'}},
							{label:"FQA", autogenerate: {directory: 'docker/FQA'}}
						]
                    },
                    {
                        label: 'Linux 运维',
                        link: '/linux/',
                        icon: 'linux',
                        badge: {text: '建设中', variant: 'caution'},
                        items: [
                            {label: '概览', link: '/linux/'},
                        ]
                    },
                    {
                        label: 'Java 后端',
                        link: '/java/',
                        icon: 'seti:java',
                        items: [
                            {label: '概览', link: '/java/'},
                            {label:"日志", autogenerate: {directory: 'java/logging'}},
                        ]
                    },
                    {
                        label: 'Skills Framework',
                        link: '/skills/',
                        icon: 'rocket',
                        badge: {text: '95 Skill', variant: 'tip'},
                        items: [
                            {label: '快速开始', link: '/skills/getting-started'},
                            {label: '快速体验', link: '/skills/quickstart'},
                            {label: '第一个功能开发', link: '/skills/first-feature'},
                            {label: '核心概念', autogenerate: {directory: 'skills/core-concepts'}},
                            {label: '使用指南', autogenerate: {directory: 'skills/usage'}},
                            {label: 'Runtime Hooks', autogenerate: {directory: 'skills/hooks'}},
                            {label: 'Skill 目录', autogenerate: {directory: 'skills/catalog'}},
                            {
                                label: 'Skill 参考手册',
                                collapsed: true,
                                items: [
                                    {label: '如何查阅', link: '/skills/skills-reference/'},
                                    {label: '核心流程 - Critical', collapsed: true, autogenerate: {directory: 'skills/skills-reference/critical'}},
                                    {label: '高优先级 - High', collapsed: true, autogenerate: {directory: 'skills/skills-reference/high'}},
                                    {label: '中优先级 - Medium', collapsed: true, autogenerate: {directory: 'skills/skills-reference/medium'}},
                                    {label: '低优先级 - Low', collapsed: true, autogenerate: {directory: 'skills/skills-reference/low'}},
                                ]
                            },
                            {label: '最佳实践', link: '/skills/best-practices'},
                            {label: '故障排查', link: '/skills/troubleshooting'},
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
