<template>
  <header class="header">
    <div class="center-logo">
      <img src="images/uploads/00000000050.png" alt="Logo Sebatien Odd Tattoo">
    </div>
  </header>
</template>
<style>
  .header{
    position: relative;
    z-index: -1;
    height:70vh;
    width:100%;
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
      max-height: 90%;
      top: 5%;
      max-width: 80%;
      left: 10%;
      height: 90%;
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
