<template>
  <div class="container">
    <div class="box">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
      <a :href="link">
        <center>
          <br /><br />
          <i class="icon" v-bind:class="icon"></i>
          <br /><br />
          <div class="headline" v-html="headline"></div>
          <div class="text" v-html="text"></div>
        </center>
      </a>
    </div>
  </div>
</template>

<style lang="scss">
  .container {
    margin:20px;
  }
  .box {
    float:left;
    padding:10px;
    width: 280px;
    height: 250px;
    border: 1px solid #CCC;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .box .icon {
    font-size: 60px;
  }
  .box a {
    color: #2c3e50;
  }
  .box:hover {
    background: #f1f1f1;
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
