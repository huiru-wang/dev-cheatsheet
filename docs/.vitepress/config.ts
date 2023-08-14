import { defineConfig } from 'vitepress'
import nav from './nav';
import sidebar from './sidebar';
import markdownItKatex from 'markdown-it-katex';
import vue from './vue';
import './theme/custom.css';

export default defineConfig({
  title: "Dev Cheatsheet",
  titleTemplate: "Huiru",
  description: "code life",
  markdown: {
    config: (md) => {
      md.use(markdownItKatex);
    },
  },
  themeConfig: {
    logo: "/logo.svg",
    nav,
    sidebar,
    outline: [2, 4],
    outlineTitle: 'On this page',
    aside: true,
    returnToTopLabel: 'Return to top',
    externalLinkIcon: true,
    darkModeSwitchLabel: 'Appearance',
    search: {
      provider: 'local',
      options: {
        disableDetailedView: false,
        detailedView: true,
      }
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huiru-wang/blog' }
    ]
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css', crossorigin: '' }]
  ],
  vue
})
