<template>
  <div>
    <influx-menu/>
    <nuxt/>
    <influx-footer/>
  </div>
</template>
<script>
  import $ from 'jquery'
  import influxMenu from '~/components/ui/menu.vue'
  import influxFooter from '~/components/ui/footer.vue'
  export default {
      transition: 'page',
      components: {
          influxMenu,
          influxFooter
      },
      head: {
        link: [
          { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Slabo+27px' }
        ]
      },
      data() {
        return {
          changed: false
        }
      },
      mounted: () => {
          
      }
  }
</script>
<script>
export default {
  data() {
    return {
      changed: false
    }
  }
}
</script>
<style>
  body {
    --color-text: #000;
    --color-bg: #fff;
    --color-link: #000;
    --color-link-hover: #ccc;
    --color-bg-item1: #212121;
    --color-bg-item2: #000000;
    --color-bg-item3: #212121;
    --color-bg-item4: #151515;
    --color-bg-item5: #000000;
    --color-item-alt: #525252;
    --color-quote: #ffffff;
    --color-info: #cccccc;
    --color-title: #e23434;
    --color-tagline: #e2e2e2;
    font-family: 'Playfair Display', serif;
    min-height: 100vh;
    color: #57585c;
    color: var(--color-text);
    background-color: #fff;
    background-color: var(--color-bg);
    padding: 6rem 0 0 0;
    margin:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height:auto !important;
  }

  html {
    font-family: 'Playfair Display', serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    font-weight:400;
  }
  .page-enter-active, .page-leave-active {
    transition: all .5s ease;
  }
  .page-enter-active .vertical-center, .page-leave-active .vertical-center {
    transition: all 3s ease;
    padding: 500px 0!important;
    position: relative;
  }
  .page-enter, .page-leave-active {
    opacity: 0;
    filter:blur(100px);
  }
  .page-enter .vertical-center, .page-leave .vertical-center {
    position: relative;
    padding: 70px 0!important;
  }
  html {
    font-family: 'Domine', serif;
    font-size: 16px;
    word-spacing: 1px;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: titaniaregular;
  }
  h2 {
      font-size: 72px;
      line-height: 1.11em;
      color: #000;
      font-weight: 900;
  }
  .sa {
      padding: 0 30px;
  }
  .container {
      padding: 30px;
      margin: 0 auto;
      max-width: 1170px;
  }
  
  
  a:hover {
      color: #000;
      text-decoration: none;
  }
  .underline {
    width: calc(100%);
    background-image: linear-gradient(transparent calc(100% - 15px), red 10px);
    background-repeat: no-repeat;
    background-size: 0% 100%;
    background-position:-3px;
    transition: background-size 1s;
  }

  .underline:hover {
    background-size: 100% 100%;
  }
</style>
