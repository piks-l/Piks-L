<template>
  <header class="header" :class="{ active: changed }">
    <video autoplay muted loop id="animation">
      <source src="https://www.influx-agence.fr/cms/sebastienodd-animation.mp4" type="video/mp4">
    </video>
    <div class="center-logo">
      <img @click="changed = !changed" src="images/uploads/00000000050.png" alt="Logo Sebatien Odd Tattoo">
    </div>
  </header>
</template>
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
  .header{
    position: relative;
    height:80vh;
    width:100%;
    margin-top: 75px;
    overflow: hidden;
    transition:1s all ease;
  }
  .header.active{
    height:20vh;
  }
  .header.active #animation{
    filter:blur(10px);
    opacity:.5;
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
  
  
.items {
  transition: all 0.4s ease;
}

#text {
  -webkit-transform-origin: 50% 50%;
          transform-origin: 50% 50%;
}

svg {
  fill: #A8DADC;
}

.active {
  fill: #E63946;
}
.active .rect {
  -webkit-transform: translate3d(0, 30px, 0);
          transform: translate3d(0, 30px, 0);
}
.active .circ {
  -webkit-transform: translate3d(30px, 0, 0) scale(0.5);
          transform: translate3d(30px, 0, 0) scale(0.5);
}
.active .text {
  -webkit-transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
          transform: rotate(90deg) scaleX(0.08) translate3d(-300px, -35px, 0);
}
.active .footer {
  -webkit-transform: translate3d(100px, 0, 0);
          transform: translate3d(100px, 0, 0);
}

</style>


<script>
export default {
  data() {
    return {
      changed: false
    }
  }
}
</script>
