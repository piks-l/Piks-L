<template>
  <transition :before-enter="beforeEnter" :enter="enter" :after-enter="afterEnter" :before-leave="beforeLeave" :leave="leave" :after-leave="afterLeave" appear>
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
  }
  updated() {
    console.log("Update");
  },
  mounted() {
    console.log("Mounted");
  },
  methods: {
    title() {
     console.log("Titre de la page loaded");
    },
    beforeEnter(el) {
      console.log("beforeEnter");
    },
    enter(el, done) {
      console.log("enter");
      done();
    },
    afterEnter() {
      console.log("afterEnter");
    },
    beforeLeave() {
      console.log("beforeLeave");
    },
    leave() {
      console.log("leave");
    },
    afterLeave() {
      console.log("afterLeave");
    },
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
