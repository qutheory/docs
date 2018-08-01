<template>
  <div class="container">
    <div class="box" v-bind:class="boxClass">
      <router-link :to="{path: link}">
        <center>
          <br /><br />
          <i class="icon" v-bind:class="icon"></i>
          <br /><br />
          <div class="headline" v-html="headline"></div>
          <div class="text" v-html="text"></div>
        </center>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    position: relative;
    top:250px;
    margin:20px;
  }
  .box {
    transition: box-shadow .1s;
    float:left;
    padding:30px;
    width: 280px;
    height: 250px;
    //border: 1px solid #f1f1f1;
    //margin-right: 20px;
    //margin-bottom: 20px;
  }
  .box .icon {
    font-size: 60px;
  }
  .box a {
    color: #2c3e50;
  }
  .box:hover {
    box-shadow: 0 0 30px rgba(33,33,33,.2);
    z-index: 99999999999999999;
    transform: scale(1.08);
    background-color: #FFF;
  }
  .box .headline {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 10px;
  }
</style>

<script>
export default {
  name: 'box',
  props: {
        headline: {
            type: String,
            default: ''
        },
        text: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        link: {
            type: String,
            default: ''
        }
    }
}
</script>
