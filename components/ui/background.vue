<template>
<div  class="fond-principal ">
  <img class="seconde-background" src="https://piks-l.com/codepen/background-1-electro-alternativ.jpg">
	<div class="mirror anim-filter" >
		<div class="mirror__source mirror__source--solid ">
			<svg id="main-background" version="1.1"  xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 1920 1080" viewBox="0 0 1920 1080" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px" preserveAspectRatio="xMidYMid meet">
				<image class="main-background" height="100%" style="overflow:visible" width="100%" xlink:href="https://piks-l.com/codepen/background-1-electro-alternativ.jpg"></image>			
			</svg>
		</div>
	</div>
	<svg version="1.1" xmlns="http://www.w3.org/2000/svg">
		<defs>
			<filter id="glitch">
				<feTurbulence baseFrequency="0.03 0.01" id="turb" numOctaves="1" result="warp" type="fractalNoise"></feTurbulence>
				<feColorMatrix in="warp" result="huedturb" type="hueRotate" values="90">
					<animate attributeName="values" attributeType="XML" dur="10s" repeatCount="indefinite" values="0;180;360"></animate>
				</feColorMatrix>
				<feDisplacementMap in="SourceGraphic" in2="huedturb" scale="30" xChannelSelector="R" yChannelSelector="G"></feDisplacementMap>
			</filter>
		</defs>
	</svg>
</div>
</template>

<script>
export default {
  components: {
  }
}
</script>
<style>
    svg {
      height: auto;
      width: 100vw;
      left: 0%;
      transform: translateX(0%);
    }
@media only screen and (max-width: 960px) {
  /* For mobile phones: */
  svg {
    height: 100%;
    width: auto;
  }
}
    .mirror.anim-filter .mirror__source image {
      -webkit-filter: url("#glitch");
      filter: url("#glitch");
    }
    .fond-principal {
      background: #0635aa;
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
      top: 0%;
      -webkit-transform: translateY(0%);
              transform: translateY(0%) scale(1);
      left:0vw;
      right: 0;
      margin: 0 auto;
      text-align: center;
      display: flex;
      justify-content: center;
    }
    .mirror__source {
      display: inline-block;
      overflow: hidden;
      opacity: 1;
      float: left;
      width: 100vw;
      height: 100vh;
      left:0px;
      transform:translatey(0%) scale(1);
    }
    .mirror.anim-filter .mirror__source image {
      -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
    }
    #main-background, 
    .seconde-background {
        position: relative;
        left: 50%;
        transform: translatex(-50%);
        min-height: 100%;
        min-width: 100%;
        width: auto;
        height: auto;
    }
    .seconde-background {
        max-height: 100%;
    }
</style>
