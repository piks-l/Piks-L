<template>
<div class="loading">
<div class="eletrobotik-loading">
 <div class="box">
   <img class="logo" src="https://electrobotik.netlify.com/images/logo-horizontal.svg" alt="Logo Electrobotik Invasion">
   <h3>02&amp;03 AOÛT 2019 / CIRCUIT PAUL-RICARD</h3>
 </div>
</div>
 <div class="circle-loading" >
  <img src="https://electrobotik.netlify.com/images/circle.svg">
 </div>
 </div>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    start() {
      this.loading = true
      console.log("Loading true")
    },
    finish() {
      setTimeout(function () { 
        this.loading = false
        console.log("Loading false")
      }.bind(this), 5000)
    }
  }
}
</script>

<style>
.eletrobotik-loading{
  width:100%;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
}
eletrobotik-loading .logo {
  position: relative;
  max-width: auto;
  max-height: auto;
  top: 0px;
  transform: none;
}
.eletrobotik-loading .box{
  width:500px;
  height:auto;
  z-index:1!important;
}
.eletrobotik-loading h3 {
  color:white; 
  text-align:center;
  border-top:5px solid white;
  padding-top:25px;
}
.circle-loading {
	position: fixed;
	opacity: 1;
	width: 350px;
	height: 350px;
	top: 50%;
	left: 50%;
	-webkit-transition: all .25s ease;
	transition: all .25s ease;
	-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);
}
.circle-loading img {
	width: 100%;
	height: 100%;
	-webkit-animation-name: circle;
	animation-name: circle;
	-webkit-animation-duration: 3s;
	animation-duration: 3s;
	-webkit-animation-iteration-count: infinite;
	animation-iteration-count: infinite;
}
@-webkit-keyframes circle {
  from {-webkit-transform:rotate(0deg);transform:rotate(0deg)}
  to {-webkit-transform:rotate(360deg);transform:rotate(360deg)}
}
@keyframes circle {
  from {-webkit-transform:rotate(0deg);transform:rotate(0deg)}
  to {-webkit-transform:rotate(360deg);transform:rotate(360deg)}
}
</style>
