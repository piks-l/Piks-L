<template>
<div>
    <video autoplay muted loop playsinline id="animation">
       <source src="https://electrobotik.frb.io/site/themes/electrobotik/video/EI2019_TEASER01_NOTEXT_converted.mp4" type="video/mp4">
       <source src="https://electrobotik.frb.io/site/themes/electrobotik/video/EI2019_TEASER01_NOTEXT_converted.WebM" type="video/webm">
    </video>
     <img class="logo-electrobotik" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="ELECTROBOTIK INVASION">
</div>
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
        }, 500)
      })
    }
  }
</script>
<style>
  video#animation {
      position: fixed;
      left: 50%;
      top: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
      transition:1s all ease;
  }
  .logo-electrobotik {
    width: 50%;
    margin: 0 auto;
    top: 0%;
    position: relative;
    display: block;
    transform: translatey(50%);
  }
</style>
