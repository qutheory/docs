<template>
  <div class="page-headline">
    <br /><br /><br /><br />
    <div class="headline-container">
      <span style="background:#2c3e50" v-for="box in boxes">
        <h1 style="color:#FFF; padding-right:100px;" v-if="$page.path.includes(box.link)">
          &nbsp;&nbsp;<i class="icon" v-bind:class="box.icon"></i> {{ $page.title }}
        </h1>
      </span>
      <input type="checkbox" id="menu-toggle" />
      <label for="menu-toggle" class="label-toggle"></label>
      <span class="headline-menu-wrapper">
        <span class="headline-menu" style="background:#2c3e50" v-for="box in boxes">
          <router-link :to="{path: box.link}">
            <div class="headlines active" v-if="$page.path.includes(box.link)">
              <i class="icon" v-bind:class="box.icon"></i> {{ box.headline }}
            </div>
            <span class="headlines" v-else>
              <i class="icon" v-bind:class="box.icon"></i> {{ box.headline }}
            </span>
          </router-link>
        </span>
      </span>
      </div>

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
  height: 126px;
  width:100%;
  color:#000;
}
.headline-container a {
  color:#FFF;
}
.headlines {
  width:140px;
  border-radius: 4px 4px 0 0;
  float:left;
  font-size:14px;
  padding-top:10px;
  padding-bottom:10px;
  margin-right:10px;
  text-align:center;
  background:#2c3e50;
}
.active {
  background:#FFF!important;
  color:#2c3e50!important;
}

#menu-toggle { position: absolute; z-index: 300;}
#menu-toggle {display: none;}

.label-toggle {display: none;}

@media screen and (max-width: 1353px) {
  .headline-menu-wrapper {
      position: absolute;
      z-index: 200;
      display: block;
      height: 0;
      list-style-type: none;
      opacity: 0;
      text-align: center;
      transition: all 1s ease;
      width: 100%;
      visibility: hidden;
    }

    .headline-menu {
      display: block;
      font-size: 20px;
      width: 100%;
      padding: 2em 0;
    }

    .headlines {
      text-align: center;
      width: 100%;
      font-size: 20px;
    }

    #menu-toggle:checked ~ .headline-menu-wrapper {
      opacity: 1;
      height: 100vh;
      visibility: visible;
    }

    .label-toggle {
      position: absolute;
      z-index: 300;
      right: 30px;
      top: 135px;
      cursor: pointer;
      display: block;
      float: right;
      height: 35px;
      margin-top: 1em;
      width: 35px;
    }
    .label-toggle:before {
      font-family: "Font Awesome 5 Free";
      content: "\f0c9";
      font-style: normal;
      color: #FFF;
      font-weight: 900;
      text-decoration: inherit;
      display: block;
      font-size: 28px;
      width: 60px;
      height: 100%;
      opacity: 0.7;
      transition-property: all;
      transition-duration: 120ms;
    }

    .wrapper {display: block;}
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
