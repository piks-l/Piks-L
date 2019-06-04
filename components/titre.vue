<template>
  <h2 class="ea-titre">{{this.$route.name}}</h2>
</template>
<script>
import $ from 'jquery'
export default {
  updated() {
    this.title();
    setTimeout(function(){ 
      $(".ea-titre").removeClass("turn"); 
     }, 1000);
  },
  methods: {
    title() {
     console.log("Titre de la page loaded")
     $(".ea-titre").addClass("turn");
    }
  }
}
</script>
<style>
.turn {
  animation: turn 1s linear forwards 1s;
  transform: rotateX(180deg);
}
.ea-titre {
  line-height: 60px;
  position: relative;
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  text-shadow: 0px 0px 30px rgba(0,0,0,.5);
  transition:1s all;
}
@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>
