<template>
  <transition :before-enter="beforeEnter">
    <h2 class="ea-titre">{{this.$route.name}}</h2>
  </transition> 
</template>
<script>
import $ from 'jquery'
export default {
  transition: {
    beforeEnter: function () {
       console.log("Before enter transition");
    }
  },
  updated() {
    this.title();
    console.log("Update");
  },
  mounted() {
    this.title();
    console.log("Mounted");
  },
  methods: {
    title() {
     console.log("Titre");
    },
    beforeEnter: function () {
       console.log("Before enter methods");
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
  font-family: Archivo-Medium;
  font-weight: 900;
}
</style>
