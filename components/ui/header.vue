<template>
  <header class="header">
    <div>
      <img src="images/uploads/00000000050.png" alt="Logo Sebatien Odd Tattoo">
    </div>
    <div>
      <img class="logo" src="images/uploads/logobombyx.png" alt="Logo Papillon">
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
</style>

<script>
//  import VueLazyload from 'vue-lazyload'
//  export default { components: { VueLazyload }  };
</script>
