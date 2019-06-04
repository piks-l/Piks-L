<template>
  <h2 class="ea-titre">{{this.$route.name}}</h2>
</template>
<script>
import $ from 'jquery'
export default {
  mounted() {
    this.title();
  },
  methods: {
    title() {
     console.log("Titre de la page loaded")
    }
  }
}
</script>
<style>
.ea-titre {
  line-height: 60px;
  position: relative;
  font-size: 4em;
  text-transform: uppercase;
  color: white;
  text-shadow: 0px 0px 30px rgba(0,0,0,.5);
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
}
@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}
</style>
