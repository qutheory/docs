<template>
    <div class="vapor-app frontpage" style="max-width:1424px; margin: 0 auto;">
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

<style lang="scss">
.vapor-app {
  background-color: #F4F7FA;
}
</style>

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
            text: 'Get started using Vapor Cloud, insight into what Vapor Cloud is',
            icon: 'fas fa-question-circle',
            link: '/getting-started/',
          },
          {
            headline: 'Replica',
            text: 'Replica is web hosting in Vapor Cloud',
            icon: 'fas fa-cloud',
            link: '/replica/',
          },
          {
            headline: 'Database',
            text: 'Information about hosting databases in Vapor Cloud',
            icon: 'fas fa-database',
            link: '/database/',
          },
          {
            headline: 'Cache',
            text: 'Supercharge your app by adding cache',
            icon: 'fas fa-bolt',
            link: '/cache/',
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
            icon: 'fas fa-terminal',
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
