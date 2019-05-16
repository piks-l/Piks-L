<template>
  <header class="header">
    <div class="center-logo">
      <video autoplay muted loop playsinline id="animation">
         <source src="https://electrobotik.frb.io/site/themes/electrobotik/video/EI2019_TEASER01_NOTEXT_converted.mp4" type="video/mp4">
      </video>
      <!-- <img class="logo" src="https://influx-002.netlify.com/images/uploads/00000000050.png" alt=""> --> 
      <div class="smog"></div>
    </div>
  </header>
</template>
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
