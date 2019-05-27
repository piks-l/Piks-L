<template>
<div class="fond-principal">
  <div class="mirror  anim-filter">
    <div class="mirror__source mirror__source--solid">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 2000 2000" style="enable-background:new 0 0 2000 2000;" xml:space="preserve">
        <image style="overflow:visible;" width="100%" height="100%" xlink:href="https://electro-alternativ.com/images/fond.jpg"/>
      </svg>
    </div>
  </div>
  <div class="scanline"></div>
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
    <defs>
        <filter id="glitch">
            <feTurbulence type="fractalNoise" baseFrequency="0.03 0.01" numOctaves="1" result="warp" id="turb"/>
            <feColorMatrix in="warp" result="huedturb" type="hueRotate" values="90">
                <animate attributeType="XML" attributeName="values" values="0;180;360" dur="10s"
                         repeatCount="indefinite"/>
            </feColorMatrix>
            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="huedturb"/>
        </filter>
    </defs>
  </svg>
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
    }
  }
</script>
<style>
.mirror.anim-filter .mirror__source image {
  -webkit-filter: url("#glitch");
  filter: url("#glitch");
}
.fond-principal {
  background: #FFFFFF;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0%;
  transform: translate(-50%);
  left: 50%;
}
svg image{
  width:100vw;
}
.mirror {
  position: fixed;
  top: 50%;
  -webkit-transform: translateY(0%);
          transform: translateY(0%) scale(2);
  left:0vw;
  right: 0;
  margin: 0 auto;
  text-align: center;
  display: flex;
  justify-content: center;
}
.mirror__vector {
  position: absolute;
  width: 100vw;
  height:100vh;
  bottom: 0;
  right: 0;
}
.mirror__source {
  display: inline-block;
  overflow: hidden;
  opacity: 1;
  float: left;
  width: 100vw;
  height: 100vh;
  left:0px;
  transform:translatey(-50%);
}
.mirror__source--flip {
  -webkit-transform: scaleX(1);
          transform: scaleX(1);
}
.mirror.anim-filter .mirror__source image {
  -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
}

.scanline {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: url("http://isthismario.com/static/img/scanline.png");
  z-index: 5;
  opacity: 1;
}
</style>
