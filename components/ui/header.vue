<template>
  <header class="header">
    <video autoplay muted loop id="animation">
      <source src="https://www.influx-agence.fr/cms/sebastienodd-animation.mp4" type="video/mp4">
    </video>
    <div class="center-logo">
      <img src="images/uploads/00000000050.png" alt="Logo Sebatien Odd Tattoo">
    </div>
  </header>
</template>
<style>
  #animation {
      position: absolute;
      right: 50%;
      top: 0;
      min-width: 100%;
      min-height: 100%;
      transform: translateX(50%);
  }
  .header{
    position: relative;
    z-index: -1;
    height:70vh;
    width:100%;
    top: 75px;
  }
  .logo {
      height: 100vh;
      left: 50%;
      position: fixed;
      top: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
  }
  .center-logo{
      position: relative;
      width: 100%;
      height: 100%;
  }
  .center-logo img {
      max-width: 100%;
      max-height: 100%;
      top: 50%;
      left: 50%;
      position: absolute;
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
  }
</style>

<script>
//  import VueLazyload from 'vue-lazyload'
//  export default { components: { VueLazyload }  };
</script>
