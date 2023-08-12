import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "huiru",
  description: "code life",
  themeConfig: {
    logo: "/logo.svg",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'MySQL', link: '/MySQL/常用SQL' },
      { text: 'Java', link: '/Java/JVM定位常用方法' },
      { text: 'Middleware', link: '/Middleware/Kafka相关命令' },
      { text: 'Linux', link: '/Linux/文件相关' },
      { text: 'DevTools', link: '/DevTools/Vim' },
      { text: 'Leetcode', link: '/Leetcode/字符串' },
    ],
    outline: [2, 4],
    outlineTitle: 'On this page',
    aside: true,
    returnToTopLabel: 'Return to top',
    externalLinkIcon: true,
    sidebar: [
      {
        text: 'MySQL',
        items: [
          { text: '常用SQL', link: '/MySQL/常用SQL' },
          { text: '窗口函数', link: '/MySQL/窗口函数' },
          { text: '日期函数', link: '/MySQL/日期函数' },
          { text: 'MyBatis常用模板', link: '/MySQL/MyBatis常用模板' }
        ],
        collapsed: true,
      },
      {
        text: 'Java',
        items: [
          { text: 'JVM定位常用方法', link: '/Java/JVM定位常用方法' },
          { text: 'Spring事务使用', link: '/Java/Spring事务使用' },
        ],
        collapsed: true,
      },

      {
        text: 'Linux',
        items: [
          { text: '文件相关', link: '/Linux/文件相关' },
          { text: '进程相关', link: '/Linux/进程相关' },
        ],
        collapsed: true,
      },
      {
        text: 'Middleware',
        items: [
          { text: 'Kafka相关命令', link: '/Middleware/Kafka相关命令' },
          { text: 'Nginx相关使用', link: '/Middleware/Nginx相关使用' },
          { text: 'Redis相关命令', link: '/Middleware/Redis相关命令' },
        ],
        collapsed: true,
      },
      {
        text: 'DevTools',
        items: [
          { text: 'Vim', link: '/DevTools/Vim' },
        ],
        collapsed: true,
      },
      {
        text: 'Container',
        items: [
          { text: 'Docker常用命令', link: '/Container/Docker常用命令' },
          { text: 'Dockerrfile', link: '/Container/Dockerrfile' },
          { text: '常用镜像', link: '/Container/常用镜像' },
          { text: 'Docker Compose', link: '/Container/Docker Compose' }
        ],
        collapsed: true,
      },
      {
        text: 'Leetcode',
        items: [
          { text: '字符串', link: '/Leetcode/字符串' },
          { text: '数组', link: '/Leetcode/数组' },
          { text: '链表', link: '/Leetcode/链表' },
          { text: '树', link: '/Leetcode/树' },
        ],
        collapsed: true,
      },
      {
        text: 'Git',
        items: [
          { text: 'gitconfig', link: '/Git/gitconfig' },
          { text: '查看相关命令', link: '/Git/查看相关命令' },
          { text: '分支相关命令', link: '/Git/分支相关命令' },
          { text: '回退相关命令', link: '/Git/回退相关命令' },
          { text: 'Rebase的使用', link: '/Git/Rebase的使用' }
        ],
        collapsed: true,
      },
      {
        text: 'IELTS',
        items: [
          { text: 'Grammar', link: '/IELTS/Grammar' },
          { text: '逻辑连接词', link: '/IELTS/逻辑连接词' },
          { text: '数据描述句型', link: '/IELTS/数据描述句型' },
          {
            text: '大作文', items: [
              { text: '整体结构', link: '/IELTS/大作文/整体结构' },
              { text: '论点分解方法', link: '/IELTS/大作文/论点分解方法' },
              { text: '讨论型', link: '/IELTS/大作文/讨论型' },
              { text: '观点型好坏型', link: '/IELTS/大作文/观点型好坏型' },
              { text: '比较型', link: '/IELTS/大作文/比较型' },
              { text: '报告型', link: '/IELTS/大作文/报告型' },
              { text: '混搭型', link: '/IELTS/大作文/混搭型' },
            ]
          },
          {
            text: '小作文', items: [
              { text: '整体结构', link: '/IELTS/大作文/整体结构' },
              { text: '论点分解方法', link: '/IELTS/大作文/论点分解方法' }
            ]
          }
        ],
        collapsed: true,
      }
    ],
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
      { icon: 'github', link: 'https://github.com/huiru-wang' }
    ]
  }
})
