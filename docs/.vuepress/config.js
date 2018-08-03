// .vuepress/config.js
module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  themeConfig: {
    repo: 'vapor-cloud/docs',
      // Customising the header label
      // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Contribute!',
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
      { text: 'Home', link: '/' },
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
