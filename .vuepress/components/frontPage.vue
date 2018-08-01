<template>
    <div class="vapor-app">
      <center><h1>Vapor Cloud Documentation</h1></center>
        <span v-for="box in boxes">
          <box
            :headline="box.headline"
            :text="box.text"
            :icon="box.icon"
            :link="box.link"
          />
        </span>
    </div>
</template>

<script>
import box from './box'
export default {
    name: 'frontPage',
    components: {
        [box.name]: box
    },
    data() {
      return {
        boxes: [
          {
            headline: 'Getting started',
            text: 'Get started using Vapor Cloud, insight into what Vapor Cloud is, and how to utilize all the features for your project',
            icon: 'fas fa-question-circle',
            link: '/getting-started/',
          },
          {
            headline: 'Using the CLI',
            text: 'How to use the Vapor Toolbox',
            icon: 'fas fa-terminal',
            link: '/using-the-cli/',
          },
          {
            headline: 'Reference',
            text: 'Generally how to use Vapor Cloud features such as Connect to git, Deployment, Domains, SSL etc.',
            icon: 'fas fa-book',
            link: '/reference/',
          },
          {
            headline: 'Common tasks',
            text: 'Some general common tasks, to get you going on Vapor Cloud',
            icon: 'fas fa-bars',
            link: '/common-tasks/',
          },
          {
            headline: 'Tutorials',
            text: 'Articles describing specific use cases',
            icon: 'fas fa-graduation-cap',
            link: '/tutorials/',
          },
          {
            headline: 'Our infrastructure',
            text: 'Detailed information about our infrastructure, security',
            icon: 'fas fa-cogs',
            link: '/our-infrastructure/',
          },
          {
            headline: 'API Docs',
            text: 'Documentation for using our public API',
            icon: 'fas fa-cloud',
            link: '/api/',
          },
          {
            headline: 'Announcements',
            text: 'Latest Vapor Cloud news',
            icon: 'fas fa-bullhorn',
            link: '/announcements/',
          }
        ]
      }
    }
}
</script>
