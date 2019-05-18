<template>
    <video autoplay muted loop playsinline id="animation">
       <source src="https://electrobotik.frb.io/site/themes/electrobotik/video/EI2019_TEASER01_NOTEXT_converted.mp4" type="video/mp4">
       <source src="https://electrobotik.frb.io/site/themes/electrobotik/video/EI2019_TEASER01_NOTEXT_converted.WebM" type="video/webm">
    </video>
     <img class="logo" src="https://electrobotik.netlify.com/images/logo.svg" alt="">
</template>

<script>
  import $ from 'jquery'
  // export
  export default {
    layout: 'default',
    components: { },
    data() {
      return {
        changed: false
      }
    },
    asyncData() {
      return new Promise((resolve) => {
        setTimeout(function () {
          resolve({})
        }, 2500)
        console.log('document ready index 1!')
      })
    },
     mounted() {
        setTimeout(() => {
          // Extend loader for an additional 5s
          this.$nuxt.$loading.finish()
        }, 2500)
        console.log('document ready index 2!')
      }
  }
</script>
<style>
  video#animation {
      position: absolute;
      left: 50%;
      top: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
      transition:1s all ease;
  }
</style>
