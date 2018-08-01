// .vuepress/config.js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
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
            'deployment/vapor-cloud-git',
            'deployment/custom-docker'
          ]
        },
        {
          title: 'Data management',
          collapsable: false,
          children: [
            'data-management/database',
            'data-management/redis'
          ]
        },
      ],
      '/api/': [
        '',
        'organizations',
        'permissions',
        'projects',
        'application',
        'environments',
        'configuration',
        'git',
        'replica',
        'deployment'
      ],
      '/getting-started/': [
        '',
        'test'
      ],
      '/using-the-cli/': [
        ''
      ],
      '/common-tasks/': [
        ''
      ],
      '/tutorials/': [
        ''
      ],
      '/our-infrastructure/': [
        ''
      ],
      '/announcements/': [
        ''
      ],
      '/': [
        ''
      ]
    }
  }
}
