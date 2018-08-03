// .vuepress/config.js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    /*search: false,
    algolia: {
      apiKey: 'a4dd85727ec468c4cb74054f582b738e',
      indexName: 'cloud_local'
    },*/
    docsRepo: 'vapor-cloud/docs',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    editLinkText: 'Help us improve this page!',
    nav: [
      { text: 'Home', link: '#' },
      { text: 'Docs', link: '/' },
    ],
    sidebar: {
      '/reference/': [
        ''
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
      '/replica/': [
        '',
        {
          title: 'Deployment',
          collapsable: false,
          children: [
            'deployment/vapor-cloud-git',
            'deployment/custom-docker'
          ]
        }
      ],
      '/database/': [
        ''
      ],
      '/cache/': [
        ''
      ],
      '/common-tasks/': [
        ''
      ],
      '/tutorials/': [
        ''
      ],
      '/our-infrastructure/': [
        '',
        'persistent-storage'
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
