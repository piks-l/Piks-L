<template>
  <header class="header">
    <div class="center-logo">
      <video autoplay muted loop id="animation">
         <source src="https://www.influx-agence.fr/cms/sebastienodd-animation.mp4" type="video/mp4">
      </video>
      <img class="logo" src="https://influx-002.netlify.com/images/uploads/00000000050.png" alt="">
    </div>
    <div id="mouse_body">
      <div id="mouse_wheel"></div>
    </div>
  </header>
</template>
<style>
#mouse_body {
  border-style: solid;
  border-width: 1px;
  border-color: #525252;
  border-radius: 32px;
  /* used just to add space from top */
  /* size of the mouse body */
  height: 43px;
  width: 23px;
   /* to center in browser */
  margin: 0 auto;
}

#mouse_wheel {
  border-style: solid;
  border-width: 1px;
  border-color: #FFB413;
  border-radius: 8px;
  background-color: #fff;
  /* position property required to play animation  */
  position: relative; 
  height: 3px;
  width: 3px;
  /* to center wheel in mouse body */
  margin: 0 auto; 
  animation: wheel_animation 1.5s linear infinite;
}

/* include use -moz-, -webkit-, or -o- for respective browser type*/
@keyframes wheel_animation { 
  0% {
    opacity: 0;
    top: 2px;
  }
  50% {
    opacity: 1;
    top: 50%;
  }
  100% {
    opacity: 0;
    top: 33px;
  }
}

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
    overflow: hidden;
    transition:1s all ease;
    z-index:0;
  }
  .header.active{
    height:20vh;
  }
  .header.active #animation{
    filter:blur(10px);
    opacity:.5;
  }
  .logo {
      height: auto;
      left: 50%;
      position: absolute;
      top: 50%;
      -webkit-transform: translateX(-50%) translateY(-50%);
      transform: translateX(-50%) translateY(-50%);
  }
  .center-logo{
      position: fixed;
      width: 100%;
      height: 100%;
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
