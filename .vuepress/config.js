// .vuepress/config.js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.svg' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Vapor Cloud website', link: 'https://vapor.cloud' },
    ],
    sidebar: {
      '/reference/': [
        '',
        {
          title: 'Deployment',
          collapsable: false,
          children: [
            'vapor-cloud-git',
            'custom-docker'
          ]
        },
      ],

      '/getting-started/': [
        '',
        'test'
      ],
      '/': [
        ''
      ]
    }
  }
}
