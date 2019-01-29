<template>
  <header class="header">
    <video autoplay muted loop id="animation">
      <source src="https://www.influx-agence.fr/cms/sebastienodd-animation.mp4" type="video/mp4">
    </video>
    <div class="center-logo">
      <nuxt-link @click="changed = !changed">Change</nuxt-link>
      <br>
      <svg :class="{ active: changed }" xmlns="http://www.w3.org/2000/svg" width="447" height="442" viewBox="0 0 447 442">
        <transition-group name="layout" tag="g">
          <rect class="items rect" ref="rect" key="rect" width="171" height="171"/>
          <circle class="items circ" key="circ" id="profile" cx="382" cy="203" r="65"/>
          <g class="items text" id="text" key="text">
            <rect x="56" y="225" width="226" height="16"/>
            <rect x="56" y="252" width="226" height="16"/>
            <rect x="56" y="280" width="226" height="16"/>
          </g>
          <rect class="items footer" key="footer" id="footer" y="423" width="155" height="19" rx="9.5" ry="9.5"/>
        </transition-group>
      </svg>
      <img src="images/uploads/00000000050.png" alt="Logo Sebatien Odd Tattoo">
    </div>
  </header>
</template>
<style>
  #animation {
      position: absolute;
      left: 50%;
      top: 50%;
      min-width: 100%;
      min-height: 100%;
      transform: translate(-50%, -50%);
  }
  .header{
    position: relative;
    z-index: -1;
    height:70vh;
    width:100%;
    margin-top: 75px;
    overflow: hidden;
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
