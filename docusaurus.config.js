// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Recloud Wiki',
    tagline: 'Документация Recloud',
    favicon: 'img/favicon.ico',

    // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
    future: {
        v4: true, // Improve compatibility with the upcoming Docusaurus v4
    },

    // Set the production url of your site here
    url: 'https://wiki.recloud.tech',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'RecloudTech', // Usually your GitHub org/user name.
    projectName: 'recloud-wiki', // Usually your repo name.

    onBrokenLinks: 'ignore',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'ru',
        locales: ['en', 'ru', 'zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/RecloudTech',
                },
                blog: {
                    showReadingTime: true,
                    feedOptions: {
                        type: ['rss', 'atom'],
                        xslt: true,
                    },
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                        'https://github.com/RecloudTech',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'warn',
                },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],
    
    plugins: [
        require('./plugins/tailwind-plugin.cjs'),  
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            // Replace with your project's social card
            image: 'img/docusaurus-social-card.jpg',
            colorMode: {
                respectPrefersColorScheme: true,
            },
            navbar: {
                title: 'Recloud Wiki',
                logo: {
                    alt: 'Recloud Wiki Logo',
                    src: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'localeDropdown',
                        position: 'left',
                    },
                    // {
                    //     type: 'docSidebar',
                    //     sidebarId: 'tutorialSidebar',
                    //     position: 'right',
                    //     label: 'Tutorial',
                    // },
                    // {to: '/blog', label: 'Blog', position: 'left'},
                    // {
                    //     href: 'https://github.com/facebook/docusaurus',
                    //     label: 'GitHub',
                    //     position: 'right',
                    // },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Продукты',
                        items: [
                            {
                                label: 'Gml Лаунчер',
                                to: '/docs/category/gml-launcher',
                            },
                        ],
                    },
                    // {
                    //     title: 'Community',
                    //     items: [
                    //         {
                    //             label: 'Stack Overflow',
                    //             href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                    //         },
                    //         {
                    //             label: 'Discord',
                    //             href: 'https://discordapp.com/invite/docusaurus',
                    //         },
                    //         {
                    //             label: 'X',
                    //             href: 'https://x.com/docusaurus',
                    //         },
                    //     ],
                    // },
                    {
                        title: 'Компания',
                        items: [
                            {
                                label: 'Наш сайт',
                                href: 'https://recloud.tech',
                            },
                            {
                                label: 'Блог',
                                href: 'https://blog.recloud.tech',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/RecloudTech',
                            },
                        ],
                    },
                ],
                copyright: `© 2024–${new Date().getFullYear()} ООО «Реклауд Технологии», ИНН 2901318875. Все права защищены.`,
            },
            prism: {
                theme: prismThemes.github,
                darkTheme: prismThemes.dracula,
            },
        }),
};

export default config;
