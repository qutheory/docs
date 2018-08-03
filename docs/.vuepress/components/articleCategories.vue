<template>
  <div>
    <br /><br /><br /><br />
    <div class="headline-container">
      <span style="background:#2c3e50" v-for="box in boxes">
        <h1 style="color:#FFF; padding-right:100px;" v-if="$page.path.includes(box.link)">
          &nbsp;&nbsp;<i class="icon" v-bind:class="box.icon"></i> {{ $page.title }}
        </h1>
      </span>
      <span style="background:#2c3e50" v-for="box in boxes">
        <router-link :to="{path: box.link}">
          <div class="headlines active" v-if="$page.path.includes(box.link)">
            <i class="icon" v-bind:class="box.icon"></i> {{ box.headline }}
          </div>
          <span class="headlines" v-else>
            <i class="icon" v-bind:class="box.icon"></i> {{ box.headline }}
          </span>
        </router-link>
      </span>
      </div>
      <div style="clear:both;"></div>

    </div>
</template>

<style lang="scss">
.vapor-app {
  margin-top: 50px!important
}
.headline-container {
  background:#2c3e50;
  padding-top:10px;
  padding-bottom:0px;
  height: 116px;
  width:100%;
  color:#000;
}
.headline-container a {
  color:#FFF;
}
.headlines {
  width:140px;
  float:left;
  font-size:14px;
  padding-top:5px;
  padding-bottom:5px;
  margin-right:10px;
  text-align:center;
  background:#2c3e50;
}
.active {
  background:#FFF!important;
  color:#2c3e50!important;
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
