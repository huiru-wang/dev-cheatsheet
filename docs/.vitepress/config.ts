import { defineConfig } from 'vitepress'
import nav from './nav';
import sidebar from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Dev Cheatsheet",
  dir: '',
  description: "code life",
  markdown: {
    config: (md) => {
      md.set({ html: true });
      //md.use(require("markdown-it-katex"));
    }
  },
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav,
    outline: [2, 4],
    outlineTitle: 'On this page',
    aside: true,
    returnToTopLabel: 'Return to top',
    externalLinkIcon: true,
    sidebar,
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
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
})
