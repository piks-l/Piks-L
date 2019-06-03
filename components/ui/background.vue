<template>
<header class="fond-principal">
  <img class="seconde-background" src="/images/background-1-electro-alternativ.jpg">
	<div class="mirror anim-filter" >
		<div class="mirror__source mirror__source--solid ">
			<svg id="main-background" version="1.1"  xmlns="http://www.w3.org/2000/svg" style="enable-background:new 0 0 1920 1080" viewBox="0 0 1920 1080" x="0px" xml:space="preserve" xmlns:xlink="http://www.w3.org/1999/xlink" y="0px" preserveAspectRatio="xMidYMid meet">
				<image class="main-background" height="100%" style="overflow:visible" width="100%" xlink:href="/images/background-1-electro-alternativ.jpg"></image>			
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
</header>
</template>
<script>
export default {
  components: {
  }
}
</script>
